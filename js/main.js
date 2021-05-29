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

    if (!resultEl.innerText) return;

    if (operators.some(operator => operator === lastLetter))
        return alert(`Cann't be end with ' ${lastLetter} '`);

    if (resultEl.innerText == '0/0') return resultEl.innerText = '0';

    displayEl.innerText += resultEl.innerText + '=';

    // if (eval(resultEl.innerText).length > 16)
    //     return resultEl.innerText = parseFloat(eval(resultEl.innerText)).toFixed(15);

    resultEl.innerText = eval(resultEl.innerText);

}


function getSlicedValue(x) {
    let resultEl = document.getElementById('result');
    resultEl.innerText = resultEl.innerText.slice(0, -1) + x;
}


function compute(x) {
    let resultEl = document.getElementById('result');
    resultEl.innerText += x;
}



function getButton(e) {
    let resultEl = document.getElementById('result');
    let eValue = e.getAttribute('value');

    let operators = ['+', '-', '/', '*'];
    let frontOfZero = ['+0', '-0', '/0', '*0'];

    let lastLetter = resultEl.innerText.slice(-1);
    let lastTwoLetter = resultEl.innerText.slice(-2);
    let afterLastDot = resultEl.innerText.slice(resultEl.innerText.lastIndexOf('.') + 1);

    if (resultEl.innerText.length == 16) return alert("You have reached maximum length size😕");

    if (resultEl.innerText === '' && (operators.some(operator => operator === eValue))) return;

    if (operators.some(operator => operator === eValue) && operators.some(operator => operator === lastLetter))
        return getSlicedValue(eValue);

    if ((eValue === '.' && lastLetter === ('.')) || (eValue === '0' && resultEl.innerText == '0')) return;

    if (eValue === '0' && (frontOfZero.some(operatorAndZero => operatorAndZero === lastTwoLetter))) return;

    if (resultEl.innerText == '0' && (eValue === '.' || operators.some(operator => operator === eValue)))
        return compute(eValue);

    if ((eValue !== '0' && resultEl.innerText == '0') || ((lastLetter === ('.') && (operators.some(operator => operator === eValue)))))
        return getSlicedValue(eValue);

    if (operators.some(operator => operator === eValue) && (frontOfZero.some(operatorAndZero => operatorAndZero === lastTwoLetter)))
        return compute(eValue);

    if (eValue !== '.' && (frontOfZero.some(operatorAndZero => operatorAndZero === lastTwoLetter)))
        return getSlicedValue(eValue);

    if ((eValue === '.' && resultEl.innerText == '') || (eValue === '.' && (operators.some(operator => operator === lastLetter)))) return resultEl.innerText += '0.';

    if (eValue === '.' && resultEl.innerText.lastIndexOf('.') !== -1 && !(operators.some(operator => afterLastDot.includes(operator)))) return;

    compute(eValue);
}

function deleteNumber() {
    let resultEl = document.getElementById('result');
    resultEl.innerText = resultEl.innerText.slice(0, -1);
}
