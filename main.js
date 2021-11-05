import Deck from "./deck.js";

const CARD_VALUE_MAP = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14,
};

const computerCardSlot = document.querySelector(".computer-card-slot");
const playerCardSlot = document.querySelector(".player-card-slot");
const computerDeckElement = document.querySelector(".computer-deck");
const playerDeckElement = document.querySelector(".player-deck");
const text = document.querySelector(".text");

let playerDeck;
let computerDeck;
let inRound;
let stop;
let trashStack = [];
let computerStack = [];
let playerStack = [];
let playerCard;
let computerCard;

document.addEventListener("click", () => {
  if (stop) {
    startGame();

    return;
  }

  if (inRound) {
    cleanBeforeRound();
  } else {
    flipCards();
  }
});

function startGame() {
  const deck = new Deck();
  deck.shuffle();
  const deckMidpoint = Math.ceil(deck.numberOfCards / 2);
  playerDeck = new Deck(deck.cards.slice(0, deckMidpoint));
  computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards));
  inRound = false;
  stop = false;
  cleanBeforeRound();
}

function cleanBeforeRound() {
  inRound = false;
  computerCardSlot.innerHTML = "";
  playerCardSlot.innerHTML = "";
  text.innerText = "";
  isGameOver();
  updateDeckCount();
}

function flipCards() {
  inRound = true;

  playerCard = playerDeck.pop();

  computerCard = computerDeck.pop();

  playerCardSlot.appendChild(playerCard.getHTML());
  computerCardSlot.appendChild(computerCard.getHTML());

  updateDeckCount();

  if (isRoundWinner(playerCard, computerCard)) {
    text.innerText = "Win";
    playerStack.push(playerCard);
    playerStack.push(computerCard);
  } else if (isRoundWinner(computerCard, playerCard)) {
    text.innerText = "Lose";
    computerStack.push(playerCard);
    computerStack.push(computerCard);
  } else {
    text.innerText = "Draw";
    trashStack.push(playerCard);
    trashStack.push(computerCard);
  }
}

function updateDeckCount() {
  computerDeckElement.innerText = computerDeck.numberOfCards;
  playerDeckElement.innerText = playerDeck.numberOfCards;
}

function isRoundWinner(cardOne, cardTwo) {
  return CARD_VALUE_MAP[cardOne.value] > CARD_VALUE_MAP[cardTwo.value];
}

function checkStackSize() {
  if (playerStack > computerStack) {
    alert("You Won!! Congratulations");
  } else if (playerStack < computerStack) {
    alert("Computer won! Goodluck next time");
  } else {
    alert("It's a tie!!");
  }
  text.style.visibility = "visible";
  text.style.display = "block";
  restarGame();
}

function isGameOver() {
  if (playerDeck.cards.length === 0) {
    checkStackSize();
  }
}

function restarGame() {
  alert("You want to play Again");
  return startGame();
}
// execute game
startGame();
