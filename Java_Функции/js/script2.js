
// let x = prompt("Введите число от 1 до 5")
// switch (x) {
//     case "1":
//         alert("Число равно 1");
//         break;
//     case "2":
//         alert("Это число 2");
//         break;
//     case "3":
//         alert("It is three");
//         break;
//     default:
//     alert("Oh, the value is too big!");
// }
let button = document.getElementById("btn").innerHTML = "Авто";
document.getElementById("btn").onclick = function () {
    this.style.backgroundColor = "green"
}
document.getElementById("btn").addEventListener("click", function myAuto() {
    let auto = {
    model: "BMW",
    color: "Black",
    type: "Sedan",
    move: function (speed) {
        if (speed <= 110) {
            alert("Едем со скоростью " + speed);
        }
        else {
            alert("Ехать не можем");
        }
        }
}
auto.changeWheel = function () {
    alert("Меняем колесо");
}
auto.model = "WV";
alert("Марка = " + auto.model);
alert("Цвет = " + auto.color);
alert("Тип = " + auto.type);
auto.move(111);
auto.changeWheel();
})


