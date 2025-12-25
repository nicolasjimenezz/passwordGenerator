//Passwords should be from 5 to 30 characters long
//Should include Numbers, Symbol, Capital letters/upper/lower cases
//Allowed symbol

let words = ["one", "Doppelganger", "Roberto"];

let password;

let array = new Uint8Array(1);
crypto.getRandomValues(array);
console.log(array[0]);

let symbolRequirement = true;
let numberRequirement = true;
let capitalRequirement = true;

