/*


// Initalize, or declare, a variable that will store the outcome of the game (win or lose)
var outcome;


// Alert the introduction
window.alert("One day you wake up and the world as you know has ended.  The dead come to life and prey on the living. There is no hope, no cure, only survival.  Welcome to the zombie apocalypse.");

// Store an array of possible beginning scenarios
var beginningScenarios = ["You wake up in a hospital.  It is eerily quiet.  You tiptoe to the door and peek out.", "You are standing in an open field west of a white house with a boarded front door. There is a small mailbox here.", "Desperate times call for desperate measures.  You see a small convenience store up ahead and decide to loot it for goods." ];

// Random number function that generates a whole number between 0 and range
function randomNumber(range) {
  "use strict";
  if (typeof range === "number") {
    return Math.round(Math.random() * range);
  }
}

// Alert a random scenario from the beginningScenarios array
window.alert(beginningScenarios[randomNumber(beginningScenarios.length - 1)]);

// Create a character object
var character = {
  health: 5,
  strength: 0,
  stealth: 0,
  
  // Ask the player to choose a name for the character
  name: window.prompt("What is your name?"),
  
  // Ask the player to choose a class for the character
  characterClass: window.prompt("These times test the strengths of our character. What were you before the war? (Choose from: soldier, doctor, or politician)").toLowerCase()
  
};

// Check to see if player has entered a name...if not, give them another chance
if (!character.name) {
  character.name = window.prompt("I don't know what to call you if you don't enter a name. If you don't answer I will be forced to name you myself...Last chance. What is your name?");
  
  // If a name still has not been entered, assign a name to the character
  if (!character.name) {
    window.alert("Well I did try to warn you. Gunther Piddles it is then.");
    character.name = "Gunther Piddles";
  }
}

// If the character is a soldier, change the strength property from 0 to 5
if (character.characterClass === "soldier") {
  character.strength = 5;
}
// If the character is a politician, change the stealth property from 0 to 5
if (character.characterClass === "politician") {
  character.stealth = 5;
}
// If the character is a doctor, change the health property from 5 to 7
if (character.characterClass === "doctor") {
  character.health = 7;
}

// Alert the zombie encounter scenario, and store the player's chosen response in the choice variable
var choice = window.prompt("The brave adventurer and former " + character.characterClass + " " + character.name + " enters a store for some loot.  You notice a zombie slowly shuffling around amongst the destruction. What action shall you take? Attack, or attempt to sneak by the zombie? ").toLowerCase();

// Check to see if the player's choice was attack
if (choice === "attack") {
  
  // If so, check to see if the character's strength is 5
  if (character.strength === 5) {
    
    // If the strength is 5, alert the result
    window.alert("Using only your bare hands, you slay that zombie! Success! You loot the store for goods and find an axe, a pack of batteries, and three cans of Beanie Weenies.");
    
    // Set outcome variable to win
    outcome = "win";
    
    // Increase stats if success
    character.strength++;
    
    // If the character's strength is less than 5, alert a different scenario
  } else if (character.strength <= 5) {
    window.alert("You fearlessly charge the zombie with all your strength.  Using your mighty powers you crush thy foe as if it were a sheet of paper you needed to shred.");
    window.alert("Just kidding. You are immediately bitten by the zombie and die. But not all is lost -- if time spent together makes one friends, then you and the zombie become best friends, and live together for eternity. The end.");
    
    // Set outcome variable to lose
    outcome = "lose";
  }
}

// Check to see if the player's choice was to sneak by the zombie
if (choice === "sneak" || choice === "sneak by the zombie") {
  
  //If the character's stealth is 5, they sneakby the zombie
  if (character.stealth === 5) {
    window.alert("You sneak by the zombie, you clever bastard.");
    
    // Set outcome variable to win
    outcome = "win";
  }
  
  //Check to see if the character's stealth is less than 5
  if (character.stealth < 5) {
    
    // If stealth is less than 5, the zombie is alerted but the player can still win if their strength is high enough
    window.alert("You try to slip by the zombie, but you accidentally stumble over a can of Beanie Weenies, alerting the zombie of your existence. It slowly turns its head and shuffles towards you.");
    
    // Check to see if strength is 5
    if (character.strength === 5) {
      window.alert("Although you have alerted the zombie to your presence you are able to crush its skull with your bare hands.");
      
      // Set outcome variable to win
      outcome = "win";
      
    // If stealth and strength are less than 5, the player loses
    } else {
      window.alert("Weaponless and weak the zombie chomps down on an arm as you flail wildly in its general direction.");
      
      // Set outcome variable to lose
      outcome = "lose";
    }
  }
}

// Check to see if outcome is win or lose, and alert the appropriate result
if (outcome === "lose") {
  window.alert("You lose!");
} else if (outcome === "win") {
  window.alert("You win!");
}

*/

