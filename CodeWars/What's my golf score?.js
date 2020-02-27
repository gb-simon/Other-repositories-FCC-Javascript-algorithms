function golfScoreCalculator(parStrokes, myStrokes) {
  let myScore = 0;
  for (let i = 0; i < parStrokes.length; i++) {
    myScore += myStrokes[i] - parStrokes[i];
  }
  return myScore;
}

golfScoreCalculator("343334533", "543543543")