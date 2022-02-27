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

async function sequentialStart() {
    const hello = await resolveHello();
    console.log(hello);
    const world = await resolveWorld();
    console.log(world);
}

sequentialStart().then();
