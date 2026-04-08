let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("The operation was successful.");
    } else {
        reject("The operation failed.");
    } 
});
promise.then(result => {
    console.log(result);
}).catch(error => {
    console.error(error);
});

async function asyncFunction() 
{
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    let data = await response.json();
    console.log(data);
}
asyncFunction();

fetch("https://jsonplaceholder.typicode.com/posts/1").then(response)