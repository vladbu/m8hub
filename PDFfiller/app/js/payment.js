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
  numValidation(el);
  dateValidation(el);
  cvvValidation(el);
  zipValidation(el);
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
    form.cardNumber.setCustomValidity('Invalid credit card number or card type');
    el.preventDefault();
  } else {
    form.cardNumber.setCustomValidity('');
    return
  }
}
form.cardNumber.addEventListener('blur', numValidation);

// date validation
function dateValidation(el) {
  card.date = `${form.month.value}${form.year.value}`;
  if (validator.expirationDate(card.date).isValid === false) {
    console.log(validator.expirationDate(card.date));
    form.month.setCustomValidity('Invalid experiation date');
    el.preventDefault();
  } else {
    form.month.setCustomValidity('');
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
    form.cvv.setCustomValidity('Invalid cvv code');
    el.preventDefault();
  } else {
    form.cvv.setCustomValidity('');
    return
  }
}
form.cvv.addEventListener('blur', cvvValidation);

// zip/postal validation
function zipValidation(el) {
  card.zip = form.zip.value;
  if (validator.postalCode(card.zip).isValid === false) {
    console.log(validator.postalCode(card.zip));
    form.zip.setCustomValidity('Invalid zip/postal code');
    el.preventDefault();
  } else {
    form.zip.setCustomValidity('');
    return
  }
}
form.zip.addEventListener('blur', zipValidation);