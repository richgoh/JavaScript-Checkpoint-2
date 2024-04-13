// Create a function to check if a number is prime or not.

function isPrime(number) {
    // 1 et les nombres inférieurs ou égaux à 1 ne sont pas premiers
    if (number <= 1) {
        return false;
    }

    // Vérifie la divisibilité de 2 jusqu'à la racine carrée du nombre
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; // Si le nombre est divisible par un autre nombre, il n'est pas premier
        }
    }

    return true; // Si le nombre n'est divisible par aucun autre nombre, il est premier
}
console.log(isPrime(5)); 
console.log(isPrime(10)); 
console.log(isPrime(13)); 


// function test_prime(num) {
//     if (num <= 1) {
//       return false;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
//   console.log(test_prime(37));
//   console.log(test_prime(36));