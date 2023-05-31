// Dice Exercise

// Get Button element from the DOM
playButton = document.getElementById('playButton');

// creating event listener for the button
playButton.addEventListener('click', function () {

    // Generate a random number from 1 to 6 for the player
    let player = Math.floor(Math.random() * 6) + 1;
    
    // Generate a random number from 1 to 6 for the CPU
    let computer = Math.floor(Math.random() * 6) + 1;
    
    // Determine the winner based on the highest score
    let winner;
    if (player > computer) {
        winner = "player";
    } else if (player < computer) {
        winner = "computer";
    } else {
        winner = "It's a tie!";
    }
    
    
    // Print the result in the console
    console.log("Player: " + player);
    console.log("Computer: " + computer);
    console.log("Winner: " + winner);

    // Print the result in the target HTML element
    let resultElement = document.getElementById("result");
    resultElement.innerHTML = "Player: " + player + "<br>" + "Computer: " + computer + "<br>" + "Winner: " + winner;
});
