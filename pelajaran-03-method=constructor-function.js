function Person(){
    this.first = "";
    this.last = "";
    this.sayhello = function(name) {
        console.info(`Hello ${name}, my name is ${this.first}`);
    }
};

const adit = new Person();
adit.first = "Aditya";
adit.last = "Prayoga";
adit.sayhello("Joko");

console.log(adit);