

let originalCards = [
  ["achever","to complete, to finish","Il a finalement achevé son roman.","He finally finished his novel.",3700  ],
  ["Pâques","Easter","Nous fêtons Pâques en famille chaque année.","We celebrate Easter with family every year.",3701  ],
  ["ironie","irony","L'ironie de la situation n'a pas échappé à personne.","The irony of the situation was not lost on anyone.",3702  ],
  ["coupure","cut, interruption","Il y a eu une coupure d'électricité pendant la tempête.","There was a power cut during the storm.",3703  ],
  ["céréale","cereal, grain","Il mange des céréales chaque matin pour le petit-déjeuner.","He eats cereal every morning for breakfast.",3704  ],
  ["pâte","dough, paste","Elle prépare une pâte à pizza maison.","She's making homemade pizza dough.",3705  ],
  ["excepté","except, apart from","Tout le monde est venu, excepté Marie.","Everyone came, apart from Marie.",3706  ],
  ["comptant","cash, in cash","Il a payé comptant à la caisse.","He paid in cash at the checkout.",3707  ],
  ["ruisseau","stream, brook","Le ruisseau traverse la forêt.","The brook runs through the forest.",3708  ],
  ["baratin","blarney, flattery","Ne me dis pas de baratin, dis-moi la vérité.","Don't give me any blarney, tell me the truth.",3709  ],
  ["hamburger","hamburger","Il adore les hamburgers faits maison.","He loves homemade hamburgers.",3710  ],
  ["évêque","bishop","L'évêque a présidé la cérémonie.","The bishop presided over the ceremony.",3711  ],
  ["documentaire","documentary","Il a regardé un documentaire sur les animaux sauvages.","He watched a documentary about wild animals.",3712  ],
  ["bénéfice","benefit, profit","L'exercice physique apporte de nombreux bénéfices pour la santé.","Physical exercise brings many health benefits.",3713  ],
  ["recommander","to recommend, to suggest","Je vous recommande ce restaurant, la cuisine y est excellente.","I recommend this restaurant to you, the food is excellent.",3714  ],
  ["légalement","legally","Il est important d'agir légalement.","It's important to act legally.",3715  ],
  ["combattant","fighter, combatant","Il a été un combattant courageux pendant la guerre.","He was a brave fighter during the war.",3716  ],
  ["miette","crumb","Il a laissé des miettes de pain sur la table.","He left crumbs of bread on the table.",3718  ],
  ["olive","olive","Il a ajouté des olives à la salade.","He added olives to the salad.",3719  ],
  ["dizaine","dozen, about ten","Il reste une dizaine de biscuits dans la boîte.","There are about ten cookies left in the box.",3720  ],
  ["largement","widely, largely","C'est largement suffisant pour nos besoins.","It's largely sufficient for our needs.",3721  ],
  ["bonnet","hat, bonnet","Elle porte un bonnet pour se protéger du froid.","She wears a hat to protect herself from the cold.",3722  ],
  ["foin","hay","Le foin est utilisé comme aliment pour le bétail.","Hay is used as feed for livestock.",3723  ],
  ["en dépit de","despite, in spite of","En dépit de la pluie, nous avons continué la randonnée.","Despite the rain, we continued the hike.",3724  ],
  ["paie","pay","Il attend sa paie chaque fin de mois.","He waits for his pay every end of the month.",3725  ],
  ["hypothèse","hypothesis","Le scientifique a émis une hypothèse sur l'origine de l'univers.","The scientist proposed a hypothesis about the origin of the universe.",3726  ],
  ["fantasme","fantasy","Elle a un fantasme de voyager dans l'espace.","She has a fantasy of traveling in space.",3727  ],
  ["boom","boom","Il y a eu un boom économique dans les années 1990.","There was an economic boom in the 1990s.",3728  ],
  ["abus","abuse","Il a été victime d'abus dans son enfance.","He was a victim of abuse in his childhood.",3729  ],
  ["soulagement","relief","Il a soupiré de soulagement après avoir réussi son examen.","He sighed with relief after passing his exam.",3730  ],
  ["célébrité","celebrity","La célébrité est difficile à gérer pour certains.","Celebrity is hard to handle for some people.",3731  ],
  ["injection","injection","Il a reçu une injection pour soulager la douleur.","He received an injection to relieve the pain.",3732  ],
  ["générer","to generate","Cette machine peut générer de l'électricité.","This machine can generate electricity.",3733  ],
  ["présidence","presidency","Il a été élu à la présidence du club.","He was elected to the presidency of the club.",3734  ],
  ["spectateur","spectator","Les spectateurs ont applaudi à la fin du spectacle.","The spectators applauded at the end of the show.",3735  ],
  ["soupir","sigh","Il a poussé un soupir de soulagement.","He let out a sigh of relief.",3736  ],
  ["néant","void","Il a contemplé le néant de l'existence.","He contemplated the void of existence.",3737  ],
  ["hospitalité","hospitality","L'hospitalité est une valeur importante dans cette région.","Hospitality is an important value in this region.",3738  ],
  ["coude","elbow","Il s'est blessé au coude en tombant.","He injured his elbow when he fell.",3739  ],
  ["écureuil","squirrel","L'écureuil a caché des noix pour l'hiver.","The squirrel hid nuts for the winter.",3740  ],
  ["organisme","organism","L'organisme humain est complexe.","The human organism is complex.",3742  ],
  ["revivre","to relive","Il aime revivre ses souvenirs d'enfance.","He enjoys reliving his childhood memories.",3743  ],
  ["gorille","gorilla","Le gorille est un grand singe.","The gorilla is a large ape.",3744  ],
  ["morphine","morphine","La morphine est utilisée comme analgésique puissant.","Morphine is used as a powerful painkiller.",3745  ],
  ["andouille","sausage","Il a préparé une andouille pour le dîner.","He prepared a sausage for dinner.",3746  ],
  ["redevenir","to become again","Elle espère redevenir la personne qu'elle était avant l'accident.","She hopes to become the person she was before the accident.",3747  ],
  ["batteur","drummer","Il est batteur dans un groupe de rock.","He is a drummer in a rock band.",3748  ],
  ["réconfort","comfort, consolation","Il a trouvé du réconfort dans les bras de sa mère.","He found comfort in his mother's arms.",3749  ],
  ["disciple","disciple","Il a été le disciple d'un grand maître.","He was the disciple of a great master.",3750  ],
  ["minuscule","tiny","Le papillon avait des ailes minuscules.","The butterfly had tiny wings.",3751  ],
  ["suédois","Swedish","Elle a appris le suédois en vivant en Suède.","She learned Swedish while living in Sweden.",3752  ],
  ["présentation","presentation","Sa présentation était très bien préparée.","His presentation was very well prepared.",3753  ],
  ["amiral","admiral","L'amiral a dirigé la flotte vers la victoire.","The admiral led the fleet to victory.",3754  ],
  ["trompette","trumpet","Il joue de la trompette dans un orchestre.","He plays the trumpet in an orchestra.",3755  ],
  ["disposer","to arrange, to dispose","Il a disposé les fleurs sur la table.","He arranged the flowers on the table.",3756  ],
  ["crépuscule","twilight","Le crépuscule offre des couleurs magnifiques dans le ciel.","Twilight offers beautiful colors in the sky.",3757  ],
  ["inscription","inscription, enrollment","Il a rempli le formulaire d'inscription.","He filled out the enrollment form.",3758  ],
  ["ôter","to remove","Il a dû ôter ses chaussures avant d'entrer.","He had to remove his shoes before entering.",3759  ],
  ["conception","design, conception","La conception de ce bâtiment est impressionnante.","The design of this building is impressive.",3760  ],
  ["western","western","Il aime regarder des films western.","He enjoys watching western movies.",3761  ],
  ["peigne","comb","Elle a perdu son peigne dans la salle de bain.","She lost her comb in the bathroom.",3762  ],
  ["vicieux","vicious","Ce chien peut être vicieux s'il n'est pas dressé.","This dog can be vicious if not trained.",3763  ],
  ["contenter","to please, to satisfy","Il a fait de son mieux pour la contenter.","He did his best to please her.",3765  ],
  ["révolte","revolt, rebellion","La révolte a éclaté dans les rues de la ville.","The revolt broke out in the streets of the city.",3766  ],
  ["cardinal","cardinal","Le cardinal a présidé la cérémonie religieuse.","The cardinal presided over the religious ceremony.",3767  ],
  ["méfier","to distrust, to be wary of","Il se méfie des étrangers.","He distrusts strangers.",3768  ],
  ["sapin","fir tree","Nous avons décoré le sapin pour Noël.","We decorated the fir tree for Christmas.",3769  ],
  ["rein","kidney","Il a eu des problèmes de rein ces derniers temps.","He has had kidney problems lately.",3770  ],
  ["supprimer","to delete, to remove","Il a supprimé tous les fichiers inutiles.","He deleted all the unnecessary files.",3771  ],
  ["paniquer","to panic","Il a commencé à paniquer quand il a réalisé qu'il était en retard.","He started to panic when he realized he was late.",3772  ],
  ["limonade","lemonade","Il a bu une limonade bien fraîche par cette chaude journée d'été.","He drank a nice cold lemonade on this hot summer day.",3773  ],
  ["prophétie","prophecy","La prophétie s'est réalisée.","The prophecy came true.",3774  ],
  ["buffet","buffet","Il y avait un grand buffet lors de la réception.","There was a large buffet at the reception.",3775  ],
  ["confiture","jam","Elle a préparé de la confiture de fraises pour le petit-déjeuner.","She made strawberry jam for breakfast.",3776  ],
  ["manipuler","to manipulate","Il ne faut pas manipuler les données.","Data should not be manipulated.",3777  ],
  ["tombeau","tomb, grave","Le tombeau du pharaon a été découvert intact.","The pharaoh's tomb was discovered intact.",3779  ],
  ["performance","performance","Sa performance lors du match était remarquable.","His performance in the game was remarkable.",3780  ],
  ["appui","support, backing","Il a besoin de l'appui de ses amis dans cette période difficile.","He needs the support of his friends in this difficult time.",3781  ],
  ["tremblement","tremor, shaking","Le tremblement de terre a secoué la région.","The earthquake shook the region.",3783  ],
  ["lécher","to lick","Le chien aime lécher les enfants.","The dog likes to lick children.",3784  ],
  ["précision","precision, accuracy","La précision de ses observations était remarquable.","The precision of his observations was remarkable.",3785  ],
  ["thon","tuna","Elle a préparé une salade de thon pour le déjeuner.","She made a tuna salad for lunch.",3786  ],
  ["péril","peril, danger","Il a mis sa vie en péril pour sauver l'enfant.","He put his life in peril to save the child.",3787  ],
  ["sifflet","whistle","Il a utilisé un sifflet pour appeler son chien.","He used a whistle to call his dog.",3788  ],
  ["tricher","to cheat","Il a été disqualifié pour avoir triché lors de la compétition.","He was disqualified for cheating in the competition.",3789  ],
  ["conditionnel","conditional","Cette proposition est conditionnelle à certaines conditions.","This proposal is conditional on certain conditions.",3791  ],
  ["substance","substance","Cette substance est nocive pour l'environnement.","This substance is harmful to the environment.",3792  ],
  ["mâchoire","jaw","Il a reçu un coup à la mâchoire lors de la bagarre.","He got hit in the jaw during the fight.",3793  ],
  ["jardinier","gardener","Le jardinier prend soin des plantes dans le jardin.","The gardener takes care of the plants in the garden.",3794  ],
  ["fureur","fury, rage","Il était pris de fureur après avoir perdu la partie.","He was consumed by fury after losing the game.",3795  ],
  ["coureur","runner","Il est un coureur de marathon expérimenté.","He is an experienced marathon runner.",3796  ],
  ["tambour","drum","Il joue du tambour dans un groupe de musique.","He plays the drum in a music band.",3797  ],
  ["dater","to date, to go out with","Ils ont commencé à se dater après s'être rencontrés à l'université.","They started dating after meeting in college.",3798  ],
  ["protocole","protocol","Il a suivi le protocole à la lettre.","He followed the protocol to the letter.",3799  ],
  ["pieu","stake","Ils ont planté des pieux pour marquer la frontière.","They planted stakes to mark the border.",3800  ]
	];



