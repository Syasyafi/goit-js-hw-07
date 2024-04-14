function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

function createBoxes(amount) {
  const boxSize = 30;
  const boxesContainer = document.getElementById('boxes');
  const boxes = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }

  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');

  boxesContainer.innerHTML = '';
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
