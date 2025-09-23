
// Objects store key-value pairs.

const person = {
    name: "Pratik",
    age: 25,
    city: "Pune"
};

console.log(person.name); // Pratik
console.log(person["age"]); // 25

// Add / Update / Delete Properties

person.country = "India";   // add
person.age = 26;            // update
delete person.city;         // delete

console.log(person);
// { name: 'Pratik', age: 26, country: 'India' }

// Arrays store ordered lists.

const numbers = [10, 20, 30, 40];

console.log(numbers[0]); // 10
console.log(numbers.length); // 4

numbers.push(50);   // add at end
numbers.pop();      // remove last
numbers.shift();    // remove first
numbers.unshift(5); // add at start

console.log(numbers); // [5, 20, 30, 40]

