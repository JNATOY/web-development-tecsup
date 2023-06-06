'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const calculatorForm = document.getElementById('calculatorForm');

  calculatorForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const number1 = +document.getElementById('number1').value;
    const operator = document.getElementById('operator').value;
    const number2 = +document.getElementById('number2').value;
    // const errorContainer = document.getElementById('errorContainer');
    const resultContainer = document.getElementById('resultContainer');

    alert(`
      numero1: ${number1}
      operator: ${operator}
      number2: ${number2}
    `)
  });
});