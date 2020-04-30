//Напишите функцию testNum, которая принимает число в качестве аргумента и возвращает Promise, 
//который проверяет, является ли значение меньше или больше значения 10.


var words = ['one', 'two', 'three'];

const makeAllClips = words => {

    return new Promise((resolve, reject) => {

        for (let i = 0; i < words.length; i++) {
            if (words[i].length > 0) {
                words[i] = words[i].toUpperCase();
            }
            //if (words[i].lenght >= 0) resolve(words[i].toUpperCase());    
            //reject ('Здесь нет символов')
        }
        console.log(words);
        resolve(words);

    })
};


function sortWords(words) {
    return new Promise((resolve, reject) => {
        words.sort();
        console.log(words);
        resolve(words);
    });
}


/*
function WordsType(result) {
    makeAllClips(result);
    sortWords(result);
    console.log(result);
}

WordsType(words);
*/

/*
makeAllClips(words).then(words => {
    console.log(words)
    }, 
    sortWords(words).then(words => { 
        console.log(words) 
    })
    );
*/

makeAllClips(words)
    .then(

        sortWords(words)
        .then()

    );

//sortWords (words).then( ( result ) => {
//   console.log( 'Белисимо:', result );
//} )
//.catch( ( error ) => {
//   console.log( 'Та бл..:', error );
//} )

//makeAllClips().finally( () => {
//  console.log('Видишь слова? Нет? ПЕРЕПИСЬІВАЙ');
//} );