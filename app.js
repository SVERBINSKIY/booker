const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const session = require('express-session')
const MongoStore = require('connect-mongodb-session')(session)

const varMiddleware = require('./middleware/variable.middleware')
const userMiddleware = require('./middleware/user.middleware')
const fileMiddleware = require('./middleware/file.middleware')

const app = express()
const PORT = config.get('PORT') || 3001
const store = new MongoStore({
  collection: 'sessions',
  uri: config.get('mongoUri'),
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(
  session({
    secret: config.get('sessionSecretKey'),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
    resave: true,
    saveUninitialized: true,
    store,
  })
)

app.use(varMiddleware)
app.use(userMiddleware)
app.use(fileMiddleware.single('file'))

app.use('/api/sign', require('./routes/auth.routes'))
app.use('/api/country', require('./routes/country.routes'))
app.use('/api/city', require('./routes/city.routes'))
app.use('/api/hotel', require('./routes/hotel.routes'))
app.use('/api/rooms', require('./routes/rooms.routes'))

async function serverStart() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    app.listen(PORT, () => {
      console.log(`Server ha been started on localhost:${PORT}`)
    })
  } catch (e) {
    console.log(`Error on start server -> ${e.message}`)
    process.exit(1)
  }
}
serverStart()
