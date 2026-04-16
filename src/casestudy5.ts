function recordAnswer(questionId :number, answer:any){
    return {
        questionId, //object
        answer // object
    };

}
let answer1= recordAnswer(1, "Hello"); // using string
let answer2= recordAnswer(2, 42); // numbers
let answer3= recordAnswer (3,["yes", "no"]); //array
console.log(answer1);
console.log(answer2);
console.log(answer3);

export {};