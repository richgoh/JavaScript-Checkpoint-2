
// Inverser une chaîne : écriture d'une fonction qui inverse une chaîne donnée. 

function stringReverse(str){
  let reverse = " " 
   for  (let j = str.length-1; j > 0 ; j--){
     reverse+= str[j]
  }
  return reverse;     
  }

var str = stringReverse(" Bienvenue dans le monde du web ");


console.log(str);





