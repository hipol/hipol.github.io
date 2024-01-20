// Create a list that holds all of your cards
// let cards = [
//   ["bonjour", "hi"]
// ];

let originalCards = 
[
  ["donc","therefore, so, then"  ],
  ["soit","whether, either"  ],
  ["bas","low; down(stairs); bottom"  ],
  ["passer","pass, spend time, go (well/bad), do without"  ],
  ["puis","then"  ],
  ["tant","so much"  ],
  ["coup","blow, hit"  ],
  ["sens","sense, meaning, direction"  ],
  ["ni","nor, neither"  ],
  ["entendre","hear; get along"  ],
  ["comprendre","understand, include"  ],
  ["trouver","find; be located"  ],
  ["chercher","search, get"  ],
  ["sous","under; underneath"  ],
  ["vers","towards, around; verse"  ],
  ["aucun","no, none"  ],
  ["devant","in front of; ahead; front"  ],
  ["dont","whose, that, which"  ],
  ["ainsi","thus, thereby; as"  ],
  ["cour","yard, courtyard, court"  ],
  ["dedans","inside, indoors"  ],
  ["autant","as much"  ],
  ["valoir","be worth, cost"  ],
  ["rendre","give back, render; surrender"  ],
  ["bout","end, piece"  ],
  ["courant","common; current"  ],
  ["propos","remark"  ],
  ["promettre","promise"  ],
  ["camp","side, camp"  ],
  ["fond","bottom"  ],
  ["pièce","room, coin"  ],
  ["ailleurs","elsewhere"  ],
  ["debout","standing, upright"  ],
  ["retrouver","find back, meet"  ],
  ["coin","corner"  ],
  ["rencontrer","meet, encounter"  ],
  ["rappeler","call back, remember"  ],
  ["agir","act; be about"  ],
  ["pareil","such, similar; the same"  ],
  ["appel","call back, remember"  ],
  ["anniversaire","anniversary, birthday"  ],
  ["moyen","means, way; medium, average"  ],
  ["clair","clear, bright"  ],
  ["meurtre","murder"  ],
  ["avance","advance"  ],
  ["forme","form, shape"  ],
  ["bord","edge, side"  ],
  ["médecin","doctor"  ],
  ["épais","thick"  ],
  ["porter","wear, carry"  ],
  ["ignorer","ignore"  ],
  ["diable","devil"  ],
  ["supposer","assume, suppose"  ],
  ["flic","cop (police)"  ],
  ["jurer","swear"  ],
  ["moitié","half"  ],
  ["chacun","each"  ],
  ["télé","TV"  ],
  ["autour","around"  ],
  ["proche","near; close friend/relative"  ],
  ["balle","bullet, ball"  ],
  ["selon","according to"  ],
  ["classe","class, classroom"  ],
  ["pari","bet"  ],
  ["peuple","people"  ],
  ["habitude","habit"  ],
  ["voie","way, track"  ],
  ["contrôle","test, control"  ],
  ["honte","shame"  ],
  ["trou","hole"  ],
  ["arrière","rear, back"  ],
  ["poste","position; post office"  ],
  ["ressembler","look like"  ],
  ["pourtant","yet, however"  ],
  ["bande","band, bunch"  ],
  ["enfer","hell"  ],
  ["tel","such"  ],
  ["plusieurs","severals"  ],
  ["compagnie","company"  ],
  ["combat","fight"  ],
  ["secours","relief, help"  ],
  ["connerie","bullshit"  ],
  ["merveilleux","wonderful"  ],
  ["voler","fly; steal"  ],
  ["ennui","boredom, trouble"  ],
  ["but","purpose, goal"  ],
  ["hors","out of"  ],
  ["boîte","box, can"  ],
  ["vol","flight, theft, robbery"  ],
  ["bête","beast; stupid"  ],
  ["avenir","future"  ],
  ["lent","slow"  ],
  ["amoreux","in love; lover"  ],
  ["cuisine","kitchen, cuisine"  ],
  ["poser","put (down)"  ],
  ["journal","newspaper, journal"  ],
  ["dommage","damage, pity, shame"  ],
  ["peau","skin"  ],
  ["servir","serve; use"  ],
  ["sympa","frienly, nice"  ],
  ["juger","judge"  ],
  ["bruit","noise"  ],
  ["paraître","appear, sound, be published"  ],
  ["asseoir","sit"  ],
  ["bonheur","happiness"  ],
  ["tas","pile, lots"  ],
  ["à travers","through"  ],
  ["conseil","advice, council"  ],
  ["robe","dress"  ],
  ["rêve","dream"  ],
  ["pitié","pity, mercy"  ],
  ["don","gift, donation"  ],
  ["sol","floor, ground"  ],
  ["vent","wind"  ],
  ["gamin","kid"  ],
  ["tante","aunt"  ],
  ["milieu","middle, environment"  ],
  ["reine","queen"  ],
  ["au lieu de","instead of"  ],
  ["bière","beer"  ],
  ["dingue","crazy"  ],
  ["inutile","unnecessary, useless"  ],
  ["nul","no, no one; bad, worthless"  ],
  ["sentir","smell, feel"  ],
  ["armée","army"  ],
  ["emmener","take (somewhere)"  ],
  ["vêtement","garment, clothes"  ],
  ["unir","unite"  ],
  ["soin","care, carefulness"  ],
  ["pierre","stone"  ],
  ["lequel","which one"  ],
  ["parole","word, speech"  ],
  ["ennemi","enemy, hostile"  ],
  ["recherche","research, search"  ],
  ["intérêt","interest"  ],
  ["rôle","role"  ],
  ["tourner","turn, spin"  ],
  ["humain","human"  ],
  ["coupable","guilty, culprit"  ],
  ["environ","about, around"  ],
  ["espoir","hope"  ],
  ["mur","wall"  ],
  ["lâche","coward"  ],
  ["face","face, side"  ],
  ["sauter","jump, skip"  ],
  ["colère","anger"  ],
  ["adieu","farewell"  ],
  ["parier","bet, gamble"  ],
  ["tort","wrong, harm"  ],
  ["conduire","lead, drive; behave"  ],
  ["revenu","income"  ],
  ["quartier","neighborhood, district"  ],
  ["preuve","evidence, proof"  ],
  ["épouser","marry"  ],
  ["gosse","kid"  ],
  ["rose","pink, rose"  ],
  ["vide","empty, void"  ],
  ["fier","proud"  ],
  ["manière","way, form, manner"  ],
  ["occasion","opportunity, occasion, secondhand"  ],
  ["défense","defense, prohibition"  ],
  ["jeter","throw"  ],
  ["base","base, basis"  ],
  ["glace","ice, mirror, ice cream"  ],
  ["parmi","among"  ],
  ["tueur","killer"  ],
  ["naître","be born"  ],
  ["course","race; shopping"  ],
  ["mien","mine"  ],
  ["couper","cut"  ],
  ["dégager","clear, bugger off"  ],
  ["prévoir","foresee, plan"  ],
  ["lorsque","when"  ],
  ["bain","bath"  ],
  ["court","short"  ],
  ["déranger","disturb"  ],
  ["ramener","bring back"  ],
  ["enquête","survey, investigation"  ],
  ["camion","truck"  ],
  ["rencontre","meeting"  ],
  ["éviter","avoid"  ],
  ["plupart","most"  ],
  ["empêcher","prevent, stop"  ],
  ["envers","towards; the backside/inverse"  ],
  ["ange","angel"  ],
  ["dossier","folder, file"  ],
  ["règle","rule, ruler (measuring stick)"  ],
  ["drogue","drug"  ],
  ["charger","load, charge; take care of"  ],
  ["pont","bridge"  ],
  ["douleur","pain"  ],
  ["fait","fact"  ],
  ["magasin","store, shop"  ],
  ["entier","whole, full"  ],
  ["raconter","tell, talk about"  ]
];


