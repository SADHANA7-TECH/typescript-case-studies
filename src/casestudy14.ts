
class FeedbackBox<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}


function getFirstItem<T>(arr: T[]): T | undefined {
  return arr.length > 0 ? arr[0] : undefined;
}


const stringBox = new FeedbackBox<string>();
stringBox.add("Good");
stringBox.add("Excellent");

const numberBox = new FeedbackBox<number>();
numberBox.add(10);
numberBox.add(20);

console.log(stringBox.getAll()); 
console.log(numberBox.getAll()); 

console.log(getFirstItem([1, 2, 3])); 
console.log(getFirstItem(["a", "b"])); 