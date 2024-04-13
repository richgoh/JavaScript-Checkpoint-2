
// Fonction pour filtrer les éléments d'un tableau en fonction d'une condition

function filterArray(arr, condition) {
    let filteredArray = [];   //Tableau vide
    // Parcours chaque élément dans le tableau
    for (let i = 0; i < arr.length; i++) {
        // Vérifie si l'élément satisfait la condition
        if (condition(arr[i])) {
            filteredArray.push(arr[i]); // Ajoute l'élément au tableau filtré
        }
    }
    return filteredArray;
}

// Fonction de condition pour vérifier si un nombre est pair
function isEven(num) {
    return num % 2 === 0;
}

// Exemple d'utilisation avec un tableau de nombres
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterArray(numbers, isEven));
