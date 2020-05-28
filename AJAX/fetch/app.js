// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => {
//         // console.log(response.json());
//         return response.json();
//     })
//     .then(posts => {
//         console.log(posts);
//     })
//     .catch(error => {
//         console.log(error);
//     });

function getPosts(id) {
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(post => resolve(post))
            .catch(err => reject(err));
    });
}

// getPosts(1).then(post => console.log(post))

function getPosts2(id) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
}
