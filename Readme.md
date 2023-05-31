# Mail and Dice

## Mail

- We invent an email list to our liking
- We ask the user for an email (with a prompt)
- we check that the email entered is present in the list
- if he is present, we welcome him. (on consoles)
- otherwise we tell him that he can't log in (in console)

:warning: you can't use the `.includes()` method.

### BONUS:

- Collect the user's mail with an input and verify it when the button is clicked.

# Procedure

1. Define an array `emailList` containing the allowed emails.
2. Create an HTML input field with the id `email` to capture the user's email.
3. Add a button with the id `login` to trigger the login process.
4. Attach a click event listener to the login button.
5. Inside the event listener function, retrieve the value entered in the email input field.
6. Initialize a boolean variable `isLoggedIn` with the value `false` to track login status.
7. Use a `for` loop to iterate through each email in the `emailList`.
8. Check if the current email in the list matches the entered email.
   - If a match is found, set `isLoggedIn` to `true` and exit the loop.
   - If no match is found, continue iterating through the remaining emails.
9. After the loop, check the value of `isLoggedIn`.
   - If it's `true`, log the "Welcome!" message to the console.
   - If it's `false`, log the "Sorry, you can't log in." message to the console.
10. The login process is complete, and the appropriate message will be displayed in the console based on the entered email's presence in the `emailList`.

## Dice

Generate a random number from 1 to 6, for both the player and the computer.
Determine the winner, based on who gets the highest score.
Print in console.

### BONUS:

- Place a "Play" button and execute the game logic on clicking the button.
- Print the results of both exercises on page.

# Procedure

1. Generate a random number from 1 to 6 for the player
2. Generate a random number from 1 to 6 for the computer
3. Determine the winner based on the highest score
4. Print the result in the console
