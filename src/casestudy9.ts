type CustomerID= string;


type Customer ={
    id: CustomerID;
    name: string;
    email?: string;
};

type OrderStatus ="pending" | "shipped" | "returned";

type ProcessOrder = (orderId: number, callback: (status: OrderStatus) => void) => void;
type Container<T> = {
    value: T;
    timestamp: Date;
};
let customer: Customer = {
  id: "C101",
  name: "Sana",
 
};

let customerContainer: Container<Customer> = {
  value: customer,
  timestamp: new Date()
};
console.log(customer);
console.log(customerContainer);

export {};