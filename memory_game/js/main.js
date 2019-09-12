//console.log("Up and running!");

var cards = [
  {
   rank: 'queen',
   suite: 'hearts',
   cardImage: 'images/queen-of-hearts.png'
 },
 {
   rank: 'queen',
   suite: 'diamonds',
   cardImage: 'images/queen-of-diamonds.png'
 },
 {
   rank: 'king',
   suite: 'hearts',
   cardImage: 'images/king-of-hearts.png'
 },
 {
   rank: 'king',
   suite: 'diamonds',
   cardImage: 'images/king-of-diamonds.png'
 }
];

var cardsInPlay = [];

function checkForMath(cardId)
{
  this.setAttribute('src', cards[cardId].cardImage);
  if (cardsInPlay[0] === cardsInPlay[1])
  {
  console.log("You found a match!");
}
else
{
  console.log("Sorry, try again.");
}
}

function flipCard()
{
  var cardId = this.getAttribute('data-id');
  console.log("User flipped " +cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suite);

checkForMath();
}


function createBoard()
{
  for (var i = 0; i < cards.length; i++)
  {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', "images/back.png");
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}
createBoard();
