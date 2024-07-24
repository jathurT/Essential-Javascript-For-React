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