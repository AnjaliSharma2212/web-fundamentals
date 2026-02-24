// JS basics: variables, functions, loops, arrays, objects, browser interaction
// WEB Fundamentals JavaScript
// Variables: Varibales are containers for storing the  of data values so that can be accessed and manipulated.
// In modern Javascript we use let and const for defining the variables.


// Let used for those variables that value might change
let message = "Hii, My name is Anjali Sharma"
message = "Hii, Anjali Sharma this side."
// here the value of message changed to the updated message.
console.log(message)

//const is used when the variables value not intended to change
const pi = 3.14159
alert("pi value 3.14 is const variable that will raise error")


//Functions :
// Functions are reuseable form of code that is used to perfom specific task. They allow you to write the code and avoid repetition.

function greet(name) {
    return "Hello" + " " + name + "!"
}
console.log(greet("Anjali")) //ouput = Hii Anjali!


//Arrow functions allows the shorter  expressions for the functions 
// Arrow functions + ES6 a more shorter and concise way to write fun.

const greetArrow = name => "Hii" + " " + name + "!"
console.log(greetArrow("Anjali Sharma")) // same logic but more simple and concise syntax

// loops 
// loops are used when we want same line multiple times

for (let i = 0; i < 6; i++) {
    if (i % 2 === 0) {
        console.log(i + "" + "=" + " i")
    }
}


// While loop
// with while loop we can run the code till the condition is true

let i = 0
while (i < 6) {
    console.log("i is printed", i)
    i += 2
}

//Arrays
// Data structure that stores a collection of elements typically of the same type, in contiguous memory locations.

const fruits = ["Apple", "Banana", "grapes", "pomegrate"]
console.log(fruits[0])// Apple
console.log(fruits.length)// 4
console.log(fruits.push("papaya"))// add the new fruit at the end
console.log(fruits)


//Objects
//Objects are used to store collections of data and more complex entities
//They are a core data type in , storing data as key-vlaue pairs

const user={
    name:"Anjali",
    age:23,
    hobbies:["read","code"]
}
console.log(user.name)


// Browser Interaction
//  js interacts with web pages using the Document Object Model (DOM). 
//  It can dynamically update HTML content and react to user events. 
// Accessing Elements:

const myElement = document.getElementById("p-id");
myElement.innerHTML=13
// or
const myQueryElement = document.querySelector(".myClass");
myQueryElement.innerHTML="Anjali"


// Modifying Content:

myElement.textContent = "New text content!";
// Event Handling: Responding to user actions (like clicks).

document.querySelector("button").addEventListener("click", function(e) {
    e.preventDefault()
  alert("Button clicked!");
});