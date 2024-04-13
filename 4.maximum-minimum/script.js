// Find Maximum and Minimum: 
// Write functions to find the maximum and minimum values in an array of numbers.

// 1. Find Maximum

function findMaximum (table){
    var maximum = table[table.length - 1];
    for (var i = 0; i < table.length; i++){
        if (table[i] > maximum){
            maximum = table[i];
        }
    }
     return maximum;   
}

// 2. Find Minimum

function findMinimum (table){
    var minimum = table[table.length - 1];
    for (var i = 0; i < table.length; i++){
        if (table[i] < minimum) {
            minimum = table[i];
        }
    }
     return minimum;   
}

let array = [2,6,1,4,9,5,7];
console.log(findMaximum(array));
console.log(findMinimum(array)); 