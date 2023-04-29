
/** Coding Quiz Challenge **/
var questions = [
  {
    question: 'What does the acronym DOM stand for in javascript?',
    choices: ['Deo Opt. Max.','Dominant Object Model','Days on Market','Document Object Model'],
    correctAnswer: 'Document Object Model',
  },
  {
    question: 'Which syntax is used to call a function?',
    choices: ['{}','()','[]','""'],
    correctAnswer: '()',
  },
  {
    question: 'Which is a primative value in javascript?',
    choices: ['Array', 'String','Object','function'],
    correctAnswer: 'String',
  },
  {
    question: 'Arrays in Javascript can be used to store _____',
    choices: ['Numbers','Strings','other arrays','All of the above'],
    correctAnswer: 'All of the above',
  },
  {
    question: 'String values must be enclosed within _____ when being assigned to variables.',
    choices: ['commas','curly brackets','quotes','parenthesis'],
    correctAnswer: 'commas',
  },
  {
    question: 'Commonly used data types DO NOT include:',
    choices: ['strings','boolean','alerts','numbers'],
    correctAnswer: 'alerts',
  },
];
var index=0;
var currentquestion =questions[index];



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
  currentquestion = questions[index];
  
  questionDisplay.textContent = currentquestion.question;

  choicesDisplay.innerHTML = ""
  for (let i = 0; i < currentquestion.choices.length; i++) {
    // create buttons 
    // as their text put curentquestion.choice[i]
    // append button as child 
    let choice = currentquestion.choices [i];
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
    return 
    ;
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
  let score = document.getElementById('final-score');
  score.textContent = 'Your final score is ' + count; 
}

// When user clicks start button, show the first flash card
startBtn.addEventListener('click', startGame);



