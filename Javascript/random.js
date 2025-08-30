// let train = {
//     from:"Legazpi City",
//     to:"Manila City",
//     price:3000
// };

// console.log(`Ticket From: ${train.from}`);
// console.log(`Ticket To: ${train.to}`);
// console.log(`Ticket Price: ${train.price}`);

// let names = {};
// names.name = "Jeff";
// names.age = 17;
// console.log(names);

// console.log(2 * 3 + 1);      // expected 7
// console.log(2 ** 4);       // expected 16
// console.log(5 * 1);       // expected 5
// console.log(8 + 2 + 5 * 2); // expected 39 


// let contacts = [{
//     name: "Maxwell Wright",
//     phone: "(0191) 719 6495",
//     email: "Curabitur.egestas.nunc@nonummyac.co.uk"
// }, {
//     name: "Raja Villarreal",
//     phone: "0866 398 2895",
//     email: "posuere.vulputate@sed.com"
// }, {
//     name: "Helen Richards",
//     phone: "0800 1111",
//     email: "libero@convallis.edu"
// }];

// let last = contacts.length - 1;

// let last_name = window.prompt("Name: ");
// let last_phone = window.prompt("Num: ");
// let last_email = window.prompt("Email: ");

// let new_contacts = {
//     name: last_name,
//     phone: last_phone,
//     email: last_email
// };

// contacts.push(new_contacts);

// console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
// console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);

// let contacts = [{
//     name: "Maxwell Wright",
//     phone: "(0191) 719 6495",
//     email: "Curabitur.egestas.nunc@nonummyac.co.uk"
// }, {
//     name: "Raja Villarreal",
//     phone: "0866 398 2895",
//     email: "posuere.vulputate@sed.com"
// }, {
//     name: "Helen Richards",
//     phone: "0800 1111",
//     email: "libero@convallis.edu"
// }];

// let user = prompt("Enter: ");
// let last = contacts.length - 1;

// switch (user) {
//     case "first":
//         console.log(contacts[0].name);
//         break;
//     case "last":
//         console.log(contacts[last].name);
//         break;
//     case "new":
//         let new_name = prompt("Name: ");
//         let new_phone = prompt("Phone: ");
//         let new_email = prompt("Email: ");

//         let new_contacts = {
//             name: new_name,
//             phone: new_phone,
//             email: new_email
//         };
//         contacts.push(new_contacts);
//         last = contacts.length - 1;

//         console.log(`Name: ${contacts[last].name} Phone: ${contacts[last].phone} Email: ${contacts[last].email}`);
//         break;
// }

/*
 This time the program will be a bit more complicated. We want the user to enter names during the program's
 execution (we will use the prompt dialog box), which will be placed in the array one by one. Entering the 
 names will end when the Cancel button
 is pressed. Then we will write the entire contents of the array (i.e. all entered names) to the console.
*/

// let names = [];
// let isOver = false;
// while(!isOver){
//     let name = prompt("Enter or Cancel");
//     if (name != null){
//         names.push(name);
//     } else {
//         isOver = true;
//     }
// }
// for (let i = 0; i < names.length; i++){
//     console.log(names[i]);
// }

// let values = [10, 30, 50, 100];

// for (let i = 0; i < values.length; i += 2) {
//     console.log(values[i]); // -> 10, 50
// }

// let values = [10, 30, 50, 100];

// for (let i of values){
//     console.log(i);

// }


//  let user = {
//     name: "Calvin",
//     surname: "Hart",
//     age: 66,
//     email: "CalvinMHart@teleworm.us"
// }

// for (let key in user){
//     console.log(user[key]);

// }

// for (let i = 0; i < 10; i++) {
//     if (i == 3) {
//         continue;
//     }
//     console.log(i);
// }

/*
 * Write a 
  piece of code that will write 
  numbers from 100 to 0 to the console, 
  but in steps of 10; so 100, 90, 80... etc.  
 */

// let big = Number(prompt(": "));
// let low = Number(prompt(": "));

// if (!Number.isNaN(big) && !Number.isNaN(low) && big > low){
//     for (let i = big; i < low; i--  ){
//         console.log(i);
//     }
// }

/*
Write a program that first writes out all these numbers on the console, 
then only those that are even (hint: the remainder of dividing an even number 
by 2 is equal to 0), then only those that are larger than 10 and at the same time 
smaller than 60.
 */

