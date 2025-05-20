const hello = new Promise((resolve)=>{
    setTimeout(() => {
        resolve("Hello World");
    },2000);
});

hello.then((result)=>{
    console.log("Promesa resuelta",result)
})

