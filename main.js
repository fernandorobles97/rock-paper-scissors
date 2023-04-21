// ** PLAYERS ** //
var human = createPlayer('human', '🤠', 0);
var computer = createPlayer('computer', '💻', 0);

// ** DATA MODEL ** //
var humanScore = human.wins;
var computerScore = computer.wins;
var classicFighters = ['rock', 'paper', 'scissors'];
var difficultFighters = ['rock', 'paper', 'scissors', 'alien', 'lizard'];
var classicLogic = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper'
};
var difficultLogic = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'alien'],
  scissors: ['rock', 'alien'],
  lizard: ['paper', 'alien'],
  alien: ['scissors', 'rock']
};
var game = {
  players: [],
  fighters: [],
  gameType: '' 
};

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

function takeTurn(fighters, choice) {
  for (var i = 0; i < fighters.length; i++) {
    if (fighters[i] === choice) {
      return human.fighter = choice;
    }
  }
}

function computerTurn(fighters) {
  var random = fighters[getRandomIndex(fighters)];
  computer.fighter = random;
  return computer.fighter;
}

function createGame(fighters, gameType) {
  game = {
    players: [human, computer],
    fighters: fighters,
    gameType: gameType
  }
  return game;
}

function determineClassicWinner(player, computer) {
  var hum = player.fighter;
  var com = computerTurn(classicFighters);
  if (hum === com) {
    return `It\'s a draw`;
  } else if (classicLogic[hum] === com) {
    player.wins ++;
    humanScore ++;
  } else {
    computer.wins ++;
    computerScore++;
  }
}

function determineDifficultWinner(player, computer) {
  var hum = player.fighter;
  var com = computerTurn(difficultFighters);
  if (hum === com) {
    return `It\'s a draw`;
  } else if (com === difficultLogic[hum][0] || difficultLogic[hum][1] === com) {
    player.wins ++;
    humanScore ++;
  } else {
    computer.wins ++;
    computerScore ++;
  }
}