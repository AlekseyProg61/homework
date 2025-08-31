document.addEventListener('DOMContentLoaded', () => {
    const field = document.getElementById('football-field');
    const ball = document.getElementById('ball');

    // Размеры поля
    const fieldWidth = field.clientWidth;
    const fieldHeight = field.clientHeight;

    // Размер мяча
    const ballSize = 100;

    // Обрабатываем клик по полю
    field.addEventListener('click', (event) => {
        // Координаты клика относительно края поля
        const x = event.offsetX;
        const y = event.offsetY;

        // Центр мячика ставим в точку клика
        const targetX = x - ballSize / 2;
        const targetY = y - ballSize / 2;

        // Ограничиваем движение мяча рамками поля
        const finalX = Math.max(Math.min(targetX, fieldWidth - ballSize), 0);
        const finalY = Math.max(Math.min(targetY, fieldHeight - ballSize), 0);

        // Перемещение мяча с анимацией
        ball.style.transform = `translate(${finalX}px, ${finalY}px)`;
    });
    console.log(field)
});