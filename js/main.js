'use strict'

let displayEl = document.getElementById('display');
let resultEl = document.getElementById('result');

function clearAll() {
    displayEl.innerText = '';
    resultEl.innerText = '';
}


function calculateResult() {
    if (!resultEl.innerText) return;
    if (resultEl.innerText.slice(-1) === '+' || resultEl.innerText.slice(-1) === '-' || resultEl.innerText.slice(-1) === '*' || resultEl.innerText.slice(-1) === '/' || resultEl.innerText.slice(-1) === '.')
        return displayEl.innerText = resultEl.innerText + '=';
    if (resultEl.innerText = '0/0') return resultEl.innerText = '0';

    resultEl.innerText = eval(resultEl.innerText);
}

function getButton(e) {

    if (resultEl.innerText === '' && (e.innerText === '+' || e.innerText === '-' || e.innerText === '÷' || e.innerText === 'x')) return;

    if ((e.getAttribute('value') === '+' || e.getAttribute('value') === '-' || e.getAttribute('value') === '/' || e.getAttribute('value') === '*') && (resultEl.innerText.endsWith('+') || resultEl.innerText.endsWith('-') || resultEl.innerText.endsWith('*') || resultEl.innerText.endsWith('/')))
        return resultEl.innerText = resultEl.innerText.slice(0, -1) + e.getAttribute('value');

    if (e.getAttribute('value') === '.' && resultEl.innerText.endsWith('.')) return;

    if (e.getAttribute('value') === '0' && resultEl.innerText == '0') return;

    if (e.getAttribute('value') === '0' && (resultEl.innerText.slice(-2) == ('+0') || resultEl.innerText.slice(-2) == '-0' || resultEl.innerText.slice(-2) == '/0' || resultEl.innerText.slice(-2) == '*0')) return;

    if (resultEl.innerText == '0' && (e.getAttribute('value') === '.' || e.getAttribute('value') === '+' || e.getAttribute('value') === '-' || e.getAttribute('value') === '/' || e.getAttribute('value') === '*'))
        return resultEl.innerText += e.getAttribute('value');

    if ((e.getAttribute('value') !== '0' && resultEl.innerText == '0') || (resultEl.innerText.endsWith('.') && (e.getAttribute('value') == ('+') || e.getAttribute('value') == ('-') || e.getAttribute('value') == ('*') || e.getAttribute('value') == ('/'))))
        return resultEl.innerText = resultEl.innerText.slice(0, -1) + e.getAttribute('value');

    // if (e.getAttribute('value') === '0' && resultEl.innerText.slice(-2) == ('+0' || '-0' || '/0' || '*0')) return;  // ესე დაწერისას ('+0' || '-0' || '/0' || '*0') არ მუშაობს
    if (e.getAttribute('value') !== '.' && (resultEl.innerText.slice(-2) == ('+0') || resultEl.innerText.slice(-2) == '-0' || resultEl.innerText.slice(-2) == '/0' || resultEl.innerText.slice(-2) == '*0')) return resultEl.innerText = resultEl.innerText.slice(0, -1) + e.getAttribute('value');

    if ((e.getAttribute('value') === '.' && resultEl.innerText == '') || (e.getAttribute('value') === '.' && (resultEl.innerText.endsWith('+') || resultEl.innerText.endsWith('-') || resultEl.innerText.endsWith('/') || resultEl.innerText.endsWith('*')))) return resultEl.innerText += '0.';

    // if (e.getAttribute('value') === '.' && resultEl.innerText.lastIndexOf('.') !== -1 && !resultEl.innerText.slice(resultEl.innerText.lastIndexOf('.') + 1).includes('+' || '-' || '*' || '/')) return;
    if (e.getAttribute('value') === '.' && resultEl.innerText.lastIndexOf('.') !== -1 && !(resultEl.innerText.slice(resultEl.innerText.lastIndexOf('.') + 1).includes('-') || resultEl.innerText.slice(resultEl.innerText.lastIndexOf('.') + 1).includes('+') || resultEl.innerText.slice(resultEl.innerText.lastIndexOf('.') + 1).includes('/') || resultEl.innerText.slice(resultEl.innerText.lastIndexOf('.') + 1).includes('*'))) return;


    resultEl.innerText += e.getAttribute('value');
}


function deleteNumber() {
    resultEl.innerText = resultEl.innerText.slice(0, -1);
}
