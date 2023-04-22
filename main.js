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

// ** DOM ELEMENTS ** //
var classicButton = document.querySelector('.buttons__classic')
var difficultButton = document.querySelector('.buttons__difficult')
var changeButton = document.querySelector('.human__button')
var gameboardSection = document.querySelector('.gameboard__view')
var buttonsSection = document.querySelector('.buttons__view')
var choiceAndWinner = document.querySelector('.choose')

// ** EVENT LISTENERS ** //
changeButton.addEventListener('click', switchHomeView);

buttonsSection.addEventListener('click', function(event) {
  if (event.target.classList.contains('buttons__classic') || event.target.classList.contains('buttons__difficult')) {
    createGame(event.target);
  }
});

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

function createGame(element) {
  if (element.classList.contains('buttons__classic')) {
    game = {
      players: [human, computer],
      fighters: classicFighters,
      gameType: classicLogic
    } 
    displayClassicFighters();
  } else {
      game = {
        players: [human, computer],
        fighters: difficultFighters,
        gameType: difficultLogic
      }
      displayDifficultFighters();
  }
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

function removeHiddenClass(elements) {
  for (var i=0; i < elements.length; i++){
    elements[i].classList.remove('hidden')
  }
}

function addHiddenClass(elements) {
  for (var i=0; i < elements.length; i++){
    elements[i].classList.add('hidden')
  }
}

function displayClassicFighters() {
  addHiddenClass([buttonsSection]);
  removeHiddenClass([gameboardSection, changeButton])
  choiceAndWinner.innerHTML = 'Choose your fighter!'
  gameboardSection.innerHTML = `
    <section class="gameboard__classic">
      <img alt="rock" src ="./assets/happy-rocks.png" class="fighter">
      <img alt="paper"src ="./assets/happy-paper.png" class="fighter">
      <img alt="scissors" src ="./assets/happy-scissors.png" class="fighter">
    </section>`
}

function switchHomeView() {
  choiceAndWinner.innerHTML = 'Choose your game!';
  addHiddenClass([gameboardSection, changeButton]);
  removeHiddenClass([buttonsSection]);
}

function displayDifficultFighters() {
  addHiddenClass([buttonsSection]);
  removeHiddenClass([gameboardSection, changeButton])
  choiceAndWinner.innerHTML = 'Choose your fighter!'
  gameboardSection.innerHTML = ` 
    <div class="fighters-top"> 
      <img alt="rock" src ="./assets/happy-rocks.png" class="fighter">
      <img alt="paper" src = "./assets/happy-paper.png" class="fighter">
      <img alt="scissors" src = "./assets/happy-scissors.png" class="fighter">
    </div>
    <div class="fighters-bottom">  
      <img alt="alien" src = "./assets/flat-alien.png" class="fighter">
      <img alt="lizard" src = "./assets/lizard.png" class="fighter">
    </div>`
}