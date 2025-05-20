function esperarSaludar(name, callbackFunction) {
    return callbackFunction(name);
}

function greet (name) {
    setTimeout(() => {
        console.log (`Hello, ${name}`);
    }, 2000);

};

console.log(esperarSaludar("pedro", greet));