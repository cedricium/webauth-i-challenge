const express = require('express')
const cors = require('cors')
const session = require('express-session')
const knexSessionStore = require('connect-session-knex')(session)

const userRouter = require('./users/users-router')

const app = express()

const sessionOptions = {
  name: 'thismycookie',
  secret: 'ireallyreallylikecookies',
  cookie: {
    maxAge: 1000 * 60 * 60,
    secure: false,
    httpOnly: true
  },
  resave: false,
  saveUninitialized: false,
  store: new knexSessionStore({
    knex: require('./database/dbConfig.js'),
    tablename: 'session',
    sidfieldname: 'sid',
    createtable: true,
    clearInterval: 1000 * 60 * 60
  })
}

app.use(cors())
app.use(express.json())
app.use(session(sessionOptions))

app.use('/api', userRouter)

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Authentication API'
  })
})

module.exports = app
