const showInfo = document.querySelector('.showInfo')
const cvvInfo = document.querySelector('.cvvInfo')
let infoActive = false;

showInfo.addEventListener('click', () => {
  infoActive = !infoActive
  if (infoActive === true) {
    cvvInfo.classList.toggle('hidden')
  }
})