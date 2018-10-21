// When start button is clicked...

$("#start-button").on("click", timer.start); 

    //...we will start the timer and display the questions
    //setTimeout(timeUp, 1000 * 7200);
    //setTimeout(timeUp, 1000 * 5);
    
   
    function timeUp() {
    console.log("done");
    $("#timer").append("<p>All Done!</p>")
    }

    //then we will allow the user to click on the correct answers

    //these correct answers will be in button divs 

    //The computer will tally up the correct answers and an if else statement will be used with a for loop that will increase the number of incorrect answers if the correct answer was not chosen

    //once the timer is up we will wrtie a function to append the number of correct/incorrect/unanswered questions on to the screen.

})