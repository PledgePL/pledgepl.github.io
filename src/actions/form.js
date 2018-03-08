import fetchJsonP from 'fetch-jsonp'
import queryString from 'query-string'
import { stopSubmit, reset } from 'redux-form'
import { createAction } from 'redux-actions'
import { MAILCHIMP_URI, MAILCHIMP_USER, MAILCHIMP_ID } from '../config'
import delayPromise from '../components/util/delay-promise'

// ---------------------------
// FLUX STANDARD ACTIONS
// ---------------------------

const addModal = createAction('ADD_MODAL')
const removeModal = createAction('REMOVE_MODAL')

//----------------------------
// FORM
//----------------------------

export function submitForm(values) {
  const query = Object.assign({}, values, { u: MAILCHIMP_USER, id: MAILCHIMP_ID })
  const uri = `${MAILCHIMP_URI}?${queryString.stringify(query)}`

  return dispatch =>
    fetchJsonP(uri, {
      method: 'get',
      jsonpCallback: 'c'
    })
    .then(delayPromise(500))
    .then(response => response.json())
    .then((json) => {
      if (json.result === 'error') {
        dispatch(stopSubmit('join-us', { _error: json.msg }))
      } else {
        dispatch(stopSubmit('join-us'))
        dispatch(addModal())
      }
    })
    .catch(() => dispatch(stopSubmit('join-us', { _error: 'Could not contact server, please try again later' })))
}

export function modalRemoveTimeout() {
  return dispatch => delayPromise(2500)()
          .then(() => {
            dispatch(reset('join-us'))
            dispatch(removeModal())
          })
}
