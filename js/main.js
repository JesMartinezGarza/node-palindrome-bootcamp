// Goal: Create a simple web application that uses the fs and http modules to validate if a string is a palindrome server side.
  
document.querySelector('#generate').addEventListener('click', verify)

async function verify(){

    document.querySelector('#verdict').innerText = '';

        let potentialPal = document.querySelector('#enteredWord').value

        let potPalLowercase = potentialPal.toLowerCase().replace(/\W/g, "")
        let potPalNoSpaces = potPalLowercase.split(' ').join('')

        let potPalReversed = potPalNoSpaces.split('').reverse().join('')

        let verdict = 'Sorry, but this is not a palindrome!';
  
        if(potPalNoSpaces === potPalReversed){
        verdict = 'This is a palindrome!'
    }

    setTimeout(function() {

    document.querySelector('#verdict').innerText = verdict;

    }, 1500)
}