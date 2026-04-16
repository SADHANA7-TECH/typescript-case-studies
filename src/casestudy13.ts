function describePerson(name: string, age?: number): void {
    if (age !== undefined) {
        console.log(`Name: ${name}, Age: ${age}`);
    } else {
        console.log(`Name: ${name}, Age: Unknown`);
    }
}
//describePerson("Sana", 25);
//describePerson("Sam");


function calculatePrice(basePrice:number, discount: number=0.1): number{
    return basePrice-(basePrice*discount);
}


describePerson("Eve");
describePerson("Frank", 28);

console.log("Price after discount:", calculatePrice(100));
console.log("price with 20% discount:", calculatePrice(100, 0.2));

export {};