module.exports = function towelSort (matrix) {
  let result = []
  for(let i in matrix) {
    if(i % 2 !== 0) {
      matrix[i] = matrix[i].reverse()
    }
  }
  for(let i in matrix) {
    for(let j in matrix[i]) {
      result.push(matrix[i][j])
    }
  }
  return result; 
}
