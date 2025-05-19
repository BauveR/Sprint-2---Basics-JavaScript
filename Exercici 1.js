const hello = new Promise((resolve)=>{
    setTimeout(() => {
        resolve("Hello World");
    },2000);
});

hello

.then((result)=>{
    console.log("Promesa resuelta",result);
})

.catch((error)=>{
    console.error("Error en la promesa",error);
})