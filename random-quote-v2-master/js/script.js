
//variables
// var quote;
var source;
var htmlString = '';
var random;
var outputDiv;
var randomQuote;
var timer;

//random number generation
function generateRandomNumber() {
  random = Math.floor( Math.random() * quotes.length - 1 );

  return random;
}

// random array selection and html string concatenation
function getRandomQuote() {
  randomNumber = generateRandomNumber();
  randomQuoteObject = quotes[random];

  return randomQuoteObject;
}


// Print our random quote
function printQuote() {
  var ourQuoteObject = getRandomQuote();

  htmlString =
  '<p class="quote"> ' + ourQuoteObject.quote + '</p>' +
  '<p class="source">' + ourQuoteObject.source + '</p>';

  document.getElementById('quote-box').innerHTML = htmlString;
  //var test = htmlString;
  //return htmlString;
}






function getRandomColor() {
var letters = '0123456789ABCDEF';
var color = '#';
for (var i = 0; i < 6; i++ ) {
  color += letters[Math.floor(Math.random() * 16)];
}
return color;
}


document.body.style.background = getRandomColor();

//var randomColor = document.querySelector("background-color");
//var otherColor = getRandomColor();
//document.body.style.background = otherColor;
//if (document.getElementById('loadQuote').clicked = true)


// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//Event listener, when a user clicks on load quote, a new color is shown
document.getElementById('loadQuote').addEventListener("click", getRandomColor);



//Add Timer To quote

//timer = setInterval(printQuote, 5000);
