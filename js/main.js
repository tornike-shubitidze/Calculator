'use strict'


function clearAll() {
    let displayEl = document.getElementById('display');
    let resultEl = document.getElementById('result');

    displayEl.innerText = '';
    resultEl.innerText = '';
}


function calculateResult() {
    let resultEl = document.getElementById('result');
    let displayEl = document.getElementById('display');
    displayEl.innerText = '';

    let operators = ['+', '-', '/', '*', '.'];
    let lastLetter = resultEl.innerText.slice(-1);

    if (!resultEl.innerText)
        return;

    if (operators.some(operator => operator === lastLetter))
        return alert(`Cann't be end with ' ${lastLetter} '`);

    if (resultEl.innerText == '0/0')
        return resultEl.innerText = '0';

    displayEl.innerText += resultEl.innerText + '=';

    let result = eval(resultEl.innerText);

    if (result.toString().length > 15)
        return resultEl.innerText = parseFloat(result).toFixed(10);

    resultEl.innerText = result;
}


function getSlicedValue(value) {
    let resultEl = document.getElementById('result');
    resultEl.innerText = resultEl.innerText.slice(0, -1) + value;
}


function joinValues(value) {
    let resultEl = document.getElementById('result');
    resultEl.innerText += value;
}


function getButton(e) {
    let resultEl = document.getElementById('result');
    let eValue = e.getAttribute('value');

    let operators = ['+', '-', '/', '*'];
    let frontOfZero = ['+0', '-0', '/0', '*0'];

    let lastLetter = resultEl.innerText.slice(-1);
    let lastTwoLetter = resultEl.innerText.slice(-2);
    let afterLastDot = resultEl.innerText.slice(resultEl.innerText.lastIndexOf('.') + 1);

    let eValueIsOperator = operators.some(operator => operator === eValue);
    let eValueIsLastOperator = operators.some(operator => operator === lastLetter);
    let lastIsOperatorAndZero = frontOfZero.some(operatorAndZero => operatorAndZero === lastTwoLetter)

    if (resultEl.innerText.length == 16) return alert("You have reached maximum length size😕");

    if (resultEl.innerText === '' && eValueIsOperator)
        return;

    if (eValueIsOperator && eValueIsLastOperator)
        return getSlicedValue(eValue);

    if ((eValue === '.' && lastLetter === ('.')) || (eValue === '0' && resultEl.innerText == '0'))
        return;

    if (eValue === '0' && lastIsOperatorAndZero)
        return;

    if (resultEl.innerText == '0' && (eValue === '.' || eValueIsOperator))
        return joinValues(eValue);

    if ((eValue !== '0' && resultEl.innerText == '0') || ((lastLetter === ('.') && eValueIsOperator)))
        return getSlicedValue(eValue);

    if (eValueIsOperator && lastIsOperatorAndZero)
        return joinValues(eValue);

    if (eValue !== '.' && lastIsOperatorAndZero)
        return getSlicedValue(eValue);

    if ((eValue === '.' && resultEl.innerText == '') || (eValue === '.' && eValueIsLastOperator))
        return resultEl.innerText += '0.';

    if (eValue === '.' && resultEl.innerText.lastIndexOf('.') !== -1 && !(operators.some(operator => afterLastDot.includes(operator))))
        return;

    joinValues(eValue);
}

function deleteNumber() {
    let resultEl = document.getElementById('result');
    resultEl.innerText = resultEl.innerText.slice(0, -1);
}
