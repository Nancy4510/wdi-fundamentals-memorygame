//console.log("Up and running!");

var cards =["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push(cardOne);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

if (cardsInPlay.length === 2) {
  if (cardsInPlay === cardsInPlay[0]) {
    alert("You found a match!");
  }
  else {
    alert("Sorry, try again");
  }
}