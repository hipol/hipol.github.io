// Create a list that holds all of your cards
// let cards = [
//   ["bonjour", "hi"]
// ];

let originalCards = 
[
  ["permettre","allow, afford","La loi permet de fumer à l'extérieur.","The law allows smoking outdoors."  ],
  ["frais","fees; fresh","Les fruits frais sont toujours délicieux en été.","Fresh fruits are always delicious in the summer."  ],
  ["champ","field","Les enfants jouent dans le champ de blé.","The children play in the wheat field."  ],
  ["couleur","color","Elle a choisi une robe de couleur rouge vif.","She chose a dress in a bright red color."  ],
  ["destin","destiny","Le destin peut parfois être imprévisible.","Destiny can sometimes be unpredictable."  ],
  ["puisque","since","Puisque tu es là, nous pouvons commencer la réunion.","Since you are here, we can start the meeting."  ],
  ["taille","size, height","Cette robe est disponible en plusieurs tailles.","This dress is available in various sizes."  ],
  ["vaisseau","vessel, starship","Le vaisseau spatial a voyagé jusqu'à la lune.","The spacecraft traveled to the moon."  ],
  ["sacré","sacred, a heck of a","Cet endroit a une signification sacrée pour la communauté.","This place has a sacred meaning for the community."  ],
  ["repas","meal","Nous avons partagé un délicieux repas ensemble.","We shared a delicious meal together."  ],
  ["détruire","destroy","La guerre a le pouvoir de détruire des villes entières.","War has the power to destroy entire cities."  ],
  ["personnel","staff; personal","C'est un choix personnel que je dois faire.","It's a personal choice that I have to make."  ],
  ["garde","custody; guard","Le garde surveille l'entrée du musée.","The guard is watching the entrance of the museum."  ],
  ["couteau","knife","Elle a utilisé un couteau tranchant pour couper les légumes.","She used a sharp knife to cut the vegetables."  ],
  ["témoin","witness","Le témoin a raconté ce qu'il a vu à la police.","The witness told the police what he saw."  ],
  ["remercier","thank","Je tiens à vous remercier pour votre aide précieuse.","I want to thank you for your valuable assistance."  ],
  ["direction","direction, management","La flèche indique la direction du nord.","The arrow points in the direction of the north."  ],
  ["malin","smart","Il est malin et trouve toujours des solutions créatives.","He is clever and always finds creative solutions."  ],
  ["niveau","level","Le niveau d'eau dans le lac a augmenté après la pluie.","The water level in the lake rose after the rain."  ],
  ["remettre","hand over; recover","Je vais remettre le livre à la bibliothèque demain.","I will return the book to the library tomorrow."  ],
  ["apporter","bring","N'oublie pas d'apporter tes clés avant de partir.","Don't forget to bring your keys before leaving."  ],
  ["procès","trial","Le procès a duré plusieurs semaines avant le verdict.","The trial lasted several weeks before the verdict."  ],
  ["rêver","dream","Elle aime rêver de voyager dans des endroits lointains.","She enjoys dreaming of traveling to distant places."  ],
  ["doux","soft","Le tissu est doux et agréable au toucher.","The fabric is soft and pleasant to the touch."  ],
  ["goût","taste, flavour","Le gâteau a un goût sucré et délicieux.","The cake has a sweet and delicious taste."  ],
  ["enceinte","pregnant","Elle est enceinte de six mois et attend un bébé.","She is six months pregnant and expecting a baby."  ],
  ["arranger","arrange, fix","Je vais arranger les fleurs dans un joli vase.","I will arrange the flowers in a beautiful vase."  ],
  ["espace","space","L'espace entre les étoiles est infini.","The space between the stars is infinite."  ],
  ["faillir","fail, almost","Il a failli manquer son avion à cause du trafic.","He almost missed his plane due to traffic."  ],
  ["Angleterre","England","L'Angleterre est connue pour son histoire riche.","England is known for its rich history."  ],
  ["vitesse","speed","La voiture a atteint une vitesse impressionnante sur l'autoroute.","The car reached an impressive speed on the highway."  ],
  ["arbre","tree","L'ombre de l'arbre offre un refuge par temps chaud.","The shadow of the tree provides shelter in hot weather."  ],
  ["trésor","treasure","Le pirate cherchait un trésor caché sur l'île.","The pirate was searching for a hidden treasure on the island."  ],
  ["appartenir","belong","Cette maison appartient à une famille depuis des générations.","This house has belonged to a family for generations."  ],
  ["moindre","least, slightest","Il n'y a pas le moindre doute quant à sa culpabilité.","There is not the slightest doubt about his guilt."  ],
  ["censé","supposed to","Tu es censé finir ce projet avant la fin de la semaine.","You are supposed to finish this project by the end of the week."  ],
  ["justement","(it just happens that)","Il avait justement le livre que je cherchais à la bibliothèque.","He happened to have the book I was looking for at the library."  ],
  ["enlever","remove, take off","Il faut enlever les chaussures avant d'entrer dans la maison.","Shoes must be removed before entering the house."  ],
  ["chasse","hunt","La chasse est une activité populaire pendant la saison automnale.","Hunting is a popular activity during the fall season."  ],
  ["filer","leave / (gotta go!)","Il a essayé de filer discrètement sans être vu.","He tried to slip away discreetly without being seen."  ],
  ["lycée","high school","Elle est au lycée et étudie les sciences.","She is in high school and studying science."  ],
  ["morceau","piece, track","Elle a coupé un morceau de gâteau pour chacun.","She cut a piece of cake for each person."  ],
  ["appareil","device","L'appareil photo a capturé un moment précieux.","The camera captured a precious moment."  ],
  ["piste","lead, trail","La piste de danse était pleine de gens joyeux.","The dance floor was filled with happy people."  ],
  ["régler","adjust, fix","Il a dû régler le problème technique avant le spectacle.","He had to fix the technical issue before the performance."  ],
  ["aveugle","blind","L'aveugle utilise une canne pour se déplacer.","The blind person uses a cane to navigate."  ],
  ["crise","crisis, attack","La crise économique a eu des conséquences graves sur l'emploi.","The economic crisis had serious consequences on employment."  ],
  ["amener","bring","Peux-tu amener les documents à la réunion demain?","Can you bring the documents to the meeting tomorrow?"  ],
  ["interdire","forbid","Il est interdit de fumer dans ce restaurant.","Smoking is prohibited in this restaurant."  ],
  ["lever","raise; get up","Le soleil commence à se lever à l'horizon.","The sun is starting to rise on the horizon."  ],
  ["obtenir","get, obtain","Il a travaillé dur pour obtenir son diplôme avec distinction.","He worked hard to obtain his degree with distinction."  ],
  ["prouver","prove","Il doit prouver son innocence devant le tribunal.","He has to prove his innocence in court."  ],
  ["folie","madness","Certains considèrent sa décision comme une pure folie.","Some consider his decision to be sheer madness."  ],
  ["ancien","former, ancient, old","Le manoir était habité par une famille ancienne depuis des siècles.","The mansion was inhabited by an ancient family for centuries."  ],
  ["relation","relationship","La relation entre eux a évolué au fil du temps.","The relationship between them has evolved over time."  ],
  ["bouteille","bottle","Il a ouvert la bouteille de vin pour célébrer.","He opened the bottle of wine to celebrate."  ],
  ["rejoindre","(re)join","Nous allons nous rejoindre au café à midi.","We are going to meet at the café at noon."  ],
  ["maigré","despite","Malgré son appétit, elle reste toujours maigre.","Despite her appetite, she remains thin."  ],
  ["méchant","wicked, bad","Il a fait une blague méchante qui a blessé ses sentiments.","He made a mean joke that hurt her feelings."  ],
  ["frapper","hit, struck","Il a frappé à la porte avant d'entrer.","He knocked on the door before entering."  ],
  ["sentiment","feeling","L'amour est un sentiment puissant et complexe.","Love is a powerful and complex feeling."  ],
  ["toit","roof","Le chat est monté sur le toit pour observer les oiseaux.","The cat climbed onto the roof to watch the birds."  ],
  ["lors","then, while","Il était calme lors de la réunion, malgré la pression.","He was calm during the meeting, despite the pressure."  ],
  ["métier","job","Son métier en tant qu'architecte l'amène à voyager souvent.","Her profession as an architect requires her to travel frequently."  ],
  ["maladie","disease, illness","La recherche médicale vise à trouver des traitements contre les maladies.","Medical research aims to find treatments for diseases."  ],
  ["poche","pocket","Il a trouvé une clé dans la poche de son pantalon.","He found a key in the pocket of his pants."  ],
  ["succès","success","Le film a remporté un grand succès au box-office.","The movie was a big success at the box office."  ],
  ["dessous","beneath, under; bottom","Les clés sont sous la boîte aux lettres.","The keys are under the mailbox."  ],
  ["craindre","fear, be afraid","Il ne faut pas craindre l'échec, mais apprendre de lui.","One should not fear failure but learn from it."  ],
  ["afin","in order to","Nous travaillons dur afin d'atteindre nos objectifs.","We work hard in order to achieve our goals."  ],
  ["gare","station; beware!","Le train partira de la gare à dix heures.","The train will depart from the station at ten o'clock."  ],
  ["étranger","stranger; abroad","Il a voyagé dans de nombreux pays étrangers.","He has traveled to many foreign countries."  ],
  ["campagne","countryside","La campagne est paisible avec de vastes champs et de l'air frais.","The countryside is peaceful with wide fields and fresh air."  ],
  ["alcool","alcohol","La consommation excessive d'alcool peut avoir des conséquences graves sur la santé.","Excessive alcohol consumption can have serious health consequences."  ],
  ["produire","produce; happen","Cette usine produit des millions de pièces chaque année.","This factory produces millions of parts every year."  ],
  ["souhaiter","wish","Je souhaite une année nouvelle pleine de bonheur et de réussite.","I wish for a new year full of happiness and success."  ],
  ["carrière","career","Elle a eu une carrière réussie en tant que pianiste renommée.","She had a successful career as a renowned pianist."  ],
  ["rater","miss, fail","Il ne voulait pas rater son train, mais il était en retard.","He didn't want to miss his train, but he was running late."  ],
  ["assurer","ensure, make sure","Le capitaine doit assurer la sécurité de l'équipage.","The captain has to ensure the safety of the crew."  ],
  ["queue","tail, queue/line","Il y avait une longue queue devant le cinéma.","There was a long line in front of the cinema."  ],
  ["viande","meat","Elle prépare un plat délicieux avec de la viande.","She is preparing a delicious dish with meat."  ],
  ["suivant","next, following; according to","Lisez le chapitre suivant pour connaître la suite de l'histoire.","Read the next chapter to find out what happens next in the story."  ],
  ["fusil","rifle","Le chasseur tenait son fusil prêt à tirer.","The hunter held his rifle ready to shoot."  ],
  ["hasard","chance, coincidence","Il a trouvé la clé par hasard dans le tiroir.","He found the key by chance in the drawer."  ],
  ["crétin","moron","Ce n'est pas gentil de traiter quelqu'un de crétin.","It's not nice to call someone a fool."  ],
  ["coffre","safe, trunk","Il a rangé ses bijoux précieux dans le coffre-fort.","He stored his valuable jewelry in the safe."  ],
  ["pression","pressure","La pression atmosphérique diminue en altitude.","Atmospheric pressure decreases at higher altitudes."  ],
  ["volonté","will","Avec de la volonté, on peut atteindre ses objectifs.","With determination, one can achieve their goals."  ],
  ["fiable","weak","Ce témoin est fiable et peut être cru.","This witness is reliable and can be believed."  ],
  ["attraper","catch, seize","Il a réussi à attraper le ballon en plein vol.","He managed to catch the ball in mid-air."  ],
  ["cesser","stop","Il faut cesser de fumer pour améliorer sa santé.","It is necessary to quit smoking to improve one's health."  ],
  ["naissance","birth","La naissance d'un enfant est un moment joyeux.","The birth of a child is a joyful moment."  ],
  ["gaz ","gas","Le gaz naturel est utilisé comme source d'énergie.","Natural gas is used as a source of energy."  ],
  ["bataille","battle","La bataille a été féroce, mais ils ont réussi à gagner.","The battle was fierce, but they managed to win."  ],
  ["retraite","retirement","Elle a décidé de prendre sa retraite après 40 ans de travail.","She decided to retire after 40 years of work."  ]
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





$(".sentence").click(function() {
  //reset();

  document.querySelectorAll('.sentenceContainer').forEach(e => e.remove());

  const sentencesDict = {};

  for (let i=0; i<originalCards.length; i++){
    sentencesDict[originalCards[i][0]] = originalCards[i]
  }

  const frenchWordOpened = opened[0][0].innerText;

    $(".sentenceBinder.french").append(`<div class='sentenceContainer'><span class='frenchSentence sentenceText'>${JSON.stringify(sentencesDict)}</span></div>`);

  $(".sentenceBinder.english").append(`<div class='sentenceContainer'><span class='englishSentence sentenceText'>${opened[0][0].innerText}</span></div>`);



    $(".sentenceBinder.french").append(`<div class='sentenceContainer'><span class='frenchSentence sentenceText'>${JSON.stringify(sentencesDict[frenchWordOpened])}</span></div>`);
$(".sentenceBinder.english").append(`<div class='sentenceContainer'><span class='englishSentence sentenceText'>${frenchWordOpened}</span></div>`);





  $(".sentenceBinder.french").append(`<div class='sentenceContainer'><span class='frenchSentence sentenceText'>${sentencesDict[frenchWordOpened][2]}</span></div>`);

  $(".sentenceBinder.english").append(`<div class='sentenceContainer'><span class='englishSentence sentenceText'>${sentencesDict[frenchWordOpened][3]}</span></div>`);

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
