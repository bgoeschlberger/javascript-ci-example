import { Calculator } from './calculator.js';

const calculator = new Calculator();

//render simple UI
const calcArea = document.getElementById('calculatorArea');

const input1 = document.createElement('input');
const input2 = document.createElement('input');

const sumButton = document.createElement('button');
sumButton.innerHTML = "Add";
sumButton.addEventListener('click', () => alert(calculator.add(input1.value, input2.value)));

calcArea.appendChild(input1);
calcArea.appendChild(input2);
calcArea.appendChild(sumButton);