// let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];

// for (let num of numbers){
//     console.log(num);
// }

// for (let num of numbers){
//     if (num % 2 == 0){
//         console.log(`Even: ${num}`);
//     }
// }

// for (let num of numbers){
//     if (num > 10 && num < 60){
//         console.log(`Num: ${num}`);
//     }
// }

// let movies = [];

// while (true) {

//     let title = prompt("Enter Movie: ");
//     let rate = prompt("Enter Rate: ");

//     if (title == null && rate == null) {
//         break;
//     } else {
//         movies.push({
//             title: title,
//             imdb: Number(rate)
//         });
//     }

//     for (let num of movies) {
//         if (num.imdb < 7){
//             console.log(`The Rating that less than 7`);
//             console.log(`Title: ${num.title} Rate: ${num.imdb}`);
//         }
//         break;
//     }


//     for (let num of movies){
//         if (num.imdb >= 7){
//             console.log(`The Rating that greater than 7`);
//             console.log(`Title: ${num.title} Rate: ${num.imdb}`);
//         }
//         break;
//     }
// }

// let vessel = {
//     LATITUDE : 40.07288,
//     LONGITUDE : 154.48535,
//     LONGITUDE : 154.48535,
//     SPEED : 14.0,
//     IMO : 9175717,
//     NAME : "MARENO"
// };

// for (let key in vessel){
//     console.log(`${key} -> ${vessel[key]}`);

// }

// let isOver = false

// let contacts = [{
//     name: "Maxwell Wright",
//     phone: "(0191) 719 6495",
//     email: "Curabitur.egestas.nunc@nonummyac.co.uk"
// }, {
//     name: "Raja Villarreal",
//     phone: "0866 398 2895",
//     email: "posuere.vulputate@sed.com"
// }, {
//     name: "Helen Richards",
//     phone: "0800 1111",
//     email: "libero@convallis.edu"
// }];

// while (!isOver) {
//     let user = prompt("Enter: ");

//     let last = contacts.length - 1;

//     switch (user) {
//         case "first":
//             console.log(`First Contact: ${contacts[0]}`);
//             console.log(`Name: ${contacts[0].name}\nPhone: ${contacts[0].phone}\nEmail: ${contacts[0].email}`);
//             isOver = true
//             break;

//         case "last":
//             console.log(`Last Contact: ${contacts[last]}`);
//             console.log(`Name: ${contacts[last].name}\nPhone: ${contacts[last].phone}\nEmail: ${contacts[last].email}`);
//             isOver = true;
//             break;

//         case "all":
//             for (let key in contacts) {
//                 let contact = contacts[key];
//                 console.log(`Contacts: ${parseInt(key) + 1}: `);
//                 console.log(`Name: ${contact.name}`);
//                 console.log(`Phone: ${contact.phone}`);
//                 console.log(`Email: ${contact.email}`);
//                 console.log("---------------------------");
//             }
//             isOver = true;
//             break;
//         case "new":
//             let new_name = prompt("Enter Name: ");
//             let new_phone = prompt("Enter Phone: ");
//             let new_email = prompt("Enter Email: ");

//             let new_contact = {
//                 name: new_name,
//                 phone: new_phone,
//                 email: new_email
//             };

//             contacts.push(new_contact);

//             console.log(`Name: ${new_contact.name}`);
//             console.log(`Phone: ${new_contact.phone}`);
//             console.log(`Email: ${new_contact.email}`);            
//             isOver = true;
//             break;
//         case "quit":
//             isOver = true;
//     }
// }

// for (let x = 10; x > 1; x -= 2){
//     console.log("hello");
// }
// let names = "Jeff";
// function name(){
//     console.log(`Name: ` + names);   
// }

// for (let i = 0; i < 5; i++){
//     name();
// }

// function damn(first, second){
//     return first + second;
// }

// console.log(damn(5,5));

// let names = ["Jeff", "Kolin", "P.", "Miranda"];
// function getElement(element, index){
//     return element[index - 1];
// }

// let name = getElement(names, 3);
// console.log(name);

// let a = 100, b = 50, c = 150;

// function add(a){
//     let b = 20;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// console.log(add(1));

// console.log(a);
// console.log(b);
// console.log(c);

