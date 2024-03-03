// // Way 1 - Press Play Button To Go To The Next Page

// function play(){

//     // add a class hidden to hide the homepage
//     const homepage = document.getElementById('home');
//     homepage.classList.add('hidden');

//     // remove hidden form playground
//     const playground = document.getElementById('play-ground');
//     playground.classList.remove('hidden')
// };

function handleKeyboardKeyUpEvent(event) {
    const playerPrassed = event.key;

    // stop the game if 'Esc' pressed
    if(playerPrassed === 'Escape'){
        gameOver();
    }

    // expected key to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    // check if pressed key match or not
    if (playerPrassed === expectedAlphabet) {

        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);
  
// -------------------------------------------------------
        // Update The Score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // const currentScore = getTextElementValueById('current-score');

        // Increase The Score By 1
        // const newScore = currentScore + 1;
        // currentScoreElement.innerText = newScore;

        removeBackgroundColorById(expectedAlphabet);
        playGame();
    }

    else {

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife -1;
        setTextElementValueById('current-life', updatedLife);

        if (updatedLife === 0){
            // console.log('game over')
            gameOver();
        }

        // -------------------------------------------------
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currrentLife = parseInt(currentLifeText);
        // const newLife = currrentLife - 1;
        // currentLifeElement.innerHTML = newLife;
        // console.log('You lost a point')
    }
}

document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function playGame() {
    // set or generate a random alphabet
    const alphabet = getARandomAlphabet();

    // show randomly generated alphabet on the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color to keyboard alphbet
    setBackgroundColorById(alphabet);
    // removeBackgroundColorById(alphabet)

}

// Way 2 - Press Play Button To Go To The Next Page
function play() {
    // Hide everything and Show only playground
    hideElementById('home');
    hideElementById('final-score')
    showElementById('play-ground');

    // Reset score and life
    setTextElementValueById('current-score', 0);
    setTextElementValueById('current-life', 5)
    playGame()
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    // update final score
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore)

    // Clear the last selected alphabet color
    const currentElphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentElphabet);
}