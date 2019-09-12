//console.log("Up and running!");

var cards =["queen", "queen", "king", "king"];
var cardsInPlay = [];

function checkForMath()
{
  if (cardsInPlay[0] === cardsInPlay[1])
  {
  console.log("You found a match!");
}
else
{
  console.log("Sorry, try again.");
}
}

function flipCard(cardId)
{
  console.log("User flipped " +cards[cardId])
  cardsInPlay.push(cards[cardId]);


  /*
  if (cardsInPlay.length === 2)
  {
    if (cardsInPlay === cardsInPlay[0])
    {
      alert("You found a match!");
    }
    else
    {
      alert("Sorry, try again");
    }
  }
  */
}
flipCard(0);
flipCard(2);
checkForMath();
