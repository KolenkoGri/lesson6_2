'use strict';

const input = document.createElement('input');
const p = document.createElement('p');
const body = document.querySelector('body');

body.append(input, p);

input.addEventListener('change', () => {
    setTimeout(() => { p.textContent = input.value}, 300);
})