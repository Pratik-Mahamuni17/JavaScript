// Use map() → Convert an array of names into uppercase.
let namearray = ["Pratik","Rohit","Shikhar","Dhawan"];

let uppercasednames = namearray.map(names => names.toUpperCase())

console.log(uppercasednames);

// Use filter() → Get only even numbers from an array.

let numbers = [12,34,21,32,5,12,11,18];
console.log(numbers.filter(even => even % 2 == 0));

// Use reduce() → Find the sum of all numbers in an array.

let number = [12,34,21,32,5,12,11,18];

let sum = number.reduce((accumulater,currentvalue)=> {
    return accumulater + currentvalue;
},0);

console.log(sum);


