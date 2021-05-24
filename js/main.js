'use strict'

function clearAll() {
    document.getElementById('display').innerText = '';
    document.getElementById('result').innerText = '';
}


function calculateResult() {
    if (!document.getElementById('result').innerText) return
    document.getElementById('display').innerText = document.getElementById('result').innerText + '=';
    document.getElementById('result').innerText = eval(document.getElementById('result').innerText);
}

function getButton(e) {
    if (e.getAttribute('value') === '.' && document.getElementById('result').innerText.includes('.')) return;
    if (document.getElementById('result').innerText == '' && (e.innerText === '+' || e.innerText === '-' || e.innerText === '÷' || e.innerText === 'x')) return;
    document.getElementById('result').innerText += e.getAttribute('value');
}


function deleteNumber() {
    document.getElementById('result').innerText = document.getElementById('result').innerText.slice(0, -1);
}