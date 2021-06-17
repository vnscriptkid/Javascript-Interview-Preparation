# :smiley: Everything you need to know about OOP in JS internally 🚒 (not by using syntactic sugar syntax `class` from ES6)

## :star: 2 ways to implement OOP in JS
![image](https://user-images.githubusercontent.com/28957748/122389664-5ce00d80-cf9b-11eb-8a3e-b03491b07775.png)

## :star: :one: Psuedo-classical Pattern 🏠
#### What ?
- Trying to mimic `class` concept from other programming languages (like Java), which is a central place to manufacture objects

#### Pros and Cons
  - Pros:
    - 🥇 Looks more like OOP code with `new` keywords when making new objects.
    - 🥈 Make private attribute possible in JS

#### 2 ways to use methods for objects
  - Inject directly to `this` keyword inside __constructor__ function
  - Inject to `prototype` object of __constructor__ function

#### 🆕 How to create new objects
```js
function Animal(type) {
    this.type = type;
}

var pet = new Animal('wild')
```

#### 👨‍👧‍👦 How to implement Inheritance
![image](https://user-images.githubusercontent.com/28957748/122429108-b73d9600-cfbc-11eb-8991-ba5f85a2c07a.png)

![image](https://user-images.githubusercontent.com/28957748/122428915-8a897e80-cfbc-11eb-8fcc-8207fd63b611.png)

![image](https://user-images.githubusercontent.com/28957748/122429345-e5bb7100-cfbc-11eb-842c-54d96a06e0cd.png)

![image](https://user-images.githubusercontent.com/28957748/122429633-1e5b4a80-cfbd-11eb-81ad-1e347db3c4dd.png)

```js
function Animal(type) {
    this.type = type;
}

Animal.prototype.sleep = function() {
    console.log(this, 'zzzz')
}

function Dog(name, type) {
    Animal.call(this, type);
    this.name = name;
}

Dog.prototype = Object.create(Animal.prototype);
// var dogProto = {};
// dogProto.__proto__ = Animal.prototype;
// Dog.prototype = dogProto;

Dog.prototype.bark = function() {
    console.log(this, 'whooop!!!')
}

var dog = new Dog('john', 'pet');
dog.bark()
dog.sleep()
```

#### 🔐 How to use `private` property

```js
function CarModule() {
  let milesDriven = 0;
  let speed = 0;

  this.accelerate = (amount) => {
    speed += amount;
    milesDriven += speed;
  }

  this.getMilesDriven = () => milesDriven;
}

var testCarModule = new CarModule();
```

## :star: :two: Prototypal Pattern 🎷
#### What ?
- Is how OOP in JS is
- The main idea is that everything is object and by connecting them together through `__proto__` we can do anything from creating new objects, to implement inheritance.

#### Pros and Cons
  - Pros:
    - 🥇 Use the tool that JS offers natively
  - Cons:
    - 🥶 Looks scary

#### How to create new objects 

![image](https://user-images.githubusercontent.com/28957748/122431447-a8f07980-cfbe-11eb-8a07-1491fe1f5176.png)

```js
var Phone = {
    init: function(myNumber) {
       this.myNumber = myNumber;  
    },
    call: function(toNumber) {
        console.log('Calling from: ' + this.myNumber)
        console.log('Calling to: ' + toNumber)
    }
}

var myPhone = Object.create(Phone);
myPhone.init('456');
myPhone.call('123');
```

```js
var Phone = {
    call: function(toNumber) {
        console.log('Calling from: ' + this.myNumber)
        console.log('Calling to: ' + toNumber)
    }
}

var myPhone = Object.create(Phone, {
    myNumber: {
        value: '456'
    }
});
myPhone.call('123');
```

```js
var Phone = {
    call: function(toNumber) {
        console.log('Calling from: ' + this.myNumber)
        console.log('Calling to: ' + toNumber)
    }
}

function PhoneFactory(myNumber) {
    var newPhone = Object.create(Phone);
    newPhone.myNumber = myNumber;
    return newPhone;
}

var myPhone = PhoneFactory('456');
myPhone.call('123');
```

#### 👨‍👧‍👦 How to implement Inheritance
```js
var Phone = {
    call: function(toNumber) {
        console.log('Calling from: ' + this.myNumber)
        console.log('Calling to: ' + toNumber)
    }
}

var Smartphone = Object.create(Phone, {
    init: {
        value: function(myNumber) {
            this.myNumber = myNumber;
            this.history = [];
        }
    },
    surfWeb: {
        value: function(address) {
            this.history.push(address);
            console.log('Surfing: ' + address)
        }
    },
    seeHistory: {
        value: function() {
            console.log(this.history)
        }
    }
})

var myIphone = Object.create(Smartphone);
myIphone.init('456');
myIphone.call('123')
myIphone.surfWeb('google.com');
myIphone.surfWeb('facebook.com');
myIphone.seeHistory();

```
