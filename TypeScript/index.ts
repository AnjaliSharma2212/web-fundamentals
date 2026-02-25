//Data Types in Typescript

//Primitive data type and Non-Primitive datatype

// typescript allow us to check the errors via type

//type: number
let age: number = 20
// age="twenty" // this will show us error
console.log(age)

//type:string
let fullName: string = "Anjali Sharma"
console.log(fullName)

//type:boolean
let isLoggedIn: boolean = true


//union type
// null
let middlename: string | null = null // empty on purpose and string | null means its  string or empty

//undefined
let pincode: number | undefined = undefined // value is not given yet and number | undefined means its number or not defined yet

//symbol
let id: symbol = Symbol("5")

//big Int
let bigNumber: bigint = 2342344556353332n



//-----------Non Pritmitive Data types----------------//
//non primitive datatypes stores the multiple or complex form of data
let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let str: Array<string> = ["Apple", "banana", "orange"]

//Tuple -> fixed order and fixed type

let person: [string, number] = ["Female", 23] //fixed order and fixed type
// this means first -> string second -> number, no extra data

//enum  -> list of named choices

enum Color {
    Red,
    White,
    Black
}

let favColor: Color = Color.Black

//Objects -> Objects grouped related information together
let car: { make: string, model: string, year: number, price: number } = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    price: 1000000000
}

//Any -> dangerous , this will skip the type check
let randomValue: any = "Hii"
randomValue = 30


//Void -> this fuction returns nothing -> It only does work no value comed back
function logMessage(message: string): void {
    console.log(message)
}


//never -> it means this function will never finish normally

function throwError(error: string): never {
    throw new Error(error)
}


//----------Interface-----------//
//Rule Book for objects 
interface Person {
    name: string,
    age: number,
    greet(): void
}
// this says if you want to become person you must have these fields

let student: Person = {
    name: "Alice",
    age: 23,
    greet() {
        console.log(`My name is ${this.name}`)
    }
}


//Type Narrowing
//TYpe Guard

// Type narrowing
function printId(id: string | number) {
    if (typeof id === "string") {
        console.log(id.toUpperCase())
    } else {
        console.log("Your id is", id)
    }
}
printId(4)

//Type Guard
function isString(val: unknown): val is string {
    return typeof val === "string"
}
function logValue(val: unknown) {
    if (isString(val)) {
        console.log(val.toUpperCase())
    } else {
        console.log("Not a string")
    }
}

logValue("Alice")


//TYPES VS INTERFACES
// Use interface when working with Object and classes becuse interfaces can extends 
// Use TYPES when we want to use tuples and union
//types alias
type Point = {
    x: number,
    y: number
}

interface Shape {
    area(): number
}

//class implementing interface
// implements means I will follow interface rules
class Rectangle implements Shape {
    constructor(private width: number, private height: number) { }
    area(): number {
        return this.width * this.height
    }
}

// union type
function displayType(value: string | number): void { }

//Typing Props

interface ButtonProps { // props means Instructions for Components
    label: string,
    onClick: () => void,
    disabled?: boolean
}


function Button(props: ButtonProps): void {
    console.log(`Buttton label: ${props.label}`)
    if (props.disabled) {
        console.log("Buttton is disabled")
    } else {
        props.onClick()
    }
}


Button({
    label: "Submit",
    onClick: () => console.log("Buttton clicked")
})

Button({
    label: "Cancel",
    onClick: () => console.log("Buttton clicked"),
    disabled: true
})

//label is string 
//disabled is a function


//state in types
interface State {
    count: number,
    text: string
}

let appState: State = {
    count: 45,
    text: "HellO JS"
}


function incrementCount(state: State): State {
    return { ...state, count: state.count + 1 }
}
appState = incrementCount(appState)
console.log(appState)


//API Response

interface APIresponse<T> {
    data: T,
    status: number,
    error?: string
}

interface User {
    id: number,
    name: string,
    email: string,
}

function fetchUser(): APIresponse<User> {
    return {
        data: {
            id: 1,
            name: "Anjali",
            email: "anjali@example.com"
        },
        status: 200
    }
}

const response = fetchUser()

if(response.status===200){
    console.log(response.data.name)
}

//Avoiding of using ANY
// using unknown is safe as we need to check the type explicitly
function checkProcess(val: unknown): void{
if(typeof val==="string"){
    val.toUpperCase()
}else if(typeof val==="number"){
    val.toFixed(3)
}else{
    console.log("Unsupported type")
}
}

function processValue(val:any): void{
    val.toUpperCase() //  no error , avoids type check
}

processValue("Anjali")
processValue(4)
processValue(true)