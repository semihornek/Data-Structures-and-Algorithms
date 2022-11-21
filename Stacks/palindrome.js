const word = "racecars";

const letters = []; //stack
let rword = "";

for (const char of word) {
    letters.push(char);
}

for (let i = 0; i < word.length; i++) {
    rword += letters.pop();
}

rword === word ? console.log(`${word} is a palindrome.`) : console.log(`${word} is not a palindrome.`);
