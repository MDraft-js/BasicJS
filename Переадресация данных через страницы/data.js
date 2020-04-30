function invalid() {
    let input = document.getElementsByTagName('input');
    let submitButton = document.getElementById('btn');
    //submitButton.addEventListener("click", function send() {
    for (let i = 0; i < input.length; i++) {
        if (input[i].value.length < 1) {
            alert('Заполните все поля.');
            return false;
        }
    }
    //});

    let option = document.getElementsByTagName("option");
    let submitBtn = document.getElementById('btn');
    //submitBtn.addEventListener("click", function lng() {
    for (let i = 0; i < option.length; i++) {
        if (option[i].selected && option[i].value == 'Ничего') {
            alert("Вьіберите язьік");
            return false;
        }
    }
    //});

}

function lngcounting() {
    let option = document.getElementsByTagName("option");
    //let submitBtn = document.getElementById('btn');
    for (let i = 0; i < option.length; i++) {
        console.log(option[i].selected)
            // if (option[i].selected && option[i].value == 'Ничего') {
            //   alert("Вьіберите язьік");
            // }
    };

}

var url_string = window.location.href;
var url = new URL(url_string);
var n = url.searchParams.get('firstname')
var ln = url.searchParams.get('lastname')
var fn = url.searchParams.get('father')
var bd = url.searchParams.get('date')
var lng = url.searchParams.get('language')
console.log(n, ln, fn, bd, lng);

document.getElementById("input 1").value = n;
document.getElementById("input 2").value = ln;
document.getElementById("input 3").value = fn;
document.getElementById("input 4").value = bd;