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



function hundler() {
    alert("mersu");
}