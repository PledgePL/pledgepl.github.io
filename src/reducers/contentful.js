

const findItem = (id, data) => data.find(item => item.sys.id === id)

const findError = (id, data) => data.find(item => item.details.id === id)

const parseContentfulItem = (item, data) => {
  if (item && item.hasOwnProperty('sys')) {
    // check if item is not in the errors array
    if (data.errors && findError(item.sys.id, data.errors)) {
      console.log('found error');
      return null
    }
    if (!item.hasOwnProperty('fields')) {
      return findItem(item.sys.id, data.items) ||
        findItem(item.sys.id, data.includes.Asset) ||
        item
    } else {
      const entries = Object.keys(item.fields).map(key => {
        const value = item.fields[key]
        const valuesToParse = Array.isArray(value) ? value : [value]
        const parsedValues = valuesToParse
                              .map(v => v.hasOwnProperty('sys') ? parseContentfulItem(v, data) : v)
                              .filter(Boolean)
        return { [key]: (parsedValues.length === 1) ? parsedValues[0] : parsedValues }
      })
      .reduce((prev, next) => Object.assign({}, prev, next), {})
      item.fields = entries
    }
  }
  return item
}

const parseContentful = data => data.items
                                    .map(
                                      item => parseContentfulItem(item, data)
                                    )
                                    .filter(Boolean)

const contentful = (state = { data: null }, action = null) => {
  switch (action.type) {
    case 'FETCH_THING':
      return Object.assign({}, state, { data: parseContentful(action.payload) })
    default:
      return state
  }
}

export default contentful
