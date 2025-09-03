//Part 2
var add = function (a, b) { return a + b; };
console.log(add(2, 3));
function greet(person) {
    return "Hello, ".concat(person.name, "! You are ").concat(person.age, " years old.");
}
console.log(greet({ name: "Hal", age: 33 }));
