function validSolution(board) {
  var sum;
  // Section below validates that the sum of each 3x3 grid is 45
  for (i = 0; i < 9; i++) {
    if (
      board[i].reduce((a, b) => {
        return a + b;
      }) != 45
    ) {
      return false;
    }
  }
  // Section below validates that each first indices of each grid is 45
  for (i = 0; i < 9; i++) {
    sum = 0;
    for (j = 0; j < 9; j++) {
      sum += board[j][i];
    }
    if (sum != 45) {
      return false;
    }
  }
  // Section below validates that the sum of the 9x9 grid's diagonal is not 45
  sum = 0;
  for (i = 0; i < 9; i++) {
    sum += board[i][i];
  }
  if (sum == 45) {
    return false;
  }
  return true;
}
