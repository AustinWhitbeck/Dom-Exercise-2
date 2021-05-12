// nav-bar

// target the nav bar and add/remove the hidden class

const menuButton = document.querySelector('.menu-toggle');
console.log(menuButton)

const navBar = document.querySelector('nav');
console.log(navBar);

const lettersButton = document.querySelector('.letters-button');
console.log(lettersButton);
const numbersButton = document.querySelector('.numbers-button');
console.log(numbersButton);
const lettersSection = document.querySelector('.letters-section')
console.log(lettersSection);
const numbersSection = document.querySelector('.numbers-section')
console.log(numbersSection);


// click menuButton to get navBar to reveal 

menuButton.addEventListener('click', (event) => {
    navBar.classList.toggle('hidden');
    
})

numbersButton.addEventListener('click', (event) => {
    numbersSection.classList.remove('hidden');
    // if lettersButton doesn't have .hidden class
    // give lettersButton a .hidden class
    lettersSection.classList.add('hidden')
})

lettersButton.addEventListener('click', (event) => {
    lettersSection.classList.remove('hidden');
    numbersSection.classList.add('hidden')
})




