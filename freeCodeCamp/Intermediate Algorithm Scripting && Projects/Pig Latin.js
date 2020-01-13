function translatePigLatin(str) {
    return str
    .replace(/^[aeiou]\w*/, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("california"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("schwartz"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("rhythm"));

