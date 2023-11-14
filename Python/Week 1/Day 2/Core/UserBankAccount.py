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
class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = BankAccount(balance=0,int_rate=0.02)
    
    def make_deposit(self, amount):
    	self.account.deposit(amount)
        
    def make_withdraw(self, amount):
    	self.account.withdraw(amount)
        
    def display_user_balance(self):
        self.account.display_account_info()

user1=User("anis","anislaghmani@gmail.com")
user1.display_user_balance()
user1.make_deposit(200)
user1.make_withdraw(30)
user1.display_user_balance()
BankAccount.instances()


