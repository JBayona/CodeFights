// Make a User class that:

// - constructor takes a name as a param
// - has a getName function that returns the name of the user
// - has a greet function that logs 'Hi from {name}' to the console


//First Part
/*function User(name){
  this.name = name;
}

User.prototype = {
  constructor: User,
  getName: function(){
    return this.name;
  },
  greet: function(){
    console.log(`Hi from ${this.getName()}`);
  }
}

const user = new User('Jesse');
user.name = 'Jorge';
console.log(user.getName()); // 'Jorge'
user.greet();*/ // 'Hi from Jorge'

//const user = new User('Jesse');
//console.log(user.getName()); // 'Jesse'
//user.greet(); // 'Hi from Jesse'

//Second part
function User(name){
  this.getName = function(){
    return name;
  };
  this.greet = function(){
    console.log(`Hi from ${name}`)
  }
}

/*const user = new User('Jesse');
user.name = 'Jorge';
console.log(user.getName()); // 'Jesse'
user.greet();*/ // 'Hi from Jesse'


// Make the name private (but still accessible via getter)

// Example
const user2 = new User('Jesse');
console.log(user2.name); // undefined
user2.name = 'Jorge';
console.log(user2.getName()); // 'Jesse'
user2.greet(); // 'Hi from Jesse'

/*Con la instancia vamos a tener muchas propiedades de la funcion, y con prototype solo uno, es mejor
con prototype, si no esta en la instancia abusca en el prototype, si no esta en el prototype se busca
en el prototype del prototype y asi sucesuvamente*/

// Now lets make an Admin class that inherits from User. It should have a slightly different greet method that console.logs '[Admin] Hi from {name}'

function Admin(name){
  this.age = 23;
  User.call(this, name);
}

Admin.prototype = new User();
Admin.prototype.constructor = Admin;
Admin.prototype.greet = function(){
  console.log(`Hi admin from ${this.getName()}`);
};

const admin = new Admin('Test');
admin.greet();