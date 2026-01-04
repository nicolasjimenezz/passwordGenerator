// Passwords should be from at least 5 to 30 characters long
// may include Numbers, Symbol, Capital letters/upper/lower cases
// Usable symbols: ! @ # $ % & * ( ) _ = + [ ] { } ; : , . < > ? |
// {number} adjective {number} + noun {number}

import { nounsDataBase, adjectivesDataBase } from "./encodedLists.js";

let password;

const nouns = atob(nounsDataBase).split(",");
console.log(nouns);

const adjectives = atob(adjectivesDataBase).split(",");
console.log(adjectives);


let adjective = adjectives[random0toarrayrange_unbiased()];
let noun = nouns[random0toarrayrange_unbiased()];

let numberPosition= Math.floor(Math.random() * 3); // random number between 0 and 2 inclusive
console.log(numberPosition);

switch (numberPosition) {
    case 0:
        password = randomNumberGenerator(99) + adjective + noun;
        break;
    case 1:
        password = adjective + randomNumberGenerator(99) + noun;
        break;
    case 2:
        password = adjective + noun +randomNumberGenerator(99);
        break;
    default:
        console.log("Error in numberPosition switch");
        break;
}

password = adjective + noun;
console.log("Enjoy your new password: \n" + password);

// Generates a random integer from 0 to 50000 inclusive without modulus bias (true random)
function random0toarrayrange_unbiased() {
    // const range = 50001; // added 1 because count starts from 0 (0 to 50000 inclusive)
    const range = nouns.length; // added 1 because count starts from 0
    const uintMaxPlusOne = 2**32; // Largest int = 2^32
    const limit = Math.floor(uintMaxPlusOne / range) * range; // largest multiple <= 2^32
    const a = new Uint32Array(1);
    while (true) {
        crypto.getRandomValues(a);
        if (a[0] < limit) return a[0] % range;
    }
}

// Random number generator (Pseudo-random and requires a ceiling number)
function randomNumberGenerator(ceiling) {
    let number = Math.floor(Math.random() * ceiling + 1); // random number between 0 and ceiling inclusive
    return number;
}

// Providing a random word to test the unbiased function
// let place = random0toarrayrange_unbiased();
// console.log(place);
// console.log(words[place]);

// Creating a password
// Usable symbols: ! @ # $ % & * ( ) _ = + [ ] { } ; : , . < > ? |
function addSymbolToPassword(password) {
    const symbols = "!@#$%&*()_=+[]{};:,.<>?|";
    let usableExclamationMark = false;
    let usableAtSign = false;
    let usableHashTag = false;
    let usableDollarSign = false;
    let usablePercentSign = false;
    let usablempersandSign = false;
    let usableAsteriskSign = false;
    let usableOpeningParenthesis = false;
    let usableClosingParenthesis = false;
    let usableUnderscoreSign = false;
    let usableEqualSign = false;
    let usablePlusSign = false;
    let usableOpeningBracket = false;
    let usableClosingBracket = false;
    let usableOpeningCurlyBrace = false;
    let usableClosingCurlyBrace = false;
    let usableSemicolonSign = false;
    let usableColonSign = false;
    let usableCommaSign = false;
    let usablePeriodSign = false;
    let usableLessThanSign = false;
    let usableGreaterThanSign = false;
    let usableQuestionMark = false;
    let usableVerticalBar = false;
    return password;
}