/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [

{
	quote:"Every person who wins in any undertaking must be willing to cut all sources of retreat. Only by doing so can one be sure of maintaining that state of mind known as a burning desire to win - essential to success.",
 	source:"Napoleon Hill",
 	citation: "Brainyquote",
 	year: 2020
},
{
	quote:"Fear is the main source of superstition, and one of the main sources of cruelty. To conquer fear is the beginning of wisdom.", 
	source:"Bertrand Russell",
 	citation: "Brainyquote",
 	year: 2020
},
{
	quote:"The secret of getting ahead is getting started.", 
	source:"Mark Twain",
 	citation: "Brainyquote",
 	year: 2020
},
{
	quote:"The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.", 
	source:"Confucius",
 	citation: "Brainyquote",
 	year: 2020
	
},
{
	quote:"With the new day comes new strength and new thoughts.", 
	source:"Eleanor Roosevelt",
 	citation: "Brainyquote",
 	year: 2009
},
{
	quote:"Knowing is not enough; we must apply. Willing is not enough; we must do.",
	source:"Johann Wolfgang von Goethe",
 	citation: "Brainyquote",
 	year: 2010
},
{
	quote:"Setting goals is the first step in turning the invisible into the visible.", 
	source:"Tony Robbins",
	citation: "Brainyquote",
 	year: 2020
},
{
	quote:"Do the difficult things while they are easy and do the great things while they are small. A journey of a thousand miles must begin with a single step.", 
	source:"Lao Tzu",
 	citation: "Brainyquote",
 	year: 1998
},
{
	quote:"Keep your eyes on the stars, and your feet on the ground.", 
	source:"Theodore Roosevelt",
 	citation: "Brainyquote",
 	year: 2020
},
{
	quote:"Quality is not an act, it is a habit.", 
	source:"Aristotle",	
 	citation: "Brainyquote",
 	year: 1996
},
{
	quote:"Failure will never overtake me if my determination to succeed is strong enough.", 
	source:"Og Mandino",
 	citation: "Twitter",
 	year: 2004
},
{
	quote:"It’s fine to celebrate success, but it is more important to heed the lessons of failure", 
	source:"Bill gates",
 	citation: "Microsoft",
 	year: 1997
}

]

/***
 * `getRandomQuote` function
***/
function getRandomQuote(){
var messagenum = Math.floor(Math.random() * quotes.length);
var message = quotes[messagenum];

return message;
}



/***
 * `printQuote` function
***/
function printQuote(){
	var newQuote = getRandomQuote()
	var messageQuote = '<p class="quote">' + newQuote.quote + '</p>';
	var messageSource ='<p class="source">'+ newQuote.source ;
	var fullQuote = messageQuote + messageSource; 

	if (newQuote.citation){
		fullQuote += '<span class="citation">' + newQuote.citation + '</span>';
	}
	
	if (newQuote.year){
		fullQuote += '<span class="year">' + newQuote.year + '</span>';
	}
	
	fullQuote += '</p>'
	
 return document.getElementById('quote-box').innerHTML = fullQuote; 

}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
 
document.getElementById('load-quote').addEventListener("click", printQuote, false);