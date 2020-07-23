var ResultContainer = document.getElementById("ResultContainer");
ResultContainer.innerHTML = "Setting up the environment!";

//“var” keyword are accessible throughout the program
if (true) {
  var varVariable = "Variable using var";
}
ResultContainer.innerHTML = varVariable.toString();

//“let” keyword are only available in the block in which they are declared
if (true) {
  let letVariable = "Variable using let";
}
ResultContainer.innerHTML = letVariable;

//let and var access, var undefined and let gives error
console.log(testVariableVar);
var testVariableVar;
console.log(testVariableLet);
var testVariableLet;

function sum(...inputs) {
  var result = 0;
  for (let i of inputs) {
    result += i;
  }
  return result;
}
ResultContainer.innerHTML = sum(5, 10, 5, 5);

function sum(input1, input2, ...remainingInputs) {
  var result = input1 + input2;
  for (let i of remainingInputs) {
    result += i;
  }
  return result;
}
ResultContainer.innerHTML = sum(5, 10, 5, 5);

//destructuring
let fruits = ["Apple", "Watermelon", "Grapes", "Guava"];
let [fruit1, ...OtherFruits] = fruits;
ResultContainer.innerHTML = OtherFruits;

//spread syntax
function sum(a, b, c) {
  return a + b + c;
}
let input = [5, 9, 6];
ResultContainer.innerHTML = sum(...input);
//for loop
for (let i = 0; i < 8; i++) {
  if (i == 1) {
    continue;
  }
  console.log("i: " + i);
  if (i == 4) {
    break;
  }
}
//forEach loop
let fruits = ["Apple", "Grapes", "Watermelon"];
fruits.forEach((fruit, index) => {
  console.log(index + ": " + fruit);
});
//while
let fruits = ["Apple", "Grapes", "Watermelon"];
let i = 0;
while (i < fruits.length) {
  console.log(i + ": " + fruits[i]);
  i++;
}
//do...while
let fruits = ["Apple", "Grapes", "Watermelon"];
let i = 0;
do {
  console.log(i + ": " + fruits[i]);
  i++;
} while (i < fruits.length);
//type conversion
let input = [5, 9, 6];
console.log("Type Of [5,9,6]: " + typeof input);
console.log("Type Of [5,9,6]: " + typeof input.toString());
console.log("Type Of '2': " + typeof Number("2"));
console.log("'true' to Number: " + Number(true));
console.log("'hi' to Boolean: " + Boolean("hi"));
console.log("'NaN' to Number: " + Boolean(NaN));
//operators
var a=16, b=17;
console.log('Arithmetic Operators');
console.log('16+2 = ' + (16+2));
console.log('16-2 = ' + (16-2));
console.log('16∗2 = ' + (16∗2));
console.log('16/2 = ' + (16/2));
console.log('17%2 = ' + (17%2));
console.log('Comparison Operators');
console.log('1 == "1" ' + ('1' == 1));
console.log('1 === "1" ' + ('1' === 1));
console.log('1 != 2 ' + (1 != 2));
console.log('1 < 2 ' + (1 < 2));
console.log('1 > 2 ' + (1 > 2));
console.log('3 <= 3 ' + (3 <= 3));
console.log('3 >= 3 ' + (3 >= 3));
console.log('Assignment Operators');
console.log('16+=2 ' + (a+=2));
console.log('16–=2 ' + (a–=2));
console.log('16∗=2 ' + (a∗=2));
console.log('16/=2 ' + (a/=2));
console.log('17%=2 ' + (b%=2));
console.log('Logical Operators');
console.log('true && false: ' + (true && false));
console.log('true || false: ' + (true || false));
console.log('!true: ' + (!true));
console.log('Ternary Operator');
console.log('true?T:F --- ' + (true?'T':'F'));
//function
function function_name(input_paramaters)
{
function_body
}
//function expression
let variable_name = function(input_paramaters)
{
function_body
}
//functions use
function fun()
{
console.log('Regular JS Function.');
}
let functionExpr = function(){
console.log('Function Expression.');
}
let arrFunction = () => {
console.log('Arrow Function.');
}
fun();
functionExpr();
arrFunction();
//closures
var increment = (function () {
    var counter = 0;
    return function () {
        counter += 1;
        console.log(counter);
        }
        })();
        increment();
        increment();
        increment();
//arrays
var fruits = ['Watermelon','Apple','Grapes'];
console.log('Array: ' + fruits.toString());
fruits.sort();
console.log('Sorted Array: ' + fruits.toString());
console.log('forEach:');
fruits.forEach(element => {
console.log(element);
});
fruits.push('Strawberry');
console.log('Push: ' + fruits.toString());
fruits.pop();
console.log('Pop: ' + fruits.toString());
fruits.shift();
console.log('Shift: ' + fruits.toString());
fruits.unshift('Apple')
console.log('Unshift: ' + fruits.toString());
console.log('isArray? ' + Array.isArray(fruits));
var moreFruits = ['Strawberry'];
fruits = fruits.concat(moreFruits);
console.log('Concatenate: ' + fruits.toString());
fruits.splice(0,0,'Guava');
console.log('Splice: ' + fruits.toString());
var top3fruits = fruits.slice(0,3);
console.log('Slice: ' + top3fruits.toString());
//classes
class Dog
{
constructor(id){
this.id = id;
}
}
let dog = new Dog(100);
console.log(dog.id);
dog.id = 200;
console.log(dog.id);
//inheritance
class Animal
{
constructor(type){
this.type = type;
}
getType(){
return this.type;
}
}
class Dog extends Animal{
constructor(){
super('dog');
}
}
let dog = new Dog();
console.log(dog.getType());
//how to import class from module
import { Mammal } from './modules/Mammals.js';
let dog = new Mammal('monkey');
console.log(dog.getType());