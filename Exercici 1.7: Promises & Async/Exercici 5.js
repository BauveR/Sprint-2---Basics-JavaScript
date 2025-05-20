const sayHello = new Promise((resolve) => {
    setTimeout(() => {
      resolve("hello world");
    }, 2000);
  });

(async () => {
    try{
        const x = await sayHello;
        console.log(x); 
    } catch(error) {
        console.log(error); 
    }
    
})();