console.log(originalCards)


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
    $("ul.frenchDeck").append(`<li class='card french'><i class="${item} frenchText">${item}</i></li>`);
  });
  shuffledEnglishCards.forEach(function(item) {
    
    /*Here we are creating li element and appending it to the ul and assiging the card name as a class name to the icon tag*/
    //$("ul.deck").append(`<li class='card'><i class="${item}"></i></li>`);
    $("ul.englishDeck").append(`<li class='card english'><i class="${item} englishText">${item}</i></li>`);
  });


  if(window.getComputedStyle(document.getElementById('eye')).getPropertyValue('display') === "block"){
    document.querySelectorAll('.frenchText').forEach(e => e.style.fontSize = '0');
  }


}

//Calling creating cards fuction will create cards dyanamically
createCards();
openNextCard();


function openNextCard(card) {
	const nextCard = document.querySelector('.card:not(.open)');
	
	responsiveVoice.speak(`${nextCard.innerText}`, "French Female", {rate: 1.0});
    responsiveVoice.speak(`${nextCard.innerText}`, "French Female", {rate: 0.7});


	opened.push(nextCard)
	nextCard.classList.toggle("open")
	nextCard.classList.toggle("show")
	nextCard.classList.toggle("animated")
	nextCard.classList.toggle("headShake")
}


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
  	console.log("it's 0")
    
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
  	console.log("it's 1")
    
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

  open[0].classList.toggle("disable");

  moveCounter();

  /*will check the matching of cards using same class name
  open[0][0]means first opned card at index 0
  open[1][0]means second opned card at index 0 
  we are seleting classname of icon tag
  */
  if (
    // open[0][0].firstChild.className === open[1][0].firstChild.className &&
    // open[0][0] !== open[1][0]
    areMatching(open[0].innerText, open[1][0].firstChild.innerText) &&
    open[0][0] !== open[1][0]
  ) {
    //matching cards
    open[0].classList.toggle("match")
	open[0].classList.toggle("tada")
    open[1].toggleClass("match tada");

    //to stop click event on the opened cards
    // open[0].css("pointer-events", "none");
    open[1].css("pointer-events", "none");

    //clear the array for next two cards
    opened = [];
    timeOut2 = setTimeout(matchCounter, 1000);
  } else if (opened.length === 1 && opened[0][0] !== card[0]) {
    opened.toggleClass("disable");
  } else {
    open[0].classList.toggle("notMatch");
    open[1].toggleClass("notMatch");
    wordsToStudy = wordsToStudy.concat(open[0].innerText);
    console.log(wordsToStudy);
    opened = [];
    setTimeout(function() {

	    open[0].classList.toggle("open")
		open[0].classList.toggle("show")
		open[0].classList.toggle("animated")
		open[0].classList.toggle("notMatch")
		open[0].classList.toggle("headShake")

        open[1].toggleClass("open show animated notMatch headShake");
    }, 300);
  }
  openNextCard();
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
	opened = [];
  //reset();
  document.querySelectorAll('.card').forEach(e => e.remove());

  shuffledOriginalCards = shuffledOriginalCards.slice(18);
  twentyCards = shuffledOriginalCards.slice(0, 18);

  frenchCards = twentyCards.map(arr => arr[0]);
  englishCards = twentyCards.map(arr => arr[1]);




  createCards();
  openNextCard();
  //Selecting every ele with card class nd binding a click event to each card
