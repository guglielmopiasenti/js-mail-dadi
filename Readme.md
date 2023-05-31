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

1. First, we create a list of emails called email_list. This list can contain any number of email addresses.
2. We prompt the user to enter their email address using the input() function and store the entered email in the variable user_email.
3. Next, we use the in operator to check if the entered email (user_email) is present in the email_list.
4. If the entered email is found in the list, we print "Welcome!" to the console, indicating that the user is granted access.
5. If the entered email is not found in the list, we print "Access denied." to the console, indicating that the user is not granted access.

## Dice

Generate a random number from 1 to 6, for both the player and the computer.
Determine the winner, based on who gets the highest score.
Print in console.

### BONUS:

- Place a "Play" button and execute the game logic on clicking the button.
- Print the results of both exercises on page.
