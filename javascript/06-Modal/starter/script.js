'use strict';

function closeModel() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

const openModel = function () {
  console.log('button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModel);
}
btnCloseModal.addEventListener('click', closeModel);

overlay.addEventListener('click', closeModel);

//keypress event

// document.addEventListener('keydown', function () {
//   console.log('A key was pressed');
// });
// document.addEventListener('keydown', function (event) {
//   console.log(event);
//   console.log(event.key);
// });
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModel();
    }
  }
});
