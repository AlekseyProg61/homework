num1 = int(input("Введите первое число диапазона: "))
num2 = int(input("Введите второе число диапазона: "))
x = 0
num1,num2 = num2,num1
while x <= num1:
    if x // 7:
        print("Числа кратные 7 в диапазонe от",num2,"до",num1,":",x)
    x += 7

    


