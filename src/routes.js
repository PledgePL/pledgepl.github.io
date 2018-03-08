import React from 'react' // Need to define React in here, otherwise the server render breaks
import { Route } from 'react-router'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import AppContainer from './containers/app-container'
import PageContainer from './containers/page-container'
// import Home from './home'
// import WhyPledge from './why-pledge'
// import Partners from './partners'
// import Support from './support'
// import JoinUs from './join-us'

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err)
}

const loadRoute = (promise, store, location, cb) => {
  store.dispatch(showLoading())
  promise
    .then((module) => {
      store.dispatch(hideLoading())
      return module
    })
    .then((module) => {
      const options = {}
      if (location) options.path = location.pathname
      if (module) options.component = module.default
      cb(null, options)
    })
    .catch(errorLoading)
}

const pageContainerRoutes = (store) => {
  return {
    component: PageContainer,
    getChildRoutes: (location, cb) => {
      switch (location.pathname) {
        case '/':
          loadRoute(System.import('./home'), store, location, cb)
          break
        case '/why-pledge/':
          loadRoute(System.import('./why-pledge'), store, location, cb)
          break
        case '/partners/':
          loadRoute(System.import('./partners'), store, location, cb)
          break
        case '/support/':
          loadRoute(System.import('./support'), store, location, cb)
          break
        default:
          cb(null, [])
      }
    }
  }
}

const routes = store => (
  <Route
    component={AppContainer}
    getIndexRoute={(location, cb) => {
      cb(null, [pageContainerRoutes(store)])
    }}
    getChildRoutes={(location, cb) => {
      switch (location.pathname) {
        case '/join-us/':
          loadRoute(System.import('./join-us'), store, location, cb)
          break
        default:
          cb(null, [pageContainerRoutes(store)])
      }
    }}
  />
)

export default routes
