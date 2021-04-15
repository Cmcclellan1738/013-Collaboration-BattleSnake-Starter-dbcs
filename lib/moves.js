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
    body.forEach(segment => {
      if (body[0].y + 1 == segment.y && body[0].x == segment.x) {
        return "up";
      } else if (body[0].y - 1 == segment.y && body[0].x == segment.x) {
        return "down";
      } else if (body[0].x + 1 == segment.x && body[0].y == segment.y) {
        return "right";
      } else if (body[0].x - 1 == segment.x && body[0].y == segment.y) {
        return "left";
      }
    });
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