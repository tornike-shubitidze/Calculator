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







// let displayEl = document.getElementById('display');
// let resultEl = document.getElementById('result');


function clearAll() {
    document.getElementById('display').innerText = '';
    document.getElementById('result').innerText = '';
}


function calculateResult() {
    if (!document.getElementById('result').innerText) return
    document.getElementById('display').innerText = document.getElementById('result').innerText + '=';
    document.getElementById('result').innerText = eval(result.innerText);
}

function getButton(e) {
    if (e.getAttribute('value') === '.' && document.getElementById('result').innerText.includes('.')) return;
    if (document.getElementById('result').innerText == '' && (e.innerText === '+' || e.innerText === '-' || e.innerText === '÷' || e.innerText === 'x')) return;
    document.getElementById('result').innerText += e.getAttribute('value');
}


function deleteNumber() {
    document.getElementById('result').innerText = document.getElementById('result').innerText.slice(0, -1);
}