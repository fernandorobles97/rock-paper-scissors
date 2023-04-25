# Rock, Paper, Scissors

### Abstract:
[//]: <> (Briefly describe what you built and its features. What problem is the app solving? How does this application solve that problem?)
I built an application that allows the user to play two versions of Rock, Paper, and Scissors with the computer. The user is presented with two buttons, one for classic mode and the other for difficult, on page load and a header saying choose a game. Both buttons have the logic/rules for the type of game displayed within. When either game mode is selected, the header states to choose a fighter and you see the options that align with the game mode that is chosen. At this point, the user will also see a button that says 'change game?', which when clicked will return the user to the main menu where they can select a different game mode. When the user chooses a fighter, the computer randomly selects a fighter as well and both are shown on the gameboard for a short period along with the results of who won the game. Then, the gameboard will reset and the user can either play that game mode again or go back to select a new game. Player data, such as a name, token, and amount of wins, are shown on opposite sides of the screen. Depending on who wins the last round, the user will see that the wins will go up for that player. If there is a draw, that will be said in the results, and neither player wins will increase. The wins will account for both game modes.  This application is great for users who are looking for a past-time that everyone knows and loves, plus a challenging version of it to take it to the next level.

### Installation Instructions:
[//]: <> (What steps does a person have to take to get your app cloned down and running?)
1. Fork this repository
2. Clone it down to your machine
3. `cd` into the directory
4. Run `open index.html` to launch the application in your default browser

### Preview of App:
[//]: <> (Provide ONE gif or screenshot of your application - choose the "coolest" piece of functionality to show off.)
![ezgif com-video-to-gif](https://user-images.githubusercontent.com/123911055/234429498-a8439442-7502-40b3-bcc1-420823188ffe.gif)


### Context:
[//]: <> (Give some context for the project here. How long did you have to work on it? How far into the Turing program are you?)
This is the final project for Mod 1, which was assigned in Week 5,  and I had 7 days to complete it. Altogether, I'd say I spent a total of roughly 25 hours working on this project. I used BEM methodology to name classes.

### Contributors:
[//]: <> (Who worked on this application? Link to their GitHubs.)
[Fernando Robles](https://github.com/fernandorobles97)

### Learning Goals:
[//]: <> (What were the learning goals of this project? What tech did you work with?)
The learning goals for this project were:
- Solidify and demonstrate your understanding of:
  - DRY JavaScript
  - event delegation to handle similar event listeners
- Understand the difference between the data model and how the data is displayed on the DOM
- Use your problem solving process to break down large problems, solve things step by step, and trust yourself to not rely on an outside “answer” to a logical challenge

### Wins + Challenges:
[//]: <> (What are 2-3 wins you have from this project? What were some challenges you faced - and how did you get over them?)
One of the biggest wins for me on this project was finally cracking the logic of making the game modes work within the console/terminal alone. It took a couple of days, and a lot of hours, to figure out how to do this and I was very proud to see it working for both game modes. Another win was seeing how I've improved my speed and skills when utilizing CSS and creating the layout for this project. Compared to the last solo project, this showed a lot of advancement in my knowledge of this language. 
The biggest challenge I faced was getting the fighter that the user selects to show up on the results view of the gameboard. I tried many different ways, asked people for ideas on how I could make it work, and had no luck. It took a good night of sleep and trying some more options the next day to finally solve this issue, and it felt amazing!
