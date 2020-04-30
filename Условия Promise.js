//Напишите функцию testNum, которая принимает число в качестве аргумента и возвращает Promise, 
//который проверяет, является ли значение меньше или больше значения 10.


const testNum =

    num => {

        return new Promise((resolve, reject) => {

            if (num > 10) resolve(num + ' больше!');

            reject(num + ' меньше!')


        })
    };


function testNum2(num) {

    return new Promise(function(resolve, reject) {

        if (num > 10) {
            return resolve(num + ' больше!');
        } else {
            return reject(num + ' меньше!')
        }

    })
};




testNum(9)

.then((result) => {
        console.log('promiseA success:', result);
    })
    .catch((error) => {
        console.log('promiseA error:', error);
    })
    .finally(() => {
        console.log('Расчет закончен');
    });