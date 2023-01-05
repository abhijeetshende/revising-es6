class Person{
    constructor(name){
        this.name = name;
    }
    printName(){
        console.log(`hello ${this.name}`)
    }
}


let  p = new Person('Abhijeet')
p.printName();