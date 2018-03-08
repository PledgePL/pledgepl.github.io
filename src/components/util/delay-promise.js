const delayPromise = duration => (...args) => new Promise(
  resolve => setTimeout(
    () => resolve(...args), duration
  )
)

export default delayPromise

// Usage:

// var delayPromise = require("./delay-promise");
//
// doThing()
// .then(...)
// .then(delayPromise(5000))
// .then(...)
