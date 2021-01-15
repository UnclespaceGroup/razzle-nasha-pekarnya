import React from 'react'
import { StaticRouter } from 'react-router-dom'
import express from 'express'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import getDeviceSize from 'server/helpers/getDeviceSize'
import { configureStore } from 'reducers'
import serialize from 'serialize-javascript'
import App from 'App/App'
import paymentRouter from 'server/helpers/paymentRouter'

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST)

const server = express()
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .use('/payment', paymentRouter)
  .get('/*', (req, res) => {
    const context = {}
    const device = getDeviceSize(req)

    const reduxInitialState = {
      device
    }

    const store = configureStore(reduxInitialState)

    const markup = renderToString(
      <Provider store={store}>
        <StaticRouter context={context} location={req.url}>
          <App />
        </StaticRouter>
      </Provider>
    )

    if (context.url) {
      res.redirect(context.url)
    } else {
      res.status(200).send(
        `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="utf-8" />
        <title>Наша пекарня</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${
          assets.client.css
            ? `<link rel="stylesheet" href="${assets.client.css}">`
            : ''
        }
        ${
          process.env.NODE_ENV === 'production'
            ? `<script src="${assets.client.js}" defer></script>`
            : `<script src="${assets.client.js}" defer crossorigin></script>`
        }
    </head>
    <body>
        <div id="root">${markup}</div>
        <script>
          window.__PRELOADED_STATE__ = ${serialize(reduxInitialState)}
        </script>
    </body>
</html>`
      )
    }
  })

export default server
