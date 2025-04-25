print("Поиграем в игру 'Купи слона'. Вам задаётся один и тот же вопрос, попробуйте на него ответить")
print("Для выхода напишите стоп")
print("Купи слона! ")
game = True
count = 1
while game:
    answer = input("Ваш ответ: ")
    if answer != "Стоп":
        request = str("Купи слона!")
        print(f"Все так говорят {answer}.А ты купи слона:")
    count+=1
    if count == 4:
        print("Ну почти купили")
    if count == 11:
        game= False
        print("Поздравляем слон ваш")
    if answer == "Стоп":
        game=False
        print(f"Конец игры. Вы сыграли {count} раз ")