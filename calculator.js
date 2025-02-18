const readline = require('readline');

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) {
        throw new Error("Cannot divide by zero!");
    }
    return x / y;
}

function calculator() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Select operation (add, subtract, multiply, divide): ", (operation) => {
        if (!['add', 'subtract', 'multiply', 'divide'].includes(operation)) {
            console.log("Invalid operation");
            rl.close();
            return;
        }

        rl.question("Enter first number: ", (num1) => {
            rl.question("Enter second number: ", (num2) => {
                const x = parseFloat(num1);
                const y = parseFloat(num2);

                if (isNaN(x) || isNaN(y)) {
                    console.log("Invalid numbers");
                    rl.close();
                    return;
                }

                let result;
                try {
                    switch (operation) {
                        case 'add':
                            result = add(x, y);
                            break;
                        case 'subtract':
                            result = subtract(x, y);
                            break;
                        case 'multiply':
                            result = multiply(x, y);
                            break;
                        case 'divide':
                            result = divide(x, y);
                            break;
                    }
                    console.log(`Result: ${result}`);
                } catch (error) {
                    console.log(error.message);
                }

                rl.close();
            });
        });
    });
}

calculator();