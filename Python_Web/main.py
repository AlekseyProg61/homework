from flask import Flask, render_template, flash, redirect, url_for, request

app = Flask(__name__, template_folder='templates')
app.secret_key = 'some_secret_key'  # секретный ключ нужен для сообщений

# Имитация БД пользователей
USERS_DB = {
    'admin': {'password': 'adminpass', 'role': 'Администратор'},
    'user': {'password': 'userpass', 'role': 'Пользователь'},
    'register':{'firstName':'Алексей'}
}

@app.route('/')
def home():
    """Главная страница"""
    return render_template('login.html')  # рендерим шаблон
@app.route('/success')
def success():
    # Страница успеха
    return render_template('success.html') 
@app.route('/task1')
def task1():
    """Страница задачи"""
    return render_template('task1.html')
@app.route('/task2')
def task2():
    return render_template('task2.html')
@app.route('/register', methods=['POST'])
def register():
    first_name = request.form['firstName']
    last_name = request.form['lastName']
    age = request.form['age']
    email = request.form['email']
    sex = request.form['sex']
    address = request.form['address']
    subscribe_newsletter = request.form.get('subscribeNewsletter', False)
    data = f""" Имя: {first_name}<br/> Фамилия: {last_name}<br/> Возраст: {age}<br/> Email: {email}<br/> Пол: {sex}<br/> Адрес доставки: {address}<br/> Подписаны на рассылку новостей: {'Да' if subscribe_newsletter else 'Нет'} """

    return render_template('display_data.html', user_data=data)

@app.route('/login', methods=['POST'])
def login():
    """Обработка формы авторизации"""
    username = request.form['username']
    password = request.form['password']

    # проверка существования пользователя
    user_data = USERS_DB.get(username)
    if user_data and user_data['password'] == password:
        role = user_data['role']
        flash(f'Привет {username}, Ваш уровень доступа — {role}')
        return redirect(url_for('success'))
    else:
        flash('Ошибка аутентификации! Проверьте ваши учетные данные.')
        return redirect(url_for('success'))

if __name__ == "__main__":
    app.run(debug=True)