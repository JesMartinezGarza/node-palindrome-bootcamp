// Goal: Create a simple web application that uses the fs and http modules to validate if a string is a palindrome server side.

button.addEventListener('click', verify)


function verify(){
    alert('word');

    let text = document.getElementById('generate').innerText;
    document.getElementById("verdict").innerHTML = text;  

    let word = enteredWord.innerText;
    let wordLowercase = word.toLowerCase();
    let wordAsArray = [];
    let wordReversed = '';
    let verdict = 'Sorry, but this is not a palindrome!';
    for(let i = 0; i < wordLowercase.length; i++){
        wordAsArray.unshift(wordLowercase.charAt(i))
    }
    for(let i = 0; i < wordAsArray.length; i++){
        wordReversed += wordAsArray[i]
    }
    if(wordReversed === wordLowercase){
        verdict = 'Wow! This is indeed a palindrome.'
    }
   document.getElementById('verdict').innerText() = verdict;
}
