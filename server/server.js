const express = require('express')
const logger = require('morgan')
const cors = require('cors')


const PORT = process.env.PORT || 3001

const path = require('path')

const app = express()

app.use(cors())
app.use(express.static(`${__dirname}./client/build`))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))
const AppRouter = require('./routes/AppRouter')

app.get('/', (req, res) => {
    res.send({ msg: `Server Running on port ${PORT}` })
})


app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/buildindex.html`)
})

app.use('/api', AppRouter)
app.listen(PORT, () => console.log(`Server running on ${PORT}`))