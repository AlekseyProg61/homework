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
      if(this.inkLevel <= 0 ){
        alert("Чернила закончились");
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
// Создаем экземпляр заполненного маркера 
let marker = new FilledMarker("#838", 2); 
marker.refill(150); // Заполняем дополнительно чернилами 
// Текст для печати const 
listText = ` List of Software Inc. workers with names, positions, departments, salaries. Best Regards Jeremy Clarkson - HR Manager of the HR Department `.trim(); 
// Печать текста 
marker.print(listText);