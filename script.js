

let originalCards = [
    ["camping","camping","Ils ont passé leurs vacances dans un camping près de la mer.","They spent their vacation at a camping site near the sea.",4201  ],
  ["détourner","to divert","Il a détourné son regard pour cacher son émotion.","He diverted his gaze to hide his emotion.",4202  ],
  ["distributeur","distributor","Le distributeur automatique était hors service.","The vending machine was out of order.",4204  ],
  ["melon","melon","Il a acheté un melon juteux au marché.","He bought a juicy melon at the market.",4205  ],
  ["cliché","cliché","Ce film est plein de clichés sur les adolescents.","This movie is full of clichés about teenagers.",4206  ],
  ["maestro","maestro","Le maestro a dirigé l'orchestre avec passion.","The maestro conducted the orchestra with passion.",4207  ],
  ["chargeur","charger","Il a branché le chargeur de son téléphone pour le recharger.","He plugged in his phone charger to recharge it.",4208  ],
  ["projection","projection","La projection du film a été interrompue en raison d'un problème technique.","The film projection was interrupted due to a technical issue.",4209  ],
  ["découper","to cut","Elle a découpé le gâteau en parts égales.","She cut the cake into equal slices.",4210  ],
  ["parleur","speaker","Le parleur a prononcé un discours inspirant lors de la conférence.","The speaker delivered an inspiring speech at the conference.",4211  ],
  ["gratis","free","L'entrée au musée était gratis ce jour-là.","The museum entry was free that day.",4212  ],
  ["carreau","tile","Le carreau de la salle de bains est fissuré.","The bathroom tile is cracked.",4213  ],
  ["caillou","pebble","Les enfants ont ramassé des cailloux sur la plage.","The children picked up pebbles on the beach.",4214  ],
  ["imiter","to imitate","Il sait imiter de nombreuses voix célèbres.","He can imitate many famous voices.",4215  ],
  ["stage","internship","Elle a décroché un stage dans une grande entreprise.","She landed an internship at a large company.",4216  ],
  ["faculté","faculty","La faculté de médecine offre des cours très recherchés.","The medical faculty offers highly sought-after courses.",4217  ],
  ["gorgée","swig","Il a pris une dernière gorgée de son café avant de partir.","He took one last swig of his coffee before leaving.",4219  ],
  ["peignoir","bathrobe","Il s'est enveloppé dans son peignoir après la douche.","He wrapped himself in his bathrobe after the shower.",4221  ],
  ["vanter","to boast","Il aime se vanter de ses exploits sportifs.","He likes to boast about his sporting achievements.",4222  ],
  ["monastère","monastery","Le monastère est situé au sommet de la montagne.","The monastery is located at the top of the mountain.",4223  ],
  ["recul","backward","Il a reculé pour éviter la collision.","He backed up to avoid the collision.",4224  ],
  ["mémé","granny","Sa mémé lui a appris à tricoter quand il était petit.","His granny taught him how to knit when he was little.",4225  ],
  ["lecteur","reader","Le lecteur a dévoré le livre en une seule soirée.","The reader devoured the book in one evening.",4226  ],
  ["fraternité","fraternity","La fraternité entre les membres de l'équipe était palpable.","The fraternity among the team members was palpable.",4227  ],
  ["caleçon","underpants","Il a acheté de nouveaux caleçons lors des soldes.","He bought new underpants during the sales.",4228  ],
  ["gala","gala","Elle a assisté à un gala de charité en robe de soirée.","She attended a charity gala in an evening gown.",4229  ],
  ["flux","flow","Le flux de données était trop important pour être traité rapidement.","The flow of data was too large to be processed quickly.",4230  ],
  ["vocation","vocation","Il a découvert sa vocation pour la musique dès son plus jeune âge.","He discovered his vocation for music from a young age.",4231  ],
  ["bombardier","bomber","Le bombardier largua ses bombes sur la cible ennemie.","The bomber dropped its bombs on the enemy target.",4232  ],
  ["raid","raid","Ils ont organisé un raid nocturne pour libérer les otages.","They organized a nighttime raid to free the hostages.",4233  ],
  ["short","shorts","Il porte toujours des shorts, même en hiver.","He always wears shorts even in winter.", 4235],
  ["contexte","context","Il est important de comprendre le contexte historique.","It's important to understand the historical context.",4237  ],
  ["dispositif","device","Le dispositif de sécurité s'est déclenché automatiquement.","The security device triggered automatically.",4238  ],
  ["plier","to fold","Elle a dû plier ses vêtements pour les ranger dans sa valise.","She had to fold her clothes to pack them in her suitcase.",4239  ],
  ["absenter","to be absent","Il s'est absenté de l'école pour assister à un événement familial.","He was absent from school to attend a family event.",4240  ],
  ["régner","to reign","Le roi a régné sur le pays pendant plusieurs décennies.","The king reigned over the country for several decades.",4241  ],
  ["universitaire","university","Elle a reçu une bourse universitaire pour ses excellentes notes.","She received a university scholarship for her excellent grades.",4242  ],
  ["massif","massive","Les montagnes formaient un massif imposant.","The mountains formed a massive range.",4243  ],
  ["drague","flirting","Il est un expert en drague et en séduction.","He's an expert in flirting and seduction.",4244  ],
  ["soupirer","to sigh","Elle a soupiré en regardant le coucher de soleil.","She sighed while watching the sunset.",4245  ],
  ["neutre","neutral","Il est important de rester neutre dans certaines situations.","It's important to remain neutral in certain situations.",4246  ],
  ["bilan","assessment","Le bilan financier de l'entreprise était positif cette année.","The company's financial assessment was positive this year.",4247  ],
  ["fortement","strongly","Il est fortement recommandé de suivre ces instructions.","It is strongly recommended to follow these instructions.",4248  ],
  ["smoking","dinner jacket","Il a enfilé son smoking avant la cérémonie.","He put on his dinner jacket before the ceremony.",4249  ],
  ["homosexuel","homosexual","La communauté homosexuelle lutte pour l'égalité des droits.","The homosexual community is fighting for equal rights.",4250  ],
  ["coque","hull","La coque du navire était solide et résistante.","The hull of the ship was solid and resistant.",4252  ],
  ["répandre","to spread","Les rumeurs se sont répandues rapidement dans tout le village.","The rumors spread quickly throughout the village.",4253  ],
  ["effondrer","to collapse","Le bâtiment s'est effondré après l'explosion.","The building collapsed after the explosion.",4255  ],
  ["mouchard","informant","Il a été accusé d'être un mouchard par ses collègues.","He was accused of being an informant by his colleagues.",4256  ],
  ["emparer","to seize","Il a réussi à s'emparer du trésor tant convoité.","He managed to seize the coveted treasure.",4257  ],
  ["distribuer","to distribute","Il a distribué les flyers dans toute la ville.","He distributed the flyers throughout the city.",4258  ],
  ["apprêter","to prepare","Elle a apprêté un délicieux repas pour ses invités.","She prepared a delicious meal for her guests.",4262  ],
  ["scie","saw","Il a utilisé une scie pour couper le bois.","He used a saw to cut the wood.",4263  ],
  ["fossé","ditch","Le fossé était rempli d'eau après la pluie.","The ditch was filled with water after the rain.",4264  ],
  ["remuer","to stir","Elle a remué la soupe pour éviter qu'elle ne brûle.","She stirred the soup to prevent it from burning.",4265  ],
  ["vivement","keenly","Il attendait vivement l'arrivée de ses amis.","He was eagerly awaiting the arrival of his friends.",4268  ],
  ["comte","count","Le comte était un homme respecté dans la région.","The count was a respected man in the region.",4269  ],
  ["agitation","agitation","L'agitation règne dans la ville avant les élections.","There is agitation in the city before the elections.",4270  ],
  ["valse","waltz","Ils ont dansé une valse romantique lors de leur mariage.","They danced a romantic waltz at their wedding.",4272  ],
  ["combine","scheme","Il a élaboré une combine pour contourner les règles.","He devised a scheme to bypass the rules.",4273  ],
  ["notion","notion","Il n'avait aucune notion de la gravité de la situation.","He had no notion of the seriousness of the situation.",4274  ],
  ["collaboration","collaboration","La collaboration entre les deux entreprises a été fructueuse.","The collaboration between the two companies was fruitful.",4275  ],
  ["consulat","consulate","Il a dû se rendre au consulat pour obtenir un visa.","He had to go to the consulate to get a visa.",4276  ],
  ["habituellement","usually","Elle se lève habituellement tôt le matin.","She usually gets up early in the morning.",4277  ],
  ["dominer","to dominate","Il a réussi à dominer ses peurs et à avancer.","He managed to dominate his fears and move forward.",4278  ],
  ["perturber","to disturb","Les travaux de construction perturbaient le voisinage.","The construction works disturbed the neighborhood.",4279  ],
  ["purement","purely","Sa décision était purement motivée par l'intérêt personnel.","His decision was purely motivated by self-interest.",4280  ],
  ["gerber","to vomit","Il a gerbé toute la nuit après avoir trop bu.","He vomited all night after drinking too much.",4281  ],
  ["compétence","competence","Il a été embauché pour sa compétence dans le domaine.","He was hired for his competence in the field.",4282  ],
  ["blouson","jacket","Il a enfilé son blouson avant de sortir.","He put on his jacket before going out.",4283  ],
  ["antécédent","background","Son antécédent criminel a été révélé lors de l'enquête.","His criminal background was revealed during the investigation.",4284  ],
  ["voisinage","neighborhood","Le voisinage était calme et paisible.","The neighborhood was quiet and peaceful.",4285  ],
  ["proximité","proximity","La proximité de la plage était l'un des points forts de l'hôtel.","The proximity to the beach was one of the hotel's highlights.",4286  ],
  ["partisan","supporter","Il est un partisan fervent de son équipe de football préférée.","He is a staunch supporter of his favorite football team.",4288  ],
  ["envoi","sending","L'envoi du colis a été retardé en raison d'un problème logistique.","The sending of the package was delayed due to a logistical issue.",4289  ],
  ["spectre","spectrum","La lumière blanche est composée de nombreux spectres de couleur.","White light is composed of many color spectrums.",4290  ],
  ["abuser","to abuse","Il a été accusé d'abuser de sa position pour obtenir des faveurs.","He was accused of abusing his position to gain favors.",4291  ],
  ["comédien","actor","Il est un comédien talentueux avec une large palette d'expressions.","He's a talented actor with a wide range of expressions.",4292  ],
  ["sexuellement","sexually","Il a été harcelé sexuellement par un collègue de travail.","He was sexually harassed by a colleague at work.", 4293 ],
  ["gain","gain","Son entreprise a réalisé un gain financier important ce trimestre.","His company made significant financial gains this quarter.",4296  ],
  ["idole","idol","Elle considérait son grand-père comme son idole.","She considered her grandfather as her idol.",4297  ],
  ["exploitation","exploitation","L'exploitation des ressources naturelles a des conséquences sur l'environnement.","The exploitation of natural resources has consequences on the environment.",4300  ]
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
