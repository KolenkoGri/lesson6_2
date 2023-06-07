'use strict';

const input = document.createElement('input');
const p = document.createElement('p');
const body = document.querySelector('body');

body.append(input, p);

function debounce( callback, delay ) {
    let timeout;
    return function() {
        clearTimeout( timeout );
        timeout = setTimeout( callback, delay );
    }
}

const myInput = document.querySelector("input");

function changeValue() {
    p.textContent = input.value;
}

myInput.addEventListener(
    "keyup",
    debounce( changeValue, 300 )
);
