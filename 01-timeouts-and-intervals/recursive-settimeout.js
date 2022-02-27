setTimeout(function run() {
    console.log("hello");
    setTimeout(run, 100)
}, 100);

setInterval(function run() {
    console.log("Hello");
}, 100);