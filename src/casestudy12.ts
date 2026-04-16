function displayMember(id: number, name: string, email?: string) {
    console.log(`ID: ${id}, Name: ${name}`);
    if(email) console.log(`Email: ${email}`);
}
displayMember(101, "Sana", "sana@gmail.com");
displayMember(102, "Sam");

function calculateFines(...fines: number[]): number{
    let sum=0;
    for(let fine of fines) sum +=fine;
    return sum;
       
}
console.log("Total Fines:", calculateFines(5,10,2.5));
 function membershipFee(fee: number, discount: number=0.1): number{
    return fee-(fee*discount);
 }
 console.log("membership fee after discount:", membershipFee(100));
 console.log("Membership fee with coustom discount:", membershipFee(100,0.2));


type Handler = (name: string) => void;


const consoleGreet: Handler = (name) => {
  console.log("Hello " + name);
};


const vipGreet: Handler = (name) => {
  console.log("Welcome VIP " + name);
};

function greet(name: string, handler: Handler) {
  handler(name);
}

greet("Alice", vipGreet);
greet("Bob", consoleGreet);

function factorial(n: number): number{
    if(n===0) return 1;
    return n * factorial(n-1);
}

factorial(5);

type Book = {
  title: string;
};


function generateReport(data: Book[], format: "text"): string;
function generateReport(data: Book[], format: "json"): string;


function generateReport(data: Book[], format: "text" | "json"): string {
  if (format === "json") {
    return JSON.stringify(data, null, 2);
  }

  let result = "";
  for (let item of data) {
    result += item.title + "\n";
  }
  return result;
}


const books: Book[] = [
  { title: "1984" },
  { title: "Harry Potter" }
];


console.log("TEXT REPORT:");
console.log(generateReport(books, "text"));

console.log("JSON REPORT:");
console.log(generateReport(books, "json"));


export {};