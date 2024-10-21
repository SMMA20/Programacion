let display = document.getElementById('display');
let currentValue = '';

function appendValue(value) {
    currentValue += value;
    display.value = currentValue;
}

function appendOperator(operator) {
    currentValue += ` ${operator} `;
    display.value = currentValue;
}

function clearDisplay() {
    currentValue = '';
    display.value = '';
}

function calculateResult() {
    try {
        currentValue = eval(currentValue);
        display.value = currentValue;
    } catch {
        display.value = 'Error';
    }
}

