$(document).ready(function() {
    $('#generateBtn').on('click', function() {
        generateRandomString();
    });

    function generateRandomString() {
        const length = parseInt($('#stringLength').val()); // Длина строки
        const useDigits = $('#useDigits').is(':checked'); // Включить цифры
        const useUppercase = $('#useUppercase').is(':checked'); // Верхний регистр
        const useLowercase = $('#useLowercase').is(':checked'); // Нижний регистр

        // Набор символов
        let chars = '';
        if(useDigits) chars += '0123456789';
        if(useUppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if(useLowercase) chars += 'abcdefghijklmnopqrstuvwxyz';

        // Генерируем строку
        let resultStr = '';
        for(let i = 0; i < length; i++) {
            resultStr += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        // Выводим результат
        $('#result').text(resultStr);
    }
});