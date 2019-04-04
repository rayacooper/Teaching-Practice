// The .map function makes a new, altered array out of another array.

// The .map function needs the following things:

//  1. A variable for the reduction of our original array to go into 
//      var newArray = array.map()

//      copy here

//  2. A function inside the parenthesis            
//      var newArray = array.map( () => {} )

//      copy here

//  3. That function takes in e (element), i (index) and arr (array) as arguments  (only e is required, we can leave out i and arr)     
//      var newArray = array.map( (e, i, arr) => {} )

//      copy here


//  4. Once we have that template set up, we can put code inside our function's curly brackets. 
// Here, we will start with concatenating ' sandwich' onto each element:
//      var newArray = array.reduce( (e, i, arr) => {
//          return e + ' sandwich';
//      })

//      copy here

/// Question 1 ///

// Here we have an array of numbers called "ages." 
// We want to increase each number by 1 in our new array, agedUp

let ages = [12, 29, 33, 45, 99]

let agedUp// code here


console.log(agedUp)   // Use Quokka to check if answer is correct

/// Question 2 ///

// Now we have an array called "dates." This is a record of poor, sad Jimmy's dates.
// Each element is a boolean, where 'true' means he kissed the girl at the end of the date.
// 'False' means she left the date early.
// Let's boost his self esteem with a new array called 'realDates'
// 'realDates' will be an array where every element says 'true'

let dates = [false, false, false, false, false, true, false, true, true, false, false, false, false]

let realDates// code here


console.log(realDates)  // Use Quokka to check if answer is correct