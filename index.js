// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>Value vs. Reference</h1>`;

let number = 5;
let number2 = number;

console.log(number, number2);
number = 10;
console.log(number, number2);

let person = {
  name: "Preston"
};

// object and array are stored by reference which means the changes made `anywhere` will affected the actual value that point to the same reference.
let person2 = person;
console.log(person, person2);
person2.name = "Joe";
console.log(person, person2);

function changeName(obj) {
  obj.name = "Brook";
}
changeName(person);
console.log(person, person2);
