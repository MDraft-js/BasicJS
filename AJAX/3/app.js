//https://jsonplaceholder.typicode.com/

const myHttp = http();
const btn = document.querySelector('.btn-get-posts');
const btnAddPost = document.querySelector('.btn-add-posts');
const container = document.querySelector('.container');

function http() {
    return {
        GET({url} = {}, cb) {
            try {
                const xhr = new XMLHttpRequest();
                // console.log(xhr);
                xhr.open('GET', url);
                xhr.addEventListener('load', () => {
                    console.log('request loaded');
                    //console.log(xhr.responseText);
                    if (Math.floor(xhr.status / 100) !== 2) {
                        cb(`Error. Status Code: ${xhr.status}`, xhr)
                        return;
                    }
                    const response = JSON.parse(xhr.responseText);
                    cb(null, response);
                });
            
                xhr.addEventListener('error', () => {
                    cb(`Error. Status Code: ${xhr.status}`, xhr);
                });
            
                xhr.send();
            } catch (error) {
                cb(error);
            }
        },
        POST(url, body, headers, cb) {
            try {
                const xhr = new XMLHttpRequest();
                // console.log(xhr);
                xhr.open('POST', url);
                xhr.addEventListener('load', () => {
                    console.log('request loaded');
                    if (Math.floor(xhr.status / 100) !== 2) {
                        cb(`Error. Status Code: ${xhr.status}`, xhr);
                        return;
                    }
                    const response = JSON.parse(xhr.responseText);
                    cb(null, response);
                });
                
                Object.entries(headers).forEach(([key, value]) => {
                    xhr.setRequestHeader(key, value);
                })

                xhr.addEventListener('error', () => {
                    cb(`Error. Status Code: ${xhr.status}`, xhr);
                });
            
                xhr.send(JSON.stringify(body));
            } catch (error) {
                cb(error);
            }
        },
    };
}

function createPost(body, cb) {
    const xhr = new XMLHttpRequest();
    // console.log(xhr);
    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
    xhr.addEventListener("load", () => {
        console.log('request loaded');
        //console.log(xhr.responseText);
        const response = JSON.parse(xhr.responseText);
        cb(response);
    });
    
    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");

    xhr.addEventListener("error", () => {
        console.log('error request');
    });
    
    xhr.send(JSON.stringify(body));
} 

function cardTemplate(post) {
    const card = document.createElement('div');
            card.classList.add('card');
            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');
            const title = document.createElement('h5');
            title.classList.add('card-title');
            title.textContent = post.title;
            const article = document.createElement('h5');
            article.classList.add('card-text');
            article.textContent = post.body;
            cardBody.appendChild(title);
            cardBody.appendChild(article);
            card.appendChild(cardBody);
            return card;
}

function renderposts(response) {
    const fragment = document.createDocumentFragment();
        response.forEach(post => {
            const card = cardTemplate(post);
            fragment.appendChild(card);
        });
        container.appendChild(fragment);
}  

btn.addEventListener('click', event => {
    myHttp.GET( {url: 'https://jsonplaceholder.typicode.com/posts'}, (err, response) => { 
    renderposts(response);
    });
}) 

btnAddPost.addEventListener('click', event => {
    const NewPost = {
        title: 'Kek',
        body: 'bar',
        userId: 1,
    };
    
    createPost(NewPost, response => {
        const card = cardTemplate(response);
        console.log(card);
        container.insertAdjacentElement('afterbegin', card);
    });
});

// function getpost(cb) {
//     const xhr = new XMLHttpRequest();
//     // console.log(xhr);
//     xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
//     xhr.addEventListener("load", () => {
//         console.log('request loaded');
//         //console.log(xhr.responseText);
//         const response = JSON.parse(xhr.responseText);
//         cb(response);
//     });
    
//     xhr.addEventListener("error", () => {
//         console.log('error request');
//     });
    
//     xhr.send();
// }




// function MyHttpRequest({ method, url } = {}, cb) {
//     try {
//         const xhr = new XMLHttpRequest();
//     // console.log(xhr);
//     xhr.open(method, url);
//     xhr.addEventListener("load", () => {
//         console.log('request loaded');
//         //console.log(xhr.responseText);
//         if (Math.floor(xhr.status / 100) !== 2) {
//             cb(`Error. Status Code: ${xhr.status}`, xhr)
//             return;
//         }
//         const response = JSON.parse(xhr.responseText);
//         cb(null, response);
//     });
    
//     xhr.addEventListener("error", () => {
//         cb(`Error. Status Code: ${xhr.status}`, xhr);
//     });
    
//     xhr.send();
//     } catch (error) {
//         cb(error);
//     }
// }

// MyHttpRequest({ method: 'GET', url: 'https://jsonplaceholder.typicode.com/posts', }, (err, res) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(err, res);
    
// })

// myHttp.POST('https://jsonplaceholder.typicode.com/posts',
//     {
//     title: 'Kek',
//     body: 'bar',
//     userId: 1,
//     },
//     { "Content-type": "application/json"},
//     (err, res) => {
//         console.log(err, res);
//     },
// );