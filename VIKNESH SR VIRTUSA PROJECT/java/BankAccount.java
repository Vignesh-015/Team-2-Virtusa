import java.util.Scanner;

class BankAccount {

    private double balance;

    BankAccount(double balance) {
        this.balance = balance;
    }

    void deposit(double amount) {
        balance = balance + amount;
    }

    void withdraw(double amount) {
        if (amount <= balance)
            balance = balance - amount;
        else
            System.out.println("Insufficient balance");
    }

    void display() {
        System.out.println("Balance: " + balance);
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter initial balance: ");
        double b = sc.nextDouble();

        BankAccount account = new BankAccount(b);

        System.out.print("Enter deposit: ");
        double d = sc.nextDouble();
        account.deposit(d);

        System.out.print("Enter withdrawal: ");
        double w = sc.nextDouble();
        account.withdraw(w);

        account.display();

        sc.close();
    }
}