# сделать программу:
# - добавление/удаление категории
# - добавление/удаление продуктов
# - определение количества продуктов в категории
# - вывод продуктов в категории
# - вывод всех категорий
# - вывод таблицы
# '''
# реализовать пользовательский интерфейс
# добавить цены на каждый из продуктов

# Инициализация данных
categories = {}  # Словарь для хранения категорий и продуктов

# Пользовательский интерфейс
while True:
    print("\nМеню:")
    print("1. Добавить категорию")
    print("2. Удалить категорию")
    print("3. Добавить продукт в категорию")
    print("4. Удалить продукт из категории")
    print("5. Количество продуктов в категории")
    print("6. Вывести продукты в категории")
    print("7. Вывести все категории")
    print("8. Вывести таблицу продуктов")
    print("9. Выход")

    choice = input("Выберите действие (1-9): ")

    if choice == '1':  # Добавить категорию
        category = input("Введите название категории: ")
        categories[category] = []  # Инициализация пустого списка продуктов
        print(f"Категория '{category}' добавлена.")

    elif choice == '2':  # Удалить категорию
        category = input("Введите название категории для удаления: ")
        if category in categories:
            del categories[category]
            print(f"Категория '{category}' удалена.")
        else:
            print("Категория не найдена.")

    elif choice == '3':  # Добавить продукт в категорию
        category = input("Введите название категории: ")
        if category in categories:
            product = input("Введите название продукта: ")
            price = input("Введите цену продукта: ")
            categories[category].append((product, price))  # Хранение продукта и его цены в кортеже
            print(f"Продукт '{product}' добавлен в категорию '{category}'.")
        else:
            print("Категория не найдена.")

    elif choice == '4':  # Удалить продукт из категории
        category = input("Введите название категории: ")
        if category in categories:
            product = input("Введите название продукта для удаления: ")
            categories[category] = [p for p in categories[category] if p[0] != product]
            print(f"Продукт '{product}' удален из категории '{category}'.")
        else:
            print("Категория не найдена.")

    elif choice == '5':  # Количество продуктов в категории
        category = input("Введите название категории: ")
        if category in categories:
            count = len(categories[category])
            print(f"Количество продуктов в категории '{category}': {count}.")
        else:
            print("Категория не найдена.")

    elif choice == '6':  # Вывести продукты в категории
        category = input("Введите название категории: ")
        if category in categories:
            print(f"Продукты в категории '{category}':")
            for product, price in categories[category]:
                print(f"- {product}: {price} руб.")
        else:
            print("Категория не найдена.")

    elif choice == '7':  # Вывести все категории
        print("Все категории:")
        for category in categories.keys():
            print(f"- {category}")

    elif choice == '8':  # Вывести таблицу продуктов
        print("Таблица продуктов:")
        for category, products in categories.items():
            print(f"\nКатегория: {category}")
            for product, price in products:
                print(f"- {product}: {price} руб.")

    elif choice == '9':  # Выход
        print("Выход из программы.")
        break

    else:
        print("Некорректный ввод. Пожалуйста, выберите действие от 1 до 9.")



