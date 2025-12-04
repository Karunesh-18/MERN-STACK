const counterValue = document.getElementById('counter');
const incrementBtn = document.getElementById('inc');
const decrementBtn = document.getElementById('dec');

let count = 0;
incrementBtn.addEventListener('click', () => counterValue.innerText = ++count);
decrementBtn.addEventListener('click', () => ( count > 0 )? counterValue.innerText = --count : null);