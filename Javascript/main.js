let names = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let damn = "JeffKolinMiranda";

console.log(names.slice(5, 11));
console.log(names.charCodeAt(0));
console.log(names.at(0));
let what = damn.matchAll(/a/g);
console.log(JSON.stringify(what));
console.log(damn.startsWith("Je"));
console.log(damn.endsWith("da"));





// function person(first, last, age){
//     this.first = first;
//     this.last = last;
//     this.age = age;
// }

// let guy = new person("jeff", "miranda", 17);

// if (guy.first == 'jeff'){
//     console.log("It's jeff!!");
// } else {
//     console.log("idk`");
    
// }

// let car = {
//     brand: "BMW",
//     model: "Sports",
//     start: function(){
//         console.log("Hello!");
//     }
// };

// console.log(Object.values(car));
// console.log(JSON.stringify(car));



// class Person{
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     start() {
//         console.log("The People Starting!");
//     }
// }

// let Jack = new Person("Jack", 20);

// console.log(JSON.stringify(Jack));

