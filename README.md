# BasicJS [![Build Status](https://travis-ci.org/AminoJS/Amino.JS.svg?branch=master)](https://github.com/MDraft-js/BasicJS)
> Заметки базовых знаний JavaScript.
>
> В README.md указаны не все методы, а лишь определённые заметки.
>
> By **[Hatsune Mikun](https://github.com/Hatsune-Mikun)**

# *Глобальные методы и глобальные функции*

### URI
```
new URL('https://hmtai.herokuapp.com/v2/neko')
```
```js
{
    hash: "",
    host: "hmtai.herokuapp.com",
    hostname: "hmtai.herokuapp.com",
    href: "https://hmtai.herokuapp.com/v2/neko",
    origin: "https://hmtai.herokuapp.com",
    password: "",
    pathname: "/v2/neko",
    port: "",
    protocol: "https:",
    search: "",
    searchParams: URLSearchParams {},
    username: "",
}
```

#### URI encoded/decoded Component

```js
const uri = 'https://mozilla.org/?x=шеллы';
const encoded = encodeURI(uri) // https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B
decodeURI(encoded) // https://mozilla.org/?x=шеллы
```

#### URISearchParams
```js
const uri = 'https://domain.com/';
const params = {
    query: 123,
    filter: 'example',
}

const url = new URL(uri);
url.search = new URLSearchParams(params);
// or
url.searchParams.set('query', params.query)
url.searchParams.set('filter', params.filter)
```

### class
```js
class test {
    constructor(name) {
        this.name = name;
    }

    #name() {
        //code here//
    }

    name() {
        //code here//
    }

    static name(value) {
        //code here//
    }
}
const test1 = new test('Mikun')
const test2 = test('Mikun')
```

### regexp
> #### [Больше можно найти здесь](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
Основные сокращения:
<br>\w = Сопоставляется с любым алфавитно-цифровым символом из базового латинского алфавита, включая символ подчёркивания. Эквивалентен набору символов [A-Za-z0-9_].
<br>\W = Сопоставляется с любым символом из базового латинского алфавита, не являющимся символом, из которых состоят слова. Эквивалентен набору символов [^A-Za-z0-9_].
<br>. = (Точка, десятичная запятая) сопоставляется с любым символом за исключением символов новой строки: \n, \r, \u2028 или \u2029.
<br>\d = Сопоставляется с символом цифры в базовом латинском алфавите. Эквивалентен набору символов [0-9].
<br>\D = Сопоставляется с любым символом, который не является цифрой в базовом латинском алфавите. Эквивалентен набору символов [^0-9].
<br>\s = Сопоставляется с одиночным пробельным символом, который включает в себя пробел, табуляцию, подачу страни
<br>\S = Сопоставляется с одиночным символом, не являющимся пробельным. Эквивалентен набору символов
<br>\n = Сопоставляется с символом перевода строки.
<br>[xyz] = Набор символов. Сопоставляется с любым из заключённых в квадратные скобки символов. С помощью дефиса вы можете определить диапазон символов.
<br>[^xyz] = Отрицательный или дополнительный набор символов. То есть он сопоставляется со всеми символами, что не заключены в квадратные скобки. С помощью дефиса вы можете определить диапазон символов.
<br>^ = Сопоставляется c началом ввода. Если установлен флаг многострочности, также сопоставляется с позицией сразу за символом переноса строки.
<br>​$ = Сопоставляется c концом ввода. Если установлен флаг многострочности, также сопоставляется с позицией сразу перед символом переноса строки.
<br>\b = Сопоставляется с границей слова нулевой ширины, например с позицией между буквой и пробелом(не работает для кириллицы)
<br>x* = Сопоставляется с предшествующим элементом x ноль или более раз. 
<br>x+ = Сопоставляется с предшествующим элементом x один или более раз. Эквивалентен квантификатору {1,}
<br>? = Обозначает необязательный предыдущий символ
<br>(?<=y) = Должно быть в начале совпадения 
<br>(?<!y) = Не должно быть в начале совпадения 
<br>(?=y) = Должно быть на конце совпадения
<br>(?!y) = Не должно быть на конце совпадения
<br>x|y = Равносильно || в JS
<br>x{1, 2} = От 1 до 2 символов
<br>x{1,} = От 1 до infinity

### Console Text Coloring
```js
let rbg = '0;255;255'
`\x1b[38;2;${rgb}m` // Font
`\x1b[38;0m` // Reset Font
`\x1b[40;2;${rbg}m` // Background
`\x1b[40;0m` // Rest backgroud
`\x1b[0m` // Reset All
```


Различия между краткой формой RegExp // и полной new RegExp() лишь в том, что:
```js
let str = 'ab+c'
/ab+c/i;
new RegExp(`${​str}`, 'i');
```
Это возможность использовать шаблонные строки

<br>Флаги:
<br>g = глобальное сопоставление
<br>i = игнорирование регистра

### Math
> #### Объект Math является встроенным объектом, хранящим в своих свойствах и методах различные математические константы и функции. Объект Math не является функциональным объектом.
> #### Math не работает с числами типа BigInt.

#### abs()
> #### Метод Math.abs() возвращает абсолютное значение числа. то есть
```js
Math.abs('-1');     // 1
Math.abs(-2);       // 2
Math.abs(null);     // 0
Math.abs('');       // 0
Math.abs([]);       // 0
Math.abs([2]);      // 2
Math.abs([1,2]);    // NaN
Math.abs({});       // NaN
Math.abs('string'); // NaN
Math.abs();         // NaN
```

#### pow()
> #### Метод Math.pow() возвращает основание, возведённое в степень показатель, то есть, значение выражения основание^показатель 
```js
Math.pow(7, 2); // 49
```

#### max()
> #### Метод Math.max() возвращает наибольшее из нуля или более чисел.
```js
Math.max(10, 20);   //  20
Math.max(-10, -20); // -10
Math.max(-10, 20);  //  20
```

#### min()
> #### Метод Math.min() возвращает наименьшее из нуля или более чисел.
```js
var x = 10, y = -20;
var z = Math.min(x, y); // -20

let number = (value, min, max) => Math.max(Math.min(value, max), min)
```

#### sign()
> #### Метод Math.sign() возвращает знак числа, указывающий на то, является ли число отрицательным, положительным или нулём.
```js
Math.sign(3);     //  1
Math.sign(-3);    // -1
Math.sign('-3');  // -1
Math.sign(0);     //  0
Math.sign(-0);    // -0
Math.sign(NaN);   // NaN
Math.sign('foo'); // NaN
Math.sign();      // NaN
```

#### random()
> #### Метод Math.random() возвращает псевдослучайное число с плавающей запятой из диапазона [0, 1), то есть, от 0 (включительно) до 1 (но не включая 1), которое затем можно отмасштабировать до нужного диапазона. Реализация сама выбирает начальное зерно для алгоритма генерации случайных чисел; оно не может быть выбрано или сброшено пользователем.
```js
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3));
// expected output: 0, 1 or 2

console.log(getRandomInt(1));
// expected output: 0

console.log(Math.random());
// expected output: a number from 0 to <1
```

#### round()
> #### Метод Math.round() возвращает число, округлённое к ближайшему целому.
```js
// Вернёт значение 20
x = Math.round(20.49);

// Вернёт значение 21
x = Math.round(20.5);
```

#### floor()
> #### Метод Math.floor() - округление вниз. Округляет аргумент до ближайшего меньшего целого.
```js
Math.floor( 45.95); //  45
Math.floor(-45.95); // -46
```

### Intl&Date(but is toLocaleString)
> #### toLocaleString([locales[, options]])
```js
(123123).toLocaleString('ru', { currency: 'RUB', style: 'currency' }) // '123 123,00 ₽'
new Date().toLocaleString('ru') // 28.11.2021, 23:44:42
// --------------------
let date = new Date()
date.setMonth(date.getMonth() + 1) // Дата на месяц вперёд, также с минутами, часами, днями, годами.
```
> options for toLocaleString

| Key | Value |
| --- |  ---  |
| dateStyle | "full"\"long"\"medium"\"short" |
| timeStyle | "full"\"long"\"medium"\"short" |
| localeMatcher | "best-fit" (default)\"lookup"\timeZone |
| hour12 | false\true |
| hourCycle	| "h11"\"h12"\"h23"\"h24" |
| formatMatcher | "basic"\"best-fit" (default)\weekday	"long"\"short"\"narrow" |
| year | "2-digit"\"numeric" |
| month | "2-digit"\"long"\"narrow"\"numeric"\"short" |
| day | "2-digit"\"numeric" |
| hour | "2-digit"\"numeric" |
| minute | "2-digit"\"numeric" |
| second | "2-digit"\"numeric" |
| timeZoneName | "long"\"short" |


# *Объекты и хранение данных*

## Object
### Обязательно
---
### assign()
```js
var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

var obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, изменился и сам целевой объект.

var obj = Object.assign({...o1}, {...o2}, {...o3});
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1 }, целевой объект не изменился

```

### entries()
```js
var obj = { foo: "bar", baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

// массив как объект
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// массив как объект c random сортировкой ключей
var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(an_obj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

var obj = { foo: "bar", baz: 42 };
var map = new Map(Object.entries(obj));
console.log(map); // Map { foo: "bar", baz: 42 }

```

### fromEntries()
```js
const entries = new Map([
    ['foo', 'bar'],
    ['baz', 42]
]);
const obj = Object.fromEntries(entries);
console.log(obj) // Object { foo: "bar", baz: 42 }
```

### Дополнительно
---
###  hasOwnProperty() || hasOwn()
```js
o = new Object();
o.prop = 'существует';
o.hasOwnProperty('prop');             // вернёт true
o.hasOwnProperty('toString');         // вернёт false

// Замена => #### hasOwn()
```

### defineProperties()
```js
// Новые объекты являются расширяемыми. preventExtensions()
var empty = {};
Object.isExtensible(empty) // true

// Новый объект является расширяемым, так что он не заморожен freeze()
Object.isFrozen(empty) // false

// По умолчанию объекты не запечатаны seal()
Object.isSealed(empty) // false

// Поможет defineProperties
Object.defineProperties(empty, key, value)
```

### is()
```js
Object.is('foo', 'foo');     // true
Object.is(window, window);   // true

Object.is('foo', 'bar');     // false
Object.is([], []);           // false

var test = { a: 1 };
Object.is(test, test);       // true

Object.is(null, null);       // true

// Специальные случаи
Object.is(0, -0);            // false
Object.is(-0, -0);           // true
Object.is(NaN, 0/0);         // true
```

## Array
### Обязательно
---
### includes()
```js
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false
```

### push()
```js
var sports = ['футбол', 'бейсбол'];
var total = sports.push('американский футбол', 'плавание');

console.log(sports); // ['футбол', 'бейсбол', 'американский футбол', 'плавание']
console.log(total);  // 4
```

### shift()
> #### Метод shift() удаляет первый элемент из массива и возвращает его значение. Этот метод изменяет длину массива.

```js
var myFish = ['ангел', 'клоун', 'мандарин', 'хирург'];

console.log('myFish до: ' + myFish);
//myFish до: ангел,клоун,мандарин,хирург

var shifted = myFish.shift();

console.log('myFish после: ' + myFish);
//myFish после: клоун,мандарин,хирург

console.log('Удалён этот элемент: ' + shifted);
//Удалён этот элемент: ангел
```

### unshift()
> #### Метод unshift() добавляет один или более элементов в начало массива и возвращает новую длину массива.
```js
var arr = [1, 2];

arr.unshift(0); // результат вызова равен 3, новой длине массива
// arr равен [0, 1, 2]
```

### splice()
> #### Метод splice() изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые.
> array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

```js
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
const newAnimals = animals.splice() // Скопирует массив
// ---------------
arr.splice(arr.findIndex(obj => obj.id == '123'), 1)
```


### slice()
> #### Метод slice() возвращает новый массив, содержащий копию части исходного массива.
```js
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2)); // expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4)); // expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5)); // expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2)); // expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1)); // expected output: Array ["camel", "duck"]
```

### join()
```js
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"
```

### some()
> #### Метод some() проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции.
```js
const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => #### element % 2 === 0;

console.log(array.some(even)); // expected output: true
```

### reduce()
```js
const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => #### previousValue + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer)) // expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5)) // expected output: 15
```

### concat()
```js
var alpha = ['a', 'b', 'c'], numeric = [1, 2, 3];
var alphaNumeric = alpha.concat(numeric);
console.log(alphaNumeric); // Результат: ['a', 'b', 'c', 1, 2, 3]
```

### filter()
```js
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => #### word.length > #### 6);
console.log(result) // expected output: Array ["exuberant", "destruction", "present"]
```

### find()
```js
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.find(word => #### word.length > #### 6);
console.log(result) // expected output: "exuberant"
```

### findIndex()
```js
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.findIndex(word => #### word.length > #### 6);
console.log(result) // expected output: 3
```

### reverse()
```js
const array1 = ['one', 'two', 'three'];
console.log('array1:', array1) // expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed) // expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1) // expected output: "array1:" Array ["three", "two", "one"]
```

### sort()
> #### Метод sort() на месте сортирует элементы массива и возвращает отсортированный массив.

```js
var fruit = ['арбузы', 'бананы', 'Вишня'];
fruit.sort(); // ['Вишня', 'арбузы', 'бананы']

var scores = [1, 2, 10, 21];
scores.sort(); // [1, 10, 2, 21]

var things = ['слово', 'Слово', '1 Слово', '2 Слова'];
things.sort(); // ['1 Слово', '2 Слова', 'Слово', 'слово']
// В Unicode, числа находятся перед буквами в верхнем регистре,
// а те, в свою очередь, перед буквами в нижнем регистре.
```


### at()
> #### at()Метод принимает целое значение и возвращает элемент по этому индексу
> #### является заменой использования квадратных скобок, но это не значит, что это неправильно
```js
const array1 = [5, 12, 8, 130, 44];
array[0] // 5
array[1] // 12
array.at(5) // 5
array.at(1) // 12
// -------------
array.at(-1) // 44
array.at(-2) // 130
// -------------
array[array.length - 1]
array[array.length - 2]
```

### Дополнительно
---

### flat()
```js
var arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### from()
```js
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]
```

### isArray()
> #### Метод Array.isArray() возвращает true, если объект является массивом и false, если он массивом не является.

```js
// Все следующие вызовы вернут true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
// Малоизвестный факт: Array.prototype сам является массивом:
Array.isArray(Array.prototype);

// Все следующие вызовы вернут false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray("Array");
Array.isArray(true);
Array.isArray(false);
Array.isArray({ __proto__: Array.prototype });

// Лучше чем instanceof
```

### lastIndexOf()
```js
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
// expected output: 3

console.log(animals.lastIndexOf('Tiger'));
// expected output: 1
```

### of()
```js
Array.of(7);       // [7]
Array.of(1, 2, 3); // [1, 2, 3]
Array.of(undefined); // [undefined]

Array(7);          // массив с 7 пустыми слотами
Array(1, 2, 3);    // [1, 2, 3]
```

## Map
```js
const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
// expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// expected output: 97

console.log(map1.size);
// expected output: 3

map1.delete('b');

console.log(map1.size);
// expected output: 2
```

## Set
```js
var mySet = new Set();

mySet.add(1); // Set { 1 }
mySet.add(5); // Set { 1, 5 }
mySet.add(5); // Set { 1, 5 }
mySet.add("some text"); // Set { 1, 5, 'some text' }
var o = {a: 1, b: 2};
mySet.add(o);

mySet.add({a: 1, b: 2}); // переменная o связана с другим объектом, поэтому данная строка также сработает

mySet.has(1); // true
mySet.has(3); // false, 3 не было добавлено в set
mySet.has(5);              // true
mySet.has(Math.sqrt(25));  // true
mySet.has("Some Text".toLowerCase()); // true
mySet.has(o); // true

mySet.size; // 5

mySet.delete(5); // удаляет 5 из set
mySet.has(5);    // false, 5 было удалено

mySet.size; // 4, было удалено одно значение
console.log(mySet); // Set {1, 'some text', Object {a: 1, b: 2}, Object {a: 1, b: 2}}
```

## JSON
### parse()
> #### Метод JSON.parse() разбирает строку JSON, возможно с преобразованием получаемого в процессе разбора значения.


### stringify()
> #### Метод JSON.stringify() преобразует значение JavaScript в строку JSON.
