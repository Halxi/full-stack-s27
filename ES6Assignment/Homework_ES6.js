//作业1
var name = 'Alice';
if(true){
    var name = 'Bob';
    console.log(name); // Bob
}
console.log(name); // Bob
//将以下代码重写为使用 let 和 const 代替 var。解释为什么在每种情况下 let 或 const 更合适。

let name = 'Alice';
if(true){
    name = 'Bob';
    console.log(name); // Bob
}
console.log(name); // Bob
/*解释：使用let声明的变量name在全局作用域中被赋值为'Alice'。
在if块内，name被重新赋值为'Bob'，并且这个赋值影响到了全局作用域。
因此，在if块外打印name时，输出仍然是'Bob'。*/

const name = 'Alice';
if(true){
    name = 'Bob';
    console.log(name); // Bob
}
console.log(name); // Alice
/*解释：使用const声明的变量在全局作用域中被赋值为'Alice'。
在if块内，name被重新赋值为'Bob'，但是由于const的特性，这个赋值不会影响到全局作用域。
因此，在if块外打印name时，输出仍然是'Alice'。*/

//作业2
function add(a, b) {
    return a + b;
}
//将以下函数转换为箭头函数。然后解释箭头函数如何与常规函数不同地处理 this 关键字。

const add = (a, b) => a + b;
/*在常规函数中，this的值取决于函数调用的上下文。
在调用函数时，this指向调用该函数的对象。
而在箭头函数中，this的值是词法绑定的，即它继承自外部函数的this值。
这意味着在箭头函数内部，this始终指向定义时的上下文，而不是调用时的上下文。*/

//作业3
let greeting = `Hello, ${name}! Welcome to the course.`;
//使用模板字面量重写以下字符串拼接代码。在字符串中添加一个新行。
let greeting = `Hello, ${name}!
Welcome to the course.`;

//作业4
const person = {name: 'Alice', age: 25, city: 'Sydney'};
//使用解构赋值从 person 对象中提取 name 和 age 属性。然后编写一个函数，在参数列表中解构对象的属性
const {name, age} = person;
const printPersonInfo = ({name, age}) => {
    console.log(`Name: ${name}, Age: ${age}`);
};

printPersonInfo(person);

//作业5
function calculateArea({width, height}) {
    return width * height;
}
//编写一个计算机行面积的函数。如果没有提供高度，假设它是一个正方形。使用默认参数为高度设置默认值。
function calculateArea({width, height = width}) {
    return width * height;
}

//作业6
function sum(a,b) { 
    return a + b;
}

let arr1 = [1,2];
let arr2 = [3,4];
//使用 Rest 运算符创建一个函数，能够将任意数量的参数相加。然后使用 Spread 运算符合并两个数组。
const sum = (...args) => args.reduce((acc, curr) => acc + curr, 0);
const combined = [...arr1, ...arr2];
console.log(sum(...combined));