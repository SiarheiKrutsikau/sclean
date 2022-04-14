let memory = {
    Metr: 10, //стоимость 1м2
    TypeUborki: '', // тип уборки
    TypePlace: '', // общая площадь
    ValueRed: 0, // цена за площадь
    ValueOption: 0, // цена по типу
    Result: 0, // общая сумма
    Name: '', // имя
    Number: 0 // номер телефона
};

//первоначальный расчет
function firsData() {
    ztxt = document.getElementById('txt');
    zuresult = document.getElementById('result');
    zft = document.getElementById('ft');
    txtP = document.getElementById('txtPhone');
    txtN = document.getElementById('txtName');
    formout = document.getElementById('formout');
    outresult = document.getElementById('outresult');
    select = document.querySelector('select');
}
firsData();

//option
indexSelect = select.selectedIndex;
memory.ValueOption = select.querySelectorAll('option')[indexSelect].value;
memory.TypeUborki = select.querySelectorAll('option')[indexSelect].innerHTML;

//red
memory.ValueRed = document.getElementById('plan1').value * memory.Metr;
memory.TypePlace = document.getElementById('plan1').value;

//сумма
memory.Result = Number(memory.ValueRed) + Number(memory.ValueOption);
zuresult.innerHTML = memory.Result;

//обработка нажатия кнопок на экране
document.addEventListener("click", function (event) {
    var f = event.target.id;
    if (f == 'txt') {
        let x = document.getElementsByClassName('form_radio');

//находит элемент
        let y = document.querySelector('input[name="square"]:checked');
        if (y) y.checked = false;

//        получение коллекции по имени класса
        z = document.getElementsByClassName('form_text');

//перебор коллекции
        for (i = 0; i < z.length; i++) {
            z[i].style.background = '#ffe0a6';
        }
        ztxt.style.background = '#ffe0a6';
    }
    if (f == 'plan1' || f == 'plan2' || f == 'plan3') {
        ztxt.style.background = 'white';
        zft.style.background = 'white';
        memory.ValueRed = document.getElementById(f).value * memory.Metr;
        memory.TypePlace = document.getElementById(f).value;
    }
    if (f == 'formout') {
        out();
    }
    if (document.querySelector('select')) {
        indexSelect = select.selectedIndex;
        memory.ValueOption = select.querySelectorAll('option')[indexSelect].value;
        memory.TypeUborki = select.querySelectorAll('option')[indexSelect].innerHTML;

//общий подсчет
        memory.Result = Number(memory.ValueRed) + Number(memory.ValueOption);
        zuresult.innerHTML = memory.Result;
    }
    if (f == 'form-price')
        formTwo();
});

//потеря фокуса
document.addEventListener("focusout", function (event) {
    var f = event.target.id;
    if (f == 'txt' && ztxt.value != 0) {

//        if (ztxt.value == 0)
        memory.ValueRed = ztxt.value * memory.Metr;
        memory.TypePlace = document.getElementById(f).value;
        memory.Result = Number(memory.ValueRed) + Number(memory.ValueOption);
        zuresult.innerHTML = memory.Result;
        ztxt.blur();
    } else if (f == 'txt') {
        beackV();
    }
    if (f == 'txtName' && txtN.value != 0) {
        zapName();
    }
    if (f == 'txtPhone' && txtP.value != 0) {
        zapPhone(txtP.value);
    }
});

