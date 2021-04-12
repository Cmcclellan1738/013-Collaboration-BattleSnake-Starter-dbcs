const handle = require("./handle.js")

module.exports = {
  canMoveUp: (snakeY, height, body) => {
    console.log(snakeY, height, body)
    if (snakeY < height - 1) {
      return true;
    }
    return false;
  },

  canMoveDown: (snakeY, height, body) => {
    console.log(snakeY, height, body) 
    if (snakeY != 0) {
      return true;
    }
    return false;
  },

  canMoveRight: (snakeX, width, body) => {
    console.log(snakeX, width, body)
    if (snakeX < width - 1) {
      return true;
    }
    return false;
  },

  canMoveLeft: (snakeX, width, body) => {
    console.log(snakeX, width, body)
    if (snakeX != 0) {
      return true;
    }
    return false;
  },

  checkNeckY: (snakeY, body) => {
    if (snakeY != body[1].y) {
      return true;
    }
    return false;
  },

  checkNeckX: (snakeX, body) => {
    if (snakeX != body[1].x) {
      return true;
    }
    return false;
  }
}