let enemy = document.querySelector('#enemy');
let score = document.querySelector('.user-score');
let level = document.querySelector('.user-level');
let congratulation = document.querySelector('.congratulation');

console.log('hello');

const wait = function () {
  return new Promise(function (resolve) {
    setTimeout(resolve, 1000);
  });
};

const createNewGame = () => {
  let stateGame = {
    globalScore: 0,
    currentLevelScore: 0,
    requiredLevelScore: 5,
    currentLevel: 1,
    maxLevel: 5,
  };

  enemy.addEventListener('click', function () {
    // increase globalScore and currentLevelScore and check requiredLevel

    stateGame.globalScore++;
    stateGame.currentLevelScore++;
    score.textContent = stateGame.globalScore;
    if (stateGame.currentLevelScore === stateGame.requiredLevelScore) {
      const goToTheNextLevel = function () {
        stateGame.currentLevel++;
        if (stateGame.currentLevel > stateGame.maxLevel) {
          alert('the game is over');
          return;
        }
        congratulation.textContent = `You got ${stateGame.currentLevel} level`;
        level.textContent = stateGame.currentLevel;
        stateGame.currentLevelScore = 0;
      };
      goToTheNextLevel();
    }
  });
};

createNewGame();
