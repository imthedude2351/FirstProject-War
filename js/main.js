/*----- constants -----*/
const suits = ['Spades','Diamonds', 'Hearts', 'Clubs'];
const face = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

/*----- app's state (variables) -----*/
let shuffleDeck = [];
let playerOneHand = [];
let playerTwoHand = [];
let winner = null;
let playerOnePile = [];
let playerTwoPile = [];

/*----- cached element references -----*/
const rules = document.getElementById('rules');

const newButton = document.getElementById('shuffleDeal');
const battleButton = document.getElementById('battle');
const warButton = document.getElementById('war');
const mineButton = document.getElementById('mine');
const restartButton = document.getElementById('restart');

/*----- event listeners -----*/
newButton.addEventListener('click', deal);
battleButton.addEventListener('click', battle);
warButton.addEventListener('click', war);
mineButton.addEventListener('click', mine);
restartButton.addEventListener('click', restart);

/*----- functions -----*/
init();

function init() {
    // Initialize all state
    shuffleDeck = shuffle(deck);
    playerOnePile = [];
    playerTwoPile = [];
    playerOneHand = [];
    playerTwoHand = [];
    winner = null;
    render();
}

function render() {

}