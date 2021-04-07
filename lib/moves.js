module.exports = {
  handleIndex(request, response) {
    var battlesnakeInfo = {
      apiversion: '1',
      author: 'DaBaby and Afghan Istan.',
      color: '#000000',
      head: 'workout',
      tail: 'hook'
    }
    response.status(200).json(battlesnakeInfo)
  }
}