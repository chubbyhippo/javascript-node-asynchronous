const greet = () => {
    console.log("hello");
};

const timeout = setTimeout(greet, 2000);
clearTimeout(timeout)