var outcome;

window.alert("One day you wake up and realize that everyone has left the fallout shelter that you were living in.  There's no clue, or note as to what happened.  You realize your laying in a hospital bed with no memery as to how you got there.");
var beginningScenarios = ["You get up and leave the shelter to explore the world.", "You get up from the bed and decide to investigate what exactly has happened.", "Jeez you're hungry, you walk to the closest fridge and pop open a nuka cola."];
var johnDoe = ["Weenis Chop", "Seymore Butts", "Rabbin Boozer"];

function randomNumber(range) {
  "use strict";
  if(typeof range === "number") {
    return Math.round(Math.random() * range);
  }
}

window.alert( beginningScenarios[randomNumber(beginningScenarios.length - 1)]);

var character = {
  health: 5,
  virtue: 0,
  strength: 0,
  name: window.prompt("What is your name?"),
  characterClass:window.prompt("Immediately after taking a sip from a nearby nuka-cola the brainfreeze you get from drinking it so fast starts to jog your memory and you begin to remember bits of your past.  What were you before you woke up (Choose from: A Police Officer, Soldier, or a Doctor?)").toLowerCase()
};
//
//character object
//
if(character.characterClass === "soldier") {
  character.strength = 5;
}
if(character.characterClass === "police officer") {
  character.virtue = 5;
}
if(character.characterClass === "doctor") {
  character.health = 7;
}
//
// Check to see if player has entered a name...if not, give them another chance
//
if(!character.name) {
  character.name = window.prompt("I don't know what to call you.  If you don't choose a name then the friendly vault bot will assign one for record keeping purposes.");

  if(!character.name) {
    alert("Well I did try to warn you, and now the bot randomly generated a name for you.");
    character.name = johnDoe[randomNumber(johnDoe.length - 1)]
    alert("Vault Bot: Your name is " + character.name + ".");
  }

}
//
//check to see if player entered a class...if not, give them another chance
//
if(!character.characterClass) {
  character.characterClass = window.prompt("Vault Bot: Please confirm occupation...");

  if(!character.characterClass) {
    alert("Vault Bot: Ok, your occupation is soldier.")
    character.characterClass = "soldier";
  }
}

var choice = window.prompt("The brave " + character.characterClass + " " + character.name + " starts to explore the vault when suddenly some rustling is heard in a nearby room.  Upon investigating, " + character.name + " can see what can only be described as... a zombie?! (What action do you take? attack or sneak around it?").toLowerCase();

if(choice === "attack" || choice === "attack it") {
  
  if(character.strength === 5) {
    alert("You attacked the zombie head on and squashed it's brains! you survived!");
    outcome = "win";
    character.strength++;
  }

  else if (character.health >= 5){
    alert("You gained the courage to fight and you survived but barely.  You took some damage.");
    character.health = 5;
    outcome = "win";
  }

  else {
    alert("You striked! but the zombie bit you in the armpit! You DIED!")
    outcome = "lose";
  }

}

if(choice === "sneak" || choice === "sneak around") {
  if(character.virtue === 5) {
    window.alert("You were able to sneak by. You lucky bastard.");
    outcome = "win";
  }
  else if(character.strength <= 5) {
    window.alert("You tried sneaking by but the zombie heard your shuffling.  It attacked but you managed to slay it with you're bare hands!");
    outcome = "win";
    character.strength++;
  }
  else {
    window.alert("You try sneaking by but stepped on a squeeking rubber chicken.  The zombie heard you and attacked.  It bit your achilles heel! YOU DIED.");
    outcome = "lose";
  }

}

if(outcome === "win") {
  window.alert("You Win!");
}
else {
  window.alert("Game Over");
}











