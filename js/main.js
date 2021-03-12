/*----- constants -----*/
const suits = ['s', 'c', 'd', 'h'];
const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
const masterDeck = buildMasterDeck();

/*----- app's state (variables) -----*/
let shuffledDeck;
let playerOneDeck;
let playerTwoDeck;
let winner;

/*----- cached element references -----*/
const rules = document.getElementById("rules");
const cardsPlayerLeftEl = document.querySelector("#cardsPlayerLeft");
const cardsComputerLeftEl = document.querySelector("#cardsComputerLeft");
const playerCards = document.getElementById("playerCards");
const computerCards = document.getElementById("computerCards");
const mainButton = document.getElementById("mainButton");
const replayBtn = document.getElementById("replayButton");
/*----- event listeners -----*/
mainButton.addEventListener('click', handleGame);
replayBtn.addEventListener('click', init);

/*----- functions -----*/
init();

function renderShuffledDeck() {
  const tempDeck = [...masterDeck];
  shuffledDeck = [];
  while (tempDeck.length) {
    const rndIdx = Math.floor(Math.random() * tempDeck.length);
    shuffledDeck.push(tempDeck.splice(rndIdx, 1)[0]);
  }
  return shuffledDeck;
}

function buildMasterDeck() {
  const deck = [];
  suits.forEach(function(suit) {
    ranks.forEach(function(rank) {
      deck.push({
        face: `${suit}${rank}`,
        value: Number(rank) || (rank === 'A' ? 11 : 10)
      });
    });
  });
  return deck;
}

function init() {
  shuffledDeck = renderShuffledDeck();
  playerOneDeck = shuffledDeck.splice(0, 26);
  playerTwoDeck = shuffledDeck;
  rules.innerHTML = "Click <i>Battle</i> to begin";
  render();
}

function handleGame() {
    let playerCard = playerOneDeck.shift()
    let computerCard = playerTwoDeck.shift()
    rules.innerHTML = "This is War!"
    if (playerCard.value > computerCard.value) {
        playerOneDeck.push(playerCard, computerCard) 
    } else if (playerCard.value < computerCard.value) {
        playerTwoDeck.push(playerCard, computerCard)
    } else {
        playerOneDeck.push(playerCard)
        playerTwoDeck.push(computerCard)
    } 
    winner = endGame()
    render()
}

function endGame() {
    if (playerOneDeck.length === 52) {
        winner = true
    } else if(playerTwoDeck.length === 52){
        winner = false
    }
    return winner;
}

function render() {
  if (winner) {
    return rules.innerHTML = "You Win!";
  } else if (winner === false) {
    return rules.innerHTML = "To bad so sad you Lost";
  }
  let playerCardFace = playerOneDeck[0];
  let computerCardFace = playerTwoDeck[0];
  playerCards.innerHTML = `<div class ="card ${playerCardFace.face}"></div>`
  computerCards.innerHTML = `<div class ="card ${computerCardFace.face}"></div>`
  cardsComputerLeftEl.textContent = `${playerTwoDeck.length}`
  cardsPlayerLeftEl.textContent = `${playerOneDeck.length}`
  replayBtn.style.visibility = winner ? "visible" : "hidden";
}