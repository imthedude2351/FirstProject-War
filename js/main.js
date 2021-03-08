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

const playerPointsEl = document.getElementById('playerPoints');
const computerPointsEl = document.getElementById('computerPoints');
const cardsPlayerLeftEl = document.getElementById('cardsPlayerLeft');
const cardsComputerLeftEl = document.getElementById('cardsComputerLeft');
const battlesWonPlayerEl = document.getElementById('battlesWonPlayer');
const battlesWonComputerEl = document.getElementById('battlesWonComputer');

const newButton = document.getElementById('shuffleDeal');
const battleButton = document.getElementById('battle');
const warButton = document.getElementById('war');
const mineButton = document.getElementById('mine');
const restartButton = document.getElementById('restart');

/*----- event listeners -----*/
newButton.addEventListener('click', handleDeal);
battleButton.addEventListener('click', handleBattle);
warButton.addEventListener('click', handleWar);
mineButton.addEventListener('click', handleMine);
restartButton.addEventListener('click', handleRestart);

/*----- functions -----*/
init();

function handleDeal(evt) {
    
}

function handleBattle(evt) {

}

function handleWar(evt) {

}

function handleMine(evt) {

}

function handleRestart(evt) {

}

function init() {
    // Initialize all state
    shuffleDeck = [];
    playerOnePile = [];
    playerTwoPile = [];
    playerOneHand = [];
    playerTwoHand = [];
    winner = null;
    render();
}

function render() {
    // Render the field

}