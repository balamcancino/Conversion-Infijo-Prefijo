import infixToPrefix from '../models/infixToPrefix.js';

document.addEventListener('DOMContentLoaded', function () {
    const inputExpression = document.getElementById('inputExpression');
    const outputExpression = document.getElementById('outputExpression');
    const convertButton = document.getElementById('convertButton');

    convertButton.addEventListener('click', function () {
        const infixExpression = inputExpression.value;
        const prefixExpression = infixToPrefix(infixExpression);
        outputExpression.textContent = prefixExpression;
    });
});
