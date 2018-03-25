/*
 * Create a list that holds all of your cards
 */
const cards = [
    "fa fa-diamond",
    "fa fa-paper-plane-o",
    "fa fa-anchor",
    "fa fa-bolt",
    "fa fa-cube",
    "fa fa-anchor",
    "fa fa-leaf",
    "fa fa-bicycle",
    "fa fa-diamond",
    "fa fa-bomb",
    "fa fa-leaf",
    "fa fa-bomb",
    "fa fa-bolt",
    "fa fa-bicycle",
    "fa fa-paper-plane-o",
    "fa fa-cube"
];


const listItems = Array.from(document.querySelectorAll('ul.deck>li.card'));
const refreshButton = document.querySelector('.restart');
const shuffleCardsBegin = shuffle(cards);

// Display function that creates a new <i> element and adds a class to it
function displayCards(array) {
    listItems.forEach((listItem, index) => {
        let item = document.createElement("i");
        item.className = array[index];
        listItem.appendChild(item);
    });
}

displayCards(shuffleCardsBegin);


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

refreshButton.addEventListener('click', function() {
    listItems.forEach(function(item, index) {
        const i = item.getElementsByTagName('i');
        item.removeChild(i.item(0));
    });
})

refreshButton.addEventListener('click', function() {
    const shuffleCardsClick = shuffle(cards);
    displayCards(shuffleCardsClick);
})