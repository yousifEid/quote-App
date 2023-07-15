var quotations = [
  "Be yourself; everyone else is already taken.Oscar Wilde",
  "You know you're in love when you can't fall asleep because reality is finally better than your dreams.Dr. Seuss",
  "If you tell the truth, you don't have to remember anything.Mark Twain",
  "A friend is someone who knows all about you and still loves you.Elbert Hubbard",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.Ralph Waldo Emerson",
  "It does not do to dwell on dreams and forget to live. J.K. Rowling",
  "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.Neil Gaiman",
  "It is not a lack of love, but a lack of friendship that makes unhappy marriages.Friedrich Nietzsche",
  "I may not have gone where I intended to go, but I think I have ended up where I needed to be. douglas adams",
  "It is never too late to be what you might have been.George Eliot",
  "Anyone who thinks sitting in church can make you a Christian must also think that sitting in a garage can make you a car.Garrison Keillor",
  "There is nothing I would not do for those who are really my friends. I have no notion of loving people by halves, it is not my nature.Jane Austen"
];

function getRandomQuotation() {
  var randomIndex = Math.floor(Math.random() * quotations.length);
  return quotations[randomIndex];
}

function changeQuotation() {
  var quotationElement = document.getElementById("quotation");
  
  quotationElement.innerText = getRandomQuotation();
}

var changeButton = document.getElementById("changeButton");
changeButton.addEventListener("click", changeQuotation);
