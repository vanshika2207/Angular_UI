'use strict';

// document.querySelector('.message') class
// document.queryelector('#message') id

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct number';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 90;

//secret number
let secret_number = Math.trunc(Math.random() * 20) + 1;
//score
let score = 20;
//high score
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //when no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  } //when player wins
  else if (guess == secret_number) {
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('.number').textContent = secret_number;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } //guess too high or low
  else if (guess !== secret_number) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secret_number ? 'Number too high' : 'Number too low';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'lost game';
      document.querySelector('.number').textContent = secret_number;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});

//reset function

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secret_number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Starting guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