$(".card").click(function() {
  
  //Selcting current ele being clicked
  openCards($(this));
  console.log(this);
});

});





$(".sentence").click(function() {
  //reset();

  document.querySelectorAll('.sentenceContainer').forEach(e => e.remove());

  const sentencesDict = {};

  for (let i=0; i<originalCards.length; i++){
    sentencesDict[originalCards[i][0]] = originalCards[i]
  }

  const frenchWordOpened = String(opened[0].innerText).trim();

  $(".sentenceBinder.french").append(`<div class='sentenceContainer'><span class='frenchSentence sentenceText'>${sentencesDict[frenchWordOpened][2]}</span></div>`);
  $(".sentenceBinder.english").append(`<div class='sentenceContainer'><span class='englishSentence sentenceText'>${sentencesDict[frenchWordOpened][3]}</span></div>`);

  //Selecting every ele with card class nd binding a click event to each card
$(".card").click(function() {
  
  //Selcting current ele being clicked
  openCards($(this));
  console.log(this);
});


});


let frenchFontSize; 
$(".eye").click(function() {
  if(window.getComputedStyle(document.getElementById('eye')).getPropertyValue('display') === "none"){
    frenchFontSize = window.getComputedStyle(document.querySelectorAll('.frenchText')[0]).getPropertyValue('font-size');
    console.log(window.getComputedStyle(document.querySelectorAll('.frenchText')[0]));
    document.querySelectorAll('.frenchText').forEach(e => e.style.fontSize = '0');
    document.getElementById('eye').style.display = 'block';
    document.getElementById('eye-slash').style.display = 'none';
  } else {
    document.querySelectorAll('.frenchText').forEach(e => e.style.fontSize = frenchFontSize);
    document.getElementById('eye').style.display = 'none';
    document.getElementById('eye-slash').style.display = 'block';
  }
});

// $(".eye").click(function() {
//   if(window.getComputedStyle(document.getElementById('eye')).getPropertyValue('display') === "none"){
//     document.querySelectorAll('.frenchText').forEach(e => e.style.visibility = 'hidden');
//     document.getElementById('eye').style.display = 'block';
//     document.getElementById('eye-slash').style.display = 'none';
//   } else {
//     document.querySelectorAll('.frenchText').forEach(e => e.style.visibility = 'hidden');
//     document.getElementById('eye').style.display = 'none';
//     document.getElementById('eye-slash').style.display = 'block';
//   }
// });

$(".study").click(function() {
  //reset();
  document.querySelectorAll('.card').forEach(e => e.remove());

  const wordsDict = Object.fromEntries(originalCards);

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
