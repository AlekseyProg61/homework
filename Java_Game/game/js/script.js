const NUM_CARDS = 16;   // общее количество карточек
  const PAIRS_COUNT = NUM_CARDS / 2; // количество уникальных чисел (пар)

  // Основной контейнер для игровых полей
  const gameField = document.getElementById('game-field');
  const scoreDisplay = document.getElementById('score');

  // Массив уникальных чисел (пример: от 1 до 8), каждое число повторится два раза
  const uniqueValues = [...new Set(Array(PAIRS_COUNT).keys().map(i => i+1))].flatMap(v => [v,v]);

  // Перемешиваем массив чисел случайным образом
  uniqueValues.sort(() => Math.random() - 0.5);

  // Храним статус текущего хода
  let openedCards = [];     // хранит последнюю открытую карту
  let foundPairsCount = 0;  // количество найденных пар

  // Отображаем все числа на экране и через 5 секунд скрываем их
  function revealAndHideNumbers() {
    uniqueValues.forEach(value => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.dataset.value = value; // сохраняем значение на самой карточке

      // Внутренний элемент для текста с номером
      const numberElement = document.createElement('span');
      numberElement.textContent = value;
      card.appendChild(numberElement);

      gameField.appendChild(card);
    });

    // Ждем 5 секунд, затем скрываем числа
    setTimeout(() => {
      document.querySelectorAll('.card span').forEach(span => {
        span.classList.add('hidden-number'); // скрываем цифры
      });
    }, 5000);
  }

  revealAndHideNumbers();

function showCard() {
    let card = document.getElementById('block_card').forEach(span => {
      span.classList.remove('hidden-number'); // показываем  цифры
    });
  console.log(card)
}

let button = document.getElementById('click_button').addEventListener("click", function showCard() {
  setTimeout , 5000
})

  // Функция сравнения открытых карточек
  function checkMatch() {
    if (openedCards.length === 2) {
      const firstValue = openedCards[0].dataset.value;
      const secondValue = openedCards[1].dataset.value;

      if (firstValue === secondValue) {
        // Совпадение найдено!
        foundPairsCount++;
        updateScore(foundPairsCount);
        openedCards.forEach(card => {
          card.classList.add('matched-pair');
        });
      } else {
        // Если числа разные, скрываем карточки обратно
        setTimeout(() => {
          openedCards.forEach(card => {
            card.querySelector('span').classList.add('hidden-number');
          });
        }, 1000);
      }

      // Завершаем ход
      openedCards = [];
    }
  }

  // Обновление счета
  function updateScore(count) {
    scoreDisplay.textContent = `Открытых пар: ${count}`;
  }

  // Проверка победы игрока
  function checkWinCondition() {
    if (foundPairsCount >= PAIRS_COUNT) {
      alert(`Вы выиграли! Все пары открыты.`);
    }
  }

  // Обработчик события клик по карточкам
  gameField.addEventListener('click', e => {
    const target = e.target.closest('.card');
    if (!target || target.classList.contains('matched-pair')) return;

    // Открываем число на карточке
    target.querySelector('span').classList.remove('hidden-number');
    target.classList.add('revealed-number');

    // Запоминаем текущую открытую карточку
    openedCards.push(target);

    // Проверяем наличие двух открытых карточек
    if (openedCards.length === 2) {
      checkMatch();
      checkWinCondition();
    }
  });