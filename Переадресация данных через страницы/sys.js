//browser.family	Имя браузера
//browser.name	Имя браузера и его версия
//browser.version	Полная версия браузер
//browser.major	Основной номер версии браузера
//browser.minor	Дополнительный номер версии браузера
//browser.patch	Номер патча браузера
//device.family	Имя устройства
//device.name	Имя устройства и версия
//device.version	Полная версия устройства
//device.major	Основной номер версии устройства
//device.major	Дополнительный номер версии устройства
//device.patch	Номер патча устройства
//device.type	Тип устройства (например, "Desktop" или "Mobile")
//device.manufacturer	Производитель устройства
//os.family	Название операционной системы
//os.name	Полне имя операционной системы
//os.version	Полная версия операционной системы
//os.major	Основной номер версии операционной системы
//os.minor	Дополнительный номер версии операционной системы
//os.patch	Номер патча операционной системы

    var user = detect.parse(navigator.userAgent);
    //console.log(user);
    let regexp = /\w+/g;
    // без флага g свойство lastIndex игнорируется
    regexp.lastIndex = 36;
     // ищем с 5-й позиции (т.е с запятой и далее)
    //console.log(regexp.exec(navigator.userAgent));
    
    var usos = user.os.family;
    var usbrws = user.browser.family;
    var chrm = 'Chrome';
    var frfx = 'Firefox';
    var InE = 'Internet Explorer';
    var opr = 'Opera';
    var sfr = 'Safari';
    var li = document.getElementsByTagName('li')
    document.getElementById('input 1').value = usos;
    document.getElementById('input 2').value = regexp.exec(navigator.userAgent);
    
    //console.log(usos, usbrws)
    //console.log(li);

    if (usbrws == chrm) {
      console.log('Хром отработал!')
      let change = document.querySelector('li.Chrome')
      console.log(change);
      change.style.backgroundColor = "green";
    }
    if (usbrws == frfx) {
      console.log('Лис отработал)')
      let change = document.querySelector('li.Firefox')
      console.log(change);
      change.style.backgroundColor = "green";
    }
    if (usbrws == InE) {
      console.log('древнИй грЕк отработал!')
      let change = document.querySelector('li.IE')
      console.log(change);
      change.style.backgroundColor = "green";
    }
    if (usbrws == opr) {
      console.log('Опера сработал!')
      let change = document.querySelector('li.Opera')
      console.log(change);
      change.style.backgroundColor = "green";
    }
    if (usbrws == sfr) {
      console.log('Мажори..')
      let change = document.querySelector('li.Safari')
      console.log(change);
      change.style.backgroundColor = "green";
    }

    //$.getJSON('http://ipinfo.io', function(data){
      //console.log(data);
    //});

/* Не рабочее решение
  switch (usbrws) {
  case 1: 'Chrome'
    console.log('Отработал 1')
    break;
  case 2: 'Firefox'
  console.log('Отработал 1')
    break;
  case 3: 'Internet Explorer'
    break;
  case 4: 'Opera'
    break;
  case 5: 'Safari'
    break;
}
*/

/* Подготовленный вывод данных useragent
console.log(user.browser.family);
console.log(user.browser.name);
console.log(user.browser.version);
console.log(user.browser.major);
console.log(user.browser.minor);
console.log(user.browser.patch);
console.log(user.device.family);
console.log(user.device.name);
console.log(user.device.version);
console.log(user.device.major);
console.log(user.device.major);
console.log(user.device.patch);
console.log(user.device.type);
console.log(user.device.manufacturer);
console.log(user.os.family);
console.log(user.os.name);
console.log(user.os.version);
console.log(user.os.major);
console.log(u ser.os.minor);
console.log(user.os.patch);
*/