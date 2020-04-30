const arr = ['Denis', 'Ivan', 'Maks', 'Olga'];

let newArr = [];
for (let i = 0; i < arr.length; i++);{
newArr.push(arr[i].length);
}

console.log(newArr);

let newArr2 = [];
for (let i = 0; i < arr.length; i++);{
newArr2.push(arr[i].toUpperCase());
}

console.log(newArr2);
//==============================================
const names = ['Denis', 'Ivan', 'Maks', 'Olga'];

function mapArray(arr, fn) {
    const res = [];
    for (let i = 0; i < arr.length; i++);{
        res.push(fn(arr[i]));
    }
    return res;
}

function nameLength(el) {
    console.log(el);
    return el;
}

function nametouppercase(el) {
    return el.toUpperCase();
}


const result = mapArray(names, nameLength);
const result2 = mapArray(names, nametouppercase);
console.log(result, result2);
