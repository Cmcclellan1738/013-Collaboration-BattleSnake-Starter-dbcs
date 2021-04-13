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
    var body = gameData.you.body
    var height = gameData.board.height
    var width = gameData.board.width

    var possibleMoves = ['up', 'down', 'left', 'right']

    if (!moves.canMoveUp(head.y, height, body)) {
      possibleMoves = possibleMoves.filter(move => move != "up")
    }
    if (!moves.canMoveDown(head.y, height, body)) {
      possibleMoves = possibleMoves.filter(move => move != "down")
    }
    if (!moves.canMoveRight(head.x, width, body)) {
      possibleMoves = possibleMoves.filter(move => move != "right")
    }
    if (!moves.canMoveLeft(head.x, width, body)) {
      possibleMoves = possibleMoves.filter(move => move != "left")
    }
    possibleMoves = possibleMoves.filter(move => move != moves.checkNeck(body))

    var move = possibleMoves[Math.floor(Math.random() * possibleMoves.length)]

    console.log('MOVE: ' + move)
    response.status(200).send({
      move: move
    });
  },

  handleGameData: (request, response) => {
    var gameData = request.body

    if (config.logStartEnd) {
      console.log(gameData)
    }
    response.status(200).send('ok')
  }
}