//срабатывние Enter
document.addEventListener("keydown", function (event) {
    txtP = document.getElementById('txtPhone');
    f = event.target.id;
    if (event.key.search(/[0-9]/) && event.key != 'Enter' && f == 'txt' && event.key != 'Backspace' && event.key != 'ArrowLeft' && event.key != 'ArrowRight' && event.key != 'ArrowUp' && event.key != 'ArrowDown') {
        event.preventDefault();
    }
    if (event.key.search(/[\-\+{1}\)\(\d\s]/) && event.key != 'Enter' && f == 'txtPhone' && event.key != 'Backspace' && event.key != 'ArrowLeft' && event.key != 'ArrowRight' && event.key != 'ArrowUp' && event.key != 'ArrowDown') {
        event.preventDefault();
    }
    if (f == 'txt' && event.key == 'Enter' && ztxt.value != 0) {
        memory.ValueRed = ztxt.value * memory.Metr;
        memory.TypePlace = document.getElementById(f).value;
        memory.Result = Number(memory.ValueRed) + Number(memory.ValueOption);
        zuresult.innerHTML = memory.Result;
        ztxt.blur();
    } else if (f == 'txt' && event.key == 'Enter') {
        beackV();
    }
    if (f == 'txtPhone' && event.key == 'Enter') {
        txtP.blur();
        zapPhone(txtP.value);
    }
    if (f == 'txtName' && event.key == 'Enter') {
        txtN.blur();
        txtP.focus();
        zapName();
    }
    if (f == 'formout' && event.key == 'Enter') {
    }
});

//Новая форма
function formTwo() {
    let block = document.getElementById('del');
    stringForm2 = '<div id="del1"><div class="txtFormTwo"><input type="text" id="txtName" size="20" maxlength="20" placeholder="Ваше имя" value="" ></div><div ></div><div class="txtFormTwo" id="eror"><input type="text" id="txtPhone" size="20" maxlength="20" placeholder="Номер телефона" value=""></div> <div class="form_pice"><spain>Цена</spain><spain id="outresult"></spain><spain>₽</spain></div><div class="price-form" id="formout">Отправить</div></div>';

//вставка строки
    block.innerHTML = stringForm2;
    firsData();
    outresult.innerHTML = memory.Result;
}
function zapName() {
    str = txtN.value.replace(/<\/?[^>]+>/gi, '');
    memory.Name = str;
    return;
}
function zapPhone(parameters) {

//проверка значения  
    eror = document.getElementById('eror');
    reg = /^\+?[\-\)\(\d\s]*$/gm;
    answer = reg.test(parameters);
    if (answer && parameters.length > 10) {
        memory.Number = encodeURIComponent(parameters);
        eror.style.borderColor = '';
    } else {
        eror.style.borderColor = 'red';
    }
}

//добавление в memory
function beackV() {
    ztxt.blur();
    ztxt.style.background = 'white';
    zft.style.background = 'white';
    let y = document.getElementById('plan1');
    y.checked = 'on';
    memory.TypePlace = document.getElementById('plan1').value;
    memory.ValueRed = document.getElementById('plan1').value * memory.Metr;
    memory.Result = Number(memory.ValueRed) + Number(memory.ValueOption);
    zuresult.innerHTML = memory.Result;
}
function out() {
    if (memory.Name && memory.Number) {
        let outmemory = 'memory=' + JSON.stringify(memory);
        text = WriteUser(outmemory, 'cont');
    }
}

