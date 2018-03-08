// import 'babel-polyfill'
// require('es6-promise').polyfill();

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { RouterContext, match, browserHistory, createMemoryHistory, useRouterHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import promiseMiddleware from 'redux-promise'
import thunkMiddleware from 'redux-thunk'
import DocumentTitle from 'react-document-title'
import { trigger } from 'redial'
import serialize from 'serialize-javascript'
import reducers from './reducers/index'
import routes from './routes'
import WithStylesContext from './with-styles-context'
import Html from './Html.js'

//generator code
const render = function(locals) {

  return new Promise((resolve, reject) => {


    const history = useRouterHistory(createMemoryHistory)({ basename: '/'})
    const location = history.createLocation(locals.path);
    const serverStore = createStore(
        reducers,
        {},
        compose(
          applyMiddleware(thunkMiddleware, promiseMiddleware, routerMiddleware(browserHistory))
        )
      );


    match({ routes : routes(serverStore), location }, (error, redirectLocation, renderProps) => {

      // Define locals to be provided to all lifecycle hooks:
      const routeLocals = (renderProps.location) ? {
        path: renderProps.location.pathname,
        query: renderProps.location.query,
        params: renderProps.params,
        dispatch: serverStore.dispatch,
        body: locals.body // body from webhook
      } : {}

      trigger('fetch', renderProps.components || null, routeLocals)
        .then(() => {

          const script = {
            __html: `
                    document.documentElement.className = document.documentElement.className.replace("no-js","js");
                    __STATE__ = ${serialize(serverStore.getState())};

                    // GOOGLE ANALYTICS
                    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

                    ga('create', 'UA-70105354-1', 'auto');
                    ga('send', 'pageview');
                    `
          }

          const postscript = {
            __html: `
                    // PRELOAD ROUTES
                    var DOMTokenListSupports = function(tokenList, token) {
                      if (!tokenList || !tokenList.supports) {
                        return;
                      }
                      try {
                        return tokenList.supports(token);
                      } catch (e) {
                        if (e instanceof TypeError) {
                          console.log("The DOMTokenList doesn't have a supported tokens list");
                        } else {
                          console.error("That shouldn't have happened");
                        }
                      }
                    };

                    var linkSupportsPreload = DOMTokenListSupports(document.createElement("link").relList, "preload");
                    if (linkSupportsPreload) {
                      var preloadSrcs = [${locals.assets.jsPreload.reduce((prev, next) => `${(prev==='' ? prev : prev+',')}"${next}"`, '')}]
                      for(var i = 0; i<${locals.assets.jsPreload.length}; i++) {
                        var res = document.createElement("link");
                        res.rel = "preload";
                        res.as = "script";
                        res.href = preloadSrcs[i];
                        document.head.appendChild(res);
                      }
                    }
                    `
          }

          const css = []

          const app = {
            __html: ReactDOMServer.renderToString(<Provider store={serverStore}>
              <WithStylesContext onInsertCss={styles => css.push(styles._getCss())}>
                <RouterContext {...renderProps} />
              </WithStylesContext>
            </Provider>)
          };

          const inlinestyles = {
            __html: css.reduce((prev, next) => prev + ' ' + next, '')
          }

          const postinlinestyles = {
            __html: ''
          }

          //render the outer HTML and pass the allready rendered app and metadata as props
          // to be inserted in the right place by HTML.js component
          const html = '<!DOCTYPE html>'+ReactDOMServer.renderToStaticMarkup(<Html
                                                                              title={DocumentTitle.rewind()}
                                                                              app={app}
                                                                              inlinestyles={inlinestyles}
                                                                              postinlinestyles={postinlinestyles}
                                                                              script={script}
                                                                              postscript={postscript}
                                                                              {...locals} />);


          resolve(html)

        })
        .catch((e) => {
          reject(e)
        })

    });

  })
}

export default render
