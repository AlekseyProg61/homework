// Написать функцию, которая принимает 2 числа и возвращает -1,
// если первое меньше, чем второе; 1 – если первое
// больше, чем второе; и 0 – если числа равны.
function num() {
  let a = 1;
  let b = 2;
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  if (a == b) {
    return 0;
  }
}
console.log(num(2, 6));

// Написать функцию, которая вычисляет факториал переданного ей числа.
var factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log("Факториал = ", factorial(3));

// Написать функцию, которая принимает три отдельные
// цифры и превращает их в одно число. Например: цифры
// 1, 4, 9 превратятся в число 149.
function bac() {
  let a = 1;
  let b = 4;
  let c = 9;
  let myarray = [];
  for (i = 0; i <= c; i++) {
    if (i == a) {
      myarray.push(a);
    }
    if (i == b) {
      myarray.push(b);
    }
    if (i == c) {
      myarray.push(c);
    }
  }
  return myarray.join("");
}
console.log("Числа", bac(1, 4, 9));

// Написать функцию, которая принимает длину и ширину
// прямоугольника и вычисляет его площадь. Если в функцию
// передали 1 параметр, то она вычисляет площадь квадрата.

function S() {
  let a = 10;
  let b = 12;
  i = 0;
  sum = 0;
  while (i <= sum) {
    i++;
    if (a || b) {
      sum_a = a * 4;
      // return toString("Площадь квадрата = "), sum_a;
    }
    if (b || a) {
      sum_b = b * 4;
      // return toString("Площадь квадрата = "), sum_b;
    }
    if (a && b) {
      sum = a * b;
      // return "Площадь прямоугольника =", sum;
    }
    return toString("Площадь = "), sum_a && sum_b, sum;
  }
}
console.log("Площадь =", S(5, 6));

// Написать функцию, которая проверяет, является ли переданное ей число совершенным.
// Совершенное число – это
// число, равное сумме всех своих собственных делителей.

function perfect_number() {
  let num = 28;
  sum = 0;
  for (i = 1; i < num; i++) {
    if (num % i == 0) {
      sum += i;
    }
  }
  return sum == num;
}
console.log(
  "Ваше число совершенно,если true,false,если простое. Ваше число =",
  perfect_number(),
  sum
);
// Написать функцию, которая принимает минимальное и
// максимальное значения для диапазона, и выводит только
// те числа из диапазона, которые являются совершенными.
// Используйте написанную ранее функцию, чтобы узнавать,
// совершенное число или нет.

function perfect_number2() {
  let num = 1;
  let num2 = 28;
  sum = 0;
  count = 2;
  for (i = num; i < num2; i++) {
    if (i == num && i < num2) {
    }
    while (count < i) {
      count += i;
      sum += i;
      if (count == 0) {
      }
      if (i == count) {
      }
    }
  }
<<<<<<< HEAD
  return sum == i;
=======
  return sum == num;
>>>>>>> 468d538f5469492e22403206154fb47863d58b64
}
console.log(
  "Ваше число совершенно,если true,false,если простое. Ваше число =",
  perfect_number2(),
  sum
);

// Написать функцию, которая принимает время
// (часы, минуты, секунды) и выводит его на экран в формате «чч: мм: сс».
// 2
// Если при вызове функции минуты и/или секунды не были
// переданы, то выводить их как

function time() {
  let a = 12
  let b = 35
  let c = 55
  let ch = "чч: "
  let min = "мм: "
  let sec = "сс: "
  step = 0
  let time_time = []
  if (a != 0 && b != 0 && c != 0) {
    time_time.push(a)
    time_time.push(b)
    time_time.push(c)
    for (i = a; i <= a; i++) { step += i }
    return step + ch + b + min + c + sec
  }
  else {
    return a = 0, b = 0, c = 0
  }
}
console.log("Время ", time())

// Написать функцию, которая принимает часы, минуты и
// секунды и возвращает это время в секундах.
function time2() {
  let a = 12
  let b = 35
  let c = 55
  let sec = ":сс "
  step = 0
  let time_time = []
  if (a != 0 && b != 0 && c != 0) {
    time_time.push(a)
    time_time.push(b)
    time_time.push(c)
    for (i = a; i <= a; i++) { step += i }
    a *= 3600
    b *= 60
    sec2 = a + b + c
    return sec2 + sec
  }
  else {
    return a = 0, b = 0, c = 0
  }
}
console.log("Время ", time2())

// Написать функцию, которая принимает количество секунд,
// переводит их в часы, минуты и секунды и возвращает в
// виде строки «чч:мм:сс».

function time3() {
  let a = 43200
  let b = 2100
  let c = 55
  let ch = "чч: "
  let min = "мм: "
  let sec = ":сс "
  step = 0
  let time_time = []
  if (a != 0 && b != 0 && c != 0) {
    time_time.push(a)
    time_time.push(b)
    time_time.push(c)
    for (i = a; i <= a; i++) { step += i }
    a /= 3600
    b /= 60
    return a + ch + b + min + c + sec
  }
  else {
    return a = 0, b = 0, c = 0
  }
}
console.log("Время ", time3())