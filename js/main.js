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
    // let lastLetter = (resultEl.innerText.slice(-1) == ('+' || '-' || '/' || '*'));
    let lastLetter = resultEl.innerText.slice(-1);

    if (!resultEl.innerText) return;

    if (lastLetter === '+' || lastLetter === '-' || lastLetter === '*' || lastLetter === '/' || lastLetter === '.')
        return alert(`Cann't be end with ' ${lastLetter} '`);

    if (resultEl.innerText == '0/0') return resultEl.innerText = '0';

    displayEl.innerText += resultEl.innerText + '=';

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

    let lastLetter = resultEl.innerText.slice(-1);
    let lastTwoLetter = resultEl.innerText.slice(-2);
    let afterLastDot = resultEl.innerText.slice(resultEl.innerText.lastIndexOf('.') + 1);

    // let gggg = resultEl.innerText.slice(-2) == ('+0' || '-0' || '/0' || '*0');

    if (resultEl.innerText === '' && (e.innerText === '+' || e.innerText === '-' || e.innerText === '÷' || e.innerText === 'x')) return;


    if ((eValue === '+' || eValue === '-' || eValue === '/' || eValue === '*') && (lastLetter === ('+') || lastLetter === ('-') || lastLetter === ('*') || lastLetter === ('/')))
        return getSlicedValue(eValue);

    if ((eValue === '.' && lastLetter === ('.')) || (eValue === '0' && resultEl.innerText == '0')) return;

    // if (eValue === '0' && (lastTwoLetter == ('+0' || '-0' || '/0' || '*0'))) return;  // ესე დაწერისას ('+0' || '-0' || '/0' || '*0') არ მუშაობს
    if (eValue === '0' && (lastTwoLetter == ('+0') || lastTwoLetter == '-0' || lastTwoLetter == '/0' || lastTwoLetter == '*0')) return;

    if (resultEl.innerText == '0' && (eValue === '.' || eValue === '+' || eValue === '-' || eValue === '/' || eValue === '*'))
        return compute(eValue);

    if ((eValue !== '0' && resultEl.innerText == '0') || (lastLetter === ('.') && (eValue == ('+') || eValue == ('-') || eValue == ('*') || eValue == ('/'))))
        return getSlicedValue(eValue);

    if (eValue !== '.' && (lastTwoLetter == ('+0') || lastTwoLetter == '-0' || lastTwoLetter == '/0' || lastTwoLetter == '*0'))
        return getSlicedValue(eValue);

    if ((eValue === '.' && resultEl.innerText == '') || (eValue === '.' && (lastLetter === ('+') || lastLetter === ('-') || lastLetter === ('/') || lastLetter === ('*')))) return resultEl.innerText += '0.';

    // if (eValue === '.' && resultEl.innerText.lastIndexOf('.') !== -1 && !(resultEl.innerText.slice(resultEl.innerText.lastIndexOf('.') + 1).includes('+' || '-' || '*' || '/'))) return;
    if (eValue === '.' && resultEl.innerText.lastIndexOf('.') !== -1 && !(afterLastDot.includes('-') || afterLastDot.includes('+') || afterLastDot.includes('/') || afterLastDot.includes('*'))) return;


    compute(eValue);
}

function deleteNumber() {
    let resultEl = document.getElementById('result');
    resultEl.innerText = resultEl.innerText.slice(0, -1);
}
