
/**  Flash Card App  **/
let questions = [
  {
    question: 'Q1',
    choices: ['A1','A2','A3','A4'],
    correctAnswer: 'A2',
  },
  {
    question: 'Q2',
    choices: ['A1','A2','A3','A4'],
    correctAnswer: 'A1',
  },
  {
    question: 'Q3',
    choices: ['A1','A2','A3','A4'],
    correctAnswer: 'A3',
  },
  {
    question: 'Q4',
    choices: ['A1','A2','A3','A4'],
    correctAnswer: 'A2',
  },
  {
    question: 'Q5',
    choices: ['A1','A2','A3','A4'],
    correctAnswer: 'A1',
  },
  {
    question: 'Q6',
    choices: ['A1','A2','A3','A4'],
    correctAnswer: 'A4',
  },
];
let index=0;
let currentquestion =questions[index];



// When page loads, show user a start button √
var cardDisplay = document.querySelector('.card-display');
var startDisplay = document.querySelector('.start-display');
var endDisplay = document.querySelector('.end-display');
var choicesDisplay = document.querySelector('#choices-display');
var startBtn = document.querySelector('#start');
var questionDisplay = document.querySelector('#question-display');
var timerDisplay = document.querySelector('#timer-display');
var answerDisplay = document.querySelector('#answer-display');
var nextBtn = document.querySelector('#next');
choicesDisplay.addEventListener ('click',handleAnswer);
// Create a variable to track current card index
var currentIndex = 0;
// Create a variable that will hold the current card object
var card;
// Create a variable to store the current timer count
var count = questions.length * 15;
var timeInterval;

// Function that is called when the end of the cards
// array is reached to prompts user to restart
// function promptUserToRestart() {
//   var userChoice = confirm('Would you like to restart?');

//   if (userChoice) {
//     displayCard();
//   } else {
//     questionDisplay.innerText = 'Have a great day!';
//     answerDisplay.classList.add('hide');
//     nextBtn.classList.add('hide');
//   }
// }

// Function to hide the timer and show the answer
// and next button
// function showAnswer() {
//   answerDisplay.innerText = card.answer;
//   timerDisplay.classList.add('hide');
//   nextBtn.classList.remove('hide');
//   answerDisplay.classList.remove('hide');

//   currentCardIndex++;

//   // If the currentCardIndex is equal to the cards array
//   // length, then we stop flashCards and confirm
//   // if the user would like to restart
//   if (currentCardIndex === cards.length) {
//     // Reset card tracking values
//     currentCardIndex = 0;
//     nextBtn.classList.add('hide');
//     promptUserToRestart();
//   }
// }
///// BEGIN CODE
// Hide the start button and call displayCard
function startGame() {
  startDisplay.classList.add('hide');
  cardDisplay.classList.remove('hide');
  startTimer();
  displayCard();
}

// Create a function that starts a timer at 5 seconds
// and counts down to zero, then calls showAnswer
function startTimer() {
  timerDisplay.textContent = count;
  // Create a setInterval and store it to a variable
  // that triggers every second
  timeInterval = setInterval(function() {

    // Decrease count by one
    count--;

    // Set countDisplay to the count variable
    timerDisplay.textContent = count;

    // If count is equal to zero, stop timer and show
    // answer/next button and reset count to 5
    if (count <= 0) {
      endGame()
    }
  }, 1000);
}

// Create a function that grabs the current card object and displays
// the question to the window
function displayCard() {
  // Create a variable reference to the current card object from the cards array
  currentQuestion = questions[index];
  
  questionDisplay.textContent = currentQuestion.question;

  choicesDisplay.innerHTML = ""
  for (let i = 0; i < currentQuestion.choices.length; i++) {
    // create buttons 
    // as their text put curentquestion.choice[i]
    // append button as child 
    let choice = currentQuestion.choices [i];
    let btn = document.createElement('button');
    btn.setAttribute('class','choice');
    btn.setAttribute('value',choice);
    btn.textContent = i + 1 + '. ' + choice;
    choicesDisplay.appendChild (btn);
  }

}

function handleAnswer (event){
  let btn = event.target;

  if (!btn.matches('.choice')){
    return;
  }

  if (btn.value !== currentquestion.correctAnswer){
    count -= 10;
  
  if(count < 0) {
     count = 0;
  }
  timerDisplay.textContent = count;
  alert ('Incorrect!');
  
  } else {
    alert ('correct!')
  } 
  index ++;
  if (count <= 0 || index === questions.length) {
    endGame ();
  } else {
    displayCard ();
  }
}
function endGame(){
  clearInterval(timeInterval);
  cardDisplay.classList.add('hide');
  endDisplay.classList.remove('hide');
}

// When user clicks start button, show the first flash card
startBtn.addEventListener('click', startGame);
//nextBtn.addEventListener('click', displayCard);


// Show card question and start a 5 second timer
  
  

// When timer has completed, show the answer
// Show a Next button to allow the user to transition to the next card

// When the end of the card array has been reached, show the user a confirmation asking
// if they would like to restart from the beginning
// If they confirm yes, reset card index to zero and show first card
// If they confirm no, show a goodbye message
