

let originalCards = [
   ["opérateur","operator","L'opérateur du téléphone a réparé la ligne.","The phone operator repaired the line.",4001  ],
  ["finance","finance","Il travaille dans le domaine de la finance.","He works in the field of finance.",4002  ],
  ["initiative","initiative","Elle a pris l'initiative d'organiser la réunion.","She took the initiative to organize the meeting.",4003  ],
  ["apocalypse","apocalypse","Le film dépeint un monde post-apocalyptique.","The movie depicts a post-apocalyptic world.",4004  ],
  ["dresser","to train, to erect","Il a dressé son chien à obéir aux commandes.","He trained his dog to obey commands.",4005  ],
  ["intégrité","integrity","Il est connu pour son intégrité et son honnêteté.","He is known for his integrity and honesty.",4006  ],
  ["pianiste","pianist","Elle est une pianiste talentueuse.","She is a talented pianist.",4007  ],
  ["contrarier","to upset, to annoy","Son attitude a fini par contrarier tout le monde.","His attitude ended up upsetting everyone.",4008  ],
  ["vitrine","shop window, showcase","Elle a mis en valeur ses produits dans la vitrine.","She showcased her products in the shop window.",4010  ],
  ["hangar","hangar","Ils ont stocké les outils dans le hangar.","They stored the tools in the hangar.",4011  ],
  ["éponge","sponge","Elle a utilisé une éponge pour nettoyer la table.","She used a sponge to clean the table.",4012  ],
  ["bassin","basin, pool","Les enfants se baignaient dans le bassin.","The children were swimming in the pool.",4013  ],
  ["injustice","injustice","Il a souffert de nombreuses injustices dans sa vie.","He has suffered many injustices in his life.",4014  ],
  ["canot","canoe","Ils ont pagayé sur le canot pendant des heures.","They paddled in the canoe for hours.",4015  ],
  ["consoler","to console","Elle l'a consolé après la perte de son animal de compagnie.","She consoled him after the loss of his pet.",4016  ],
  ["caoutchouc","rubber","Il a jeté le caoutchouc dans la poubelle.","He threw the rubber in the trash.",4017  ],
  ["entrain","enthusiasm","Son entrain était contagieux.","His enthusiasm was contagious.",4018  ],
  ["raisin","grape","Elle a cueilli du raisin dans le jardin.","She picked grapes from the garden.",4019  ],
  ["déshabiller","to undress","Il s'est déshabillé avant de prendre sa douche.","He undressed before taking a shower.",4020  ],
  ["vérification","check, verification","Il a effectué une vérification minutieuse des documents.","He carried out a thorough check of the documents.",4022  ],
  ["hallucination","hallucination","Les drogues peuvent causer des hallucinations.","Drugs can cause hallucinations.",4023  ],
  ["courtoisie","courtesy","Il a répondu avec courtoisie malgré l'impolitesse de l'autre personne.","He responded with courtesy despite the other person's rudeness.",4024  ],
  ["entente","understanding, agreement","Ils ont conclu une entente commerciale.","They reached a business agreement.",4025  ],
  ["atout","asset, advantage","Son charisme est son plus grand atout.","His charisma is his greatest asset.",4026  ],
  ["ouragan","hurricane","L'ouragan a dévasté la côte.","The hurricane devastated the coast.",4027  ],
  ["colonel","colonel","Le colonel a dirigé la mission avec succès.","The colonel led the mission successfully.",4028  ],
  ["cahier","notebook","Elle a pris des notes dans son cahier pendant le cours.","She took notes in her notebook during class.",4029  ],
  ["kidnapper","to kidnap","Le gang a kidnappé l'enfant pour obtenir une rançon.","The gang kidnapped the child to get a ransom.",4030  ],
  ["contribution","contribution","Sa contribution à la recherche scientifique est importante.","His contribution to scientific research is significant.",4031  ],
  ["émeute","riot","L'émeute a éclaté après la décision du tribunal.","The riot broke out after the court's decision.",4032  ],
  ["négociation","negotiation","Les négociations entre les deux parties ont été difficiles.","Negotiations between the two parties were difficult.",4033  ],
  ["bulle","bubble","Les enfants ont éclaté les bulles de savon.","The children popped the soap bubbles.",4034  ],
  ["extinction","extinction","Certains animaux sont en voie d'extinction.","Some animals are facing extinction.",4035  ],
  ["isolement","isolation","Il a choisi l'isolement pour se concentrer sur son travail.","He chose isolation to focus on his work.",4036  ],
  ["manifestation","demonstration, protest","La manifestation a rassemblé des milliers de personnes dans les rues.","The protest gathered thousands of people in the streets.",4037  ],
  ["coulisses","behind the scenes","Il travaille dans les coulisses pour organiser l'événement.","He works behind the scenes to organize the event.",4039  ],
  ["urine","urine","L'analyse d'urine a révélé des traces de drogue.","The urine analysis revealed traces of drugs.",4040  ],
  ["chœur","choir","Elle chante dans le chœur de l'église.","She sings in the church choir.",4043  ],
  ["rôtir","to roast","Il a rôti le poulet au four pendant deux heures.","He roasted the chicken in the oven for two hours.",4044  ],
  ["stopper","to stop, to halt","Il a stoppé la voiture brusquement.","He stopped the car abruptly.",4046  ],
  ["discrètement","discreetly","Il a agi discrètement pour ne pas attirer l'attention.","He acted discreetly not to attract attention.",4047  ],
  ["compagne","companion, partner","Elle est sa compagne depuis plusieurs années.","She has been his companion for several years.",4048  ],
  ["éclairage","lighting","L'éclairage de la scène était parfaitement réglé.","The stage lighting was perfectly set.",4050  ],
  ["centimètre","centimeter","La couturière mesure chaque centimètre du tissu.","The seamstress measures every centimeter of the fabric.",4051  ],
  ["précédemment\n\n","previously","Il avait déjà visité cette ville précédemment.","He had already visited this city previously.",4052  ],
  ["punk","punk","Il écoute beaucoup de musique punk.","He listens to a lot of punk music.",4053  ],
  ["triangle","triangle","Le professeur a expliqué les propriétés du triangle.","The teacher explained the properties of the triangle.",4054  ],
  ["bronzer","to tan","Elle aime bronzer sur la plage pendant les vacances.","She enjoys tanning on the beach during holidays.",4055  ],
  ["mécanisme","mechanism","Le mécanisme de la montre est cassé.","The mechanism of the watch is broken.",4056  ],
  ["brebis","sheep","Le berger conduit son troupeau de brebis à la prairie.","The shepherd leads his flock of sheep to the pasture.",4059  ],
  ["émettre","to emit, to broadcast","La radio émet des informations 24 heures sur 24.","The radio broadcasts information 24 hours a day.",4060  ],
  ["trac","stage fright","Il a toujours un peu de trac avant de monter sur scène.","He always has a bit of stage fright before going on stage.",4061  ],
  ["étang","pond","Ils ont pêché des poissons dans l'étang.","They fished for fish in the pond.",4062  ],
  ["divan","couch, sofa","Il s'est allongé sur le divan pour se reposer.","He lay down on the couch to rest.",4063  ],
  ["lavage","washing","Elle a fait une lessive avec tous les vêtements sales.","She did a washing with all the dirty clothes.",4064  ],
  ["sirop","syrup","Il a versé du sirop sur ses crêpes.","He poured syrup on his pancakes.",4065  ],
  ["vieillir","to age, to grow old","Elle a peur de vieillir et de perdre sa vitalité.","She's afraid of aging and losing her vitality.",4066  ],
  ["embaucher","to hire","L'entreprise a décidé d'embaucher de nouveaux employés.","The company decided to hire new employees.",4067  ],
  ["éclairer","to light up, to illuminate","Les lampadaires éclairent la rue la nuit.","The streetlights illuminate the street at night.",4068  ],
  ["alentours","surroundings","Il a exploré les alentours du village.","He explored the surroundings of the village.",4069  ],
  ["hymne","anthem","Ils ont chanté l'hymne national lors de la cérémonie.","They sang the national anthem during the ceremony.",4070  ],
  ["strictement","strictly","Les règles doivent être respectées strictement.","The rules must be strictly adhered to.",4071  ],
  ["poisse","bad luck","Il a eu de la poisse lors de son dernier voyage.","He had bad luck on his last trip.",4072  ],
  ["résurrection","resurrection","La résurrection du Christ est célébrée à Pâques.","The resurrection of Christ is celebrated at Easter.",4073  ],
  ["détour","detour","Ils ont dû faire un long détour à cause des travaux sur la route principale.","They had to take a long detour because of roadworks on the main road.",4075  ],
  ["envisager","to consider, to envisage","Il envisage de déménager à l'étranger.","He's considering moving abroad.",4076  ],
  ["radiation","radiation","La radiothérapie utilise des radiations pour traiter le cancer.","Radiotherapy uses radiation to treat cancer.",4077  ],
  ["africain","African","Elle est d'origine africaine.","She is of African descent.",4078  ],
  ["barre","bar","Il a commandé une boisson au bar.","He ordered a drink at the bar.",4080  ],
  ["excitation","excitement","L'excitation des enfants était palpable avant Noël.","The children's excitement was palpable before Christmas.",4081  ],
  ["rétablir","to restore, to recover","Il espère se rétablir rapidement après sa blessure.","He hopes to recover quickly after his injury.",4082  ],
  ["utilité","utility, usefulness","Il a remis en question l'utilité de ce nouvel outil.","He questioned the usefulness of this new tool.",4083  ],
  ["vertige","dizziness, vertigo","Il a ressenti un vertige en regardant en bas depuis le sommet de la tour.","He felt dizzy looking down from the top of the tower.",4084  ],
  ["poteau","post, pole","Il a attaché son vélo au poteau.","He tied his bike to the pole.",4085  ],
  ["compteur","counter, meter","Le compteur d'eau a été relevé ce matin.","The water meter was read this morning.",4086  ],
  ["émetteur","transmitter","L'émetteur radio diffuse des programmes 24 heures sur 24.","The radio transmitter broadcasts programs 24 hours a day.",4087  ],
  ["interviewer","to interview","Il a été interviewé par plusieurs médias après son succès.","He was interviewed by several media outlets after his success.",4088  ],
  ["via","via, through","Ils ont voyagé à Paris via Londres.","They traveled to Paris via London.",4089  ],
  ["obus","shell, projectile","Les soldats ont trouvé un obus non explosé dans le champ.","The soldiers found an unexploded shell in the field.",4090  ],
  ["immigration","immigration","L'immigration est un sujet controversé dans de nombreux pays.","Immigration is a controversial topic in many countries.",4091  ],
  ["antidote","antidote","Le médecin lui a administré un antidote contre le poison.","The doctor administered an antidote to him against the poison.",4092  ],
  ["hollandais","Dutch","Il a étudié la langue hollandaise pendant plusieurs années.","He studied the Dutch language for several years.",4093  ],
  ["maternel","maternal","Son instinct maternel s'est réveillé quand elle a eu son premier enfant.","Her maternal instinct awakened when she had her first child.",4094  ],
  ["prédire","to predict","Les experts prédisent une augmentation des températures cet été.","Experts predict a rise in temperatures this summer.",4095  ],
  ["corbeau","raven","Le corbeau est souvent associé à la mort dans de nombreuses cultures.","The raven is often associated with death in many cultures.",4096  ],
  ["avancée","advance, progress","Ils ont fait des avancées significatives dans leur recherche.","They made significant advances in their research.",4098  ],
  ["sourcil","eyebrow","Elle a fait tatouer ses sourcils pour les épaissir.","She got her eyebrows tattooed to thicken them.",4099  ],
  ["hétéro","straight","Il a découvert qu'il était hétérosexuel à l'adolescence.","He discovered he was straight in adolescence.",4100  ]
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
