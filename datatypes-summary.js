// Primitive

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 57766472565216687246423n

// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["Badman","Spiderman","Captain America"]
let myObj= {
    name: "Milan",
    age: 22,
}

const myFunction = function() {
    console.log("Hello world");
    
}