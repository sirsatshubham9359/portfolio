const words = [

    "Engineering Student",
    "Embedded Systems Enthusiast",
    "Python Learner",
    "IoT Explorer",
    "Web Development Learner"

];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingText = document.getElementById("typing-text");

function typeEffect(){

    const currentWord = words[wordIndex];

    if(isDeleting){

        typingText.textContent = currentWord.substring(0,charIndex--);

    }else{

        typingText.textContent = currentWord.substring(0,charIndex++);

    }

    let speed = isDeleting ? 50 : 100;

    if(!isDeleting && charIndex === currentWord.length + 1){

        speed = 1500;

        isDeleting = true;

    }

    if(isDeleting && charIndex === 0){

        isDeleting = false;

        wordIndex++;

        if(wordIndex === words.length){

            wordIndex = 0;
        }

    }

    setTimeout(typeEffect,speed);

}

typeEffect(); 