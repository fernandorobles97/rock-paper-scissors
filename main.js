// Data Model ideas: 
  // game board data
  // game type logic
  // var gameTypes = [classic]
  // var classicGameRules = [];
  // var difficultGameRules = [];
  // var classicGameBoard = [];

// ** DATA MODEL ** //
var classicLogic = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper'
}

var fighters = ['rock', 'paper', 'scissors'];

var game = {
  players: [],
  gameLogic: "", 
}

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

function computerTurn() {
  var random = fighters[getRandomIndex(fighters)];
  computer.fighter = random;
  return computer.fighter;
}

takeTurn(human, 'paper')

function determineClassicWinner(player, computer) {
  var hum = player.fighter
  if (hum === computerTurn()) {
    return `It\'s a draw`;
  // function that would render its a draw on dom
  } else if (classicLogic[hum] === computerTurn()) {
    player.wins ++;
    return player
  } else {
    computer.wins ++;
    return computer
  }
}

console.log(determineClassicWinner(human, computer))
console.log(determineClassicWinner(human, computer))


function createGame(player1, player2, gameLogic) {
  var game = {
    players: [player1, player2],
    gameLogic: gameLogic,
  };
  return game
}