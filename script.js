'use strict';
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const currentScorePlayer = document.querySelectorAll('.current-score');
const player = document.querySelectorAll('.player');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const totalScorePLayer = document.querySelectorAll('.score');
const namePlayer = document.querySelectorAll('.name');

score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');
// console.log(dice);

const rollDice = function () {
  const ranNum = Math.trunc(Math.random() * 6) + 1;
  return ranNum;
};

const displayDice = function (rollNum) {
  dice.classList.add('hidden');
  dice.setAttribute('src', `dice-${rollNum}.png`);
  dice.classList.remove('hidden');
};

let playerActive = 0;
const switchPlayer = function () {
  if (player[0].classList.contains('player--active')) {
    player[0].classList.remove('player--active');
    player[1].classList.add('player--active');
    playerActive = 1;
  } else if (player[1].classList.contains('player--active')) {
    player[1].classList.remove('player--active');
    player[0].classList.add('player--active');
    playerActive = 0;
  }
};

let currentScore = 0;
btnRoll.addEventListener('click', function () {
  let rollNum = rollDice();
  //   console.log(rollNum);
  if (rollNum === 1) {
    displayDice(rollNum);
    currentScorePlayer[playerActive].textContent = 0;
    // totalScorePLayer[playerActive].textContent = 0;
    currentScore = 0;
    // totalScore[playerActive] = 0;
    switchPlayer();
  } else {
    displayDice(rollNum);
    currentScore = currentScore + rollNum;
    currentScorePlayer[playerActive].textContent = currentScore;
  }
  //   console.log(totalScore);
});

let totalScore = [0, 0];
btnHold.addEventListener('click', function () {
  totalScore[playerActive] = totalScore[playerActive] + currentScore;
  totalScorePLayer[playerActive].textContent = totalScore[playerActive];
  currentScore = 0;
  currentScorePlayer[playerActive].textContent = currentScore;

  if (totalScore[playerActive] >= 20) {
    console.log(`Player ${playerActive} wins!!`);
    player[playerActive].classList.add('player--winner');
    if (!playerActive) namePlayer[playerActive].textContent = `Priya Wins`;
    else namePlayer[playerActive].textContent = `Ankesh Wins`;
    btnHold.disabled = true;
    btnRoll.disabled = true;
  }
  switchPlayer();
  // console.log(totalScore);
});

btnNew.addEventListener('click', function () {
  currentScore = 0;
  totalScore = [0, 0];

  namePlayer[0].textContent = `Priya`;
  namePlayer[1].textContent = `Ankesh`;

  for (let i = 0; i < currentScorePlayer.length; i++) {
    currentScorePlayer[i].textContent = 0;
    totalScorePLayer[i].textContent = 0;

    player[i].classList.remove('player--winner');
  }
  if (playerActive) {
    switchPlayer();
  }
  dice.classList.add('hidden');
  btnHold.disabled = false;
  btnRoll.disabled = false;
  //   playerActive = 0;
});
