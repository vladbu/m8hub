const validator = require('card-validator');
const showInfo = document.querySelector('.showInfo');
const cvvInfo = document.querySelector('.cvvInfo');
const cvvInfoContainer = document.querySelector('.cvvInfoContainer');
const form = document.getElementById('card');
let card = {};

// Popup
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

// Submit validation
form.addEventListener('submit', (el) => {
  card.firstName = form.firstName.value;
  card.lastName = form.lastName.value;
  if (validator.number(card.number).isValid && validator.expirationDate(card.date).isValid && validator.cvv(card.cvv).isValid && validator.postalCode(card.zip).isValid) {
    console.log(validator.number(card.number));
    console.log(validator.expirationDate(card.date));
    console.log(validator.cvv(card.cvv));
    console.log(validator.postalCode(card.zip));
    return
  } else {
    el.preventDefault();
    console.log(validator.number(card.number));
    console.log(validator.expirationDate(card.date));
    console.log(validator.cvv(card.cvv));
    console.log(validator.postalCode(card.zip));
  }
});

// cardNumber validation
function numValidation(el) {
  card.number = form.cardNumber.value;
  card.type = form.type.value;
  if (validator.number(card.number).isValid === false || validator.number(card.number).card.type !== card.type) {
    console.log(validator.number(card.number));
    el.target.setCustomValidity('Invalid credit card number or card type');
  } else {
    el.target.setCustomValidity('');
    return
  }
}
form.cardNumber.addEventListener('blur', numValidation);

// date validation
function dateValidation(el) {
  card.date = `${form.month.value}${form.year.value}`;
  if (validator.expirationDate(card.date).isValid === false) {
    console.log(validator.expirationDate(card.date));
    el.target.setCustomValidity('Invalid experiation date');
  } else {
    el.target.setCustomValidity('');
    return
  }
}
form.month.addEventListener('blur', dateValidation);
form.year.addEventListener('blur', dateValidation);

// cvv validation
function cvvValidation(el) {
  card.cvv = form.cvv.value;
  if (validator.cvv(card.cvv).isValid === false) {
    console.log(validator.cvv(card.cvv));
    el.target.setCustomValidity('Invalid cvv code');
  } else {
    el.target.setCustomValidity('');
    return
  }
}
form.cvv.addEventListener('blur', cvvValidation);

// zip/postal validation
function postalValidation(el) {
  card.zip = form.zip.value;
  if (validator.postalCode(card.zip).isValid === false) {
    console.log(validator.postalCode(card.zip));
    el.target.setCustomValidity('Invalid zip/postal code');
  } else {
    el.target.setCustomValidity('');
    return
  }
}
form.zip.addEventListener('blur', postalValidation);