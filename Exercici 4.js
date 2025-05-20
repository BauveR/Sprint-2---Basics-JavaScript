const sayHello = new Promise((resolve) => {
    setTimeout(() => {
      resolve("hello world");
    }, 2000);
  });

async function greet() {
  const x = await sayHello;
  console.log(x); 
}

greet();