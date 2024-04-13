// Create a function that counts the number of characters in a string.

function countCharacters(str){
    let count = 0
    for (let i = 0 ; i < str.length; i++){
    count ++
    }
    return count;
}


console.log(countCharacters("Bonjour à tous"));
console.log(countCharacters("Ceci est un exercice pratique de String"));
