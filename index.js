const bodyParser = require('body-parser')
const express = require('express')
const handle = require('./lib/handle.js')
const moves = require('./lib/moves.js')

const PORT = process.env.PORT || 3000

const app = express()
app.use(bodyParser.json())

app.get('/', handle.handleIndex)
app.post('/start', handle.handleGameData)
app.post('/move', handle.handleMove)
app.post('/end', handle.handleGameData)

app.listen(PORT, () => console.log(`Battlesnake Server listening at http://127.0.0.1:${PORT}`))