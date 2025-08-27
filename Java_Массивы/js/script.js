class Marker {
  constructor(color,inkLevel){
    this.color = color;
    this.inkLevel = inkLevel;
  }
  get markerProps(){
    return [this.color,this.inkLevel];
  }
  set markerProps([color,ink]){
    this.color = color;
    this.inkLevel = ink;
  }
  print(text){
    const contextDiv = document.getElementById('content');
    for (let char of text){
      if (this.inkLevel <= 0) {
        let errorText = document.getElementById('warning');
        errorText.textContent = "Чернила закончились!!!";
        break;
      }
      if (char === ""){
        this.inkLevel += 0.5;
      }
      else {
        this.inkLevel--;
      }
      contextDiv.textContent += char;
      contextDiv.style.color = this.color;
    }
  }
}
class FilledMarker extends Marker { 
  refill(amount) 
  { 
    if (amount > 100) 
    amount = 100; 
    this.inkLevel += amount; 
  } 
} 
// Создание экземпляра маркера
let marker = new FilledMarker("blue", 2); // Начальное количество чернил — 2 единицы
marker.refill(1000); // Заполнение резервуара чернилами

// Получаем элементы DOM
const inputField = document.getElementById('text-input');
const printButton = document.getElementById('print-button');
const closeButton = document.getElementById('close-button');
const contextDiv = document.getElementById('content');
// Добавляем обработчик события клика на кнопку
printButton.addEventListener('click', function() {
  const userText = inputField.value.trim(); // Берём введённый текст
  if (!userText.length) {
    alert("Вы ничего не ввели.");
    return;
  }
  marker.print(userText); // Отправляем текст на печать
});

closeButton.addEventListener('click', function () {
  window.location.reload();
})

