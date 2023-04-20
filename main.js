// Data Model ideas: 
  // game board data
  // game type logic

// ** DATA MODEL ** //
var fighters = ['rock', 'paper', 'scissors'];
// // var gameTypes = [classic]
// var classicGameRules = [];
// var difficultGameRules = [];
// var classicGameBoard = [];

// ** PLAYERS ** //
var human = createPlayer('human', '🤠', 0)
var computer = createPlayer('computer', '💻', 0)

// ** FUNCTIONS ** //
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createPlayer(name, token, wins) {
  return player = {
    name: name,
    token: token,
    wins: wins
  };
}

function takeTurn(player, choice) {
  for (var i = 0; i < fighters.length; i++) {
    if (fighters[i] === choice) {
      return player.fighter = choice;
    }
  }
}

function determineClassicWinner(player1, player2) {
  if (player1.fighter === player2.fighter) {
    return 'It\' a draw'
  } else if (player1.fighter === 'rock') {
      if(player2.fighter === 'scissors') {
        player1.wins ++;
      } else {
        player2.wins ++;
      } 
  } else if (player1.fighter === 'scissors') {
      if (player2.fighter === 'paper') {
        player1.wins ++;
      } else {
        player2.wins ++;
      }
  } else if (player1.fighter === 'paper')
      if (player2.fighter === 'rock') {
        player1.wins ++;
      } else {
        player2.wins ++;
      }
}

// console.log(takeTurn(human, 'paper'))
// console.log(takeTurn(computer, 'paper'))
// console.log('game1', determineClassicWinner(human, computer))
// console.log('game2', determineClassicWinner(computer, human))
// console.log(human);
// console.log(computer)