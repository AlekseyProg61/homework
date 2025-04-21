document.getElementById("helloButton").addEventListener("click", function () {
  let userName = prompt("Как тебя зовут?");
  alert(`Привет ${userName}!`);
});

todays_year = 2025;
document.getElementById("yearButton").addEventListener("click", function () {
  let userYear = prompt("Укажи год своего рождения?");
  year = todays_year - userYear;
  alert(`Тебе ${year} лет`);
});

document.getElementById("squareButton").addEventListener("click", function () {
  let userSquare = prompt("Введите длину стороны квадрата");
  length = userSquare * 4;
  alert(`Периметр квадрата =  ${length}`);
});
document.getElementById("radiusButton").addEventListener("click", function () {
  let userRadius = prompt("Введите радиус окружности");
  radius = userRadius ** 2 * 3.14;
  alert(`Периметр окружности =  ${radius}`);
});
document.getElementById("speedButton").addEventListener("click", function () {
  let userDistance = prompt("Введите расстояние до города");
  let userTime = prompt("За сколько часов хотите добраться?");
  speed = userDistance / userTime;
  alert(
    `Вам нужно двигаться со скоростью =  ${speed} км/ч,чтобы проехать ${userDistance} км, за ${userTime} часов`
  );
});


euro = 0.87
document.getElementById("converterButton").addEventListener("click", function () {
  let userDollar = prompt("Введите сумму долларов,а мы переведём в евро");
  converter = userDollar * euro;
  alert(`${userDollar} долларов = ${converter} евро`);

});

gb = 1024
document.getElementById("flashButton").addEventListener("click", function () {
  let userFlash = prompt("Введите объём флэш памяти в ГБ");
  volume = Math.floor(userFlash * gb / 820);
  alert(`${volume} файлов размером в 820 мб , поместиться на флэшке размером в ${userFlash} ГБ`);
});

document.getElementById("chocolateButton").addEventListener("click", function () {
  let userBank = prompt("Сколько у вас всего денег?");
  let userPrice = prompt("Укажите цену шоколадки");
  chocolate = Math.floor(userBank / userPrice);
  remains = userBank - userPrice * chocolate;
  alert(`Вы сможете купить ${chocolate} шоколадок. Остаток средств ${remains}`);

});

document.getElementById("flipButton").addEventListener
  ("click",
    function () {
      let userNumber = prompt("Введите число,мы перевернем его: ")
      let result = 0
      while (userNumber > 0) {
        interval = userNumber % 10
        result = result * 10 + interval
        userNumber = Math.floor(userNumber/10)
      }
      alert(`Результат ${result}`)
        
    }
  );