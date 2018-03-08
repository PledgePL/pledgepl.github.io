import React from 'react'
import ReactDOM from 'react-dom'
import { Router, match, browserHistory } from 'react-router'
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import promiseMiddleware from 'redux-promise'
import thunkMiddleware from 'redux-thunk'
import { trigger } from 'redial'
import routes from './routes'
import reducers from './reducers/index'
import WithStylesContext from './with-styles-context'

const renderClientPage = (data) => {
  const store = createStore(
    reducers,
    data,
    compose(
      applyMiddleware(thunkMiddleware, promiseMiddleware, routerMiddleware(browserHistory)),
      typeof window !== 'undefined' && window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )

  const enhancedHistory = syncHistoryWithStore(browserHistory, store);

  // Listen for route changes on the browser history instance:
  browserHistory.listen((location) => {
    // Match routes based on location object:
    match({ routes : routes(store), location }, (error, redirectLocation, renderProps) => {
      // Get array of route handler components:

      const { components } = renderProps;

      // Define locals to be provided to all lifecycle hooks:
      const routeLocals = (renderProps.location) ? {
        path: renderProps.location.pathname,
        query: renderProps.location.query,
        params: renderProps.params,

        // Allow lifecycle hooks to dispatch Redux actions:
        dispatch : store.dispatch
      } : {};


      // if we have not yet got our data, lets do it here
      if(!store.getState().contentful.data || routeLocals.query.accessToken) {
        trigger('fetch', renderProps.components || null, routeLocals)
      }

      ReactDOM.render(<Provider store={store}>
                        <WithStylesContext onInsertCss={styles => styles._insertCss()}>
                          <Router routes={routes(store)} history={enhancedHistory} />
                        </WithStylesContext>
                      </Provider>,
                      document.getElementById('content')
                    )

    })
  })

}


if (typeof document !== 'undefined') {
  if (!window.__STATE__) window.__STATE__ = {};
  renderClientPage(window.__STATE__);

  var firstRender = true;
  browserHistory.listen(location => {
    if(window.ga && !firstRender) {
      window.ga('send', 'pageview', location.pathname);
    }
    firstRender = false;
  });
}
