//Passwords should be from 5 to 30 characters long
//may include Numbers, Symbol, Capital letters/upper/lower cases

import { wordDataBase, adjectivesDataBase } from "./encodedLists.js";

const words = atob(wordDataBase).split(",");
console.log(words);

const adjectives = atob(adjectivesDataBase).split(",");
console.log(adjectives);


let password;

let symbolRequirement = true;
let numberRequirement = true;
let capitalRequirement = true;

// Generates a random integer from 0 to 50000 inclusive without modulus bias
function random0torange_unbiased() {
    // const range = 50001; // added 1 because count starts from 0 (0 to 50000 inclusive)
    const range = words.length; // added 1 because count starts from 0
    const uintMaxPlusOne = 2**32; // Largest int = 2^32
    const limit = Math.floor(uintMaxPlusOne / range) * range; // largest multiple <= 2^32
    const a = new Uint32Array(1);
    while (true) {
        crypto.getRandomValues(a);
        if (a[0] < limit) return a[0] % range;
    }
}


// Providing a random word to test the unbiased function
let place = random0torange_unbiased();
console.log(place);
console.log(words[place]);

