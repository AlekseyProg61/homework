my_list = [-15,20,1,35,4,25,26,0,14,-28,12,-65,0,15,32]
counter = 0
n = 0
p = 0
a = 0
for i in my_list:
    if i < 0:
      counter+=1
    if i == 0:
      n+=1
    if i > 0:
      p+=1
print(f"Мой список {my_list}")
my_list.sort()
min_my_list = min(my_list)
max_my_list = max(my_list)
print("Отсортированный список по возрастанию",my_list)
print(f"Минимальное число списка = {min_my_list}. Максимальное число списка = {max_my_list}")
print(f" В списке {counter} отрицательных чисел. В списке {n} нулей. В списке {p} положительных чисел")
my_list = [-15,20,1,35,4,25,26,0,14,-28,12,-65,0,15,32]
counter = 0
n = 0
p = 0
a = 0
for i in my_list:
    if i < 0:
      counter+=1
    if i == 0:
      n+=1
    if i > 0:
      p+=1
print(f"Мой список {my_list}")
my_list.sort()
min_my_list = min(my_list)
max_my_list = max(my_list)
print("Отсортированный список по возрастанию",my_list)
print(f"Минимальное число списка = {min_my_list}. Максимальное число списка = {max_my_list}")
print(f" В списке {counter} отрицательных чисел. В списке {n} нулей. В списке {p} положительных чисел")
