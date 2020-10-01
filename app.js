const express = require('express')
const mongoose = require('mongoose')
const config = require('config')

const app = express()
const PORT = config.get('PORT') || 3001

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/sign', require('./routes/sign.routes'))

async function serverStart() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
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