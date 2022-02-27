const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("The mission has been failed");
    }, 5000);
});
let onFulfilled = (result) => {
    console.log(result);
    console.log("resolved");
};
let onRejected = (error) => {
    console.log(error);
    console.log("rejected");
};
promise.then(onFulfilled)
    .catch(onRejected)