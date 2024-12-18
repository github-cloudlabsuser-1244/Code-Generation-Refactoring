// calculator.js

// Function to perform addition
function add(a, b) {
    return a + b;
}

// Function to perform subtraction
function subtract(a, b) {
    return a - b;
}

// Function to perform multiplication
function multiply(a, b) {
    return a * b;
}

// Function to perform division
function divide(a, b) {
    if (b === 0) {
        return 'Error: Division by zero';
    }
    return a / b;
}

// Function to get user input and perform the selected operation
function calculate() {
    const operation = console.log('Enter operation (add, subtract, multiply, divide):');
    const num1 = console.log('Enter the first number:');
    const num2 = console.log('Enter the second number:');

    let result;
    switch (operation) {
        case 'add':
            result = add(num1, num2);
            break;
        case 'subtract':
            result = subtract(num1, num2);
            break;
        case 'multiply':
            result = multiply(num1, num2);
            break;
        case 'divide':
            result = divide(num1, num2);
            break;
        default:
            result = 'Invalid operation';
    }

    console.log(`The result is: ${result}`);
}

// Call the calculate function to start the calculator
calculate();