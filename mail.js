//  Create a list of emails (generated automatically)
emailList = [
    'john.doe@example.com',
    'jane.doe@example.com',
    'alex.smith@example.com',
    'emma.wilson@example.com',
    'michael.brown@example.com',
    'sarah.johnson@example.com',
    'robert.williams@example.com',
    'emily.jones@example.com',
    'david.davis@example.com',
    'olivia.brown@example.com'
]

// I get the button element from the DOM
const login = document.getElementById('login');


// Attach an event listener to the button element
login.addEventListener('click', function () {

    // I get the email element from the DOM and its value
    const email = document.getElementById('email').value;

    // considering being logged in as false:
    let isLoggedIn = false;

    // `for` loop to iterate through each email in the `emailList`
    for (let i = 0; i < emailList.length; i++) {
        if (emailList[i] === email) {
          isLoggedIn = true;
        }
    }

    // Check if the current email in the list matches the entered email.
    if (isLoggedIn) {
        console.log('Welcome!'); 
      } else {
        console.log("Sorry, you can't log in."); 
      }
});





// Dice Exercise

// Generate a random number from 1 to 6 for the player
let player = Math.floor(Math.random() * 6) + 1;
console.log(player);

// Generate a random number from 1 to 6 for the CPU
let computer = Math.floor(Math.random() * 6) + 1;

