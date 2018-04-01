/*
 * Create a list that holds all of your cards
 */
const cards = [
    "diamond",
    "paper-plane-o",
    "anchor",
    "bolt",
    "cube",
    "anchor",
    "leaf",
    "bicycle",
    "diamond",
    "bomb",
    "leaf",
    "bomb",
    "bolt",
    "bicycle",
    "paper-plane-o",
    "cube"
];


const refreshButton = document.querySelector('.restart');

const deck = document.querySelector('.deck');

const time = document.getElementById('timer');

const counter = document.getElementById('moves');


let seconds = 0;
let minutes = 0;
let hours = 0;
let timeInterval;
let flipedCards = 0;
let movesCounter = 0;
let openCardsId = [];
let openCardsValue = [];



// Get the modal
let modal = document.getElementById('pop-up');

// Get the <span> element that closes the modal
let close = document.getElementById("close");

// Get the p element that will show the final time
let countTime = document.getElementById("final-time");

// Get the p element that will show the final movies
let countMovies = document.getElementById("final-movies");

let finalStars = document.getElementById("final-stars");

let score = document.getElementsByClassName("stars");

let restart = document.getElementById("start");


init();


// Display function that creates a new <i> element and adds a class to it
function init() {

    flipedCards = 0;
    movesCounter = 0;
    counter.innerText = movesCounter;

    resetStarRating();

    seconds = 0;
    minutes = 0;
    hours = 0;
    clearInterval(timeInterval);

    timer();

    const shuffleCardsBegin = shuffle(cards);

    for (let i = 0; i < shuffleCardsBegin.length; i++) {

        const liTag = document.createElement("li");
        const iTag = document.createElement("i");
        liTag.className = "card flip";
        iTag.className = 'fa fa-' + shuffleCardsBegin[i];
        liTag.id = i;

        addClickEvent(liTag);

        liTag.appendChild(iTag);
        deck.appendChild(liTag);
    }

}


function addClickEvent(item) {
    item.addEventListener('click', function() {
        let id = this.id;
        this.className += ' open show';
        openCardsId.push(id);
        const value = document.getElementById(id).children[0].getAttribute('class');
        openCardsValue.push(value);
        if (openCardsId.length == 2) {
            moviesCounter();
            starRating();
            if (openCardsValue[0] == openCardsValue[1]) {
                match();
            } else {
                unmatch();
                delay();
            }
        }
    });
}


function match() {
    document.getElementById(openCardsId[0]).className = 'card match';
    document.getElementById(openCardsId[1]).className = 'card match';
    flipedCards += 2;
    openCardsValue = [];
    openCardsId = [];
    if (flipedCards === cards.length) {
        alertMsg();
    }
}


function unmatch() {
    document.getElementById(openCardsId[0]).className = 'card unmatch';
    document.getElementById(openCardsId[1]).className = 'card unmatch';
}


function delay() {
    const list = Array.from(document.querySelectorAll('ul.deck>li'));
    list.forEach(function(item) {
        item.classList.add("click-block");
    });
    setTimeout(function() {
        document.getElementById(openCardsId[0]).className = 'card flip';
        document.getElementById(openCardsId[1]).className = 'card flip';
        list.forEach(function(element) {
            element.classList.remove("click-block");
        });
        openCardsValue = [];
        openCardsId = [];
    }, 900);
}

function alertMsg() {
    setTimeout(function() {
        modal.style.display = "block";
        clearInterval(timeInterval);
        countTime.innerText = `Time: ${time.innerText}`;
        countMovies.innerText = `You made ${movesCounter} movies`;
        finalStars.innerHTML = score[0].innerHTML;

        restart.addEventListener('click', function() {
            modal.style.display = "none";
            clearAll();
            init();
        });

        close.addEventListener('click', function() {
            modal.style.display = "none";
        });
    }, 300);
}


function timer() {
    timeInterval = setInterval(function() {
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
        }
        time.textContent =
            (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" +
            (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" +
            (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00");
    }, 1000);
}


function moviesCounter() {
    movesCounter++;
    counter.innerText = movesCounter;
}


function starRating() {
    const list = Array.from(document.querySelectorAll('ul.stars>li'));
    if (movesCounter == (cards.length / 2)) {
        list[2].classList.add('hide');
    }

    if (movesCounter == cards.length) {
        list[1].classList.add('hide');
    }
}


function resetStarRating() {
    const list = Array.from(document.querySelectorAll('ul.stars>li'));
    list.forEach(function(item) {
        item.classList.remove('hide');
    });
}

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



function clearAll() {
    deck.innerHTML = "";
    openCardsValue = [];
    openCardsId = [];
    seconds = 0;
    minutes = 0;
    hours = 0;
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
    clearAll();
    init();
});