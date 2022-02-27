const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    reject()
    setTimeout(resolve, 100, 'foo');
});

Promise.allSettled([promise1, promise2, promise3]).then(values => {
    console.log(values);
});