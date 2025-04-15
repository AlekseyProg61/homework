# Вводим числа
num1 = int(input("Введите первое число диапазона: "))
num2 = int(input("Введите второе число диапазона: "))
# Вводим переменные
x,y,z,q = 0,0,0,0
# Меняем числа местами
if num1>num2:num2,num1 = num1,num2
# Проверяем числа кратные 3
while x <= num2:
    if x // 1 and x // 3:
        print("Fizz")
    x += 3
# Проверяем числа кратные 5
while y <= num2:
    if y//1 and y // 5:
        print("Buzz")
    y += 5
# Проверяем числа кратные 3 и 5
while z <= num2:
    if z//15:
        print("Fizz Buzz")
    z += 15
# Проверяем числа на некратность 3 и 5
while q <= num2:
    if q % 3 != 0 and q % 5 != 0:
        print(q)
    q += 1
