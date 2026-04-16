type Transaction = {
  id: number;
  type: "checkout" | "return" | "cancelled" | "priority";
};

const transactions: Transaction[] = [
  { id: 1, type: "checkout" },
  { id: 2, type: "cancelled" },
  { id: 3, type: "return" },
  { id: 4, type: "priority" },
  { id: 5, type: "checkout" }
];

const inventory: { [title: string]: number } = {
  "The Hobbit": 3,
  "1984": 5,
  "TypeScript Guide": 2
};

const visitors: string[] = ["Alice", "Bob", "Carol"];

let counts = {
    checkout: 0,
    return: 0,
    priority: 0,
    cancelled: 0
};

for (let i = 0; i < transactions.length; i++) {
    const trans = transactions[i];
    if (counts.hasOwnProperty(trans.type)) {
        counts[trans.type]++;
    }
}
console.log("Transaction counts:", counts);

let i = 0;
while (true) {
    const trans = transactions[i];

    if (!trans) {
        console.log("No more transactions");
        break;
    }

    if (trans.type === "priority") {
        console.log("Priority found! Breaking loop.");
        break;
    }

    console.log("Processing:", trans.id);
    i++;
}


let returnQueue = [...transactions];
let index = 0;

do {
    const tx = returnQueue[index];

    if (tx && tx.type === "return") {
        console.log("Processing return:", tx.id);

        if (Math.random() < 0.3) {
            returnQueue.push({
                id: returnQueue.length + 1,
                type: "return"
            });
        }
    }

    index++;
} while (index < returnQueue.length && index < 10);


for (let book in inventory) {
    inventory[book] = 0;
}
console.log("Reset inventory:", inventory);


for (let i = visitors.length - 1; i >= 0; i--) {
    console.log(visitors[i]);
}

export {};