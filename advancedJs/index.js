//call stack
function first(){        // 
console.log("First function")
second()
}

function second(){
console.log("Second function")   // second fun
third()
}

function third(){          // third function
console.log("Third function") 
fourth()
}

function fourth(){
console.log("fourth function")
}

first()  // invoking or calling the fun so that all other secoond, third, fourth fun will get invoked




//Event loop in Javascript

console.log("Start") // synchronous fun

setTimeout(() => {          //asynchronous fun
    console.log("Timeout") 
}, 1000);

Promise.resolve().then(()=>{        // promise   log
    console.log("Promise resolved.")
})
console.log("end")  // synchornous fun




let fullName = "Anjali";  //we can update the let but we cannot re-declare it
const pi = 3.14;            //we cannot update or re-declare const
console.log(fullName);
console.log(pi);
var age1 = 22;               //we can update and re-declare var but it is not recommended to use var
console.log(age1);



//ARROW FUNCTIONS IN JAVASCRIPT

const add = (a, b) => {               //arrow function to add two numbers
    return a + b;
};

const multiply = (a, b) => a * b;     //concise body syntax

let sumResult = add(5, 10);
let multiplyResult = multiply(5, 10);

console.log("The sum is: " + sumResult);
console.log("The product is: " + multiplyResult);


//ARRAY METHODS IN JAVASCRIPT

let numbers = [1, 2, 3, 4, 5];

//forEach method
numbers.forEach(num => {
    console.log("Number: " + num);
});

//map method
let squaredNumbers = numbers.map(num => num * num);
console.log("Squared Numbers are: " + squaredNumbers);

//filter method
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers are: " + evenNumbers);

//reduce method
let total = numbers.reduce((acc, num) => acc + num, 0);
console.log("Total Sum is: " + total);


// DESTRUCTURING IN JAVASCRIPT

//Array destructuring
let [firstNum, secondNum, ...restNums] = numbers;
console.log("First Number: " + firstNum);
console.log("Second Number: " + secondNum);
console.log("Rest of the Numbers: " + restNums);

//Object destructuring
let person = {
    name: "Anjali Sharma ",
    age: 22,
    city: "Jammu"
};

let {name, age, city} = person;
console.log("Name: " + name);
console.log("Age: " + age);
console.log("City: " + city);


//CLASSES AND OBJECTS IN JAVASCRIPT

class Person {                              //defining a class
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");    //method of the class
    }
}

let person1 = new Person("Anjali", 22);        
person1.greet();                                          //creating an object of the class and calling the method

let person2 = new Person("Alice", 30);
person2.greet();                                          //creating another object of the class and calling the method



//SPREAD OPERATOR IN JAVASCRIPT

//Using spread operator with arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinedArr = [...arr1, ...arr2];
console.log("Combined Array: " + combinedArr);

//Using spread operator with objects
let obj1 = {a: 1, b: 2};
let obj2 = {c: 3, d: 4};
let combinedObj = {...obj1, ...obj2};
console.log("Combined Object: ", combinedObj);



//REST OPERATOR IN JAVASCRIPT

function sum(...numbers) {               //rest operator to accept variable number of arguments
    return numbers.reduce((acc, num) => acc + num, 0);
}

let totalSum = sum(1, 2, 3, 4, 5);
console.log("Total Sum using Rest Operator: " + totalSum);

//OPTIONAL CHAINING IN JAVASCRIPT

let user = {
    name: "Anjali Sharma",
    address: {
        city: "Jammu",
        country: "India"
    }
};

console.log("City: " + user.address?.city);          //accessing existing property
console.log("Zip Code: " + user.address?.zipCode);   //accessing non-existing property safely
console.log("Phone: " + user.contact?.phone);        //accessing non-existing nested property safely




//ERROR HANDLING IN JAVASCRIPT

try {
    //code that may throw an error
    let result = 10 / 0;
    if(!isFinite(result)){
        throw new Error("Division by zero is not allowed.");
    }
    console.log("Result: " + result);
} catch (error) {
    //handling the error
    console.log("Error occurred: " + error.message);
} finally {
    //code that will run regardless of error occurrence
    console.log("Execution completed.");
}
person1.greet();                                          //creating an object of the class and calling the method

let person5 = new Person("Alice", 30);
person5.greet();                                          //creating another object of the class and calling the method


