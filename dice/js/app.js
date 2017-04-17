/*

Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice. Use the html and css code included in the starter code folder to get started.

1) Write down pseudocode for the following program.

random1 = generate random number
random2 = generate random number
first die = 'dice-' + random1
second


Math.floor(Math.random() * (max - min)) + min

2) Follow the steps below to write your code.
* generate a random number between 1 - 6 and store to a variable, random1
* generate a random number between 1 - 6 and store to a variable, random2
* combine 'dice-' and random1 to form the random class for the first die, firstDie
* combine 'dice-' and random2 to form the random class for the second die, secondDie
* get the first die by ID and update the class to firstDie (hint: document.getElementById)
 (the class is a property className, eg: document.getElementById('first-die').className = 'bob' )
* get the second die by ID and update the class to secondDie (hint:document.getElementById)

3) When the button is clicked, run your roll the dice function.

*/

const diceMax = 7;
const diceMin = 1;

document.getElementById('roll-dice').onclick = rollTheDice;

function rollTheDice() {
  let random1 = getRandomDiceNumber();
  let random2 = getRandomDiceNumber();
  let firstDie = 'dice-' + random1;
  let secondDie = 'dice-' + random2;
  document.getElementById('first-die').className = firstDie;
  document.getElementById('second-die').className = secondDie;
}

function getRandomDiceNumber() {
  return Math.floor(Math.random() * (diceMax - diceMin)) + diceMin;
}
