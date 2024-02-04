let currentResult = '0';

function updateResult() {
    document.getElementById('result').innerText = currentResult;
}

function clearResult() {
    currentResult = '0';
    updateResult();
}

function appendNumber(number) {
    if (currentResult === '0') {
        currentResult = number;
    } else {
        currentResult += number;
    }
    updateResult();
}

function appendExpression(operator) {
    currentResult += ` ${operator} `;
    updateResult();
}

function appendDecimal() {
    if (!currentResult.includes('.')) {
        currentResult += '.';
        updateResult();
    }
}

function calculateResult() {
    try {
        currentResult = eval(currentResult).toString();
        updateResult();
    } catch (error) {
        currentResult = 'Error';
        updateResult();
    }
}
