let cards = [];
let player = {
  name: "timeody",
  chips: 122,
};
let hasBlackJack = false;
let isAlive = false;
let message = "";
let sum = 0;

let messageEL = document.getElementById("message-el");
// let sumEL = document.getElementById("sum-el");
let sumEL = document.querySelector("#sum-el");
let cardsEL = document.querySelector("#cards-el");
let playerEL = document.querySelector("#player-el");

playerEL.textContent = player.name + ": $" + player.chips;

function startGame() {
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  hasBlackJack = false;
  isAlive = true;
  renderGame();
}

function renderGame() {
  cardsEL.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEL.textContent += cards[i] + " ";
  }

  sumEL.textContent = "Sum: " + sum;

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out!";
    isAlive = false;
  }

  messageEL.textContent = message;
}

function newCard() {
  if (hasBlackJack === false && isAlive === true) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);

    renderGame();
  }
}

function getRandomCard() {
  let rand = Math.ceil(Math.random() * 13);
  if (rand === 1) return 11;
  else if (rand > 10) return 10;
  else return rand;
}
