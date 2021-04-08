module.exports = {
  canMoveUp: (snakeY, height) => {
    console.log(snakeY, height)
    if(snakeY < height - 1) {
      return true;
    }
    return false;
  },

  canMoveRight: (snakeX, width) => {
    console.log(snakeX, width)
    if(snakeX < width - 1) {
      return true;
    }
    return false;
  }

  // canMoveDown: (snakeY, height) => {
  //   if(snakeY )
  // }
}