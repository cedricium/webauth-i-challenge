const express = require('express')
const app = express()

const userRouter = require('./users/users-router')

app.use(cors())
app.use(express.json())

app.use('/api/', userRouter)

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Authentication API'
  })
})

module.exports = app