let wordsToStudy = [];

let shuffledOriginalCards = shuffle(originalCards);
let twentyCards = shuffledOriginalCards.slice(0, 18);

let frenchCards = twentyCards.map(arr => arr[0]);
let englishCards = twentyCards.map(arr => arr[1]);

// cards = cards.concat(cards);

//creating an array to check the opneing of cards
let opened = [];

let counter = 0;

let moves = 0;

let stars = document.getElementsByClassName("fa fa-star");
console.log(stars);
let rating = 3;

let shuffledCards;

let hasTheTimerStarted = false;
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Creation of cards dyanamically
function createCards() {
  
  //Storing the function in a var
  // let shuffledCards = shuffle(cards);

  let shuffledFrenchCards = shuffle(frenchCards);
  let shuffledEnglishCards = shuffle(englishCards);

  /*Accessing each card using for each loop $ item is the array element i.e its the classname*/
  shuffledFrenchCards.forEach(function(item) {
    
    /*Here we are creating li element and appending it to the ul and assiging the card name as a class name to the icon tag*/
    //$("ul.deck").append(`<li class='card'><i class="${item}"></i></li>`);
    $("ul.frenchDeck").append(`<li class='card french'><i class="${item}">${item}</i></li>`);
  });
  shuffledEnglishCards.forEach(function(item) {
    
    /*Here we are creating li element and appending it to the ul and assiging the card name as a class name to the icon tag*/
    //$("ul.deck").append(`<li class='card'><i class="${item}"></i></li>`);
    $("ul.englishDeck").append(`<li class='card english'><i class="${item}">${item}</i></li>`);
  });
}

