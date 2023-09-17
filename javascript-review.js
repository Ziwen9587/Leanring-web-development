// ---------------------------------------------------------------
// ---------------------Object Learning-------------------
// ---------------------------------------------------------------

// function Person(name,age){
//     this.name = name;
//     this.age = age;
//     this.work = function (a, b) {
//         return a + b;
//     };
//     return
// }
// let p1 = new Person("Allen", 18);
// p1.hobby = "baseball";
// console.log(p1);
// console.log(p1.work(100, 200));

// function Animal(b){
//     this.bark = b;
// }
// console.log(Animal.prototype);
// Animal.prototype.fur = "mao rong rong";
// var dog = new Animal("wang wang");
// dog.fur = "guang tu tu";

// console.log(dog);
// console.log(dog.fur);


// const p2 = {
//     name: "owen",
//     age: 28,
//     memberFun0: function (a, b) {
//         console.log(a + b);
//     },
//     memberFun1: () => console.log("this is a member function 1"),
//     memberFun2: () => console.log("this is a member function 2 with this " + this.name),
//     memberFun3 () {
//         console.log("this is a member function 4")
//     }
// }

// console.log(p2);
// p2.memberFun0(11,22);
// p2.memberFun1();
// p2.memberFun2();
// p2.memberFun3();

// const obj = {
//     name: "***OBJ_NAME***",

//     regularFunction: function() {
//       console.log("In regularFunction: " + this.name);
//     },
//     regularFunction2: function() {
//         console.log("In regularFunction2: " + this.name);
//         function innerRegularFunction2() {
//             console.log("In regularFunction2 - innerRegularFunction2: " + this.name);
//         }
//         innerRegularFunction2()
//       },
    
//     arrowFunction: () => {
//       console.log("In arrowFunction: " + this.name); 
//     },
//     arrowFunction2: function() {
//         console.log("In arrowFunction2: " + this.name);
//         let innerFunction2 = () => {
//             console.log("In arrowFunction2 - innerFunction2: " + this.name)
//         }
//         innerFunction2();
//     }
//   };

// console.log(typeof obj);
// obj.regularFunction();
// obj.regularFunction2();
// obj.arrowFunction();
// obj.arrowFunction2();


function Person(name,age){
    this.name = name;
    this.age = age;
    return
}
const p1 = new Person("AAA", 100);

// Usage#1: Inside of a function
const printName = ({ name }) => console.log(name);
printName(p1)
const printNameAndAge = ({ name, age }) => console.log(name, " - ", age);
printNameAndAge(p1)

// Usage#2: Outside of a function - destruct an object
const {name, age} = p1;
console.log(name, "---", age);

// Usage#2: Outside of a function - destruct an array
const arr = [111, 222, 333, 444];
const [i1, i2, i3] = arr;
console.log(i1);
console.log(i2);
console.log(i3);
// console.log(i4);

// ---------------------------------------------------------------
// ---------------------Array Learning-------------------
// ---------------------------------------------------------------

// const hobbies = ['AAA', 'BBB', 'CCC'];
// const hobbies_copy = [...hobbies];

// hobbies_copy.push("DDD");
// console.log(hobbies_copy);
// console.log(hobbies);


// const dog = {
//     name: "wang wang",
//     age: 2
// }
// const dog_copy = {...dog}

// dog_copy.name="wang cai"
// console.log(dog);
// console.log(dog_copy);

// const array_func = (...args) => [...args];
// console.log(array_func(1,2,3,4,5,6));

// function rest_func(...args){
//     for (var i = 0; i < args.length; i++){
//         console.log(i + " " + args[i]);
//     }
// }
// rest_func("A", "B", "C");


// ---------------------------------------------------------------
// ---------------------Arrow Function Learning-------------------
// ---------------------------------------------------------------
// function regular_func(a, b){
//     return a + b;
// }
// console.log(regular_func(2, 2));

// var arrow_func = (a, b) => {
//     return a + b;
// }
// console.log(arrow_func(3, 3));


// func_a = () => "hello world!";
// var func_aa = () => "hi world!";
// console.log(func_a);
// console.log(func_a());
// console.log(func_aa);
// console.log(func_aa());


// func_b = (para) => "hello world! " + para;
// var func_bb = (para) => "hi world! " + para;
// console.log(func_b);
// console.log(func_b("JavaScript"));
// console.log(func_bb);
// console.log(func_bb("Node.js"));




// function getThis(){
//     return this;
// }

// const obj1 = {name:"Object 1"};
// obj1.method1 = getThis;
// const obj2 = {name:"Object 2"};
// obj2.method2 = getThis;

// console.log(obj1.method1());
// console.log(obj2.method2());



// const obj4 = {
//     name: "obj4",
//     getThis() {
//       return this;
//     },
//   };
  
// const obj5 = { name: "obj5" };
  
// obj5.getThis = obj4.getThis;
// console.log(obj5.getThis());
// console.log(obj4.getThis());


// var af = (a, b ,c) => {
//     return a + b + c;
// }

// console.log(af(1,2,3));


// const myF = a => a + 10;
// console.log(myF(12));

// function myF2 (a) {
//     return a + 10;
// }
// console.log(myF2(12))








