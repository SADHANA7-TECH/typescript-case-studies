function checkSign(num: number): void{
    if(num>0){
        console.log("The number is positive")
    }
}

function evenOrOdd(num: number): void{
    if(num%2==0) {
        console.log("The number is even");
    } 
    else 
        {
        console.log("The number is odd");
    }
}
function Grade(score: number): void {
    if(score>=90){
        console.log("A");
    }
    else if(score>=80){
        console.log("B");

    }
    else if(score>=70) {
        console.log("C");
    }
    else if(score>=60) {
        console.log("D");
    }
    else {
        console.log("F");
    }
}

function provideFeedback(grade: string): void {
    switch(grade) {
        case "A":
            console.log("Excellent work!");
            break;
        case "B":
            console.log("Good job!");
            break;
        case "C":
            console.log("Satisfactory performance.");
            break;
        case "D":
            console.log("Needs improvement.");
            break;
        case "F":
            console.log("Failed. Please review the material.");
            break;
        default:
            console.log("Invalid grade.");
    }
}
checkSign(5);
evenOrOdd(345);
Grade(84);
provideFeedback("B");