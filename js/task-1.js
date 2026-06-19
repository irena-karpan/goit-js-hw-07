'use strict'


// task 1
const list = document.querySelector('ul#categories');

const categoryArr = list.querySelectorAll('.item');
console.log(`Number of categories: ${categoryArr.length}`);


// task 2
categoryArr.forEach(element => {
    // task 2.1
    console.log(`Categories: ${element.querySelector('h2').textContent}`);


    // task 2.2
    console.log(`Elements: ${element.querySelectorAll('li').length}`);
})