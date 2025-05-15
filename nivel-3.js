
class person {
    constructor(name) {
        this.name = name;
    }
    hello(){
        () => {console.log(`hello, ${this.name}`)};
    }
} 