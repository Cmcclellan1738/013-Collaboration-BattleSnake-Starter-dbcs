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

  checkNeck: (body) => {
    if (body[0].y + 1 == body[1].y) {
      return "right";
    } else if (body[0].y - 1 == body[1].y) {
      return "left";
    }
    if (body[0].x + 1 == body[1].x) {
      return "up";
    } else if (body[0].x - 1 == body[1].x) {
      return "down";
    }
  }
}