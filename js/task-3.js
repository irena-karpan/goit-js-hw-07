'use strict'

const textInput = document.querySelector('#name-input');
const spanOutput = document.querySelector('#name-output');

textInput.addEventListener('input', checkText);

function checkText(event) {
    
        const textValue = event.currentTarget.value.trim();

        if (textValue !== '' ) {
           spanOutput.textContent = textValue;
        }
        else {
            spanOutput.textContent = 'Anonymous';
        }
          
}



// textInput.addEventListener('input', event => {
//     spanOutput.textContent =
//         event.currentTarget.value.trim() || 'Anonymous';
// });