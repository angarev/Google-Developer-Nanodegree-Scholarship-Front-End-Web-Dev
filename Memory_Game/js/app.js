//Cards array holds all cards
const cards = [
    'diamond',
    'paper-plane-o',
    'anchor',
    'bolt',
    'cube',
    'anchor',
    'leaf',
    'bicycle',
    'diamond',
    'bomb',
    'leaf',
    'bomb',
    'bolt',
    'bicycle',
    'paper-plane-o',
    'cube',
];

//Get the element that restart the game
const refreshButton = document.querySelector('.restart');

//deck of all cards in game
const deck = document.querySelector('.deck');

//Declaring timer variables
const time = document.getElementById('timer');
let seconds = 0;
let minutes = 0;
let hours = 0;
let timeInterval;

//Declaring move variables
const counter = document.getElementById('moves');
let movesCounter = 0;

//The counter of the fliped cards
let flipedCards = 0;

// Array for opened cards id
let openCardsId = [];

// Array for opened cards id
let openCardsValue = [];

// Get the modal window
let modal = document.getElementById('pop-up');

// Get the <span> element that closes the modal
let close = document.getElementById('close');

// Get the p element that will show the final time
let countTime = document.getElementById('final-time');

// Get the p element that will show the final movies
let countMovies = document.getElementById('final-movies');

// Get the ul element that will show the star rating
let finalStars = document.getElementById('final-stars');

// Get the element that will show the star
let score = document.getElementsByClassName('stars');

//Get the element that restart the game through modal window
let restart = document.getElementById('start');

//The value from which the clicks will start
let click = 0;

/**
 * @description Loads the game when the browser opens
 */
init();


/**
 * @description Main function to start a new play 
 */
function init() {

    //Reset flipedCards counter and moves counter
    flipedCards = 0;
    movesCounter = 0;
    counter.innerText = movesCounter;

    //Reset star rating
    resetStarRating();

    //Reset timer
    seconds = 0;
    minutes = 0;
    hours = 0;
    click = 0;
    time.innerHTML = "00:00:00";
    clearInterval(timeInterval);

    //Shuffle cards
    const shuffleCardsBegin = shuffle(cards);

    //Create a new <li> amd <i> elements and add eventListener
    for (let i = 0; i < shuffleCardsBegin.length; i++) {

        const liTag = document.createElement('li');
        const iTag = document.createElement('i');
        liTag.className = 'card flip';
        iTag.className = 'fa fa-' + shuffleCardsBegin[i];
        liTag.id = i;

        addClickEvent(liTag);

        liTag.appendChild(iTag);
        deck.appendChild(liTag);
    }
}

/**
 * @description Shuffle function from http://stackoverflow.com/a/2450976
 * @param {array}
 * @returns array
 */
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

/**
 * @description Add click event and push the open cards in array
 * @param {li}
 */
function addClickEvent(item) {
    item.addEventListener('click', function() {
        let id = this.id;
        this.className += ' open show';
        openCardsId.push(id);
        const value = document.getElementById(id).children[0].getAttribute('class');
        openCardsValue.push(value);

        click++;
        if (click == 1) {
            //Init timer
            timer();
        }

        if (openCardsId.length == 2) {
            //Start movesCounter
            moviesCounter();
            //Start starRating
            starRating();
            //Check if the the elements in the openCardsValue array are matched
            if (openCardsValue[0] == openCardsValue[1]) {
                match();
            } else {
                unmatch();
                delay();
            }
        }
    });
}



/**
 * @description If cards matched the function add a new class to the matched elements, 
 * increase flipedCards counter and reset openCardsValue, openCardsId
 */
function match() {
    document.getElementById(openCardsId[0]).className = 'card match';
    document.getElementById(openCardsId[1]).className = 'card match';
    flipedCards += 2;
    openCardsValue = [];
    openCardsId = [];
    //Check if all cards are opened
    if (flipedCards === cards.length) {
        alertMsg();
    }
}

/**
 * @description If cards unmatched the function add a new class
 */
function unmatch() {
    document.getElementById(openCardsId[0]).className = 'card unmatch';
    document.getElementById(openCardsId[1]).className = 'card unmatch';
}

/**
 * @description The function slows the rotation of the cards
 */
function delay() {
    const list = Array.from(document.querySelectorAll('ul.deck>li'));
    list.forEach(function(item) {
        item.classList.add('click-block');
    });
    setTimeout(function() {
        document.getElementById(openCardsId[0]).className = 'card flip';
        document.getElementById(openCardsId[1]).className = 'card flip';
        list.forEach(function(element) {
            element.classList.remove('click-block');
        });
        openCardsValue = [];
        openCardsId = [];
    }, 900);
}

/**
 * @description The display the modal window
 */
function alertMsg() {
    setTimeout(function() {
        modal.style.display = 'block';
        clearInterval(timeInterval);
        countTime.innerText = `Time: ${time.innerText}`;
        countMovies.innerText = `You made ${movesCounter} movies`;
        finalStars.innerHTML = score[0].innerHTML;

        restart.addEventListener('click', function() {
            modal.style.display = 'none';
            clearAll();
            init();
        });

        close.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }, 300);
}

/**
 * @description Count time 
 */
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
            (hours ? (hours > 9 ? hours : '0' + hours) : '00') + ':' +
            (minutes ? (minutes > 9 ? minutes : '0' + minutes) : '00') + ':' +
            (seconds ? (seconds > 9 ? seconds : '0' + seconds) : '00');
    }, 1000);
}

/**
 * @description Increase the moveCounter
 */
function moviesCounter() {
    movesCounter++;
    counter.innerText = movesCounter;
}

/**
 * @description Increase the moveCounter
 */
function starRating() {
    const list = Array.from(document.querySelectorAll('ul.stars>li'));
    if (movesCounter == (cards.length / 2)) {
        list[2].classList.add('hide');
    }

    if (movesCounter == cards.length) {
        list[1].classList.add('hide');
    }
}

/**
 * @description Reset the star rating
 */
function resetStarRating() {
    const list = Array.from(document.querySelectorAll('ul.stars>li'));
    list.forEach(function(item) {
        item.classList.remove('hide');
    });
}


/**
 * @description Reset the deck, openCardsValue, openCardsId and timer
 */
function clearAll() {
    deck.innerHTML = '';
    openCardsValue = [];
    openCardsId = [];
    seconds = 0;
    minutes = 0;
    hours = 0;
}

/**
 * @description Add event to the refresh button
 */
refreshButton.addEventListener('click', function() {
    clearAll();
    init();
});