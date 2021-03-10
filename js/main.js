/*----- constants -----*/
const suits = ['Spades','Diamonds', 'Hearts', 'Clubs'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

class Deck {
    constructor() {
        this.cards = [];
    }
    buildDeck() {
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                this.cards.push(new Card(suits[i], ranks[j], values[j]));
            }
        }
    }
}
class Card {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.vaule = vaule;
    }
}

const deck = new Deck();

/*----- app's state (variables) -----*/
let shuffleDeck = [];
let playerOneHand = [];
let playerTwoHand = [];
let winner = null;
let playerOnePile = [];
let playerTwoPile = [];

/*----- cached element references -----*/
const rules = document.getElementById('rules');
const message = document.getElementById('textHere');

const cardsPlayerLeftEl = document.getElementById('cardsPlayerLeft');
const cardsComputerLeftEl = document.getElementById('cardsComputerLeft');

const playerCards = document.getElementById('playerCards');
const computerCards = document.getElementById('computerCards');

const mainButton = document.getElementById('mainButton');
const warButton = document.getElementById('warButton');
const restartButton = document.getElementById('restart');

/*----- event listeners -----*/
mainButton.addEventListener('click', handleGame);
warButton.addEventListener('click', handleWar);
restartButton.addEventListener('click', handleRestart);

/*----- functions -----*/
function handleGame() {
    playerTwoHand.push(playerTwoPile.shift());
    playerOneHand.push(playerOnePile.shift());
    render();
    if (playerOneHand[playerOneHand.length - 1].value === playerTwoHand[playerTwoHand.length - 1].value) {
        message.innerText = "It's time for War!";
        mainButton.style.visibility = 'hidden';
        warButton.style.visibility ='visible';
        restartButton.style.visibility = 'hidden';
    } else if (playerOneHand[playerOneHand.length - 1].value > playerTwoHand[playerTwoHand.length - 1].value) {
        playerOnePile.push(playerOneHand.shift(), playerTwoHand.shift());
        message.innerText = "You won that hand!";
    } else {
        playerTwoPile.push(playerTwoHand.shift(), playerOneHand.shift());
        message.innerText = "Looks like you lost that one";
    }
}

function handleWar() {
    playerOneHand.push(playerOnePile.shift(), playerOnePile.shift());
    playerTwoHand.push(playerTwoPile.shift(), playerTwoPile.shift());
    mainButton.style.visibility = 'visible';
    warButton.style.visibility ='hidden';
    restartButton.style.visibility = 'hidden';
    render();
    while (playerOneHand[playerOneHand.length - 1].value === playerTwoHand[playerTwoHand.length - 1].value) {
        playerOneHand.push(playerOnePile.shift(), playerOnePile.shift());
        playerTwoHand.push(playerTwoPile.shift(), playerTwoPile.shift());
        mainButton.style.visibility = 'hidden';
        warButton.style.visibility ='visible';
        restartButton.style.visibility = 'hidden';
    } if (playerTwoHand.length < 2 || playerOneHand[playerOneHand.length - 1].value > playerTwoHand[playerTwoHand.length - 1].value) {
        playerOnePile.push(...playerOneHand.splice(0), ...playerTwoHand.splice(0));
    } else (playerOneHand.length < 2); {
        playerTwoPile.push(...playerTwoHand.splice(0), ...playerOneHand.splice(0));
    }
}

function handleRestart() {
    if (playerOnePile.length + playerOneHand.length >= 52) {
        mainButton.style.visibility = 'hidden';
        warButton.style.visibility ='hidden';
        restartButton.style.visibility = 'visible';
        message.innerText = "Congrats you win!";
    } else if (playerOnePile.length === 0) {
        mainButton.style.visibility = 'hidden';
        warButton.style.visibility ='hidden';
        restartButton.style.visibility = 'visible';
        message.innerText = "Sorry looks like you lost. Try Again!";
    }
}

function render() {
    cardsPlayerLeftEl.innerText = playerOneHand.length + playerOnePile.length;
    cardsComputerLeftEl.innerText = playerTwoHand.length + playerTwoPile.length;
    playerCards.innerHTML = `<div class="card ${playerOneHand[playerOneHand.length - 1].suit}${playerOneHand[playerOneHand.length - 1].rank}"></div>`;
    computerCards.innerHTML = `<div class="card ${playerTwoHand[playerTwoHand.length - 1].suit}${playerTwoHand[playerTwoHand.length - 1].rank}"></div>`;
}

function init() {
    if (deck.cards.length) {
        return;
    } else {
        deck.buildDeck();
        shuffleCards(deck);
        passOutCards(shuffleDeck);
        mainButton.style.visibility = 'visible';
        warButton.style.visibility = 'hidden';
        restartButton.style.visibility = 'hidden'; 
        render();
    }
}

function shuffleCards(deck) {
    const newDeck = Array.from(deck.cards);
    while (newDeck.length) {
      const battleNumber = Math.floor(Math.random() * newDeck.length);
      shuffleDeck.push(newDeck.splice(battleNumber, 1)[0]);
    }
  }
  
  function passOutCards(deck) {
    while (shuffleDeck.length > 0) {
      playerOneHand.push(shuffleDeck.shift());
      playerTwoHand.push(shuffleDeck.shift());
    }
  }

init();