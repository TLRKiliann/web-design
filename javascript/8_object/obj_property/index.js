//--------------------------------------------
//--- Prototype
//--------------------------------------------

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.eat = function() {
  console.log("nom nom nom");
}

Dog.prototype.bark = function() {
  console.log("Woof!");
}


//--------------------------------------------
// Only change code above this line
//--------------------------------------------

let beagle = new Dog();
beagle.eat();
beagle.bark();


//--------------------------------------------
//--- public property)
//--------------------------------------------

let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

let glideMixin = function(obj) {
  obj.glide = function() {
    console.log("ok");
  }
}

glideMixin(bird);
glideMixin(boat);


//--------------------------------------------
//--- Closure (secure private property)
//--------------------------------------------

function Bird() {
  let weight = 15;

  this.getWeight = function() {
    return weight;
  }
};

let duck = new Bird();
duck.getWeight();


//--------------------------------------------
//--- immediately invoked function expression or IIFE
//--------------------------------------------

(function () {
  console.log("Chirp, chirp!");
})();


//--------------------------------------------
//--- Inherit Behaviors from a Supertype
//--------------------------------------------

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

let animal = new Animal(duck, beagle);

let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);

animal instanceof Animal;


//-----------------------------------------------------------
//--- Set the Child's Prototype to an Instance of the Parent
//-----------------------------------------------------------

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();


//--------------------------------------------
//--- Reset an Inherited Constructor Property
//--------------------------------------------

function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);


let duck = new Bird();
let beagle = new Dog();

Bird.prototype.constructor = Bird;
duck.constructor

Dog.prototype.constructor = Dog;
duck.constructor


//--------------------------------------------
//--- Use an IIFE to Create a Module
//--------------------------------------------

/*
An immediately invoked function expression (IIFE) is often used 
to group related functionality into a single object or module. 
For example, an earlier challenge defined two mixins:
*/

function glideMixin(obj) {
  obj.glide = function() {
    console.log("Gliding on the water");
  };
}
function flyMixin(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  };
}

/*
We can group these mixins into a module as follows:
*/

let motionModule = (function () {
  return {
    glideMixin: function(obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
})();

/*
Note that you have an immediately invoked function expression (IIFE) 
that returns an object motionModule. This returned object contains 
all of the mixin behaviors as properties of the object. The advantage 
of the module pattern is that all of the motion behaviors can be 
packaged into a single object that can then be used by other parts 
of your code. Here is an example using it:
*/

motionModule.glideMixin(duck);
duck.glide();