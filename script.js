

let originalCards = [
  ["soupçonner","to suspect","Il soupçonne son voisin d'avoir volé son vélo.","He suspects his neighbor of stealing his bike.",3801  ],
  ["banquier","banker","Le banquier gère les finances de l'entreprise.","The banker manages the company's finances.",3802  ],
  ["étendre","to spread, to extend","Il a étendu la couverture sur le lit.","He spread the blanket on the bed.",3803  ],
  ["frein","brake, hindrance","Il a appuyé sur le frein pour arrêter la voiture.","He pressed the brake to stop the car.",3804  ],
  ["turc","Turkish","Il a appris à cuisiner des plats turcs.","He learned to cook Turkish dishes.",3806  ],
  ["maniaque","maniac, fanatic","Il est maniaque du rangement.","He's a neat freak.",3808  ],
  ["musulman","Muslim","Elle est devenue musulmane après son mariage.","She became Muslim after her marriage.",3809  ],
  ["brin","bit, strand","Il y avait un brin de cheveu sur son col.","There was a strand of hair on his collar.",3810  ],
  ["scanner","to scan","Il a dû scanner ses documents pour les envoyer par e-mail.","He had to scan his documents to send them by email.",3811  ],
  ["momie","mummy","La momie était conservée dans un sarcophage.","The mummy was preserved in a sarcophagus.",3812  ],
  ["devise","motto, currency","La devise de la France est \"Liberté, Égalité, Fraternité\".","The motto of France is \"Liberty, Equality, Fraternity\".",3813  ],
  ["blâme","blame, criticism","Il a reçu le blâme pour l'échec du projet.","He received the blame for the project's failure.",3814  ],
  ["encourager","to encourage","Elle l'a encouragé à poursuivre ses rêves.","She encouraged him to pursue his dreams.",3815  ],
  ["visiblement","visibly, evidently","Il était visiblement fatigué après une longue journée de travail.","He was visibly tired after a long day at work.",3816  ],
  ["parlement","parliament","Le parlement a voté une nouvelle loi.","Parliament passed a new law.",3817  ],
  ["endurer","to endure, to tolerate","Il a dû endurer de nombreuses épreuves dans sa vie.","He had to endure many trials in his life.",3818  ],
  ["pêcheur","fisherman","Il est un pêcheur passionné.","He is a passionate fisherman.",3819  ],
  ["guérison","healing, recovery","La guérison de sa blessure a pris du temps.","The healing of his wound took time.",3820  ],
  ["syndrome","syndrome","Le syndrome du cœur brisé est une affection médicale.","Broken heart syndrome is a medical condition.",3821  ],
  ["étrangler","to strangle","Il a tenté de l'étrangler pendant la bagarre.","He tried to strangle him during the fight.",3822  ],
  ["larguer","to drop, to release","Il a dû larguer les amarres pour prendre le large.","He had to release the moorings to set sail.",3823  ],
  ["malchance","bad luck","Elle pense qu'elle est poursuivie par la malchance.","She thinks she's pursued by bad luck.",3824  ],
  ["consacrer","to devote, to dedicate","Il a décidé de consacrer sa vie à la recherche scientifique.","He decided to devote his life to scientific research.",3825  ],
  ["nuire","to harm, to damage","Sa réputation a été gravement nui par le scandale.","His reputation was seriously harmed by the scandal.",3826  ],
  ["pureté","purity","Il a été attiré par la pureté de ses intentions.","He was attracted by the purity of her intentions.",3828  ],
  ["envahir","to invade","Les troupes ennemies ont commencé à envahir le territoire.","Enemy troops began to invade the territory.",3829  ],
  ["épidémie","epidemic","Une épidémie de grippe a éclaté dans la région.","An epidemic of flu broke out in the region.",3830  ],
  ["chimie","chemistry","La chimie est une science fascinante.","Chemistry is a fascinating science.",3831  ],
  ["falaise","cliff","Ils ont escaladé la falaise pour atteindre le sommet.","They climbed the cliff to reach the top.",3832  ],
  ["braquage","hold-up, robbery","Il a été témoin d'un braquage à la banque.","He witnessed a bank robbery.",3833  ],
  ["convention","convention","La convention se tiendra dans un hôtel de luxe.","The convention will be held at a luxury hotel.",3834  ],
  ["lueur","glow, gleam","Il a vu une faible lueur à l'horizon.","He saw a faint glow on the horizon.",3835  ],
  ["capture","capture","La capture du fugitif a mis fin à une longue traque.","The capture of the fugitive ended a long chase.",3836  ],
  ["hériter","to inherit","Il a hérité de la maison de son grand-père.","He inherited his grandfather's house.",3837  ],
  ["baser","to base","Ce projet est basé sur des principes solides.","This project is based on solid principles.",3838  ],
  ["beignet","donut","Elle a préparé des beignets pour le goûter.","She made donuts for snack time.",3839  ],
  ["diversion","diversion","La diversion a permis à l'armée de gagner du temps.","The diversion allowed the army to gain time.",3840  ],
  ["relâcher","to release, to relax","Il a décidé de se relâcher après une journée stressante.","He decided to relax after a stressful day.",3841  ],
  ["dimension","dimension","Cette œuvre d'art a une dimension émotionnelle très forte.","This artwork has a very strong emotional dimension.",3843  ],
  ["marrer","to laugh, to crack up","Ils se sont bien marrés pendant la soirée.","They had a good laugh during the evening.",3844  ],
  ["reflet","reflection","Il a vu son reflet dans le miroir.","He saw his reflection in the mirror.",3846  ],
  ["chauffage","heating","Le chauffage est tombé en panne pendant l'hiver.","The heating broke down during the winter.",3847  ],
  ["rappel","reminder","Elle lui a envoyé un rappel pour la réunion de demain.","She sent him a reminder for tomorrow's meeting.",3848  ],
  ["caserne","barracks","Il a été affecté à une caserne militaire.","He was assigned to a military barracks.",3850  ],
  ["écurie","stable","Il travaille dans une écurie de chevaux de course.","He works in a racehorse stable.",3851  ],
  ["utilisation","use, utilization","L'utilisation de ce logiciel est facile.","The use of this software is easy.",3852  ],
  ["toutou","doggy, pooch","Elle a acheté un toutou en peluche pour son enfant.","She bought a stuffed doggy for her child.",3854  ],
  ["lasser","to tire, to wear out","Le travail physique peut lasser le corps.","Physical work can tire the body.",3856  ],
  ["débris","debris","Les débris de l'explosion ont été dispersés sur une large zone.","The debris from the explosion was scattered over a wide area.",3857  ],
  ["thèse","thesis","Elle travaille sur sa thèse de doctorat depuis deux ans.","She has been working on her doctoral thesis for two years.",3858  ],
  ["emménager","to move in, to settle in","Ils ont emménagé dans leur nouvelle maison le mois dernier.","They moved into their new house last month.",3859  ],
  ["lin","linen","Elle a acheté des draps en lin pour son lit.","She bought linen sheets for her bed.",3860  ],
  ["visible","visible","Les étoiles étaient clairement visibles dans le ciel nocturne.","The stars were clearly visible in the night sky.",3861  ],
  ["nécessité","necessity","La réduction des déchets est une nécessité environnementale.","Waste reduction is an environmental necessity.",3862  ],
  ["culte","worship, cult","Il pratique son culte religieux avec dévotion.","He practices his religious worship with devotion.",3863  ],
  ["évanouir","to faint, to pass out","Elle a failli s'évanouir en entendant la nouvelle.","She almost fainted when she heard the news.",3864  ],
  ["madeleine","madeleine","Elle a préparé des madeleines pour le goûter.","She made madeleines for snack time.",3865  ],
  ["extraire","to extract, to remove","Le dentiste doit extraire la dent de sagesse.","The dentist has to extract the wisdom tooth.",3866  ],
  ["loser","to lose, to miss out","Il ne veut pas loser cette opportunité.","He doesn't want to miss out on this opportunity.",3867  ],
  ["approuver","to approve","Le conseil a approuvé le projet à l'unanimité.","The council unanimously approved the project.",3868  ],
  ["connexion","connection","La connexion internet est instable dans cette région.","The internet connection is unstable in this area.",3869  ],
  ["raccourci","shortcut","Il a pris un raccourci pour arriver plus vite.","He took a shortcut to get there faster.",3870  ],
  ["protecteur","protective, protector","Le père est le protecteur de la famille.","The father is the protector of the family.",3871  ],
  ["procurer","to provide, to obtain","Il lui a procuré un emploi dans son entreprise.","He provided him with a job in his company.",3872  ],
  ["éprouver","to feel, to experience","Elle a éprouvé une grande joie en apprenant la nouvelle.","She felt great joy upon hearing the news.",3873  ],
  ["salir","to dirty","Il a accidentellement sali sa chemise avec de la peinture.","He accidentally dirtied his shirt with paint.",3874  ],
  ["raciste","racist","Il a été accusé de tenir des propos racistes.","He was accused of making racist remarks.",3876  ],
  ["pâté","pâté","Elle a préparé un délicieux pâté de foie.","She made a delicious liver pâté.",3877  ],
  ["bouc","billy goat","Le bouc est connu pour son odeur forte.","The billy goat is known for its strong smell.",3878  ],
  ["racaille","scum, riffraff","La police a arrêté plusieurs membres de la racaille du quartier.","The police arrested several members of the neighborhood riffraff.",3879  ],
  ["enseignement","teaching, education","Il a une passion pour l'enseignement des mathématiques.","He has a passion for teaching mathematics.",3880  ],
  ["ambitieux","ambitious","Elle a de grands projets ambitieux pour l'avenir.","She has ambitious plans for the future.",3881  ],
  ["chancelier","chancellor","Le chancelier a annoncé une réforme importante.","The chancellor announced a significant reform.",3882  ],
  ["alias","alias","Il utilise un alias pour protéger son identité en ligne.","He uses an alias to protect his identity online.",3883  ],
  ["fondre","to melt, to blend","Le chocolat va fondre s'il reste au soleil.","The chocolate will melt if it stays in the sun.",3885  ],
  ["psychologie","psychology","La psychologie étudie le comportement humain.","Psychology studies human behavior.",3886  ],
  ["discrétion","discretion","Il a agi avec discrétion pour ne pas éveiller les soupçons.","He acted with discretion not to arouse suspicion.",3887  ],
  ["cadet","cadet","Il est le cadet de la famille.","He is the youngest in the family.",3888  ],
  ["réalisation","achievement, realization","Son diplôme est sa plus grande réalisation.","His degree is his greatest achievement.",3889  ],
  ["diagnostic","diagnosis","Le diagnostic du médecin était alarmant.","The doctor's diagnosis was alarming.",3890  ],
  ["intrusion","intrusion","L'intrusion dans la vie privée est punie par la loi.","Intrusion into privacy is punishable by law.",3891  ],
  ["aborder","to approach, to address","Il a décidé d'aborder le sujet avec tact.","He decided to address the subject with tact.",3892  ],
  ["vétérinaire","veterinarian","Elle a emmené son chien chez le vétérinaire.","She took her dog to the veterinarian.",3893  ],
  ["miséricorde","mercy","Il a demandé la miséricorde du juge lors du procès.","He asked for the judge's mercy during the trial.",3894  ],
  ["savant","scholar, learned person","Il est un savant dans le domaine de l'astronomie.","He is a scholar in the field of astronomy.",3895  ],
  ["épave","wreck, wreckage","L'épave du navire reposait au fond de l'océan.","The wreck of the ship lay at the bottom of the ocean.",3896  ],
  ["vestiaire","changing room, locker room","Il a laissé son sac dans le vestiaire.","He left his bag in the locker room.",3897  ],
  ["ressortir","to stand out, to emerge","Son talent artistique ressort dans ses peintures.","His artistic talent stands out in his paintings.",3898  ],
  ["mélodie","melody","Cette mélodie est très apaisante.","This melody is very soothing.",3899  ],
  ["brume","mist, fog","La brume enveloppait la ville le matin.","The mist enveloped the city in the morning.",3900  ],
  ["éthique","ethics","Elle a des principes éthiques très stricts.","She has very strict ethical principles.",3901  ]
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
