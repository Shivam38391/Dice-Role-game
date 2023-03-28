'use strict';

// selectig elements
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const dice = document.querySelector('.dice')
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

const newgame = document.querySelector('.btn--new')
const roll = document.querySelector('.btn--roll')
const hold = document.querySelector('.btn--hold')

let curentscore = 0;
let activeplayer = 0;


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
        // current0.textContent = curentscore; //Change later

        document.getElementById(`current--${activeplayer}`).textContent = curentscore;
    } else {
        //switch to next player

        document.getElementById(`current--${activeplayer}`).textContent = 0;
        activeplayer = activeplayer === 0 ? 1 : 0;
        curentscore = 0

        //togall method it will add class if it is not there, it will remove if it is not there
        player0.classList.toggle('player--active');
        player1.classList.toggle('player--active');


    }
    

    console.log(secret)
})
