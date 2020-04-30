//var option = document.getElementById('city').getElementsByTagName('option');
/*for (let i = 0; i < option.length; i++) {
    if (option[i].selected && option[i].value == 'Выберите страну') {
        null;
    }
    if (option[i].selected && option[i].value == 'Украина') {
        alert('Работает как надо!');
    }
}*/


var country = document.getElementById('city');
country.addEventListener("click", event => {
    for (let i = 0; i < country.length; i++) {
        if (country[i].selected && country[i].value == 'Выберите страну') {
            let ua = document.getElementById('Ukrain');
            let ru = document.getElementById('Russian');
            let an = document.getElementById('Anglia');
            ua.style.display = "none";
            ru.style.display = "none";
            an.style.display = "none";
        }
    };
});

var country = document.getElementById('city');
country.addEventListener("click", event => {
    for (let i = 0; i < country.length; i++){
        if (country[i].selected && country[i].value == 'Украина') {
            //alert('Работает как надо!');
            let ua = document.getElementById('Ukrain');
            let ru = document.getElementById('Russian');
            let an = document.getElementById('Anglia');
            ua.style.display = "block";
            ru.style.display = "none";
            an.style.display = "none";
        }
    };
    });
    
    var country = document.getElementById('city');
country.addEventListener("click", event => {
    for (let i = 0; i < country.length; i++){
        if (country[i].selected && country[i].value == 'Россия') {
            //alert('Работает как надо!');
            let ua = document.getElementById('Ukrain');
            let ru = document.getElementById('Russian');
            let an = document.getElementById('Anglia');
            ua.style.display = "none";
            ru.style.display = "block";
            an.style.display = "none";
        }
    };
});
    
var country = document.getElementById('city');
country.addEventListener("click", event => {
    for (let i = 0; i < country.length; i++){
        if (country[i].selected && country[i].value == 'Англия') {
            //alert('Работает как надо!');
            let ua = document.getElementById('Ukrain');
            let ru = document.getElementById('Russian');
            let an = document.getElementById('Anglia');
            ua.style.display = "none";
            ru.style.display = "none";
            an.style.display = "block";
        }
    };
    });

/*
var country = document.getElementById('city');
country.addEventListener("click", event => {
    for (let i = 0; i < country.length; i++){
        if (country[i].selected && country[i].value == 'Украина') {
            //alert('Работает как надо!');
            let ua = document.getElementById('Ukrain');
            ua.style.display = "block";
        }
        else (country[i].selected && country[i].value != 'Украина') 
            let ua = document.getElementById('Ukrain');
            ua.style.display = "none";
    };
    });
*/