// The indexOf() function takes a value as a parameter and tells us the index at which that value first appears.

// For example, if I have an array called myNums:

    const myNums = [2, 4, 6, 8]

// I want to find which index the number 6 is at:

    let sixIndex = myNums.indexOf(6)
    console.log(sixIndex)

// sixIndex logs out to "2," which is the index that 6 first appears at.


// Let's say I have an array of fruits:

    let fruits = ["banana", "mango", "strawberry", "peach"]

// I want to look in that "fruit" array and see if it has the word "pineapple"

    console.log(fruits.indexOf('pineapple'))

// This logs out to '-1,' which means that the string 'pineapple' doesn't exist in that array.


/// Question 1 ///

/// Console log out the index of the word "Sonya" in the array "babyNames"

const babyNames = ["Bjorn", "Freya", "Sigrid", "Sonya", "Erik", "Karen"]

///console.log(code here, check with Quokka)



/// Question 2 ///

// Here is a really cool use of indexOf. Let's say we have an array of names with several repeats:

let dumbNames = ["Karen", "Jimmer", "Ashleigh", "Karen", "Gertie", "Jimmer", "Randy"]

// If I look up dumbNames.indexOf("Karen"), the result will always be 0, even though it appears twice in the array.
// indexOf only tells us the index of the first time it occurs in the array.
// That means that if we want to filter out duplicate names, we can use indexOf to help us.

let noRepeats = dumbNames.filter( function (e, i, arr) {
    return arr.indexOf(e) >= i
})

// Our filter function checks each element (e) of the array (arr).
// Since indexOf only shows the index of the first time that element appears, it won't always equal the element's index (i).
// For example, our second "Karen" will have an indexOf = 0, even though it's actual index (i) is 3.
// In our reduce filter, we can make sure that anything that has an indexOf # that is smaller than it's index (i) # is kicked out.

console.log(noRepeats) // Check with Quokka to see the new array.


// Here's a new array of shopping items. There are several repeats.

let groceries = ["doritos", "donuts", "formula", "apples", "donuts", "oreos", "doritos" ]

// Now write a filter function using indexOf from memory (as much as you can), where "shopping" has no repeats.

let shopping//code here