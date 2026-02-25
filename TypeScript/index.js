"use strict";
//Data Types in Typescript
Object.defineProperty(exports, "__esModule", { value: true });
//Primitive data type and Non-Primitive datatype
// typescript allow us to check the errors via type
//type: number
let age = 20;
// age="twenty" // this will show us error
console.log(age);
//type:string
let fullName = "Anjali Sharma";
console.log(fullName);
//type:boolean
let isLoggedIn = true;
//union type
// null
let middlename = null; // empty on purpose and string | null means its  string or empty
//undefined
let pincode = undefined; // value is not given yet and number | undefined means its number or not defined yet
//symbol
let id = Symbol("5");
//big Int
let bigNumber = 2342344556353332n;
//-----------Non Pritmitive Data types----------------//
//non primitive datatypes stores the multiple or complex form of data
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let str = ["Apple", "banana", "orange"];
//Tuple -> fixed order and fixed type
let person = ["Female", 23]; //fixed order and fixed type
// this means first -> string second -> number, no extra data
//enum  -> list of named choices
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["White"] = 1] = "White";
    Color[Color["Black"] = 2] = "Black";
})(Color || (Color = {}));
let favColor = Color.Black;
//Objects -> Objects grouped related information together
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    price: 1000000000
};
//Any -> dangerous , this will skip the type check
let randomValue = "Hii";
randomValue = 30;
//Void -> this fuction returns nothing -> It only does work no value comed back
function logMessage(message) {
    console.log(message);
}
//never -> it means this function will never finish normally
function throwError(error) {
    throw new Error(error);
}
// this says if you want to become person you must have these fields
let student = {
    name: "Alice",
    age: 23,
    greet() {
        console.log(`My name is ${this.name}`);
    }
};
//# sourceMappingURL=index.js.map