//Calling creating cards fuction will create cards dyanamically
createCards();

//Selecting every ele with card class nd binding a click event to each card
$(".card").click(function() {
  
  //Selcting current ele being clicked
  openCards($(this));
  console.log(this);
});

// Creating a function to open cards
function openCards(card) {
  
  /*checking if any card is opened or not if nothing is opened*/
  if (opened.length === 0) {
    
    //push a card into array
    opened.push(card);

    responsiveVoice.speak(`${card[0].innerText}`, "French Female", {rate: 1.0});
    responsiveVoice.speak(`${card[0].innerText}`, "French Female", {rate: 0.7});

    //open the card
    card.toggleClass("open show animated headShake");

    //Calling timer
    if (!hasTheTimerStarted) {
      timer();
      hasTheTimerStarted = true;
    }
  } 
  //if one card has already been pushed
  else if (opened.length === 1 && opened[0][0]!== card[0]) {
    
        //push that card in array
    opened.push(card);
    
    //open that card
    card.toggleClass("open show animated headShake");




    
    //a card will open
    timeOut = setTimeout(checkMatch, 500);
  }
}


function areMatching(first, second) {
  for (let i = 0; i < originalCards.length; i++) {
    if (originalCards[i][0].trim() === first.trim()) {
      if (originalCards[i][1].trim() === second.trim()){
        return true
      }
      else {
        return false
      }
    } else if (originalCards[i][0].trim() === second.trim()) {
      if (originalCards[i][1].trim() === first.trim()){
        return true
      }
      else {
        return false
      }
    }
  }
  return false
}

/*creating a function to check whether the cards matched or not
when we have two opened cards in an array
*/
function checkMatch() {
  //an array to keep the track of opened cards
  let open = opened;

  open[0].toggleClass("disable");
  moveCounter();

  /*will check the matching of cards using same class name
  open[0][0]means first opned card at index 0
  open[1][0]means second opned card at index 0 
  we are seleting classname of icon tag
  */
  if (
    // open[0][0].firstChild.className === open[1][0].firstChild.className &&
    // open[0][0] !== open[1][0]
    areMatching(open[0][0].firstChild.innerText, open[1][0].firstChild.innerText) &&
    open[0][0] !== open[1][0]
  ) {
    //matching cards
    open[0].toggleClass("match tada");
    open[1].toggleClass("match tada");

    //to stop click event on the opened cards
    open[0].css("pointer-events", "none");
    open[1].css("pointer-events", "none");

    //clear the array for next two cards
    opened = [];
    timeOut2 = setTimeout(matchCounter, 1000);
  } else if (opened.length === 1 && opened[0][0] !== card[0]) {
    opened.toggleClass("disable");
  } else {
    open[0].toggleClass("notMatch");
    open[1].toggleClass("notMatch");
    wordsToStudy = wordsToStudy.concat(open[0][0].firstChild.innerText);
    console.log(wordsToStudy);
    opened = [];
    setTimeout(function() {
      open[0].toggleClass("open show animated notMatch headShake");
      open[1].toggleClass("open show animated notMatch headShake");
    }, 300);
  }
}

