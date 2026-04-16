function processTransaction(
  amount: number,
  isCredit: boolean,
  description?: string
): void {
if(amount<0) {
    throw new Error("Amount cannot be negative");
}
const desc: string = description ?? "No description provided";
const transType: string = isCredit ? "Credit" : "Debit";
console.log("Transaction Summary");
console.log(`Amount: ${amount}`);
console.log(`Description: ${desc}`);
console.log(`Type: ${transType}`);
}
processTransaction(100, true, "salary");
processTransaction(300, true); // description optional
processTransaction(-200, false); // negative number

export {};