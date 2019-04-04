// Reduce takes a group of information (usually an array or an object) and 'reduces' it down to one thing.

// A typical .reduce() needs the following things:

//  1. A variable for the reduction of our original array to go into 
//      var newArray = array.reduce()

//      copy here

//  2. A function inside the parenthesis            
//      var newArray = array.reduce( () => {} )

//      copy here

//  3. That function takes in total, e (element), i (index) and arr (array) as arguments  (only total && e is required, we can leave out i and arr)     
//      var newArray = array.reduce( (total, e, i, arr) => {} )

//      copy here

// 4. After the function, it takes in an initial value (0 for adding up sums, 1 for multiplying numbers, {} for an object, etc)
//      var newArray = array.reduce( (total, e, i, arr) => {}, 0)

//      copy here

// 5. Once we have that template set up, we can put code inside our function's curly brackets. 
// Here, we will start with a basic addition filter:
//      var newArray = array.reduce( (total, e, i, arr) => {
//          return total + e;
//      }, 0)

//      copy here


///  Question 1 ///

// Here is an array of numbers called "nums" we want to add all together to get their sum.
// Write a function using .reduce() that returns the sum of all numbers in the array "nums".

// The answer should come out to 10355

var nums = [12, 4, 17, 288, 35, 9999]

var sumOfNums// code here



/// Question 2 ///

// Here is an array of numbers called "origin." We want to know what all the numbers multiplied with each other is.

// The answer should come out to 2400

var origin = [2, 4, 10, 6, 5]

let multi // code here



/// Question 3 ///

// Now we have an array called "purchases." We have $100 dollars (our initial value), and we want to see 
// how much we have left after all our purchases.

// The answer should come out to 23

var purchases = [12, 20, 15, 30]

let moneyLeft // code here



/// Question 4 ///

// Here we have an array called "people." Each element in the array is an object.
// Each object has two properties; name and money.
// Write a reduce function that adds all the money from each person together.

// The answer should come out to 3202

var people = [
    {
        name: "Sarah",
        money: 200
    },

    {
        name: "Kris",
        money: 1000
    },

    {
        name: "Sonya",
        money: 2
    },
    
    {
        name: "Donald Trump",
        money: 2000
    }
     
]

let moneyTotal// code here