//создание нового объекта XMLHttpRequest
function CreateRequest()
{
    var Request = false;
    if (window.XMLHttpRequest)
    {

//Gecko-совместимые браузеры, Safari, Konqueror
        Request = new XMLHttpRequest();
    } else if (window.ActiveXObject)
    {
        
//Internet explorer
        try
        {
            Request = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (CatchException)
        {
            Request = new ActiveXObject("Msxml2.XMLHTTP");
        }
    }
    if (!Request)
    {
        alert("Невозможно создать XMLHttpRequest");
    }
    return Request;
}

//Запрос к серверу
/*
 Функция посылки запроса к файлу на сервере
 r_method  - тип запроса: GET или POST
 r_path    - путь к файлу
 r_args    - аргументы вида a=1&b=2&c=3...
 r_handler - функция-обработчик ответа от сервера
 */
function SendRequest(r_method, r_path, r_args, r_handler)
{
//Создаём запрос
    var Request = CreateRequest();

//Проверяем существование запроса еще раз
    if (!Request)
    {
        return;
    }

//Назначаем пользовательский обработчик
    Request.onreadystatechange = function ()
    {

//Если обмен данными завершен
        if (Request.readyState == 4)
        {
            if (Request.status == 200)
            {

//Передаем управление обработчику пользователя
                r_handler(Request);
            } else
            {

//Оповещаем пользователя о произошедшей ошибке
                window.console.log('Произошла ошибка загрузки');
            }
        } else
        {
//Оповещаем пользователя о загрузке       
            window.console.log('Загрузка произошла успешно');
        }
    }

//Проверяем, если требуется сделать GET-запрос
    if (r_method.toLowerCase() == "get" && r_args.length > 0)
        r_path += "?" + r_args;

//Инициализируем соединение
    Request.open(r_method, r_path, true);
    if (r_method.toLowerCase() == "post")
    {

//Если это POST-запрос
//Устанавливаем заголовок
        Request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");

//Посылаем запрос
        Request.send(r_args);
    } else
    {
//Если это GET-запрос
//Посылаем нуль-запрос
        Request.send(null);
    }
}
function WriteUser(filename, container)
{

//Создаем функцию обработчик
    var Handler = function (Reqyest)
    {
        let block = document.getElementById('del1');

//обработка полученных данных
        if (Reqyest.responseText == "error") {
            strings = '<div class="center"><div id="del"><div class="blago">Наш номер телефона:</div><div class="blago">+79818591405</div></div></div>';
            document.getElementById(container).innerHTML = strings;
            block.insertAdjacentHTML("beforebegin", strings);
            window.console.log('Техническая ошибка на сервере');
        } else
        {
            strings = '<div class="center"><div id="del"><div class="blago">Bаша заявка отправлена!</div><div class="blago">Мы скоро Вам перезвоним!</div></div></div>';
            block.insertAdjacentHTML("beforebegin", strings);
            block.remove();
        }
        setTimeout(function () {
            block = document.getElementById('del');
            strings = '<div id="del"> <div class="select"> <select class="select-one" size="1"> <option disabled>Выберите тип уборки</option> <option selected value="1000">Стандартная уборка</option> <option id="dd" value="2000">Генеральная уборка</option> <option value="3000">Послестроительная уборка</option> </select> </div> <div class="rad" > <div class="form_radio"> <input type="radio" id="plan1" name="square" checked value="55"> <label for="plan1">55м<sup>2</sup></label> <!--<span class="title-for-radi0" for="plan1">55 м<sup>2</sup></span>--> </div> <div class="form_radio"> <input type="radio" id="plan2" name="square" value="75"> <label for="plan2">75м<sup>2</sup></label> <!--<span class="title-for-radio">75 м<sup>2</sup></span>--> </div> <div class="form_radio"> <input type="radio" id="plan3" name="square" value="85"> <label for="plan3">85м<sup>2</sup></label> <!--<span class="title-for-radio">85 м<sup>2</sup></span>--> </div> <div class="form_text" id="ft"> <input type="text" id="txt" size="2" maxlength="5" placeholder="______" value=""> </div> </div> <div class="form_pice"> <spain>Цена</spain> <spain>от</spain> <spain id="result"></spain> <spain>₽</spain> </div> <div class="price-form" id="form-price">Заказать</div></div>'
            block.innerHTML = strings;
            firsData();
            indexSelect = select.selectedIndex;
            memory.ValueOption = select.querySelectorAll('option')[indexSelect].value;
            memory.TypeUborki = select.querySelectorAll('option')[indexSelect].innerHTML;

//red
            memory.ValueRed = document.getElementById('plan1').value * memory.Metr;
            memory.TypePlace = document.getElementById('plan1').value;


//сумма
            memory.Result = Number(memory.ValueRed) + Number(memory.ValueOption);
            zuresult.innerHTML = memory.Result;
        }, 4000);
    };

//Отправляем запрос
    SendRequest("POST", 'receivingdata.php', filename, Handler);
}