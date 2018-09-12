// object literal

const book1  = {
  title: "The way of kings",
  author: "Brandon Sanderson",
  year: 2002,
  getSummary: function(){
    return `${this.title} was written by ${this.author} in ${this.year}`
  }
}

console.log(book1);
console.log(book1.getSummary());

// object constructor
// function Book(title,author,year){
//   this.title = title;
//   this.author = author;
//   this.year = year;
//   this.getSummary= function(){
//     return `${this.title} was written by ${this.author} in ${this.year}`
//   }
// }

// const book2 = new Book("Games of Thrones","George RR Martin",2355);
// const book3 = new Book("Doors of Stones","Patrick Rothfuss",2022);
//
// console.log(book2);
// console.log(Object.values(book3));

// Prototypes
// function Book(title,author,year){
//   this.title = title;
//   this.author = author;
//   this.year = year;
// }
//
// function Author(name,nationality,dob){
//   this.name = name;
//   this.nationality = nationality;
//   this.dob = dob;
// }
// // adding prototype to object
// Book.prototype.getSummary = function(){
//   return `${this.title} was written by ${this.author} in ${this.year}`;
// }
//
// Object.prototype.logSomething= function(){
//   console.log('Something');
//   return 'Something';
// }
//
// Array.prototype.description = function(){
//   console.log('thisis an array');
//   return 'This is an array';
// }
//
// const array1 = [1,2,3,4,5];
// const array2 = ["1",'2','3','4','5'];
// array1.description();
// array2.description();
//
//
// const book2 = new Book("Goblet of wir ",'JK Rowlomg', 2004);
// const author1 = new Author('terry pratchett','Dark Shadow', 1990);
//
// console.log(book1.getSummary());
// console.log(book1.logSomething);

// Classes

class Car{
  constructor(make,model,year,color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color= color;
  }
  getSummary(){
    return `the ${this.model} was created by ${this.make} in ${this.year}. I like it in ${this.color}`;
  }
}

const car1 = new Car('bmw','X5',2010,'black');

console.log(car1);
console.log(car1.getSummary());
