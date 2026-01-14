const nameInput = document.getElementById('input-name');
const numberInput = document.getElementById('input-number');
const expiryInput = document.getElementById('input-expiry');
const cvvInput = document.getElementById('input-cvv');
const cardName = document.getElementById('card-name');
const cardNumber = document.getElementById('card-number');
const cardExpiry = document.getElementById('card-expiry');
const cardCVV = document.getElementById('card-cvv');
const card = document.getElementById('card');
const cardinner = document.getElementById('card-inner');

card.addEventListener('click', () => {
  cardinner.classList.toggle('flip');
});

nameInput.addEventListener('input', () => {
  cardName.textContent = nameInput.value || 'Person Name';
});

numberInput.addEventListener('input', () => {
  cardNumber.textContent = numberInput.value || '1111 2222 3333 4444';
});

expiryInput.addEventListener('input', () => {
  cardExpiry.textContent = expiryInput.value || '02/30';
});

cvvInput.addEventListener('input', () => {
  cardCVV.textContent = cvvInput.value || '***';
});
cvvInput.addEventListener('input', () => {
  cardCVV.textContent = cvvInput.value || '***';
});

