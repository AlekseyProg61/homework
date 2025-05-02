document.getElementById("sumButton").addEventListener("click", function () {
  let UserNum1 = prompt("Введите первое число диапазона");
  let UserNum2 = prompt("Введите второе число диапазона");
  sum = 0;
  for (let i = UserNum1; i <= UserNum2; i++) sum = sum + i;
  result = Math.floor(sum + sum);
  alert(`Диапазон ${sum}. Сумма диапазона ${result}`);
});
