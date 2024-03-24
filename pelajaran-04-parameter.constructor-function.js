function Person(first, last){
    this.first = first;
    this.last = last;
    this.sayhello = function(name) {
        console.info(`Hello ${name}, my name is ${this.first}`);
    }
};

const adit = new Person("aditya", "Prayoga");
adit.sayhello("Joko");

console.log(adit);