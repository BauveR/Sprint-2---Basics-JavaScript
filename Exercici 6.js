const promiseOne = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("First Resolve");
    },2000);
});

const promiseTwo = new Promise ((resolve)=>{
    setTimeout(()=>{
        resolve("Second Resolve");
    },3000);
});

Promise.all([promiseOne, promiseTwo])
    .then((results)=> {
        results.forEach((message) => console.log(message));
    })
    .catch((error)=>{
        console.error("error:",error);
    });