

let originalCards = [

	  ["calmement","calmly","Il a répondu calmement à toutes les questions.","He answered calmly to all the questions.",3600  ],
  ["veau","calf","La viande de veau est tendre et savoureuse.","Veal meat is tender and tasty.",3601  ],
  ["attraction","attraction","La tour Eiffel est une grande attraction touristique.","The Eiffel Tower is a major tourist attraction.",3602  ],
  ["sécher","to dry","Il a utilisé une serviette pour se sécher les mains.","He used a towel to dry his hands.",3603  ],
  ["louper","to miss, to skip","Il a loupé le bus ce matin.","He missed the bus this morning.",3604  ],
  ["nœud","knot","Il a fait un joli nœud avec le ruban.","He made a nice knot with the ribbon.",3605  ],
  ["trophée","trophy","Il a remporté un trophée pour sa performance exceptionnelle.","He won a trophy for his outstanding performance.",3606  ],
  ["compréhension","understanding, comprehension","Elle a une bonne compréhension des mathématiques.","She has a good understanding of mathematics.",3607  ],
  ["intriguer","to intrigue, to puzzle","Cette énigme m'intrigue beaucoup.","This riddle intrigues me a lot.",3608  ],
  ["berceau","crib, cradle","Le bébé dort paisiblement dans son berceau.","The baby sleeps peacefully in his crib.",3610  ],
  ["mépriser","to despise, to scorn","Il méprise les gens qui ne sont pas à sa hauteur.","He despises people who are not up to his standard.",3611  ],
  ["sergent","sergeant","Le sergent a dirigé l'entraînement.","The sergeant led the training.",3613  ],
  ["satisfaction","satisfaction","Il a exprimé sa satisfaction après avoir terminé le projet.","He expressed his satisfaction after completing the project.",3614  ],
  ["déterminer","to determine, to decide","Il doit déterminer s'il veut continuer ou non.","He needs to determine whether he wants to continue or not.",3615  ],
  ["promo","promotion, discount","Il a profité de la promo pour acheter une nouvelle télévision.","He took advantage of the promotion to buy a new TV.",3616  ],
  ["premièrement","firstly, first","Premièrement, nous devons évaluer la situation.","Firstly, we need to assess the situation.",3617  ],
  ["préparation","preparation","La préparation de ce plat prend du temps.","The preparation of this dish takes time.",3618  ],
  ["rancune","resentment, grudge","Il garde une rancune envers son ancien ami.","He holds a grudge against his former friend.",3619  ],
  ["économiser","to save, to economize","Il essaie d'économiser de l'argent pour ses vacances.","He's trying to save money for his vacation.",3620  ],
  ["logement","accommodation, housing","Il cherche un logement abordable.","He's looking for affordable housing.",3621  ],
  ["générateur","generator","Le générateur fournit de l'électricité en cas de panne.","The generator provides electricity in case of a power outage.",3622  ],
  ["paiement","payment","Le paiement doit être effectué avant la date limite.","Payment must be made before the deadline.",3623  ],
  ["semer","to sow, to scatter","Il aime semer des graines dans le jardin.","He enjoys sowing seeds in the garden.",3624  ],
  ["confesser","to confess","Il a finalement confessé son crime.","He finally confessed his crime.",3625  ],
  ["solde","balance, remainder","Il a vérifié le solde de son compte bancaire.","He checked the balance of his bank account.",3626  ],
  ["mépris","contempt, scorn","Son mépris pour les autres est évident.","His contempt for others is evident.",3627  ],
  ["grossesse","pregnancy","Sa grossesse se passe bien jusqu'à présent.","Her pregnancy is going well so far.",3628  ],
  ["ghetto","ghetto","Il a grandi dans un ghetto urbain.","He grew up in an urban ghetto.",3629  ],
  ["encaisser","to cash, to cash in","Il va encaisser son chèque demain.","He's going to cash his check tomorrow.",3630  ],
  ["banane","banana","Elle mange une banane chaque matin.","She eats a banana every morning.",3631  ],
  ["embuscade","ambush","Ils ont été attaqués dans une embuscade.","They were attacked in an ambush.",3632  ],
  ["percer","to pierce, to drill","Il a percé un trou dans le mur.","He drilled a hole in the wall.",3634  ],
  ["emballer","to pack, to wrap up","Elle a commencé à emballer ses affaires pour le déménagement.","She started packing her things for the move.",3635  ],
  ["institution","institution","L'école est une institution importante dans la société.","School is an important institution in society.",3637  ],
  ["conserver","to preserve, to conserve","Il faut conserver ce document précieusement.","We need to preserve this document carefully.",3638  ],
  ["chargement","loading, cargo","Le chargement du camion est terminé.","The truck loading is finished.",3639  ],
  ["croissance","growth","La croissance économique est essentielle pour le développement.","Economic growth is essential for development.",3640  ],
  ["consister","to consist, to be made up of","Le plat consiste en riz, légumes et viande.","The dish consists of rice, vegetables, and meat.",3641  ],
  ["passerelle","gangway, walkway","La passerelle relie les deux bâtiments.","The gangway connects the two buildings.",3642  ],
  ["alimentation","diet, nutrition","Une alimentation équilibrée est importante pour la santé","A balanced diet is important for health.",3643  ],
  ["repousser","to repel, to push back","Ils ont repoussé l'attaque ennemie.","They repelled the enemy attack.",3646  ],
  ["flanc","flank, side","Il a été touché au flanc droit.","He was hit on the right flank.",3647  ],
  ["violet","purple","Elle adore les fleurs violettes.","She loves purple flowers.",3648  ],
  ["nuque","nape, neck","Il a mal à la nuque après la longue journée de travail.","He has a sore neck after the long day of work.",3649  ],
  ["bouchon","cork, stopper","Il a retiré le bouchon de la bouteille de vin.","He removed the cork from the wine bottle.",3650  ],
  ["crash","crash","Il y a eu un crash d'avion dans la région.","There was a plane crash in the region.",3651  ],
  ["croisière","cruise","Ils ont réservé une croisière pour leurs vacances d'été.","They booked a cruise for their summer vacation.",3652  ],
  ["globe","globe","Le globe terrestre montre les continents et les océans.","The globe shows the continents and oceans.",3653  ],
  ["horaire","schedule, timetable","Consultez l'horaire des trains avant de partir.","Check the train schedule before leaving.",3654  ],
  ["reproche","reproach, blame","Il lui a adressé un reproche pour son comportement.","He reproached her for her behavior.",3655  ],
  ["pelouse","lawn, grass","Il tond la pelouse tous les dimanches.","He mows the lawn every Sunday.",3657  ],
  ["commencement","beginning, commencement","Le commencement des travaux est prévu pour la semaine prochaine.","The beginning of the work is scheduled for next week.",3658  ],
  ["calcul","calculation, math","Les enfants apprennent les calculs à l'école.","Children learn math at school.",3659  ],
  ["répondeur","answering machine, voicemail","Il a laissé un message sur le répondeur.","He left a message on the answering machine.",3660  ],
  ["emplacement","location, site","L'emplacement de la maison est idéal.","The location of the house is ideal.",3661  ],
  ["reprocher","to reproach, to blame","Elle lui reproche de ne pas l'avoir invité.","She reproaches him for not inviting her.",3662  ],
  ["excès","excess","Il a commis des excès pendant les vacances.","He indulged in excesses during the holidays.",3663  ],
  ["cocaïne","cocaine","La cocaïne est une drogue dangereuse.","Cocaine is a dangerous drug.",3664  ],
  ["perle","pearl","Elle porte un collier de perles.","She's wearing a pearl necklace.",3665  ],
  ["déclencher","to trigger, to set off","Le bruit a déclenché la panique.","The noise triggered panic.",3666  ],
  ["sonnette","doorbell, buzzer","Il a sonné à la sonnette plusieurs fois.","He rang the doorbell several times.",3667  ],
  ["ignorance","ignorance","L'ignorance peut mener à des malentendus.","Ignorance can lead to misunderstandings.",3668  ],
  ["scoop","scoop, exclusive","Le journal a publié un scoop sur le scandale politique.","The newspaper published a scoop on the political scandal.",3669  ],
  ["qualifier","to qualify, to characterize","Comment qualifieriez-vous cette situation ?","How would you characterize this situation?",3670  ],
  ["affirmer","to assert, to affirm","Il a affirmé son innocence devant le tribunal.","He asserted his innocence in court.",3671  ],
  ["sportif","sporty, athletic","Il est très sportif et aime faire du jogging.","He's very sporty and enjoys jogging.",3672  ],
  ["secouer","to shake","Il a secoué la bouteille pour mélanger le contenu.","He shook the bottle to mix the contents.",3673  ],
  ["aviation","aviation","Il travaille dans l'industrie de l'aviation.","He works in the aviation industry.",3674  ],
  ["tentation","temptation","Il a du mal à résister à la tentation du chocolat.","He finds it hard to resist the temptation of chocolate.",3675  ],
  ["imposteur","impostor, charlatan","Il s'est avéré être un imposteur.","He turned out to be an impostor.",3676  ],
  ["corriger","to correct, to amend","Elle a corrigé toutes les fautes dans son essai.","She corrected all the mistakes in her essay.",3677  ],
  ["embarquement","boarding, embarkation","L'embarquement des passagers a commencé.","Boarding of passengers has begun.",3678  ],
  ["défier","to challenge, to defy","Il a défié ses compétences en escalade.","He challenged his climbing skills.",3679  ],
  ["cerf","deer, stag","Nous avons vu un cerf dans la forêt.","We saw a deer in the forest.",3680  ],
  ["teint","complexion, skin tone","Elle a un teint clair et lumineux.","She has a clear and radiant complexion.",3681  ],
  ["paresseux","lazy","Il est très paresseux le matin.","He's very lazy in the morning.",3682  ],
  ["parages","vicinity, surroundings","Il n'y a personne dans les parages.","There's nobody around.",3683  ],
  ["bridge","bridge","Le bridge est un jeu de cartes populaire.","Bridge is a popular card game.",3684  ],
  ["exercer","to exercise, to practice","Il exerce la médecine depuis plus de vingt ans.","He has been practicing medicine for over twenty years.",3685  ],
  ["bouffon","jester, clown","Le bouffon divertissait le roi et la cour.","The jester entertained the king and court.",3686  ],
  ["tendresse","tenderness, affection","Il lui a exprimé sa tendresse en lui faisant un câlin.","He expressed his tenderness to her by giving her a hug.",3687  ],
  ["barque","boat, dinghy","Il a loué une petite barque pour pêcher sur le lac.","He rented a small boat to fish on the lake.",3688  ],
  ["peloton","peloton, platoon","Le peloton a avancé sur le terrain de bataille.","The platoon advanced on the battlefield.",3689  ],
  ["en permanence","permanently, constantly","Il est en service en permanence.","He is on duty permanently.",3690  ],
  ["cycle","cycle","Le cycle de l'eau est un processus naturel.","The water cycle is a natural process.",3691  ],
  ["cure","cure, treatment","Il a suivi une cure thermale pour soulager ses douleurs.","He underwent a spa treatment to relieve his pain.",3692  ],
  ["égout","sewer, drain","Les égouts de la ville ont été nettoyés récemment.","The city sewers have been cleaned recently.",3693  ],
  ["hanche","hip","Il a une douleur à la hanche après sa chute.","He has a pain in his hip after his fall.",3694  ],
  ["songer","to dream, to think","Elle songe à voyager autour du monde.","She dreams of traveling around the world.",3695  ],
  ["sympathie","sympathy","Elle a exprimé sa sympathie à la famille du défunt.","She expressed her sympathy to the family of the deceased.",3696  ],
  ["déguiser","to disguise, to dress up","Il aime se déguiser en pirate pour Halloween.","He likes to dress up as a pirate for Halloween.",3697  ],
  ["alternative","alternative","Il cherche une alternative au café pour le petit-déjeuner.","He's looking for an alternative to coffee for breakfast.",3699  ]
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
