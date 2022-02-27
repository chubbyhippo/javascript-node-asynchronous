const promise1 = new Promise((resolve) => {
    setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve) => {
    setTimeout(resolve, 490, 'two');
});

Promise.race([promise1, promise2])
    .then(value => console.log(value));
