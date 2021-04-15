const handle = require("./handle.js")

module.exports = {
  canMoveUp: (snakeY, height, body) => {
    // console.log(snakeY, height, body)
    if (snakeY < height - 1) {
      return true;
    }
    return false;
  },

  canMoveDown: (snakeY, height, body) => {
    // console.log(snakeY, height, body)
    if (snakeY != 0) {
      return true;
    }
    return false;
  },

  canMoveRight: (snakeX, width, body) => {
    // console.log(snakeX, width, body)
    if (snakeX < width - 1) {
      return true;
    }
    return false;
  },

  canMoveLeft: (snakeX, width, body) => {
    // console.log(snakeX, width, body)
    if (snakeX != 0) {
      return true;
    }
    return false;
  },

  checkNeck: (body, possibleMoves) => {
    var filteredPossibleMoves = possibleMoves
    console.log(possibleMoves)
    var move = ""
    body.forEach(segment => {
      // console.log(body[0].x, segment.x)
      if (body[0].y + 1 == segment.y && body[0].x == segment.x) {
        filteredPossibleMoves = filteredPossibleMoves.filter(move => move != "up")
      } else if (body[0].y - 1 == segment.y && body[0].x == segment.x) {
        filteredPossibleMoves = filteredPossibleMoves.filter(move => move != "down")
      } else if (body[0].x + 1 == segment.x && body[0].y == segment.y) {
        filteredPossibleMoves = filteredPossibleMoves.filter(move => move != "right")
      } else if (body[0].x - 1 == segment.x && body[0].y == segment.y) {
        filteredPossibleMoves = filteredPossibleMoves.filter(move => move != "left")
      }
    });
    return filteredPossibleMoves
    // if (body[0].y + 1 == body[2].y) {
    //   return "up";
    // } else if (body[0].y - 1 == body[1].y) {
    //   return "down";
    // }
    // if (body[0].x + 1 == body[2].x) {
    //   return "right";
    // } else if (body[0].x - 1 == body[2].y) {
    //   return "left";
  } 
}