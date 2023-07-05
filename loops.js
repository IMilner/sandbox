console.log('hellow world')

// Initializer or starter or starting point
// Condition for when your loop should end
// Incrementer or decromenter|| continues up or down


//Prints numbers 0-15
for (var i=0; i<=15; i++) {
    console.log(i)
}

//Adds numbers 1-11
var total = 0;
for (var num = 0; num < 11; num++) {
    console.log(num)
    total = total + num;
}
console.log("The total is: " + total)


//Loop through an array
var fruits = ["mango", "banana", "apple", "cherry"]
for (var i=0; i<fruits.length; i++) {
    console.log(fruits[i])
}


//Loop through an object
var data = {
    name: "John",
    age: 28,
    maritalStatus: true
}
for (var elem in data) {
    console.log(elem, data[elem])
}


//loop through an array of numbers and add 10 to each item
var numbers = [1, 2, 3, 4, 5]
for (var i=0; i<numbers.length; i++) {
    console.log(numbers[i]+ 10)
}

