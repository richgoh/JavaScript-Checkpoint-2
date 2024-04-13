// Create a function that calculates the sum of all elements in an array.

function sumTableau(tableau){
    let sum = 0;
    // Parcour chaque élément dans le tableau
    for (let i = 0; i < tableau.length; i++) {
        // Ajoute l'élément actuel à la somme
        sum += tableau[i];  
    }
    return sum;
}
console.log(sumTableau ([20,10,30,4,50]));
console.log(sumTableau ([-1,25,3,-40]));
