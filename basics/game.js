//create secretnumber
var secretnumber = 5;

//ask for user guess
var stringguess = prompt("Guess a Number");
var guess = Number(stringguess);

//check guess
if(guess === secretnumber) {
    alert ("YOU GOT IT RIGHT!");
}
//check if guess is higher
else if(guess > secretnumber) {
   alert("Too high guess again"); 
}

else {
    alert("Too low guess again")
}
//otherwise check if lower