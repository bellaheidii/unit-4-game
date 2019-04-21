//global variables 
//

//Crystal variables 
var crystal = {

    blue: 0,
    green: 0,
    purple: 0,
    ruby: 0,

};
//Scores
var currentScore = 0;
var targetScore = 0;

//wins and losses
var winCount = 0;
var lossCount = 0;

//functions
//
var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//start function 
var startGame = function() {
    
    //reset current score 
var currentScore = 0;
    //set new target score (between 10 and 120 
    targetScore =  getRandom(19, 120);
    //set differnt values for each of the crystals 
    crystal.blue = getRandom(1,12)
    crystal.green = getRandom(1,12)
    crystal.purple = getRandom(1,12)
    crystal.ruby = getRandom(1,12)
    //change html to reflect all the changes 

    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);

console.log("...");
console.log("Target Score: " +targetScore);
console.log(crystal.blue + " + :crystal.blue.value + " + crystal.green
+ " + crystal.green + |" +
crystal.purple + " + crystal.green + |" + crystal.ruby + ": + crystal.ruby");
console.log("...")
}

// resonds to clicks on the crystals
var addCrystal = function(crystal) {
    currentScore = currentScore + crystal.value;

    // html change changes score
    $("#yourScore").html(currentScore);

    //call the checkwin function 
    checkWin();
    // testing console
    console.log("Your Score: " + currentScore);
}

//check if user won or lost 
var checkWin = function() {

    //check if currentScore is larger than target score 
    if(currentScore > targetScore)
        alert("Sorry. You lost!");
        console.log("You Lost");

        //add to lost counter
        lossCount++;

        //

}   
    else if(currentScore == targetScore) {
        alert("congratulations! You Won!");
        console.log("you Won!");

        //add to loss counter 
        winCount++;
        //change loss count HTML
        $("#winCount")
    }
//main process
//==============================================
//starts game
startGame();
 
$("#blue").on("click", function() {
    addValues("addValuesblue");
});
$("#green").on("click", function() {
    addValues("addValues.green");
});
$("#purle").on("click", function() {
    addValues("addValues.purple");
});
$("#ruby").on("click", function() {
    addValues("addValues.ruby");
});
