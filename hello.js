function sayHello(name) {
    console.log(`Hello ${name}`);
}

//without param
function myfunction() {
    console.log('Hello function');
}

//single func  export
// module.exports = myfunction

// multiple  obj to export
module.exports = {
    sayHello: sayHello,
    myfunction: myfunction
};