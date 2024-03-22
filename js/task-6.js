function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  }
}

function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';
}

document.querySelector('button[data-create]').addEventListener('click', () => {
  const inputVal = parseInt(document.querySelector('input').value);
  if (inputVal >= 1 && inputVal <= 100) {
    createBoxes(inputVal);
    document.querySelector('input').value = '';
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});

document.querySelector('button[data-destroy]').addEventListener('click', () => {
  destroyBoxes();
});
