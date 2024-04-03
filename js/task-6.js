let sizes = 30;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  destroyBoxes();
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${sizes}px`;
    box.style.height = `${sizes}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    sizes += 10;
  }
}

function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');

  while (boxesContainer.firstChild) {
    boxesContainer.removeChild(boxesContainer.firstChild);
  }
}

const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const input = document.querySelector('input');

createButton.addEventListener('click', () => {
  const inputVal = parseInt(input.value);
  if (inputVal >= 1 && inputVal <= 100) {
    createBoxes(inputVal);
    input.value = '';
  } else {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Please enter a number between 1 and 100.';
    document.body.appendChild(errorMessage);
    setTimeout(() => {
      errorMessage.remove();
    }, 3000);
  }
});

destroyButton.addEventListener('click', () => {
  destroyBoxes();
});
