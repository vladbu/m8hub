import validator from 'card-validator';
const showInfo = document.querySelector('.showInfo');
const cvvInfo = document.querySelector('.cvvInfo');
const cvvInfoContainer = document.querySelector('.cvvInfoContainer');
const form = document.getElementById('card');

showInfo.addEventListener('click', () => {
  cvvInfo.classList.toggle('hidden');
  cvvInfoContainer.classList.toggle('hidden');
});
cvvInfoContainer.addEventListener('click', () => {
  cvvInfo.classList.toggle('hidden');
  cvvInfoContainer.classList.toggle('hidden');
});

form.addEventListener('submit', (el) => {
  el.preventDefault();
  console.log(valid.number('4111'))
  console.info(`
    ${form.type.value}
    ${form.firstName.value}
    ${form.lastName.value}
    ${form.cardNumber.value}
    ${form.month.value}
    ${form.year.value}
    ${form.cvv.value}
    ${form.zip.value}`);
});