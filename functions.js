console.log('hello world')

/*Function Assignment - The Basics*/

//Tripple number
function triple(num) {
    return num * 3
}
console.log(triple(2))


//Double number
const double = function(num) {
    return num * 2
}
console.log(double(2))


//Quad number
const quad = (num) => {
    return num * 4
}
console.log (quad(4))


/*Reversed String*/
function solution(str) {
    let solution = '';
    for (let i = str.length - 1; i >= 0; i--) {
      solution += str[i];
    }
    return solution;
}


/*String Interpolation*/

/*Returning Strings*/
function greet(name){
    return `Hello, ${name} how are you doing today?` 
}
console.log(greet("Isaac"))
  

function greet(name){
    return "Hello" + name + "how are you doing today?"
}
console.log(greet("Isaac"))


/*If / Else Statement*/
//if (condition) statementa
//else           statementb

function oddEven(n){
    if (n % 2 == 1) return "odd number";
    else            return "even number";
}
console.log((oddEven(11)))


function oldYoung(age){
    if (age < 16)      return "children"
    else if (age < 50) return "young man"   //use "else if" if needed
    else               return "old man"
}
console.log(oldYoung(30))


function saleHotdogs(n){
    if (n < 5) {
        let price = n * 100
        return price / 100
    } else if (n >= 5 && n < 10) {
        let price = n * 95
        return price / 100
    } else {
        let price = n * 90
        return price / 100
    }
}
console.log(`Your hotdogs cost: $${saleHotdogs(3)}`)