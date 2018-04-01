# Memory Game Project
Simple and beautiful memory game for everyone. Find all matched cards and enjoy.  

[![N|Solid](https://d17h27t6h515a5.cloudfront.net/topher/2017/February/589bb972_screen-shot-2017-02-07-at-3.03.15-pm/screen-shot-2017-02-07-at-3.03.15-pm.png)](https://eu.udacity.com/course/front-end-web-developer-nanodegree--nd001)

## How to play
* The player flips one card over to reveal its underlying symbol.
* The player then turns over a second card, trying to find the corresponding card with the same symbol.
* If the cards match, both cards stay flipped over.
* If the cards do not match, both cards are flipped face down.
* The game ends once all cards have been correctly matched.

## When the player will win

* The game board consists of sixteen "cards". The deck is made up of eight different pairs of cards, each with different symbols on one side. The gameplay rules are very simple: flip over two hidden cards at a time to locate the ones that match! You have to open all 16 cards for the least time and with the least clicks.

## How did I create the game?

* The game was created with a Vanilla Javascript (ES6). Thanks to the scripting language I manipulated the DOM tree and created each of the cards on the board. An external library -Fontawesome(https://fontawesome.com/), was used to create the icons. The Fisher-Yates algorithm (aka Knuth) is used to shuffle cards - https://stackoverflow.com/questions/2450954. When loading the page, the cards are shuffled. The same happens when you start a new game.

* On the first opening a card begins counting a clock that counts the time of each player. It resets when the game is finished or restarted. There is a counter that grows with every attempt to open two cards. When the attempts become eight or sixteen, the player's rating decreases by one star. After opening all the cards, a modular window opens, which tells you how long the player has played, how many moves he has managed to win and what his rating is.
