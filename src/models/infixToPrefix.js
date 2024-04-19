import Stack from '../models/stack.js';

export default function infixToPrefix(infixExpression) {
    const precedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
        '^': 3
    };

    const isOperand = (char) => /\w/.test(char);

    const stack = new Stack();
    let prefixExpression = '';

    for (let i = infixExpression.length - 1; i >= 0; i--) {
        const token = infixExpression[i];

        if (isOperand(token)) {
            prefixExpression = token + prefixExpression;
        } else if (token === ')') {
            stack.push(token);
        } else if (token === '(') {
            while (!stack.isEmpty() && stack.peek() !== ')') {
                prefixExpression = stack.pop() + prefixExpression;
            }
            stack.pop(); // Pop '('
        } else {
            while (!stack.isEmpty() && precedence[stack.peek()] >= precedence[token]) {
                prefixExpression = stack.pop() + prefixExpression;
            }
            stack.push(token);
        }
    }

    while (!stack.isEmpty()) {
        prefixExpression = stack.pop() + prefixExpression;
    }

    return prefixExpression;
}
