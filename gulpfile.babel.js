const gulp = require('gulp')
const lambda = require('gulp-awslambda')
const zip = require('gulp-zip')
const path = require('path')
const fs = require('fs')
const fsep = require('fs-extra-promise')
const AWS = require('aws-sdk')
const zlib = require('zlib')
const mime = require('mime-types')
const url = require('url')
Object.assign = require('object-assign')

const configPath = './config.prod.json'

const CONFIG = JSON.parse(fs.readFileSync(configPath))

const uris = [
  '/',
  '/partners/',
  '/why-pledge/',
  '/support/',
  '/join-us/'
]

gulp.task('render-static', (callback) => {
  const webpackStats = require('./stats-client.json')
  const render = require('./main.server.js').default

  console.log("RENDER STATIC")
  console.log(render.default);
  console.log("-----------")

  const locals = {
    canonicalUrl: CONFIG.canonicalUrl,
    base: webpackStats.publicPath,
    assets: webpackStats.assets
      .reduce((obj, src) => {
        switch (path.extname(src.name)) {
          case '.js':
            if (obj.js.indexOf(src.name) === -1) {
              obj.jsPreload.push(url.resolve(CONFIG.cdn, src.name))
            }
            break
          case '.css':
            obj.css.push(url.resolve(CONFIG.cdn, src.name))
            break
          default:
        }
        return obj
      }, { js: webpackStats.entrypoints.main.assets, jsPreload: [], css: [] })
  }

  const renderPromises = uris.map(uri =>
    new Promise((resolve, reject) => {
      const uriLocals = Object.assign({}, locals, { path: uri })
      render(uriLocals)
        .then((html) => {
          const filePath = path.join(__dirname, path.normalize(`${uriLocals.path}index.html`))
          return fsep
                  .ensureDirAsync(path.dirname(filePath))
                  .then(() => fsep.writeFileAsync(filePath, html))
        })
        .then(() => resolve())
        .catch(e => reject(e))
    })
  )

  Promise.all(renderPromises).then(() => {
    console.log('all rendered')
    callback()
  })
  .catch((e) => {
    console.log('error!!!!!!')
    console.log(e)
  })
})


// ---------------------------------------
// upload to s3

const gzip = content =>
  new Promise((resolve, reject) => {
    zlib.gzip(content, (error, result) => {
      if (error) return reject(error)
      return resolve(result)
    })
  })

const upload = (params) => {
  const s3 = new AWS.S3()
  return new Promise((resolve, reject) => {
    s3.upload(params, (err, data) => {
      if (err) {
        return reject(err) // an error occurred
      } else {
        console.log(data) // successful response
      }
      return resolve(data)
    })
  })
}
