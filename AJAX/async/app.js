async function getPosts(id) {
    //всегда возвращает Promise
    //Есть возможность использовать trycatch
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json());

    return response;
    //return [response1, response2]
}

// getPosts(1).then(data => {
//     console.log(data);
// })
//     .catch(err => {
//     console.log(err);
// })

(async function() {
    const [res1, res2] = await [getPosts(1), getPosts(2)];
    console.log(res1, res2);
})()