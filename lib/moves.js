const handle = require("./handle.js")

module.exports = {
  canMoveUp: (snakeY, height, body) => {
    console.log(snakeY, height, body)
    if (snakeY < height - 1) {
      return true;
    }
    if (snakeY != body[1].y) {
      return true;
    }
    return false;
  }//,

  // canMoveDown: (snakeY, height, body) => {
  //   console.log(snakeY, height, body) 
  //   if (snakeY != 0) {
  //     if (snakeY != handle.head.y, handle.tail.y) {
  //       return true;
  //     }
  //   }
  //   return false;
  // },

  // canMoveRight: (snakeX, width, body) => {
  //   console.log(snakeX, width, body)
  //   if (snakeX < width - 1) {
  //     if (snakeX != handle.head.x, handle.tail.x) {
  //       return true;
  //     }
  //   }
  //   return false;
  // },

  // canMoveLeft: (snakeX, width, body) => {
  //   console.log(snakeX, width, body)
  //   if (snakeX != 0) {
  //     if (snakeX != handle.head.x, handle.tail.x) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }
}