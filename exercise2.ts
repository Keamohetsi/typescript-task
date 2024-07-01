//Question 1

interface ICalculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
    multiply(a: number, b: number): number;
    divide(a: number, b: number): number | string;
}

//Question 2
class Calculator implements ICalculator {
    private validateInput(a: number, b: number): boolean {
        return typeof a === 'number' && typeof b === 'number';
    }

    add(a: number, b: number): number {
        if (this.validateInput(a, b)) {
            return a + b;
        } else {
            throw new Error('Invalid input: Please put a numbers.');
        }
    }

    subtract(a: number, b: number): number {
        if (this.validateInput(a, b)) {
            return a - b;
        } else {
            throw new Error('Invalid input: Please put a numbers.');
        }
    }

    multiply(a: number, b: number): number {
        if (this.validateInput(a, b)) {
            return a * b;
        } else {
            throw new Error('Invalid input: Please put a numbers.');
        }
    }

    divide(a: number, b: number): number | string {
        if (this.validateInput(a, b)) {
            if (b !== 0) {
                return a / b;
            } else {
                return 'Error: Division must be by zero.';
            }
        } else {
            throw new Error('Invalid input: Please put a numbers.');
        }
    }
}

// Question 2
const calculator = new Calculator();
console.log(calculator.add(17, 13));
console.log(calculator.subtract(9, 45));
console.log(calculator.multiply(10, 10));
console.log(calculator.divide(8, 0)); 