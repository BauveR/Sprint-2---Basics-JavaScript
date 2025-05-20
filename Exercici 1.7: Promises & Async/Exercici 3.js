const Intake = (input) => {
    return new Promise((resolve, reject) =>{
        if(input === "hola"){
            setTimeout(()=>{
                resolve("input correcto");
            },2000);
        } else {
            reject("error input incorrecto")
        }
    });
};