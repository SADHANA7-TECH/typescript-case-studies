let score: number=10;
if(score){
    let score: number=20;
    console.log(score); //inner block so the output will be 20
}
//let score:number=30; // error: Cannot redeclare block-scoped variable 'score'.
console.log(score); //outer block the output will be 10


const COUNTRY : string= "South Korea";
console.log(COUNTRY); // output will be South Korea

    //COUNTRY = " india"; //error because we can't change the const value once it is assigned

export {};