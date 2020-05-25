// Custom HTTP Module
function customHttp() {
    return {
        GET(url, cb) {
            try {
                const xhr = new XMLHttpRequest();
                xhr.open('GET', url);
                xhr.addEventListener('load', () => {
                    console.log('request loaded');
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
                
                // xhr.header("Access-Control-Allow-Origin", "*");
                // xhr.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                // xhr.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
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

// Init http module
const http = customHttp();

http.GET('https://jsonplaceholder.typicode.com/posts', (err, res) => {
    if (err) {
        console.log("error: ", err);
        return;
    }
    http.GET('https://jsonplaceholder.typicode.com/comments?postId=1', (err, res) => {
        if (err) {
            console.log("error: ", err);
            return;
        }
        http.GET('https://jsonplaceholder.typicode.com/users/1', (err, res) => {
            if (err) {
                console.log("error: ", err);
                return;
            }
            // console.log('Уры');
            
        })
    })
})

function getposts(id) {
    return new Promise((resolve, reject) => {
        http.GET('https://jsonplaceholder.typicode.com/posts/1', (err, res) => {
            if (err) {
                reject(err);
            };
            resolve(res);
        });
    });
};

function getpostsComments(pc) {
        const id = pc;
        return new Promise((resolve, reject) => {
            http.GET(`https://jsonplaceholder.typicode.com/comments?postId=${id}`, (err, res) => {
                if (err) {
                    reject(err);
                };
                resolve({ pc, comments: res });
            })
        });
    };

    function getUser() {
        return new Promise((resolve, reject) => {
            http.GET('https://jsonplaceholder.typicode.com/users/1', (err, res) => {
                if (err) {
                    reject(err);
                };
                resolve(res);
            });
        });
};
    
getposts()
    .then(pc => getpostsComments(pc))
    .then(user => getUser())
    .then(obj => console.log(obj))
    .catch(err => console.log(err));