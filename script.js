

let originalCards = [
    ["surmonter","to overcome","Elle a dû surmonter de nombreux obstacles pour réussir.","She had to overcome many obstacles to succeed.",3902  ],
  ["amer","bitter","Il a un goût amer dans la bouche après la dispute.","He has a bitter taste in his mouth after the argument.",3903  ],
  ["signification","meaning, significance","La signification de ce symbole est très profonde.","The meaning of this symbol is very profound.",3904  ],
  ["soumettre","to submit","Il doit soumettre son rapport avant la fin de la semaine.","He has to submit his report by the end of the week.",3908  ],
  ["chameau","camel","Le chameau est bien adapté à la vie dans le désert.","The camel is well adapted to life in the desert.",3909  ],
  ["parachute","parachute","Il a sauté en parachute pour la première fois.","He went skydiving for the first time.",3910  ],
  ["interprète","interpreter","Elle travaille comme interprète pour les Nations Unies.","She works as an interpreter for the United Nations.",3911  ],
  ["étiquette","label, tag","Il a lu l'étiquette avant d'acheter le produit.","He read the label before buying the product.",3912  ],
  ["sermon","sermon","Le prêtre a prononcé un long sermon lors de la messe.","The priest delivered a long sermon during the mass.",3913  ],
  ["perspective","perspective","Il faut prendre du recul pour avoir une bonne perspective sur les choses.","You need to step back to have a good perspective on things.",3914  ],
  ["doyen","dean, senior","Il est le doyen de la faculté des sciences.","He is the dean of the Faculty of Science.",3915  ],
  ["adapter","to adapt","Il doit adapter son discours à son public.","He has to adapt his speech to his audience.",3916  ],
  ["espionnage","espionage","L'espionnage est considéré comme un crime international.","Espionage is considered an international crime.",3918  ],
  ["location","rental, location","Il a trouvé une belle maison en location près du centre-ville.","He found a beautiful rental house near downtown.",3919  ],
  ["rafraîchir","to refresh","Il a ouvert la fenêtre pour rafraîchir la pièce.","He opened the window to refresh the room.",3920  ],
  ["promouvoir","to promote","Il travaille dur pour promouvoir son entreprise.","He's working hard to promote his business.",3922  ],
  ["caverne","cave","Ils ont exploré une caverne profonde dans la montagne.","They explored a deep cave in the mountain.",3924  ],
  ["financer","to finance","Il a financé son projet avec l'aide de plusieurs investisseurs.","He financed his project with the help of several investors.",3925  ],
  ["moutarde","mustard","Elle a ajouté de la moutarde à sa viande pour plus de saveur.","She added mustard to her meat for extra flavor.",3926  ],
  ["rassurer","to reassure","Elle lui a parlé pour le rassurer.","She talked to him to reassure him.",3927  ],
  ["manifestement","manifestly, evidently","Il était manifestement en colère après la réunion.","He was evidently angry after the meeting.",3929  ],
  ["concurrence","competition","La concurrence est rude dans ce secteur.","Competition is tough in this sector.",3930  ],
  ["énigme","riddle, enigma","Cette énigme est difficile à résoudre.","This riddle is hard to solve.",3931  ],
  ["crevette","shrimp","Elle adore les crevettes grillées.","She loves grilled shrimp.",3933  ],
  ["occupation","occupation","Il a trouvé une nouvelle occupation qui lui plaît.","He found a new occupation that he enjoys.",3934  ],
  ["planifier","to plan","Ils ont commencé à planifier leurs vacances d'été.","They started planning their summer vacation.",3936  ],
  ["pagaille","mess, chaos","Il y avait de la pagaille dans la rue après la manifestation.","There was chaos in the street after the demonstration.",3937  ],
  ["banquet","banquet","Le banquet était somptueux.","The banquet was sumptuous.",3938  ],
  ["baguette","baguette, wand","Il a acheté une baguette de pain à la boulangerie.","He bought a baguette at the bakery.",3939  ],
  ["fraise","strawberry","Elle a fait une tarte aux fraises pour le dessert.","She made a strawberry tart for dessert.",3940  ],
  ["marbre","marble","Le sol était recouvert de marbre blanc.","The floor was covered in white marble.",3942  ],
  ["catégorie","category","Il a remporté le prix dans la catégorie du meilleur acteur.","He won the award in the category of best actor.",3943  ],
  ["avérer","to prove, to turn out to be","Son intuition s'est avérée juste.","His intuition turned out to be right.",3944  ],
  ["escadron","squadron","L'escadron a été dépêché sur les lieux de l'accident.","The squadron was dispatched to the scene of the accident.",3946  ],
  ["dérouler","to unfold, to take place","La cérémonie s'est déroulée sans incident.","The ceremony unfolded without incident.",3947  ],
  ["révélation","revelation","La révélation de la vérité a choqué tout le monde.","The revelation of the truth shocked everyone.",3948  ],
  ["espionner","to spy","Il a été accusé d'espionner ses collègues de travail.","He was accused of spying on his coworkers.",3949  ],
  ["cartouche","cartridge","Il a chargé une nouvelle cartouche dans son pistolet.","He loaded a new cartridge into his pistol.",3950  ],
  ["bunker","bunker","Le bunker était utilisé comme abri pendant la guerre.","The bunker was used as a shelter during the war.",3951  ],
  ["manuscrit","manuscript","Son manuscrit a été refusé par plusieurs éditeurs.","His manuscript was rejected by several publishers.",3952  ],
  ["appliquer","to apply","Il doit appliquer la crème tous les jours.","He has to apply the cream every day.",3953  ],
  ["cacahuète","peanut","Elle est allergique aux cacahuètes.","She's allergic to peanuts.",3954  ],
  ["condamnation","conviction, condemnation","La condamnation du criminel a été saluée par la population.","The criminal's conviction was welcomed by the population.",3955  ],
  ["empirer","to worsen","Sa santé a empiré après l'accident.","His health worsened after the accident.",3956  ],
  ["bousiller","to mess up, to wreck","Il a bousillé sa chemise en renversant du café dessus.","He messed up his shirt by spilling coffee on it.",3957  ],
  ["conspiration","conspiracy","La conspiration a été déjouée par les autorités.","The conspiracy was thwarted by the authorities.",3958  ],
  ["clope","cigarette","Il fume une clope après le repas.","He smokes a cigarette after dinner.",3959  ],
  ["bonus","bonus","Il a reçu un bonus pour son travail exceptionnel.","He received a bonus for his outstanding work.",3960  ],
  ["détecteur","detector","Le détecteur de fumée s'est déclenché pendant la nuit.","The smoke detector went off during the night.",3962  ],
  ["orphelin","orphan","Il a été recueilli par un orphelinat après la mort de ses parents.","He was taken in by an orphanage after his parents' death.",3963  ],
  ["opposition","opposition","L'opposition politique critique la décision du gouvernement.","The political opposition criticizes the government's decision.",3964  ],
  ["gestion","management","Il a une bonne gestion de son temps.","He has good time management.",3965  ],
  ["orgasme","orgasm","Elle a atteint l'orgasme.","She reached orgasm.",3967  ],
  ["griller","to grill, to toast","Il aime griller du poisson au barbecue.","He enjoys grilling fish on the barbecue.",3968  ],
  ["tonne","ton","Il y avait une tonne de monde à la fête.","There were tons of people at the party.",3969  ],
  ["hosto","hospital","Il a été admis à l'hosto pour une intervention chirurgicale.","He was admitted to the hospital for surgery.",3970  ],
  ["annuaire","directory","Il a cherché son numéro dans l'annuaire téléphonique.","He looked up his number in the phone directory.",3971  ],
  ["suède","Sweden","Elle a étudié en Suède pendant un semestre.","She studied in Sweden for a semester.",3972  ],
  ["loup-garou","werewolf","Le loup-garou hante les bois la nuit.","The werewolf haunts the woods at night.",3973  ],
  ["optimiste","optimistic","Elle reste optimiste malgré les difficultés.","She remains optimistic despite the difficulties.",3974  ],
  ["désespérément","desperately","Il a cherché désespérément une solution à son problème.","He desperately searched for a solution to his problem.",3975  ],
  ["audace","boldness, audacity","Il a fait preuve d'une grande audace en confrontant le président.","He showed great audacity in confronting the president.",3976  ],
  ["anéantir","to annihilate, to destroy","Le séisme a anéanti la ville.","The earthquake annihilated the city.",3977  ],
  ["propagande","propaganda","La propagande politique peut influencer les opinions publiques.","Political propaganda can influence public opinion.",3978  ],
  ["immortel","immortal","Les œuvres d'art sont immortelles.","Works of art are immortal.",3979  ],
  ["sottise","nonsense, foolishness","Il a dit une énorme sottise.","He said something incredibly foolish.",3980  ],
  ["saumon","salmon","Elle a préparé du saumon grillé pour le dîner.","She cooked grilled salmon for dinner.",3981  ],
  ["carbone","carbon","Le carbone est un élément chimique essentiel à la vie.","Carbon is an essential chemical element for life.",3982  ],
  ["maladroit","clumsy, awkward","Il est maladroit avec ses mains.","He's clumsy with his hands.",3983  ],
  ["acquérir","to acquire, to obtain","Il a acquis de nombreuses compétences au fil des ans.","He has acquired many skills over the years.",3984  ],
  ["violation","violation","La violation des droits de l'homme est inacceptable.","Violation of human rights is unacceptable.",3985  ],
  ["écarter","to move aside, to set aside","Il a écarté les rideaux pour laisser entrer la lumière.","He moved aside the curtains to let in the light.",3986  ],
  ["définition","definition","La définition de ce mot est complexe.","The definition of this word is complex.",3987  ],
  ["cuillère","spoon","Elle a utilisé une cuillère pour mélanger les ingrédients.","She used a spoon to mix the ingredients.",3988  ],
  ["salarié","employee, wage earner","Il est salarié dans une entreprise de technologie.","He's an employee at a technology company.",3989  ],
  ["menthe","mint","Elle a infusé de la menthe dans son thé.","She infused mint into her tea.",3990  ],
  ["laine","wool","Elle tricote des écharpes en laine pour l'hiver.","She knits wool scarves for winter.",3991  ],
  ["librement","freely","Il a choisi de participer librement à l'événement.","He chose to participate freely in the event.",3992  ],
  ["interprétation","interpretation","Son interprétation de la pièce était remarquable.","His interpretation of the play was remarkable.",3994  ],
  ["introduire","to introduce","Elle a introduit le conférencier avant la conférence.","She introduced the speaker before the conference.",3996  ],
  ["poignard","dagger","Il a dissimulé un poignard sous son manteau.","He concealed a dagger under his coat.",3997  ],
  ["calendrier","calendar","Elle a marqué la date sur le calendrier.","She marked the date on the calendar.",3998  ],
  ["exagérer","to exaggerate","Il a tendance à exagérer ses exploits.","He tends to exaggerate his exploits.",4000  ]
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
