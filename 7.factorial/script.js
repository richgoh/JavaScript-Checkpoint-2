// Write a function to calculate the factorial of a given number.


// Approche recusive

function factorial(n){
    if(n < 0){
        return "number has to be positive."
    }
    
    //base case
    if(n == 0 || n == 1){
        return 1;
    //recursive case
    }else{
        return n * factorial(n-1);
    }
}
let n = 4;
answer = factorial(n)
console.log("Factorial of " + n + " : " + answer);





// function factorial(nombre) {
//     if (nombre === 0 || nombre === 1) {
//         return 1;
//     } else {
//         let resultat = 1;
//         // Multiplie les nombres de 1 à nombre
//         for (let i = 2; i <= nombre; i++) {
//             resultat *= i;
//         }
//         return resultat;
//     }
// }

// console.log(factorial(0)); 
// console.log(factorial(1)); 
// console.log(factorial(5)); 
// console.log(factorial(10)); 


// function factorial(n){
//     let answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }
//     else if(n > 1){
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }
//     else{
//       return "number has to be positive."
//     }  
//   }
//   let n = 5;
//   answer = factorial(n)
//   console.log("Factorial of " + n + " : " + answer);


