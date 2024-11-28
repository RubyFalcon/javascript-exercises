const palindromes = function (words) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const cleanedWords = words
    .toLowerCase()
    .split("")
    .filter((letter)=> alphanumerical.includes(letter))
    .join("");

    const  reversedWords = cleanedWords.split("").reverse().join("")
    return cleanedWords === reversedWords;
};

// Do not edit below this line
module.exports = palindromes;
