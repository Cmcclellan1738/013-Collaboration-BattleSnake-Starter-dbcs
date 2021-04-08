const config = require("../config.json")
const moves = require("./moves.js")

module.exports = {
  handleIndex: (request, response) => {
    var battlesnakeInfo = {
      apiversion: config.apiversion,
      author: config.author,
      color: config.color,
      head: config.head,
      tail: config.tail
    }
    response.status(200).json(battlesnakeInfo)
  },

  handleMove: (request, response) => {
    var gameData = request.body
    var head = gameData.you.head
    var height = gameData.board.height

    var possibleMoves = ['up', 'down', 'left', 'right']

    if (moves.canMoveUp(head.y, height)) {
      move = possibleMoves[0]
    }else{
      possibleMoves = ['right', 'left']
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
    var move = possibleMoves[Math.floor(Math.random() * possibleMoves.length)]

    console.log('MOVE: ' + move)
    response.status(200).send({
      move: move
    })
  },

  handleGameData: (request, response) => {
    var gameData = request.body

    if (config.logStartEnd) {
      console.log(gameData)
    }
    response.status(200).send('ok')
  }
}