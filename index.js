const bodyParser = require('body-parser')
const express = require('express')
const handle = require('./lib/handle.js')
const moves = require('./lib/moves.js')

const PORT = process.env.PORT || 3000

const app = express()
app.use(bodyParser.json())

app.get('/', handle.handleIndex)
app.post('/start', handleStart)
app.post('/move', handleMove)
app.post('/end', handleEnd)

app.listen(PORT, () => console.log(`Battlesnake Server listening at http://127.0.0.1:${PORT}`))

function handleStart(request, response) {
  var gameData = request.body

  console.log('START')
  response.status(200).send('ok')
}

function handleMove(request, response) {
  var gameData = request.body

  var possibleMoves = ['up', 'down', 'left', 'right']
  var head = gameData.you.head
  var height = gameData.board.height

  var move = possibleMoves[3]
    if (moves.canMoveUp(head.y, height)) {
      move = possibleMoves[0]
    }
  //     if (leftIsBlocked) {
  //       turnRight();
  //     } else {
  //       turnLeft();
  //     }
  //     while (downIsClear) {
  //       goDown();
  //     },
  //   if (downIsBlocked) {
  //     if (leftIsBlocked) {
  //       turnRight();
  //     } else {
  //       turnLeft();
  //     }
  //     while (upIsClear) {
  //       goUp();
  //     }
  //   }
  // }]
  // var move = possibleMoves[Math.floor(Math.random() * possibleMoves.length)]

  console.log('MOVE: ' + move)
  response.status(200).send({
    move: move
  })
}

function handleEnd(request, response) {
  var gameData = request.body

  console.log('END')
  response.status(200).send('ok')
}
