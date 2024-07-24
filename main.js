// Array Destructuring
const food = ['Pizza', 'Burger', 'Fries'];
const [food1, food2, food3] = food;
console.log(food1); // Output: Pizza
console.log(food2); // Output: Burger
console.log(food3); // Output: Fries

// Object Destructuring
const person = {name: 'John', age: 21};
const {name, age} = person;
console.log(name); // Output: John
console.log(age); // Output: 21

//Rest operator
const [a, ...b] = [1, 2, 3];
console.log(a); // Output: 1
console.log(b); // Output: [2, 3]

// Spread operator
const arr = [1, 2, 3];
const arr2 = [...arr];
console.log(arr2); // Output: [1, 2, 3]

// Update object property using spread operator
const obj = {a: 1, b: 2};
const obj2 = {...obj, b: 3};
console.log(obj2); // Output: { a: 1, b: 3 }

const library = {
  address: 'Central Park',
  books: [
    {title: 'Book1', author: 'Author1'},
    {title: 'Book2', author: 'Author2'},
  ]
};

const {address, books: [{title: title1}, {title: title2}]} = library;
console.log(address); // Output: Central Park

//updating object property using spread operator
const library2 = {...library, address: 'Eastwood', books: [{title1: 'Updated Book1'}, {title2: 'Updated Book2'}]};
console.log(library2); // Output: { address: 'Eastwood', books: [ { title1: 'Updated Book1' }, { title2: 'Updated Book2' } ] }

//Ternary operator
const x = 20;
const y = x > 10 ? 'Yes' : 'No';
console.log(y); // Output: Yes

//Arrow function
const add = (a, b) => a + b;
console.log(add(1, 2)); // Output: 3

// Short-circuiting and Logical Operators
const name1 = 'John';
const age1 = 20;
const isAdult = age1 > 18 && 'Adult';
console.log(isAdult); // Output: Adult

// Nullish Coalescing Operator
const name2 = '';
const username = name2 ?? 'Guest';
console.log(username); // Output: Guest

// Optional Chaining
const user = {
  id: 1,
  personalInfo: {
    name: 'John',
    email: ' [email protected]'
  },
}
const email = user.personalInfo?.email;
console.log(email); // Output: [email protected]
const hobby = user.hobbies?.[0];
console.log(hobby); // Output: undefined

//Coalescing Assignment Operator
const hobbies = user.hobbies?.[0] ?? 'No Hobbies';
console.log(hobbies); // Output: No Hobbies

//Array map method
const numbers = [1, 2, 3];
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6]

const books = [
  book1 = {title: 'Book1', author: 'Author1', price: 10},
  book2 = {title: 'Book2', author: 'Author2', price: 15},
  book3 = {title: 'Book3', author: 'Author', price: 20}
]
const essentialData = books.map((book) => ({
  title: book.title,
  price: book.price
}));
console.log(essentialData); // Output: [ { title: 'Book1', price: 10 }, { title: 'Book2', price: 15 }, { title: 'Book3', price: 20 } ]

//Array filter method
const randomNumbers = [1, 2, 3, 4, 5];
const evenNumbers = randomNumbers.filter((num) => num % 2 === 0);
const oddNumbersMultiplication = randomNumbers.filter((num) => num % 2 !== 0).map((num) => num * 2);
console.log(evenNumbers); // Output: [2, 4]
console.log(oddNumbersMultiplication); // Output: [2, 6, 10]

//Array reduce method
const numbers2 = [1, 2, 3, 4, 5];
const sum = numbers2.reduce((acc, num) => acc + num, 0); // 0 is the initial value for the accumulator
console.log(sum); // Output: 15

// Array Sort method
const fruits = ['Banana', 'Orange', 'Apple'];
const sortedFruits = fruits.sort();
console.log(sortedFruits); // Output: ['Apple', 'Banana', 'Orange']

const numbers3 = [1, 30, 4, 21, 100000];
const sortedNumbers = numbers3.slice().sort((a, b) => a - b); //It mutates the original array
console.log(sortedNumbers); // Output: [1, 4, 21, 30, 100000]
console.log(numbers3); // Output: [1, 30, 4, 21, 100000]

// Working with immutable arrays
const numbers4 = [1, 2, 3];
// Adding a new element to the array
const newNumbers = [...numbers4, 4];
console.log(newNumbers); // Output: [1, 2, 3, 4]
console.log(numbers4); // Output: [1, 2, 3]
// Removing an element from the array
const filteredNumbers = numbers4.filter((num) => num !== 2);
console.log(filteredNumbers); // Output: [1, 3]
// Updating an element in the array
const updatedNumbers = numbers4.map((num) => (num === 2 ? 20 : num));
console.log(updatedNumbers); // Output: [1, 20, 3]

// Asynchronous JavaScript
// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
// console.log("This will be logged first");

//Async/Await
async function fetchData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  return await response.json()
}
const result = fetchData()
console.log(result); // Output: Promise { <pending> }
console.log("This will be logged first");
