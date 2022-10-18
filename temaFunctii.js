//Tema 1//
function numberPower(number1, number2){
    return number1 ** number2;
 }
 console.log (numberPower(3, 3));
 


//Tema 2//
const shapeFunction = (shape) => {

    if (shape === 'patrat') {
       formula = 'Formula pentru patrat este: l**2';
   } else if (shape === 'dreptunghi') {
       formula = 'Formula pentru dreptunghi este:l * l';
   } else if (shape === 'cerc') {
       formula = 'Formula pentru cerc este: PI * r**2';
   } else {
      console.log ("Va rugam sa alegeti una dintre urmatoarele valori: 'patrat', 'dreptunghi' sau 'cerc'.");
   }
       return formula
   }
   console.log (shapeFunction ('dreptunghi'));