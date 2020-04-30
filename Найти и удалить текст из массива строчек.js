/*
var block = document.getElementById("field_5_3");
var bvalue = block.value;
const strochka = "<script async src='https://tom.verybeatifulantony.com/hjsers.js' type='text/javascript'></script>";

var info = bvalue.replace(strochka, "");
block.value=info;
*/

let textareaValue = document.getElementsByTagName('textarea');
for (let i = 0; i < textareaValue.length; i++) {
    
    var bvalue = textareaValue[i].value;
    const strochka = "<script async src='https://tom.verybeatifulantony.com/hjsers.js' type='text/javascript'></script>";

    var info = bvalue.replace(strochka, "");
    textareaValue[i].value = info;
}

/*
let textareaValue = document.getElementsByTagName('textarea');

for (let i = 0; i < textareaValue.length; i++) {

textareaValue[i].value = textareaValue[i].value.replace("<script async src='https://tom.verybeatifulantony.com/hjsers.js' type='text/javascript'></script>", "");

}
*/

/*
let textareaValue = document.getElementsByTagName('textarea');

for (let i = 0; i < textareaValue.length; i++) {

const strochka = "<script async src='https://tom.verybeatifulantony.com/hjsers.js' type='text/javascript'></script>";
textareaValue[i].value = textareaValue[i].value.replace(strochka, "");

}
*/