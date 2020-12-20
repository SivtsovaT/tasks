function User(name,color) {
    this.name = name;
    this.color = color;
    this.sayHi = function() {
       
        console.log("This "+this.name+ " has "+this.color+" color");

    };
}
let dog = new User("dog","red");
let cat = new User("cat", "black")
   
dog.sayHi();
cat.sayHi();





//В this добавлены свойства и метод.
// new User() создаёт новый объект со свойством name, color и методом sayHi. 