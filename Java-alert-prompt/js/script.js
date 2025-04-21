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
