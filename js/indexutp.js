'use strict';

  document.addEventListener('DOMContentLoaded', () => {
  console.log(document.querySelector('.header'));
  document.addEventListener('scroll', () => {
  header.classList.toogle('header--scroll',window.scrollY>0)
  const nav = document.querySelector('.nav')
  });
});
























/* const firstName = 'juan';

for (const element of firstName) {
  console.log(element);
}
 */

/* const firstName = 'juan';
for (const index in firstName) {
  console.log(firstName[index]);
}
 */

/* let response = '';
do {
  response = prompt('Desea realizar algún cálculo 1 (Sí) cualquier otra cosa (No)');
  if (response == 1) {
    let number1 = +prompt('Número 1');
    let number2 = +prompt('Número 2');
    alert(`
      suma: ${number1 + number2},
      resta: ${number1 - number2},
      multiplicación: ${number1 * number2},
      división: ${number1 / number2},
    `);
  }
} while (response == 1);
 */

/* let i=0;

while(i<100) {
  console.log(i+1);
  i++;
}

 */


/* console.log('1');
console.log('2');
console.log('3');
console.log('4');
console.log('5');
 */


/* for (let contador = 0; contador < 12; contador++) {
    console.log(12 * (contador + 1));
  }
 */

/* -------------------objetos--------------------- */
/* const person = {
    firstName: 'Elliot',
    lastName: 'Garamendi',
    age: 27,
    single: true,
    special: () => { }
  };
  
  console.log(person);
  console.log(person.firstName);
  console.log('Nombre: ' + person.firstName + ', Apellido: ' + person.lastName);
  console.log(`
    Nombre: ${person.firstName},
    Apellido: ${person.lastName}
    Edad: ${person.age},
    Soltero: Sí,
    `);


 */



/* var firstName;
let lastName;
const age = 26;
const MONTHS_OF_THE_YEAR = 12;

console.log(firstName);
console.log(lastName);
console.log(age);

firstName = 'Juan Ñato';
console.log(firstName);

firstName = 17;
// age = 27;
console.log(firstName);
console.log(age);
console.log(MONTHS_OF_THE_YEAR);
 */





/* 
ejemplo 1

console.log (1 + 'juan ñato');
console.log (8 +8);
console.log ('8'*8);
console.log ('8'>8);
console.log (false && true);
console.log (false 	||  true);


ejemplo 2


/* console.log(1 + ' Elliot Garamendi');
console.log(8 + 8);
console.log('8' * 8);
console.log('8' > 8);
console.log(false && true);
console.log(false || true);
console.log(typeof 8);
console.log(typeof 'Elliot');
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);
console.log(typeof function () { });
alert('Hola mundo'); */