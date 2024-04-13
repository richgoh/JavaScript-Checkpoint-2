// Implement a function to generate the Fibonacci sequence up to a given number of terms.

// 1ere methode iterative

function fibonacciSequence(numTerms) {
    let sequence = [0, 1]; // Initialise la séquence avec les deux premiers termes

    // Génère les termes suivants de la séquence
    for (let i = 2; i < numTerms; i++) {
        let nextTerm = sequence[i - 1] + sequence[i - 2]; // Calcule le terme suivant
        sequence.push(nextTerm); // Ajoute le terme suivant à la séquence
    }

    return sequence;
}
console.log(fibonacciSequence(10)); 
console.log(fibonacciSequence(5)); 



// //2e Methode recursive

// function fibonacci(n) {
//     // Cas de base : les deux premiers nombres de Fibonacci sont 0 et 1
//     if (n <= 1) {
//         return n;
//     }
//     // Formule récursive : le n-ième nombre de Fibonacci est la somme des deux précédents
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// function fibonacciSequence1(numTerms) {
//     let sequence = [];
//     // Génère chaque terme de la séquence jusqu'au nombre de termes spécifié
//     for (let i = 0; i < numTerms; i++) {
//         sequence.push(fibonacci(i)); // Appelle la fonction récursive fibonacci pour obtenir chaque terme
//     }
//     return sequence;
// }
// console.log(fibonacciSequence1(10)); 
// console.log(fibonacciSequence1(5)); 


