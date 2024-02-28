// // Way 1
// function play(){

//     // add a class hidden to hide the homepage
//     const homepage = document.getElementById('home');
//     homepage.classList.add('hidden');

//     // remove hidden form playground
//     const playground = document.getElementById('play-ground');
//     playground.classList.remove('hidden')
// };

function startGame(){
    // set or generate a random alphabet
    const alphabet = getARandomAlphabet();

    // show randomly generated alphabet on the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color to keyboard alphbet
    setBackgroundColorById(alphabet);
    // removeBackgroundColorById(alphabet)

}

// Way 2
function play(){
    hideElementById('home');
    showElementById('play-ground');
    startGame()
}
