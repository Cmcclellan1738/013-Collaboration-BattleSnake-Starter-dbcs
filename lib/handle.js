const config = require("../config.json")
module.exports = {
  handleIndex(request, response) {
    var battlesnakeInfo = {
      apiversion: config.apiversion,
      author: config.author,
      color: config.color,
      head: config.head,
      tail: config.tail
    }
    response.status(200).json(battlesnakeInfo)
  }
}