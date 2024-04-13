//  Captialze words: Implement a function that capitalizes the first letter of each word in a sentence.

function capitalizeWords(sentence) {
    // Divisons la phrase en un tableau de mots
    let words = sentence.split(" ");

    // Parcourons chaque mot
    for (let i = 0; i < words.length; i++) {
        // Mettons la première lettre de chaque mot en majuscule
        // et les autres lettres en minuscule
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }

    // Rassemblons les mots en une phrase
    let capitalizedSentence = words.join(" ");
    
    return capitalizedSentence;
}

console.log(capitalizeWords("bonjour, les geeks du web !")); 
console.log(capitalizeWords(" ceci est une fonction qui met en majuscule la première lettre de chaque mot dans une phrase.")); 
