
class Person {
    constructor(name) {
        this.name = name;
    }
    hello(){
        (() => {console.log(`hello, ${this.name}`)})();
    }
} 

const p = new Person('Alice');
p.hello(); 