/*creating a counter to check all for all the opened cards
if all the 8 pair matches then create an alert  
*/
function matchCounter() {
  counter++;
  if (counter === 8) {
    shouldTimerTick = false;
    openWinModal();
  }
}

//counting the no of moves
function moveCounter() {
  moves++;

  //accessing moves from span ele n changing the content means counting the moves
  $(".moves").html(moves);
  checkStars();
}

function checkStars() {
  if (moves > 10 && moves < 19) {
    stars[2].style.display = "none";
    rating = 2;
  } else if (moves >= 20) {
    stars[1].style.display = "none";
    rating = 1;
  }
}

  

function openWinModal() {
  const move = document.querySelector(".moves").innerText;
  
  
  if (move > 10 && move < 19) {
    stars[2].style.display = "none";
    rating = 2;
  } else if (moves >= 20) {
    stars[1].style.display = "none";
    rating = 1;
  }
  const times = document.querySelector("#timer").innerText;
  $(".modal-body").html(
    `You completed the game in ${times} . <br></br> You used ${move} moves. <br></br> You get ${rating} stars.`
  );

  document.querySelector(".reset").addEventListener("click", reset);
  $("#myModal").modal("show");
}

function reset() {
  $(".deck").html("");
  opened = [];
  counter = 0;
  moves = -1;
  rating = 3;
  moveCounter();
  shuffledCards = [];
  createCards();
  hasTheTimerStarted = false;
  shouldTimerTick = false;
  t.textContent = "00Mins:00Secs";
  seconds = 0;
  minutes = 0;
  $(".card").click(function() {
    openCards($(this));
  });
  stars[1].style.display = "block";
  stars[2].style.display = "block";
  $("#myModal").css("display", "none");
}

$(".restart").click(function() {
  //reset();
  document.querySelectorAll('.card').forEach(e => e.remove());

  shuffledOriginalCards = shuffledOriginalCards.slice(18);
  twentyCards = shuffledOriginalCards.slice(0, 18);

  frenchCards = twentyCards.map(arr => arr[0]);
  englishCards = twentyCards.map(arr => arr[1]);




  createCards();
  //Selecting every ele with card class nd binding a click event to each card
$(".card").click(function() {
  
  //Selcting current ele being clicked
  openCards($(this));
  console.log(this);
});

});

$(".study").click(function() {
  //reset();
  document.querySelectorAll('.card').forEach(e => e.remove());

  const wordsDict = Object.fromEntries(originalCards);

  console.log(wordsDict)
  console.log(wordsToStudy)

  let extraStudyCards = []

  for (let i = 0; i < wordsToStudy.length; i++) {
    extraStudyCards.push([wordsToStudy[i], wordsDict[wordsToStudy[i]]]);
  }

  console.log(extraStudyCards)

  frenchCards = extraStudyCards.map(arr => arr[0]);
  englishCards = extraStudyCards.map(arr => arr[1]);


  createCards();
  //Selecting every ele with card class nd binding a click event to each card
$(".card").click(function() {
  
  //Selcting current ele being clicked
  openCards($(this));
  console.log(this);
});

});

//Timer
let shouldTimerTick;
let t = document.getElementById("timer"),
  seconds = 0,
  minutes = 0;

function timer() {
  let time;
  shouldTimerTick = true;

  time = setInterval(function() {
    if (shouldTimerTick) {
      (function add() {
        seconds++;
        if (seconds >= 60) {
          seconds = 0;
          minutes++;
        }

        t.textContent =
          (minutes
            ? minutes > 9 ? minutes + "Mins" : "0" + minutes + "Mins"
            : "00Mins") +
          ":" +
          (seconds > 9 ? seconds + "Secs" : "0" + seconds + "Secs");
      })();
    } else {
      clearInterval(time);
    }
  }, 1000);
}
