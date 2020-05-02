//https://jsonplaceholder.typicode.com/

function getpost(cb) {
    const xhr = new XMLHttpRequest();
    // console.log(xhr);
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xhr.addEventListener("load", () => {
        console.log('request loaded');
        //console.log(xhr.responseText);
        const response = JSON.parse(xhr.responseText);
        cb(response);
    });
    
    xhr.addEventListener("error", () => {
        console.log('error request');
    });
    
    xhr.send();
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

const btn = document.querySelector('.btn-get-posts');
const btnAddPost = document.querySelector('.btn-add-posts');
const container = document.querySelector('.container');
btn.addEventListener('click', event => {
    getpost(renderposts);
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