'use strict'



// let buttons = Array.from(document.getElementsByClassName("number"));
// console.log(document.getElementsByClassName("number"))

// buttons.map(button => {
//     button.addEventListener('click', (e) => {
//         console.log(e.innerText)
//         if (e.getAttribute('value') === '.' && document.getElementById('result').innerText.includes('.')) return;
//         if (document.getElementById('result').innerText == '' && (e.innerText === '+' || e.innerText === '-' || e.innerText === '÷' || e.innerText === 'x')) return;
//         return document.getElementById('result').innerText += e.getAttribute('value');
//     })
// });




let displayEl = document.getElementById('display');
let resultEl = document.getElementById('result');


function clearAll() {
    displayEl.innerText = '';
    resultEl.innerText = '';
}


function calculateResult() {
    if (!resultEl.innerText) return
    displayEl.innerText = resultEl.innerText + '=';
    resultEl.innerText = eval(resultEl.innerText);
}

function getButton(e) {
    if (e.getAttribute('value') === '.' && resultEl.innerText.includes('.')) return;
    if (resultEl.innerText == '' && (e.innerText === '+' || e.innerText === '-' || e.innerText === '÷' || e.innerText === 'x')) return;
    resultEl.innerText += e.getAttribute('value');
}


function deleteNumber() {
    resultEl.innerText = resultEl.innerText.slice(0, -1);
}