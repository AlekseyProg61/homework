card_num = [];
num = 10;
function getRandomInt(max) {
  num = Math.floor(Math.random() * max);
  return num;
}
console.log(getRandomInt(num));

document.addEventListener("DOMContentLoaded", function () {
  for (var i = 1; i < num; i++) {
    document.getElementsByClassName("card").textcontent = i;
  }
});


