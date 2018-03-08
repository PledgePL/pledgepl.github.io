const ui = (state = { formModalOpen: false }, action) => {
  switch (action.type) {
    case 'ADD_MODAL':
      return Object.assign({}, state, {
        formModalOpen: true
      })
    case 'REMOVE_MODAL':
      return Object.assign({}, state, {
        formModalOpen: false
      })
    default:
      return state
  }
}

export default ui
