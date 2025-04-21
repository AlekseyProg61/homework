import random
print("Добро пожаловать в игру 'Камень,Ножницы,Бумага'")
name = input("Напиши своё имя: ")
print(f"Привет,{name}!")
game = True
count = 1
gamer_score = 0
cp_score = 0
action = ("камень","ножницы","бумага")
seth = 1
while game and seth <= 11:
        start = input("Начнём? Напиши 'Старт' для начала игры,'Стоп' для выхода:  ")
        if start == "Старт":
            print(f"Раунд {count}")
            gamer = input("Чтобы сделать ход напиши: 'камень','ножницы','бумага'.\nМожно выбрать только один предмет: ")
            cp_action = random.choice(action)
            if gamer == "камень" and cp_action == "ножницы":
                print(f"Вы выиграли {gamer} тупит {cp_action}")
                gamer_score+=1
            elif cp_action == "бумага" and gamer == "камень":
                print(f"Вы проиграли {cp_action} заворачивает {gamer}")
                cp_score+=1
            elif cp_action == "камень" and gamer == "камень":
                print(f"Ничья. Оба игрока выбрали {gamer}")
            if gamer == "ножницы" and cp_action == "бумага":
                print(f"Вы выиграли {gamer} режут бумагу")
                gamer_score += 1
            elif cp_action == "камень" and gamer == "ножницы":
                print(f"Вы проиграли {cp_action} тупит {gamer}")
                cp_score += 1
            elif cp_action == "ножницы" and gamer == "ножницы":
                print(f"Ничья. Оба игрока выбрали {gamer}")
            if gamer == "бумага" and cp_action == "камень":
                print(f"Вы выиграли {gamer} заворачивает {cp_action}")
                gamer_score += 1
            elif cp_action == "ножницы" and gamer == "бумага":
                print(f"Вы проиграли {cp_action} режут бумагу")
                cp_score += 1
            elif cp_action == "бумага" and gamer == "бумага":
                print(f"Ничья. Оба игрока выбрали {gamer}")
            print(f"Текущий счёт. Ваши очки {gamer_score}, очки противника {cp_score}")
            count += 1
            seth += 1
        if start == "Стоп" or seth == 11:
            game = False
            print(f"Конец игры. Сыграно {count-1} раундов")
            if gamer_score > cp_score:
                print(f" Поздравляем!!! Вы выиграли!!! Ваши очки = {gamer_score}. Очки противника = {cp_score}")
            elif gamer_score < cp_score:
                print(f" Увы.Вы проиграли :( Ваши очки = {gamer_score}. Очки противника = {cp_score}")
            else:
                print(f"Ничья! Ваши очки = {gamer_score}. Очки противника = {cp_score} ")
