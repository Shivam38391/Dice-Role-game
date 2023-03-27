'use strict';

// selectig elements
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const dice = document.querySelector('.dice')
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

const newgame = document.querySelector('.btn--new')
const roll = document.querySelector('.btn--roll')
const hold = document.querySelector('.btn--hold')

let curentscore = 0;

score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden')

roll.addEventListener('click', function(){
    const secret = Math.trunc(Math.random()*6) + 1;
    dice.classList.remove('hidden')

    dice.src = `dice-${secret}.png`

// check for role 1
    if (secret !==1){
// Add dice to current value
        curentscore = curentscore + secret;
        current0.textContent = curentscore; //Change later
    } else {
        //switch to next player
        
    }
    


    console.log(secret)
})
