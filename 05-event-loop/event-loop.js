// callback queue
setTimeout(() => {
    console.log('first');
}, 0)
// micro task queue
const promise = Promise.resolve('Promise!');
promise.then(value => console.log('promise value is ', value));

console.log('second')