//Create a BankAccount class with the following features 

// Properties: 
// -balance 
// -accountType 

// Functions: 
// deposit(amount) 
// withdraw(amount) 

// Create an instance of the BankAccount class 
// and make sure that the user provides initial amount 
// and accountType in order to create the BankAccount object. 
// After that deposit $100 in the account. 
// Next withdraw $50 from the account. Finally, 
// print out the remaining balance of the account. 

userInput = prompt("Initial amount: ");
userInput2 = prompt("Account type: ");


class BankAccount {
    constructor(balance, type) {
      this.balance = balance
      this.type = type
    }
        deposit(amount) {
            this.balance += amount
        }
        withdraw(amount) {
          this.balance -= amount
          }
        
    }
  
let myAccount = new BankAccount(40, "checking") 
console.log(myAccount)
myAccount.deposit(100)
myAccount.withdraw(50)
  
console.log(myAccount.balance)
  
  
//Create a Palindrome app in Javascript which will 
//print whether a string is a palindrome or not


let word = "racecar"

function findPalindrome(word) {
  for (let i = 0; i < word.length; i++) {
    if (word != word.split('').reverse().join('')) {
      return "False"
    } else {
        return "True"
    }
    }  

}

console.log(findPalindrome(word))


//Create an app which removes duplicates from an array 

// Example: ["John","Mary", "Alex", "Steve", "Mary", "John"] 
// Result should be: ["John","Mary","Alex","Steve"]

array = ["John", "Mary", "Alex", "Steve", "Mary", "John", "Steve", "Steve"]

let unique = [...new Set(array)];
console.log(unique);

//Create an app whichs returns true/false depending on if the item is in the array 

array = ["time", "scope", "power", "truth", "magic"]

function findItem() {
  for(i of array) {
    if(i == array[2]) {
      return "True"
    } else if(i != array[2]) {
        return "False"
    }
  }
}
console.log(findItem())


