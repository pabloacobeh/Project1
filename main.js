const suits = ["♥️", "♦️", "♠️", "♣️"];
const values = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];
let deck;
let playerDeck;
let computerDeck;
let centerDeck;
let playerStack;
let computerStack;
let inRound = false;

const computerCardSlot = document.querySelector(".computer-card-slot");
const playerCardSlot = document.querySelector(".player-card-slot");
const centerCardSlot = document.querySelector(".center-card-slot");
const computerDeckElement = document.querySelector(".computer-deck");
const playerDeckElement = document.querySelector(".player-deck");
const centerDeckElement = document.querySelector(".center-deck");
computerCardSlot.appendChild(Deck.cards[0].getHTML());

document.addEventListener("click", () => {
  if (inRound) {
    cleanBeforeRound();
  } else {
    flipCards();
  }
});

class Deck {
  constructor() {
    this.cards = this.createDeck();
  }
  pop() {
    return this.cards.shift();
  }

  push(Card) {
    this.cards.push(card);
  }
  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }
  createDeck() {
    let cards = [];
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < values.length; j++) {
        cards.push({ suit: suits[i], value: values[j] });
      }
    }

    return cards;
  }
}

class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }

  get color() {
    return this.suit === "♣️" || this.suit === "♠️" ? "black" : "red";
  }

  getHTML() {
    let cardDiv = document.createElement("div");
    cardDiv.innerText = this.suit;
    cardDiv.classList.add("card", this.color);
    cardDiv.dataset.value = "${this.value} ${this.suit}";
    return cardDiv;
  }
}

function setUp() {
  const deck = new Deck();

  deck.shuffle();

  let playerDeck = deck.cards.slice(0, 26);
  let computerDeck = deck.cards.slice(26, deck.cards.length);
  inRound = false;
  cleanBeforeRound();
}
function cleanBeforeRound() {
  computerCardSlot.innerHTML = " ";
  centerCardSlot.innerHTML = " ";
  playerCardSlot.innerHTML = " ";
  inRound = false;
  updateDeckCount();
}

function flipCards() {
  inRound = true;

  const playerCard = playerDeck.pop();
  const computerCard = computerDeck.pop();

  playerCardSlot.appendChild(playerCard.getHtml());
  computerCardSlot.appendChild(computerCard.getHtml());

  updateDeckCount();
}

function updateDeckCount() {
  computerDeckElement.innerText = computerDeck.deck.cars.length;
  playerDeckElement.innerText = playerDeck.deck.cars.length;
  centerDeckElement.innerText = centerDeck.deck.cars.length;
}

function initial() {
return computerCard
}
function startGame() {
    while ()
}

function gameOver() {
if(playerDeck || computerDeck === 0) {
    
}
}

function chekWinner() {
    gameOver()
    if (playerStack > computerStack) {
        return "Player won!!"

    } else {
        return "Player lost!!"
    }
}

function goToCenter() {
    while(playerCard)
}