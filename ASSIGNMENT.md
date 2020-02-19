
# Assignment

Welcome! Your mission for today, if you choose to accept it, is to build an app-recommendation web app that will return the most relevant applications based on the user’s specific request.

The system should be comprised of a server and a client. The client should allow the user to enter his or her date of birth, the minimum required app rating as well as choose from a list of categories 3 that interest him. 
The client will send the information to the server, which will filter from the list of apps the ones that are irrelevant, and return 3 relevant applications to the client. 
The client must show the selected applications to the user. The user should be able to see the app extended information by clicking on it.
What should the client do?
The client should gather the required information from the user:
Birthdate
Preferred categories
Minimum rating of apps (a number between 1 to 5)

Once all the data is entered by the user, it should be sent to the server in order to get the recommended apps.
Once the server response is received, the apps should be displayed to the user. If the user clicks on one of the apps, all the app’s (extended) information should be displayed.
What should the server do?
Once the data from the client is received on the server, the server should filter all the irrelevant apps (based on the user data), and then randomly choose 3 apps from the remaining apps.
The filters are:
Category - each app has a category - the user shouldn’t get apps in categories he didn’t choose.
Age - each app has a minimum age - the user shouldn’t get apps with minimum age higher than his age.
Rank - each app has a rank - the user shouldn’t get apps with ranking lower than the min ranking set by the user.

* IMPORTANT NOTE - we might want to add more filters in the future.

A JSON object with all the apps data can be found [here](https://gist.github.com/orgoldfus/d1cd6b8a65a0d242a522b8fa12ca0304).

The list of available categories can be found [here](https://gist.github.com/orgoldfus/3889d968bda41bc1dc4df20ff0235ad5).

Quick tips
Try to design and implement your solution as you would do for real production code. Show us how you create a clean, maintainable code that does awesome stuff. This is not a programming contest where dirty hacks win the game.
We love tested code!
Hand-in instructions
Send in a zip file with all the code required to run your solution
Please provide all the instructions to be able to run your solution. Note that your solution will be tested on macOS or Linux.