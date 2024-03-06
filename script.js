

let originalCards = [
    ["modifier","to modify, to change","Il a modifié son discours pour répondre aux critiques.","He modified his speech to address the criticisms.",4102  ],
  ["karma","karma","Il croit au karma et à la justice universelle.","He believes in karma and universal justice.",4103  ],
  ["naïf","naive","Il est souvent victime de son caractère naïf.","He is often a victim of his naive nature.",4104  ],
  ["humilier","to humiliate","Il ne devrait pas humilier les autres pour se sentir mieux.","He shouldn't humiliate others to feel better.",4105  ],
  ["squelette","skeleton","Le squelette humain est composé de 206 os.","The human skeleton is composed of 206 bones.",4108  ],
  ["monument","monument","Le monument commémore les soldats tombés au combat.","The monument commemorates the soldiers who fell in battle.",4109  ],
  ["heurter","to collide, to hit","La voiture a heurté un arbre sur le bord de la route.","The car collided with a tree on the side of the road.",4110  ],
  ["gymnase","gymnasium","Il va au gymnase trois fois par semaine pour s'entraîner.","He goes to the gym three times a week to train.",4111  ],
  ["déplaire","to displease","Son comportement ne lui a pas plu du tout.","She was very displeased with his behavior.",4112  ],
  ["cabaret","cabaret","Ils ont passé la soirée dans un cabaret parisien.","They spent the evening in a Parisian cabaret.",4113  ],
  ["oubli","forgetfulness, oversight","Son oubli l'a fait rater le rendez-vous important.","His forgetfulness caused him to miss the important appointment.",4114  ],
  ["manifester","to manifest, to show","Ils ont manifesté leur mécontentement dans les rues.","They manifested their discontent in the streets.",4115  ],
  ["architecture","architecture","L'architecture moderne est souvent caractérisée par des lignes épurées.","Modern architecture is often characterized by clean lines.",4116  ],
  ["librairie","bookstore","Il a acheté un roman à la librairie du coin.","He bought a novel at the local bookstore.",4117  ],
  ["déguisement","disguise, costume","Il a mis son déguisement de pirate pour la fête d'Halloween.","He put on his pirate costume for the Halloween party.",4118  ],
  ["coût","cost","Le coût de la vie augmente chaque année.","The cost of living increases every year.",4119  ],
  ["majesté","majesty","La majesté des montagnes est indescriptible.","The majesty of the mountains is indescribable.",4120  ],
  ["semestre","semester","Il a réussi tous ses examens ce semestre.","He passed all his exams this semester.",4121  ],
  ["mine","mine","Ils ont découvert une mine d'or dans la montagne.","They discovered a gold mine in the mountain.",4122  ],
  ["braquer","to point, to aim","Il a braqué son arme sur le voleur.","He pointed his gun at the thief.",4122  ],
  ["corne","horn","Le son de la corne a retenti dans la vallée.","The sound of the horn echoed in the valley.",4123  ],
  ["gratter","to scratch","Le chat aime se gratter derrière les oreilles.","The cat likes to scratch behind its ears.",4124  ],
  ["humiliation","humiliation","Son humiliation publique l'a marqué à jamais.","His public humiliation marked him forever.",4125  ],
  ["réacteur","reactor","Le réacteur nucléaire a été mis hors service après l'incident.","The nuclear reactor was shut down after the incident.",4126  ],
  ["chiot","puppy","Elle a adopté un chiot abandonné.","She adopted an abandoned puppy.",4127  ],
  ["reproduire","to reproduce, to replicate","Il essaie de reproduire l'expérience en laboratoire.","He's trying to replicate the experiment in the lab.",4128  ],
  ["fonctionnaire","civil servant","Elle travaille comme fonctionnaire pour le gouvernement.","She works as a civil servant for the government.",4129  ],
  ["entrailles","innards, entrails","Les entrailles de la bête étaient visibles après l'attaque.","The entrails of the beast were visible after the attack.",4131  ],
  ["chaton","kitten","Le chaton est né il y a seulement quelques jours.","The kitten was born just a few days ago.",4132  ],
  ["accoucher","to give birth","Elle a accouché d'un bébé en parfaite santé.","She gave birth to a perfectly healthy baby.",4133  ],
  ["psychologue","psychologist","Le psychologue l'a aidé à surmonter ses problèmes.","The psychologist helped him overcome his problems.",4134  ],
  ["expo","exhibition, expo","Il a visité une expo d'art moderne ce weekend.","He visited a modern art exhibition this weekend.",4135  ],
  ["cueillir","to pick, to gather","Elle cueille des fleurs sauvages dans le jardin.","She picks wildflowers in the garden.",4137  ],
  ["seuil","threshold","Il a franchi le seuil de la maison avec enthousiasme.","He crossed the threshold of the house with enthusiasm.",4138  ],
  ["mécanicien","mechanic","Le mécanicien a réparé la voiture en un temps record.","The mechanic repaired the car in record time.",4139  ],
  ["noyau","core, nucleus","Le noyau de la cellule contient l'ADN.","The nucleus of the cell contains DNA.",4140  ],
  ["tantôt","soon","Je te retrouverai tantôt.","I will meet you soon.",4141  ],
  ["gentilhomme","noble","Le gentilhomme était connu pour sa générosité.","The nobleman was known for his generosity.",4142  ],
  ["malaise","discomfort","Elle ressentait un malaise en présence de tant de monde.","She felt discomfort in the presence of so many people.",4143  ],
  ["oie","goose","Les oies volaient en formation en direction du nord.","The geese were flying in formation northward.",4144  ],
  ["chou","cabbage","Elle a préparé une soupe au chou pour le dîner.","She prepared a cabbage soup for dinner.",4145  ],
  ["overdose","overdose","Il a fait une overdose et a dû être emmené à l'hôpital en urgence.","He overdosed and had to be rushed to the hospital.",4146  ],
  ["impasse","dead end","Nous nous sommes retrouvés dans une impasse.","We found ourselves in a dead end.",4147  ],
  ["roc","rock","Le roc était couvert de mousses et de lichens.","The rock was covered in mosses and lichens.",4148  ],
  ["tarif","rate","Le tarif du train a augmenté de façon significative.","The train rate increased significantly.",4149  ],
  ["topo","overview","Elle a donné un topo rapide sur les projets en cours.","She gave a quick overview of the ongoing projects.",4150  ],
  ["propriétaire","owner","Le propriétaire de la maison a décidé de la rénover.","The owner of the house decided to renovate it.",4152  ],
  ["autrui","others","Il est important de respecter les opinions d'autrui.","It's important to respect the opinions of others.",4153  ],
  ["prairie","meadow","Les vaches paissaient dans la prairie.","The cows were grazing in the meadow.",4154  ],
  ["livreur","delivery person","Le livreur a déposé le colis devant la porte.","The delivery person dropped the package at the door.",4155  ],
  ["puzzle","puzzle","Il a passé des heures à assembler le puzzle.","He spent hours assembling the puzzle.",4156  ],
  ["lézard","lizard","Les lézards se prélassaient au soleil sur les rochers.","The lizards were basking in the sun on the rocks.",4157  ],
  ["gendre","son-in-law","Son gendre est un homme très respectueux.","Her son-in-law is a very respectful man.",4158  ],
  ["égratignure","scratch","Elle a eu une égratignure légère en tombant.","She got a minor scratch from falling.",4160  ],
  ["sexualité","sexuality","La sexualité humaine est complexe et diverse.","Human sexuality is complex and diverse.",4161  ],
  ["omelette","omelette","Elle a préparé une délicieuse omelette au fromage.","She made a delicious cheese omelette.",4162  ],
  ["timbre","stamp","Il a collé un timbre sur l'enveloppe avant de l'envoyer.","He stuck a stamp on the envelope before sending it.",4163  ],
  ["mauviette","wimp","Il ne veut pas être considéré comme une mauviette.","He doesn't want to be seen as a wimp.",4164  ],
  ["klaxon","horn","Il a appuyé sur le klaxon pour alerter les autres conducteurs.","He honked the horn to alert other drivers.",4165  ],
  ["infirme","invalid","Il a été blessé dans l'accident et est devenu infirme.","He was injured in the accident and became invalid.",4166  ],
  ["précaution","precaution","Il a pris toutes les précautions nécessaires avant de partir en voyage.","He took all necessary precautions before going on the trip.",4171  ],
  ["distinguer","to distinguish","Il est difficile de distinguer les jumeaux.","It's difficult to distinguish between the twins.",4172  ],
  ["gonfler","to inflate","Il a dû gonfler les pneus de sa voiture.","He had to inflate the tires of his car.",4173  ],
  ["pellicule","film","Il a chargé une nouvelle pellicule dans son appareil photo.","He loaded a new film into his camera.",4174  ],
  ["détacher","to detach","Elle a détaché la clé de sa ceinture.","She detached the key from her belt.",4176  ],
  ["pourcentage","percentage","Le pourcentage de réussite a augmenté cette année.","The percentage of success increased this year.",4177  ],
  ["réjouir","to rejoice","Son succès nous réjouit tous.","His success rejoices us all.",4178  ],
  ["agresser","to assault","Il a été agressé dans une ruelle sombre.","He was assaulted in a dark alley.",4179  ],
  ["ragot","gossip","Elle adore écouter les ragots du quartier.","She loves listening to neighborhood gossip.",4180  ],
  ["acheteur","buyer","Les acheteurs étaient nombreux lors de la vente aux enchères.","Buyers were numerous at the auction.",4182  ],
  ["sultan","sultan","Le sultan vivait dans un somptueux palais.","The sultan lived in a sumptuous palace.",4183  ],
  ["franchise","franchise","Il apprécie la franchise de ses amis.","He appreciates the frankness of his friends.",4185  ],
  ["écrouler","to collapse","Le bâtiment s'est écroulé après l'explosion.","The building collapsed after the explosion.",4186  ],
  ["exploiter","to exploit","Il a décidé d'exploiter ses compétences pour trouver un emploi.","He decided to exploit his skills to find a job.",4187  ],
  ["toux","cough","Sa toux persistante l'inquiétait.","Her persistent cough worried her.",4188  ],
  ["intégrer","to integrate","Il a réussi à intégrer l'équipe de manière harmonieuse.","He managed to integrate into the team smoothly.",4189  ],
  ["gène","gene","Les scientifiques étudient les gènes humains pour mieux comprendre les maladies.","Scientists study human genes to better understand diseases.",4190  ],
  ["enfreindre","to infringe","Il a été arrêté pour avoir enfreint la loi.","He was arrested for infringing the law.",4191  ],
  ["ruelle","alley","Il a grandi dans une petite maison située au fond d'une ruelle.","He grew up in a small house located at the end of an alley.",4192  ],
  ["évaluation","evaluation","L'évaluation de son travail a été très positive.","The evaluation of his work was very positive.",4193  ],
  ["masculin","male","Le genre masculin est souvent associé à la force et à la virilité.","The male gender is often associated with strength and virility.",4194  ],
  ["rédacteur","editor","Il travaille comme rédacteur pour un magazine renommé.","He works as an editor for a renowned magazine.",4195  ],
  ["matelot","sailor","Le matelot a passé de longues années en mer.","The sailor spent many years at sea.",4196  ],
  ["duo","duo","Ils forment un duo musical depuis plusieurs années.","They've been a musical duo for several years.",4197  ],
  ["trappe","trap","Il a failli tomber dans une trappe cachée dans le sol.","He almost fell into a trap hidden in the ground.",4198  ],
  ["inspecter","to inspect","Il a inspecté la voiture avant de l'acheter.","He inspected the car before buying it.",4200 ] 
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
