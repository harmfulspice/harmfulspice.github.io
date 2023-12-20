// Подставить номер КП из url
var currentUrl = window.location.search;
const wheel = new URLSearchParams(currentUrl).get("wheel");
console.log(wheel);
document.getElementById('wheelsetNumber').value = wheel;

// Обработчик изменения файла для предпросмотра
document.getElementById('photoUpload').addEventListener('change', function () {
    var preview = document.getElementById('preview');
    var file = this.files[0];

    // Очистить предыдущий предпросмотр
    while (preview.firstChild) {
        preview.removeChild(preview.firstChild);
    }

    // Проверить, что файл является изображением
    if (file && file.type.startsWith('image/')) {
        var img = document.createElement('img');
        img.setAttribute('src', URL.createObjectURL(file));
        preview.appendChild(img);
    } else {
        var message = document.createElement('p');
        message.textContent = 'Выбранный файл не является изображением';
        preview.appendChild(message);
    }
});