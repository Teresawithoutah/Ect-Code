//TERESA LUZ MILLER JS GAME 2018


// beginning prompt method
var userChoice = prompt("Do you choose Rock, Paper or Scissors?");

//assigns value to choice

//The Math.random() function returns a floating-point
//the range from 0 inclusive up to but not including 1

//if else statement
var computerChoice = Math.random();
  if (computerChoice < 0.30) {
	computerChoice = "rock";
} else if(computerChoice <= 0.60) {
	computerChoice = "paper";
  } else {
	computerChoice = "scissors";
  }


/// function to compare rounds
//parameters
var compare = function(firstchoice,secondchoice) {


	
	
//if choice is a tie, do this
	
	//"==" means equals, whereas "===" means identically equal.
    if (firstchoice === secondchoice) {

        return "It's a tie!" + "<br>"+"<br>" + "Wanna play again or nah?" ;
    }



//if choice1 is rock
//AND
//if choice 2 is scissors

    else if (firstchoice === "rock") {

        if (secondchoice === "scissors") {
            return "Rock wins" + "<br>"+"<br>" + "Wow! You won!";
        }
        else {
            return "Paper wins" + "<br>"+"<br>"+ "I win! Resistance is futile.";
        }
    }

//choice1 is paper
//AND
//choice2 is rock

    else if (firstchoice === "paper") {

        if (secondchoice === "rock") {
            return "Paper wins" + "<br>"+"<br>"+ "You beat me! Congrats 🎉";
        }
        else {
            return "Scissors wins" + "<br>"+"<br>"+ "Sorry, try again! I win, you lose.";
        }

    }

//choice1 is scissors
//AND
//choice2 is rock

    else if (firstchoice === "scissors") {

        if (secondchoice === "rock") {
            return "Rock wins" + "<br>"+"<br>"+ "You lose! TECHNOLOGY WINS.";
        }
        else {
            return "Scissors win" + "<br>"+"<br>" + "You've won! You can now date Karen from Spongebob. ";
        }
    }


    }




   document.write("Computer chose: " + computerChoice + "<br>");
   document.write(compare(userChoice,computerChoice));
