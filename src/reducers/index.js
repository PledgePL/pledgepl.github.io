import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import { loadingBarReducer } from 'react-redux-loading-bar'
import contentful from './contentful'
import ui from './ui'

const pledgePLApp = combineReducers({
  routing: routerReducer,
  form: formReducer,
  loadingBar: loadingBarReducer,
  contentful,
  ui
})

export default pledgePLApp
