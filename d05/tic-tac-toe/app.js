var game = {
    player1: {
      marker: "x", //game.player1.marker would return this
    },
    player2: {
      marker: "o",
    }
}

var currentPlayer = game.player1

var switchTurns = function() {
  if(currentPlayer == game.player2) {
    currentPlayer = game.player1
  } else {
    currentPlayer = game.player2
  }
}

var squares = document.querySelectorAll('.square');

// squares.addEventListener('click', function() { console.log('It works')})

for (var i = 0; i < squares.length; i ++) {
  squares[i].addEventListener('click', function() {
    console.log(this)

    //lots of code to come here
    //use the switchTurns function

  })
}