// function getTemp(temp){
//     if (!(temp instanceof Array)){
//         return NaN;
//     }
//     let sum = 0;
//     for (let i = 0; i < temp.length; i++){
//         sum += temp[i];
//     }
//     return sum / temp.length;
// }

// console.log(getTemp(10));
// console.log(getTemp([10,20]));

/*
the factorial of 6 is:

6!=6∙5∙4∙3 ∙2∙1=720
 */

// function getFact(n){
//     let result = 1;

//     while (n > 1){
//         result *= n;
//         n--;
//     }
//     return result;
// }

// console.log(getFact(6));

// function getMess(mess){
//     console.log(`Message: ${mess}`);
// }

// let sm = getMess;

// sm("Jeff Is Pogi");

// console.log(typeof sm);

// function doNothing(){
//     return undefined;
// }

// let a = doNothing();
// let b = doNothing;

// console.log(typeof a);
// console.log(typeof b);

// function getMul(n){
//     return n > 1 ? n * getMul(n - 1) : 1;
// }

// let result = getMul(6);
// console.log(result);


// function add(a, b){
//     return a + b;
// }

// function multiply(a, b){
//     return a * b;
// }

// function compute(func, a, b){
//     return func(a, b);
// }

// console.log(compute(add, 10, 10));
// console.log(compute(multiply, 10, 10));

// function operation(func, a, b){
//     return func(a, b);
// }

// let newAdd = function(a,b){
//     return a + b;
// }

// console.log(operation(newAdd, 50, 50));

// let inner = function() {
//      console.log('inner 1');
// }
// let outer = function(callback) {
//      console.log('outer 1');
//      callback();
//      console.log('outer 2');
// }
// console.log('test 1');
// outer(inner);
// console.log('test 2');

// let inner = function(){
//     console.log("Inner 1");
// }

// let outer = function(callback){
//     console.log("Outer 1");
//     setTimeout(callback, 1000);
//     console.log("Outter 2");
// }

// console.log("test 1");
// outer(inner);
// console.log("test 2");

// let inner = function(){
//     console.log("Inner 1");
// }

// let outer =  function(callback){
//     console.log("Outer 1");
//     let timeId = setInterval(callback, 1000);
//     console.log("Outer 2");
//     setTimeout(function(){
//         clearInterval(timeId);
//     },5500);
// }

// console.log("test 1");
// outer(inner);
// console.log("test 2");

// let inner = function(){
//     console.log("Inner 1");
// }

// let outer = function(callback){
//     console.log("Outer 1");
//     let timeid = setInterval(callback, 1000);
//     console.log("Outer 2");
    
// }

// function test(counter) {
//      console.log("test");
//      if (counter > 0)
//          test(--counter);
// }
// test(3);
// let a = -2;
// try {
//     a = b;
// } catch (error) {
//     if (error instanceof ReferenceError) {
//         console.log("Reference error, reset a to -2"); // -> Reference error, reset a to -2
//         a = -2;
//     } else {
//         console.log("Other error - " + error);
//     }
// }
// console.log(a); // -> -2

// let a = 10;
// try {
//     a = b;  // ReferenceError
// } catch(er){
//     console.log("Eroor" + er);
// } finally {
//     console.log("finally"); // -> 10
// }
// console.log(a);

// let a = 10;
// try {
//     a = b; // First ReferenceError
// } catch (error) {
//     try {
//         console.log(b); // Second ReferenceError
//     } catch {
//         console.log("Second catch!"); // -> Second catch!
//     }
// } finally {
//     console.log("Finally!"); // -> Finally!
// }
// console.log("start"); // -> start
// try {
//     throw 100;
// } catch (error) {
//     console.log(error); // -> 100
// }
// console.log("end"); // -> end

// let counter = 0; 
// let maxValue = 10; 
// let result = 1; 
 
// debugger; 
// for (counter = 0; counter < maxValue; counter++) { 
//     console.log(result); 
//     result *= maxValue - counter - 1; 
// } 
 
// console.log("Final result: ", result);

// let id = "100";
// {
// let id = 200;
// id = id + 1;
// console.log(id);
// }

// let name = ["jeff", "kolin", "miranda"];

// let add = name.reverse(name);

// console.log(name);

const a = "hello";
    console.log(a.toUpperCase());
}
} catch (error) {
    console.log(a)
    } finally {
    console.log(a);
}














