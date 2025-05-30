s = input("Введите любой текст: ")
print(f"Ваш текст {s}")
v = input("Введите слова, которые хотите зарезервировать: ")
s_words = s.split(" ")
for i in s_words:
    if i in v:
        print("Вы зарезервировали слово","".join(i.title().split(" ")))