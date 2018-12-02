//Game Values

let min = 1,
    max = 10,
    winningNumb = getRandomNumber(min,max),
    guessesLeft = 3;

    // UI ELEMENTs
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max

minNum.textContent = min;
maxNum.textContent = max;

//Play again event listener
game.addEventListener('mousedown',function(e){
  if(e.target.className === 'Play-again') {
    //reload the page
    window.location.reload();
  }
})
//Listen for guess
guessBtn.addEventListener('click', function(){
   //convert to number
  let guess = parseInt(guessInput.value);

  //valid
  if(isNaN(guess)|| guess < min || guess > max ) {
     setMessage(`Please enter number between ${min} and ${max}`, 'red');
  }

//check if won
if(guess === winningNumb) {
  gameOver(true,`${winningNumb} is correct, YOU WON!`)

} 
  else {
        //wrong number
        guessesLeft -= 1;
        if(guessesLeft === 0) {
         
         gameOver(false, `Game over, you lost. The correct number was ${winningNumb}`);
  

        } else {
           // change border color to red
           guessInput.style.borderColor = 'red';
           // Game continue - answer wrong
           setMessage(`${guess} is not correct, ${guessesLeft} guesses left`,'red');

           //clear input
           guessInput.value = '';
        }

}
});
//Game over
function gameOver(won,msg) {

  let color;
  won === true ? color = 'green' : color = 'red';
   //disable input
   guessInput.disabled = true;
   // change border color to green
   guessInput.style.borderColor = color;

   //set text color
   message.style.color = color;
   
   //set message
   setMessage(msg);

   // Play Again
   guessBtn.value= 'Play Again';
   guessBtn.className  += 'Play-again';
}

//Getting Wining Number
function getRandomNumber(min,max) {
  //generate random number
return  Math.floor( Math.random() * (max-min+1) + min);
}
//set message
function setMessage(msg,color) {
  message.style.color = color;
  message.textContent = msg;
}


