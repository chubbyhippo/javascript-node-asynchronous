async function greet() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("hello"), 1000);
    });

    const result = await promise;

    console.log(result);
}

greet().then()