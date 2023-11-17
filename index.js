const express = require('express')
const cors = require('cors')
const path = require('path')
const signupRouter = require('./controllers/signup.js')
const app = express()
const config = require('./utils/config')
require('express-async-errors')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const morgan = require('morgan')

app.use(cors())

app.use(express.static(path.join(__dirname, '/dist')));

app.use(express.json())

app.get('/login', function(req, res){
    res.status(204).sendFile(path.join(__dirname, "/dist/index.html"));
  });  

app.get('/signup', function(req, res){
res.status(204).sendFile(path.join(__dirname, "/dist/index.html"));
});  

app.get('*', function(req, res){
    res.status(404).sendFile(path.join(__dirname, "error.html"));
  });  

morgan.token('data', function (req, res) { return JSON.stringify(req.body) })
app.use(morgan((tokens, req, res) => {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms',
    tokens.data(req, res)
  ].join(' ')
}))
app.use(middleware.requestLogger)
app.use(middleware.tokenExtractor)

app.use('/data/signup', signupRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})