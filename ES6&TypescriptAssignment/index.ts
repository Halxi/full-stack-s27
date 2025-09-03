//Part 2
const add = (a: number, b: number): number => a + b;

console.log(add(2, 3));

//Part 3
interface Person{
    name: string,
    age: number
}

function greet(person: Person): string{
    return `Hello, ${person.name}! You are ${person.age} years old.`;
}

console.log(greet({name: "Hal", age: 33}));