const greet = () => {
    console.log("hello");
};

const interval = setInterval(greet, 2000);
clearInterval(interval)
