const path = require('path')
const express = require('express')
const app = express()
const morgan = require('morgan')
const compression = require('compression')
const bodyParser = require('body-parser')
const port = process.env.PORT || 1337

// request things like 'bundle.js'
app.use(express.static(path.join(__dirname, '..', 'public')))

// logging middleware
app.use(morgan('dev'))

// for using req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(compression())

app.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

// 404s || user errors
app.use(function (req, res, next) {
  const err = new Error('Not found.')
  err.status = 404
  next(err)
})

// 500s || our errors
app.use(function (err, req, res, next) {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

app.listen(port, function () {
  console.log(`listening on http://localhost:${port}/`)
})