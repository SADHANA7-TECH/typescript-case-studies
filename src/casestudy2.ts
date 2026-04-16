


import promptSync from "prompt-sync";
const userInput=promptSync();
//Create a variable for your favorite fruit and print it.
const favFruit: string=userInput("Enter your favorite fruit: ");
console.log("My favorite fruit is: " + favFruit);

//Write a function that takes a number and prints double its value.
function getdouble(num: number): number{
    return num*2;

}
const num1: number=Number(userInput("Enter a number: "));
console.log("the double of "  +num1+  "is " +getdouble(num1));

//
const userName: string=userInput("Enter your name: ");

/*Define a class called Person
syntax= class classname*/
class Person{
    //methos creation
    sayHello(name:string){
        console.log("Hello " +name);
    }
}

//object creation
const userName1= new Person();
userName1.sayHello(userName);
export {};



