"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const userInput = (0, prompt_sync_1.default)();
//Create a variable for your favorite fruit and print it.
const favFruit = userInput("Enter your favorite fruit: ");
console.log("My favorite fruit is: " + favFruit);
//Write a function that takes a number and prints double its value.
function getdouble(num) {
    return num * 2;
}
const num1 = Number(userInput("Enter a number: "));
console.log("the double of " + num1 + "is " + getdouble(num1));
//
const userName = userInput("Enter your name: ");
/*Define a class called Person
syntax= class classname*/
class Person {
    //methos creation
    sayHello(name) {
        console.log("Hello " + name);
    }
}
//object creation
const userName1 = new Person();
userName1.sayHello(userName);
