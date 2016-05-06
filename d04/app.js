// Different types of loops - ["For Loop", "While Loop", "forEach Loop", "for...in Loop (BONUS)"]:

// a sample 'database' of high scores for a game:
var highScores = [
	239482349,
	93456,
	66642,
	1234,
	154,
	50
]

// we select the DOM Node that's got the ID of '#highscores':
var scoreContainer = document.querySelector('#highscores')

// loop through each element in the highScores array, and list them as <li> tags on the page:

/*for(var i = 0; i < highScores.length; i ++) {
	console.log(highScores[i])
	scoreContainer.innerHTML += ('<li>' + highScores[i] + '</li>')
}*/

// same but with a 'while' loop
/*var i = 0;
while(i < highScores.length) {
	console.log(i)
	scoreContainer.innerHTML += ('<li>' + highScores[i] + '</li>')

	i ++
}
*/

// Using a forEach loop, we can iterate through an array with much less code:
/*highScores.forEach(function(el){
	scoreContainer.innerHTML += ('<li>' + el + '</li>')
})*/


// for looping through objects (which have key/value pairs), we can use the 'for...in' loop:

// create a sample object:
var person = {
	name: "Jimmy",
	email: "jimmyjamz@gmail.com",
	admin: true
}

// use the for...in loop to log each key / value to the console:
/*for(key in person){
	console.log(key + ": " + person[key])
}*/