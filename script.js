'use strict';

// // code to manupulate the stuff on display
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// // for textField
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// Game Logic
// generate random number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (messaage) {
  document.querySelector('.message').textContent = messaage;
};

// OnClick********************
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number!';
    displayMessage('⛔ No Number!');
    // when player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉Correct Number';
    displayMessage('🎉Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess != secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈 Too high' : ' 📉 Too low';
      displayMessage(guess > secretNumber ? '📈 Too high' : ' 📉 Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = '😢 You lost the game';
      displayMessage('😢 You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
  // when guess is too high
  //  else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📈 Too high';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '😢 You lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //     // when guess is too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📉 Too low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '😢 You lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});
// Again button*********************
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
