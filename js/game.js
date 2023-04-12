'use strict';

/* let enemy = document.querySelector('#enemy');
let score = document.querySelector('.user-score');
let level = document.querySelector('.user-level');
let congratulation = document.querySelector('.congratulation');
let gameScreen = document.querySelector('.game-block');

console.log('hello');


const createNewGame = function () {
  let stateGame = {
    globalScore: 0,
    currentLevelScore: 0,
    requiredLevelScore: 5,
    currentLevel: 1,
    maxLevel: 5,
    get currentEnemyImage() {
      return `images/fish${this.currentLevel}.png`;
    },
  };
  gameScreen.addEventListener('click', function (e) {
    // increase globalScore and currentLevelScore and check requiredLevel
    if (e.target === enemy) {
      console.log('ok');
      stateGame.globalScore++;
      stateGame.currentLevelScore++;
      score.textContent = stateGame.globalScore;
      if (stateGame.currentLevelScore === stateGame.requiredLevelScore) {
        const goToTheNextLevel = function () {
          if (++stateGame.currentLevel > stateGame.maxLevel) {
            alert('the game is over');
            return;
          }
          enemy.src = stateGame.currentEnemyImage;
          congratulation.textContent = `You got ${stateGame.currentLevel} level`;
          level.textContent = stateGame.currentLevel;
          stateGame.currentLevelScore = 0;
        };
        goToTheNextLevel();
      }
    } else {
      console.log('miss');
    //        createMessageOnClick(e, false); 
    }
  });
};

createNewGame(); */

/* function createMessageOnClick(event, isTarget) {
  let element = document.createElement('div');
  element.textContent = isTarget ? '+1' : 'miss';
  element.style.top = event.pageY + 'px';
  element.style.left = event.pageX + 'px';
  element.classList.add('clicker');
  document.querySelector('.clicker').appendChild(element);
  // setTimeout(() => element.remove(), 300);
} */

/* const enemy = document.querySelector('#enemy');
let gameScreen = document.querySelector('.game-block');
*/

const gameOver = function (createNewGame, stateGame) {
  const modalWindow = document.querySelector('.modal-window');
  // const btnYes = document.querySelector('.btn-yes');
  const btnNo = document.querySelector('.btn-no');
  const enemy = document.querySelector('#enemy');

  modalWindow.classList.remove('hidden');

  /*  btnYes.addEventListener('click', function () {
    modalWindow.classList.add('hidden');
    stateGame = createNewGame(Math.floor(Math.random() * 3) + 1);
    console.log(stateGame);
  }); */

  btnNo.addEventListener('click', function () {
    enemy.classList.add('hidden');
    modalWindow.classList.add('hidden');
  });
};

const updateAllScore = function (game) {
  const score = document.querySelector('.user-score');
  game.globalScore++;
  game.currentLevelScore++;
  score.textContent = game.globalScore;
};

const goToTheNextLevel = function (stateGame) {
  const enemy = document.querySelector('#enemy');
  const congratulation = document.querySelector('.congratulation');
  const hp = document.querySelector('.enemy-hp');
  const level = document.querySelector('.user-level');

  enemy.src = stateGame.currentEnemyImage;
  stateGame.currentLevelScore = 0;
  stateGame.currentLevel++;
  stateGame.requiredLevelScore = 3;

  hp.textContent = stateGame.requiredLevelScore;
  congratulation.textContent = `You got ${stateGame.currentLevel} level`;
  level.textContent = stateGame.currentLevel;
};

const createNewGame = function (difficulty) {
  let stateGame = {
    globalScore: 0,
    currentLevelScore: 0,
    currentLevel: 1,
    get requiredLevelScore() {
      return this._requiredLevelScore;
    },
    set requiredLevelScore(value) {
      this._requiredLevelScore = this._requiredLevelScore
        ? Math.floor(Math.random() * value) + this._requiredLevelScore
        : value * 5;
    },
    get maxLevel() {
      return 5;
    },
    get currentEnemyImage() {
      return `images/fish${this.currentLevel}.png`;
    },
  };

  stateGame.requiredLevelScore = undefined;
  stateGame.requiredLevelScore = difficulty;
  console.log(stateGame.requiredLevelScore);

  document.querySelector('.user-name').textContent =
    localStorage.getItem('name');
  document.querySelector('.user-score').textContent = stateGame.globalScore;
  document.querySelector('.user-level').textContent = stateGame.currentLevel;
  document.querySelector('.enemy-hp').textContent =
    stateGame.requiredLevelScore;
  // document.querySelector('#enemy').src = stateGame.currentEnemyImage;

  return stateGame;
};

let stateGame = createNewGame(1);

document.querySelector('.game-block').addEventListener('click', function (e) {
  if (e.target === document.querySelector('#enemy')) {
    // cursorClicker(e, true);
    updateAllScore(stateGame);
    if (stateGame.currentLevelScore === stateGame.requiredLevelScore) {
      if (stateGame.currentLevel + 1 > stateGame.maxLevel) {
        gameOver(createNewGame, stateGame);
        console.log('2', stateGame);
      }
      goToTheNextLevel(stateGame);
    }
  } else {
    // cursorClicker(e, false);
  }
});
