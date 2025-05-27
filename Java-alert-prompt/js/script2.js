document.getElementById("sumButton").addEventListener("click", function () {
  let UserNum1 = prompt("Введите первое число диапазона");
  let UserNum2 = prompt("Введите второе число диапазона");
  if ((UserNum1 > UserNum2, UserNum2, (UserNum1 = UserNum1), UserNum2)) { sum = 0 }
  a = 0;
  while (a < UserNum2) {
    a++;
    sum += a;
  }
  alert(`Сумма всех чисел диапазона от ${UserNum1} до ${UserNum2} = ${sum}`);
});
document.getElementById("dividerButton").addEventListener("click", function () {
  let UserNum1 = prompt("Введите первое число ");
  let UserNum2 = prompt("Введите второе число ");
  result = 0;
  while (UserNum1 != UserNum2) {
    if (UserNum1 == UserNum2) {
      result = UserNum1
    }
    else if (UserNum1 > UserNum2) {
      UserNum1 -= UserNum2
      result = UserNum1
    }
    else (UserNum1 < UserNum2)
    UserNum2 -= UserNum1
    result = UserNum2
  }
  alert(`Наибольший общий делитель числа ${UserNum1} и числа ${UserNum2} = ${UserNum1}`);
});

document.getElementById("divider2Button").addEventListener("click", function () {
  let UserNum = prompt("Введите число")
  for (i = 1; i < UserNum; i++);
  count = 0
  alert(`Число ${UserNum}`)
  for (j = 2; j < i; j++){
    if (UserNum % i == 0);
    i/=j
    alert(`Делители = ${i}`)
    count++
  }
})
console.log()

document.getElementById("digitalButton").addEventListener("click", function() {  
  let UserNum = prompt("Введите число");  
  for (count = 0; UserNum > 0;
      UserNum = Math.floor(UserNum / 10)) {  
      count++;  
  }  
  alert(`Количество цифр в ведённом числе равно ${count}`)
})

document.getElementById("digital2Button").addEventListener("click", function () {
  digit = 0
  zero = 0
  positive = 0
  negative = 0
  even_num = 0
  odd_num = 0
  while (digit < 10) {
    let UserNum = prompt("Введите 10 чисел")
    digit++
    if (UserNum > 0) {
      positive ++
    }
    if (UserNum < 0) {
      negative ++
    }
    if (UserNum == 0) {
      zero ++ 
    }
    if (UserNum % 2 == 0) {
      even_num++
    }
    if (UserNum % 2 != 0) {
      odd_num++
    }
  }
  alert(
    `Вы ввели ${positive} положительных чисел 
    Вы ввели ${negative} отрицательных чисел 
    Вы ввели ${zero} нулей
    Вы ввели ${even_num} чётных чисел
    Вы ввели ${odd_num} нечётных чисел`)
  
})

document.getElementById("calcButton").addEventListener("click", function () {
  let UserNum1 = parseInt(prompt("Введите первое число"))
  let UserNum2 = parseInt(prompt("Введите второе число"))
  let UserChoice = prompt("Введите на клавиатуре какое математическое выражение нужно сделать +,-,*,/")
  plus = UserNum1 + UserNum2;
  minus = UserNum1 - UserNum2;
  multiply = UserNum1 * UserNum2;
  share = UserNum1 / UserNum2;
    if (UserChoice == "+") {
      alert(`Сумма чисел равно ${plus}`)
    }
    if (UserChoice == "-") {
      alert(`Разница чисел равно ${minus}`)
    }
    if (UserChoice == "*") {
      alert(`Сумма умножения чисел равно ${multiply}`)
    }
    if (UserChoice == "/") {
      alert(`Сумма деления чисел равно ${share}`)
  }
})

document.getElementById("shiftButton").addEventListener("click", function () {
  let UserNum =parseInt (prompt("Введите число"));
  let UserShift = parseInt(prompt("Насколько чисел нужно сдивнуть"));
  for (i = 1; i <= UserShift; i++) {
    if (UserNum > 100 && UserNum <= 1000) {
      reverse = UserNum % 10
      UserNum = reverse * 10 + i
    }
    if (UserNum > 1000 && UserNum <= 10000) {
      reverse = UserNum % 100
      UserNum = reverse * 10 + i
    }
    if (UserNum > 10000 && UserNum <= 100000) {
      reverse = UserNum % 1000
      UserNum = reverse * 10 + i
    }
    alert(UserNum)
  }
})

document.getElementById("dayButton").addEventListener("click", function () {
  start = true
  while (start) {
    let UserChoice = confirm("День недели")
    if (UserChoice = 1) {
      pn = "Понедельник";
      vt = "Вторник";
      sr = "Среда";
      ch = "Четверг";
      pt = "Пятница";
      sb = "Суббота";
      vs = "Воскресенье";
      alert(pn)
      alert(vt)
      alert(sr)
      alert(ch)
      alert(pt)
      alert(sb)
      alert(vs)
      let UserChoice2 = prompt("Продолжить 1 = Да, 2 = Нет")
      if (UserChoice2 == "1") {
        continue
      }
      if (UserChoice2 == "2") {
        break
      }
    }
  }
}) 

document.getElementById("multiplication_tableButton").addEventListener("click", function () {
  count = 1
  for (i = 2; i <= 10; i++)
  { count++
    result = count * i
    alert(`Результат = ${count} * ${i} = ${result}`)
  }
})

document.getElementById("riddleButton").addEventListener("click", function () {
  alert("Загадайте число от 0 до 100. Программа будет спрашивать больше,меньше или равно,чтобы отгадать ваше число")
  let min = 0
  let max = 100
  let midrange = Math.round((min + max) / 2)
  let n  = ""
  game = 7
  while (game != "=") {
    game++
    let n1 = prompt(`Ваше число больше ${midrange}, меньше ${midrange}, или равно. Поставьте символы > больше.,< меншье, = равно`)
    if (n1 == "=") {
      alert(`Ваше число = ${midrange}`)
      break
    }
    else if (n1 == ">") {
      min = midrange
      midrange = Math.round((min + max) / 2)
      if (min == midrange && midrange!=100) {
        midrange += 1;
        alert(`Ваше число больше или меньше` + midrange + `Поставьте символы > больше.,< меншье, = равно` )
    }
      
    }
    else if (n1 == "<") {
      max = midrange
      midrange = Math.round((min + max) / 2)
      alert("Ваше число больше или меньше "  + midrange + " Поставьте символы > больше.,< меншье, = равно" )
    }
  }

})