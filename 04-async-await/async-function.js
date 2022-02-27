function greet() {
    return "hello";
}

console.log(greet());

async function greetAsync() {
    return "hello Async";
}

console.log(greetAsync());
greetAsync().then(value => {
    console.log(value);
})

async function greetAsyncPromise() {
    return Promise.resolve("hello");
}

console.log(greetAsyncPromise());
greetAsyncPromise().then(value => console.log(value))
