function resolveHello() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('hello');
        }, 2000);
    });
}

function resolveWorld() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('world');
        }, 1000);
    });
}

function parallelStart() {
    Promise.all([
        (async () => console.log(await resolveHello()))(),
        (async () => console.log(await resolveWorld()))()
    ]).then();
}

parallelStart();