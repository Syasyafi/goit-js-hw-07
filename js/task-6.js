function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  destroyBoxes(); // Очищення попередніх квадратів перед створенням нових
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
  // Очищення попередніх квадратів шляхом видалення їх дочірніх елементів
  while (boxesContainer.firstChild) {
    boxesContainer.removeChild(boxesContainer.firstChild);
  }
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
