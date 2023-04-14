'use strict';

/*****************************
 * Showing window with message about game over
 *********************/
const gameOver = function () {
  const modalWindow = document.querySelector('.active-window');
  const btn = document.querySelector('button');
  const enemy = document.querySelector('#enemy');
  /* hide last enemy */
  enemy.classList.add('hidden');

  /* display game over window  */
  modalWindow.classList.remove('hidden');

  btn.addEventListener('click', function () {
    modalWindow.classList.add('hidden');
  });
};

/*******************
 *  Increase levelScore and globalScore by one in stateGame object
 *  Update globalScore on a webpage
 **********************/
const updateAllScore = function (game) {
  const score = document.querySelector('.user-score');
  game.globalScore++;
  game.currentLevelScore++;

  score.textContent = game.globalScore;
};

/*****************
 *Insert paragraph into webpage with congratulation message 
   Also delete this paragraph after 2 sec
 ******************/
const animateCongratulation = function () {
  const congratulation = document.querySelector('.next-level');
  let message = document.createElement('p');
  message.textContent = `You reached ${stateGame.currentLevel} level`;
  congratulation.appendChild(message);
  setTimeout(() => {
    congratulation.removeChild(message);
  }, 2000);
};

/*****************
 *Update gameState Object, UI, calling animateCongratulation function
 ******************/
const goToTheNextLevel = function (stateGame) {
  const enemy = document.querySelector('#enemy');
  const hp = document.querySelector('.enemy-hp');
  const level = document.querySelector('.user-level');

  /* if image will be weight we need to block click on the target*/
  document.querySelector('.main').removeEventListener('click', makeClick);

  /* update score and level and create new xp of our enemy*/
  stateGame.currentLevelScore = 0;
  stateGame.currentLevel++;
  stateGame.requiredLevelScore = 3;

  /* load img */
  enemy.src = stateGame.currentEnemyImage;

  enemy.addEventListener('load', function () {
    /* remove all the animation from enemy forever when calling gotoTheNextLevel*/
    if (!enemy.classList.contains('non-active')) {
      enemy.parentElement.classList.remove('active-animation');
      enemy.classList.add('non-active');
    }
    /* unblock Event Listener */
    document.querySelector('.main').addEventListener('click', makeClick);
  });

  /* update UI */
  hp.textContent = stateGame.requiredLevelScore;
  level.textContent = stateGame.currentLevel;

  /* Showing message */
  animateCongratulation();
};

/*****************
 * create literal object with all needed parameters of our game, return one
 * also update UI with this parameters
 ******************/
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
        ? Math.floor(Math.random() * value + 3) + this._requiredLevelScore
        : value * 5;
    },
    get maxLevel() {
      return 5;
    },
    get currentEnemyImage() {
      return `images/demon${this.currentLevel}.png`;
    },
  };

  /* this feature will be needed for restart game in future */
  stateGame.requiredLevelScore = undefined;
  /* set requiredLevelScore while creation, otherwise will be undefined even without previos line */
  stateGame.requiredLevelScore = difficulty;

  document.querySelector('.user-name').textContent =
    localStorage.getItem('name');
  document.querySelector('.user-score').textContent = stateGame.globalScore;
  document.querySelector('.user-level').textContent = stateGame.currentLevel;
  document.querySelector('.enemy-hp').textContent =
    stateGame.requiredLevelScore;

  return stateGame;
};

/*****************
 * MAIN GAME
 ******************/
let stateGame = createNewGame(1);

/* event handler */
const makeClick = function (e) {
  if (e.target === document.querySelector('#enemy')) {
    // cursorClicker(e, true);
    updateAllScore(stateGame);
    if (stateGame.currentLevelScore === stateGame.requiredLevelScore) {
      if (stateGame.currentLevel + 1 > stateGame.maxLevel) {
        gameOver(createNewGame, stateGame);
        console.log('2', stateGame);
      } else {
        goToTheNextLevel(stateGame);
      }
    }
  } else {
    // cursorClicker(e, false);
  }
};

/* Event Listener on game block to furthest experimental feature with event propagation */
document.querySelector('.main').addEventListener('click', makeClick);
