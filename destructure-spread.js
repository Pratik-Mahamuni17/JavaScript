// 3. Destructuring & Spread Operator

// 👉 Task:

// Given an object {name: "Pratik", age: 22}, destructure it into variables.


let obj = {
    name: "Sourav",
    age: 23,
    job: "Developer"
};

let {name,age,job} = obj;

console.log(name);
console.log(age);
console.log(job);

// Merge two arrays using the spread operator.

const fruits = ['apple', 'banana'];
const vegetables = ['carrot', 'broccoli'];

const food = [...fruits,...vegetables];

console.log(food);

// Clone an object using spread.

const person = { name: "Pratik", age: 22 };

const ClonePerson = {...person};
console.log(ClonePerson);
