// Подставить номер КП из url
let tg = window.Telegram.WebApp
var currentUrl = window.location.search;
var wheel = new URLSearchParams(currentUrl).get("wheel");
console.log(wheel);
document.getElementById('wheelsetNumber').value = wheel;
tg.ready()
tg.expand()
sovp = 1;

// Обработчик для активации изменения номера КП
document.getElementById('gvcN').addEventListener('change', function () {
    document.getElementById('numberFact').removeAttribute("disabled");
    sovp = 1;
});

document.getElementById('gvcY').addEventListener('change', function () {
    document.getElementById('numberFact').setAttribute("disabled", "");
    document.getElementById('numberFact').setAttribute("required", "");
    sovp = 0;
});


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

// Обработка данных для отправки в телеграм
document.getElementById('submit').addEventListener('click', function() {
    var obod = document.getElementById('wheelDiameter').value;
    if (Number(obod) < 10 || Number(obod) > 99) {
        alert("Данные по ободу КП введены некорректно");
        return;
    }

    var greb = document.getElementById('flangeThickness').value;
    if (Number(greb) < 10 || Number(greb) > 99) {
        alert("Данные по гребню КП введены некорректно");
        return;
    }

    var bearing = document.getElementById('bearingType').value;
    var axle = document.getElementById('axisType').value;
    var form = document.getElementById('lastFormationDate').value;
    var formFactory = document.getElementById('lastMark').value;
    var status = document.getElementById('remontType').value;
    var relevance = document.getElementById('relevanceType').value;
    var kod = document.getElementById('kod').value;
    var srRem = document.getElementById('wheelDiameter').value;
    if (sovp == 1) {
        wheel = document.getElementById('wheelsetNumber').value
    }
    else{
        wheel = document.getElementById('numberFact').value
    }
    let dict = {
        obod: obod,
        greb: greb,
        bearing: bearing,
        axle: axle,
        form: form,
        formFactory: formFactory,
        status: status,
        relevance: relevance,
        kod: kod,
        srRem: srRem
    }
    console.log(dict)
    tg.sendData(JSON.stringify(dict));
});