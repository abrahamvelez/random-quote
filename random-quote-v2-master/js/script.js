
//variables
var htmlString = '';
var random;
var randomQuote;
var timer;

//random number generation
function generateRandomNumber() {
  random = Math.floor( Math.random() * quotes.length - 1 );

  return random;
}

// random array selection
function getRandomQuote() {
  randomNumber = generateRandomNumber();
  randomQuoteObject = quotes[random];

  return randomQuoteObject;
}



// random color selection
function getRandomColor() {
var letters = '0123456789ABCDEF';
var color = '#';
for (var i = 0; i < 6; i++ ) {
  color += letters[Math.floor(Math.random() * 16)];
}
return color;
}


// random quote and color generation
function printQuote() {
  var ourQuoteObject = getRandomQuote();

//html quote+source concatenation
  htmlString =
  '<p class="quote"> ' + ourQuoteObject.quote + '</p>' +
  '<p class="source">' + ourQuoteObject.source + '</p>';

//html inclusion and printing
  document.getElementById('quote-box').innerHTML = htmlString;

//function stored in a variable to get an unique random color
  randomColor = getRandomColor();
//random color background inclusion
  document.body.style.background = randomColor;
//random color button inclusion
  document.getElementById('loadQuote').style.background = randomColor;
}

//display a quote as soon as page loads
window.onload = printQuote();


// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


//Add Timer To quote

timer = setInterval(printQuote, 10000);
