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

async function concurrentStart() {
    const hello = resolveHello();
    const world = resolveWorld();
    console.log(await hello);
    console.log(await world);
}

concurrentStart().then();