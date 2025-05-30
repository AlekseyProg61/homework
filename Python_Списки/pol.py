game = True
i = 0
while game:
    polindrom = input("Введите слово или текст в нижнем регистре,программа проверит на полиндром:  ")
    rev = ''.join(reversed(polindrom))
    if rev.title() == polindrom:
        print("Ваш текст - Полиндром")
    else:
        print("Ваш текст не Полиндром")
    i+=1
    start = input("Хотите ввести новое слово? 1 = Да, 2 = Нет: ")
    if start == "1":
        game = True
    if start == "2":
        game = False
        print("Конец программы, введено попыток",i)