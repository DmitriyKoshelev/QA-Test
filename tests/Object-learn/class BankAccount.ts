class BankAccount {
   private balance: number;
    accountHolder: string;
    accountId: string;
    currency: string;
    accountType: string;
    pin:string;

    constructor(balance: number, accountHolder: string, accountId: string, currency: string, accountType: string) {
        this.balance = balance;
        this.accountHolder = accountHolder;
        this.accountId = accountId;
        this.currency = currency;
        this.accountType = accountType;

        this.pin = this.generatePin().toString()
    }

    generatePin(){
        return Math.round(Math.random() * 10000);
        
    }

    getBalance(pin: string) {
        if (pin === this.pin) {
            return this.balance;
    }  else     
        return new Error("Invalid PIN");
    }

    addMoney (moneyAmount: number) {
        this.balance += this.balance + moneyAmount;
    }
    
}


const account = new BankAccount(100, "John Doe", "Platina", "USD", "Checking");

account.addMoney(50);
console.log(account.getBalance(account.pin));