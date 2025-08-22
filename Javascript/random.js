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

let books = [
    {
        title:"Speaking JavaScript",
        author:"Axel Rauschmayer",
        num_pages:460
    },
    {
        title:"Programming JavaScript Applications",
        author:"Eric Elliott",
        num_pages:254        
    },
    {
        title:"Understanding ECMAScript 6",
        author:"Nicholas C. Zakas",
        num_pages:352  
    }
];

let new_books = {
        title:"Learning JavaScript Design Patterns",
        author:"Addy Osmani",
        num_pages: 254
}

books.push(new_books);
console.log(books[0].title);
console.log(books[1].title);
console.log(books[2].title);
console.log(books[3].title);


let copy = books.slice(2);

let sum = "";

for (let i = 0; i < books.length; i++){
    sum += books[i].title
}

console.log(sum);


let huh = ["jef","add","dqq"]
console.log(huh.push("g"));
console.log(huh);


