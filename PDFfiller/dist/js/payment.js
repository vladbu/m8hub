const showInfo = document.querySelector('.showInfo');
const cvvInfo = document.querySelector('.cvvInfo');
const cvvInfoContainer = document.querySelector('.cvvInfoContainer');

showInfo.addEventListener('click', () => {
  cvvInfo.classList.toggle('hidden');
  cvvInfoContainer.classList.toggle('hidden');
})