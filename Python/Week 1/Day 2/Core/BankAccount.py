class BankAccount:
    accounts=[]
    # don't forget to add some default values for these parameters!
    def __init__(self, balance=0,int_rate=1.01): 
        self.balance=balance
        self.int_rate=int_rate
        BankAccount.accounts.append(self)
        return None
        # don't worry about user info here; we'll involve the User class soon
    def deposit(self, amount):
        self.balance+=amount
        return self

    def withdraw(self, amount):
        if self.balance-amount>0:
            self.balance-=amount
        else :
            print("Fonds insuffisants : facturer des frais de 5 $")
            self.balance-=5
        return self
    def display_account_info(self):
        print(f'Balance {self.balance}')
        return self
    def yield_interest(self):
        if self.balance>0:
            self.balance=self.balance*self.int_rate
        return self
    @classmethod
    def instances(cls):
        for i in cls.accounts:
            print(i)


acc1=BankAccount(100)
acc2=BankAccount(300)

acc1.display_account_info()
acc2.display_account_info()

acc1.deposit(30).deposit(70).deposit(45).withdraw(140).yield_interest().display_account_info()
acc2.deposit(100).deposit(45).withdraw(50).withdraw(20).withdraw(35).withdraw(35).yield_interest().display_account_info()

BankAccount.instances()
