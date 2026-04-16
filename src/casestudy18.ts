interface PaymentGateway {
  processPayment(amount: number): Promise<boolean>;
}

class PaymentProcessor {
  constructor(private gateway: PaymentGateway) {}

  async pay(amount: number): Promise<void> {
    const success = await this.gateway.processPayment(amount);
    if (success) {
      console.log("Payment successful!");
    } else {
      console.log("Payment failed.");
    }
  }
}     //BankTransferGateway
class BankTransferGateway implements PaymentGateway {
  async processPayment(amount: number): Promise<boolean> {
    console.log(`Processing payment of $${amount} via Bank Transfer.`);
    return true;
  }
}

// Using  PaymentProcessor
const bankGateway = new BankTransferGateway();
const processor = new PaymentProcessor(bankGateway);
processor.pay(300);

// testing the mock failure gateway
class FailingMockGateway implements PaymentGateway {
  async processPayment(amount: number): Promise<boolean> {
    console.log(`Mock processing payment of $${amount} - FAILED.`);
    return false;
  }
}

    // Test error handling
const failingGateway = new FailingMockGateway();
const testProcessor = new PaymentProcessor(failingGateway);
testProcessor.pay(50);

export {};