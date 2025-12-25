//Passwords should be from 5 to 30 characters long
//Should include Numbers, Symbol, Capital letters/upper/lower cases
//Allowed symbol

let words = ["one", "Doppelganger", "Roberto"];

let password;

// let array = new Uint16Array(1);
// crypto.getRandomValues(array);
// console.log(array[0]);
// console.log(array);

let symbolRequirement = true;
let numberRequirement = true;
let capitalRequirement = true;



let array=[];
for (let i = 0; i < 100; i++) {
    array.push(random0to50000_unbiased());
}
console.log(array);

// Generates a random integer from 0 to 50000 inclusive without modulus bias
function random0to50000_unbiased() {
    const range = 50001; // number of values (0..50000)
    const uintMaxPlusOne = 0x100000000; // 2^32
    const limit = Math.floor(uintMaxPlusOne / range) * range; // largest multiple <= 2^32
    const a = new Uint32Array(1);
    while (true) {
        crypto.getRandomValues(a);
        if (a[0] < limit) return a[0] % range;
    }
}
console.log(random0to50000_unbiased())