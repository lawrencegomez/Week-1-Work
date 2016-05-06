var highScores = [
  1000,
  2000,
  4982,
  420,
  203,
  29004
]

var scoreContainer = document.querySelector('#highscores')

for(i = 0; i < highScores.length; i ++) {
  console.log(highScores[i]);
  scoreContainer.innerHTML += ('<li>' + highScores[i] + '</li>');
}

var i = 0;
while(i < highScores.length) {
  console.log(highScores[i]);
  scoreContainer.innerHTML += ('<li>' + highScores[i] + '</li>');

  i ++
}

//forEach loop which is used for looping through arrays.
//'el' means element, but you could make it anything you want because the forEach
//loop knows that whatever that first arguement is, stands for the element in the array
//the second arguement i counts the element number of the array that it has processed
highScores.forEach(function(el, i) {
  console.log(i)
  scoreContainer.innerHTML += ('<li>' + el + '</li>');
})


function appendHighScore(el) {
  scoreContainer.innerHTML += ('<li>' + el + '</li>');
}

var person = { name: 'Lawrence', email: 'lfg2305@gmail.com', age: 32}

//this for in loop, it takes an arguement that we call key here which will roll
//through each value in the object called "person" (above) and then console log it
for(key in person) {
  console.log(key)
}
