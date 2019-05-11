const validator = require('card-validator');
const showInfo = document.querySelector('.showInfo');
const cvvInfo = document.querySelector('.cvvInfo');
const cvvInfoContainer = document.querySelector('.cvvInfoContainer');
const form = document.getElementById('card');
let card = {};

showInfo.addEventListener('click', () => {
  cvvInfo.classList.toggle('hidden');
  cvvInfoContainer.classList.toggle('hidden');
});
cvvInfo.addEventListener('click', (el) => {
  el.stopPropagation()
});
cvvInfoContainer.addEventListener('click', () => {
  cvvInfo.classList.toggle('hidden');
  cvvInfoContainer.classList.toggle('hidden');
});

form.addEventListener('submit', (el) => {
  el.preventDefault();
  card.type = form.type.value;
  card.firstName = form.firstName.value;
  card.lastName = form.lastName.value;
  card.number = form.cardNumber.value;
  card.date = `${form.month.value}${form.year.value}`;
  card.cvv = form.cvv.value;
  card.zip = form.zip.value;
  console.log(validator.number(card.number));
  console.log(validator.expirationDate(card.date));
  console.log(validator.cvv(card.cvv));
  console.log(validator.postalCode(card.zip));
});