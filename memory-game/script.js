const gameContainer = document.getElementById("game");

//array to store two flipped cards 
var flippedCards = [];

const COLORS = [ //const means you cannot reassign COLORS
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want to research more
function shuffle(array) {
  let counter = array.length; // "let" enables you to declare a block scope variable

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter); //returns a random integer from 1 to 10

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);

  //create a variable to reference the target object
  var Target = event.target;


  //add clicked cards to flipped cards
  flippedCards.push(Target);

  compareCards(flippedCards);

}
 
function compareCards(array){
  if(array.length == 2 && (array[0].className == array[1].className)){
    //keep cards open
    console.log("1");
    array[1].style.backgroundColor = array[1].className;
    
    //empty array
    flippedCards = [];
   
   
  }
  else if(array.length == 2 && (array[0].className != array[1].className)){
    //keep cards open
    console.log("2");
    array[1].style.backgroundColor = array[1].className;
 
    setTimeout(function(){ 
      array[0].style.backgroundColor = "white";
      array[1].style.backgroundColor = "white";}, 1000);
    
    flippedCards = [];
  }
  else if (array.length == 1){
    console.log("3");
    console.log(array[0].className);
    array[0].style.backgroundColor = array[0].className;
    
  }

}

// when the DOM loads
createDivsForColors(shuffledColors);
