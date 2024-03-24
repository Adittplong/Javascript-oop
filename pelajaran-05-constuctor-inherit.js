function Employee(firstname){
    this.firstname = firstname;
    this.sayhello = function(name) {
        console.info(`Hello ${name}, My name is ${this.firstname}`)
    }
};

function Manager(firstname, lastname){
    this.lastname = lastname;
    Employee.call(this, firstname);
};

const aditya = new Manager("Aditya","Prayoga");
console.info(aditya);