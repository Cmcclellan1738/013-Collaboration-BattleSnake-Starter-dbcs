module.exports = {
  canMoveUp: (snakeY, height) => {
    console.log(snakeY, height)
    if(snakeY < height - 1) {
      return true;
    }else{
      return false;
    }
  }
}