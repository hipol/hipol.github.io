// Create a list that holds all of your cards
// let cards = [
//   ["bonjour", "hi"]
// ];

let originalCards = 

// [
//   ["donc","therefore, so, then"  ],
//   ["soit","whether, either"  ],
//   ["bas","low; down(stairs); bottom"  ],
//   ["passer","pass, spend time, go (well/bad), do without"  ],
//   ["puis","then"  ],
//   ["tant","so much"  ],
//   ["coup","blow, hit"  ],
//   ["sens","sense, meaning, direction"  ],
//   ["ni","nor, neither"  ],
//   ["entendre","hear; get along"  ],
//   ["comprendre","understand, include"  ],
//   ["trouver","find; be located"  ],
//   ["chercher","search, get"  ],
//   ["sous","under; underneath"  ],
//   ["vers","towards, around; verse"  ],
//   ["aucun","no, none"  ],
//   ["devant","in front of; ahead; front"  ],
//   ["dont","whose, that, which"  ],
//   ["ainsi","thus, thereby; as"  ],
//   ["cour","yard, courtyard, court"  ],
//   ["dedans","inside, indoors"  ],
//   ["autant","as much"  ],
//   ["valoir","be worth, cost"  ],
//   ["rendre","give back, render; surrender"  ],
//   ["bout","end, piece"  ],
//   ["courant","common; current"  ],
//   ["propos","remark"  ],
//   ["promettre","promise"  ],
//   ["camp","side, camp"  ],
//   ["fond","bottom"  ],
//   ["pièce","room, coin"  ],
//   ["ailleurs","elsewhere"  ],
//   ["debout","standing, upright"  ],
//   ["retrouver","find back, meet"  ],
//   ["coin","corner"  ],
//   ["rencontrer","meet, encounter"  ],
//   ["rappeler","call back, remember"  ],
//   ["agir","act; be about"  ],
//   ["pareil","such, similar; the same"  ],
//   ["appel","call back, remember"  ],
//   ["anniversaire","anniversary, birthday"  ],
//   ["moyen","means, way; medium, average"  ],
//   ["clair","clear, bright"  ],
//   ["meurtre","murder"  ],
//   ["avance","advance"  ],
//   ["forme","form, shape"  ],
//   ["bord","edge, side"  ],
//   ["médecin","doctor"  ],
//   ["épais","thick"  ],
//   ["porter","wear, carry"  ],
//   ["ignorer","ignore"  ],
//   ["diable","devil"  ],
//   ["supposer","assume, suppose"  ],
//   ["flic","cop (police)"  ],
//   ["jurer","swear"  ],
//   ["moitié","half"  ],
//   ["chacun","each"  ],
//   ["télé","TV"  ],
//   ["autour","around"  ],
//   ["proche","near; close friend/relative"  ],
//   ["balle","bullet, ball"  ],
//   ["selon","according to"  ],
//   ["classe","class, classroom"  ],
//   ["pari","bet"  ],
//   ["peuple","people"  ],
//   ["habitude","habit"  ],
//   ["voie","way, track"  ],
//   ["contrôle","test, control"  ],
//   ["honte","shame"  ],
//   ["trou","hole"  ],
//   ["arrière","rear, back"  ],
//   ["poste","position; post office"  ],
//   ["ressembler","look like"  ],
//   ["pourtant","yet, however"  ],
//   ["bande","band, bunch"  ],
//   ["enfer","hell"  ],
//   ["tel","such"  ],
//   ["plusieurs","severals"  ],
//   ["compagnie","company"  ],
//   ["combat","fight"  ],
//   ["secours","relief, help"  ],
//   ["connerie","bullshit"  ],
//   ["merveilleux","wonderful"  ],
//   ["voler","fly; steal"  ],
//   ["ennui","boredom, trouble"  ],
//   ["but","purpose, goal"  ],
//   ["hors","out of"  ],
//   ["boîte","box, can"  ],
//   ["vol","flight, theft, robbery"  ],
//   ["bête","beast; stupid"  ],
//   ["avenir","future"  ],
//   ["lent","slow"  ],
//   ["amoreux","in love; lover"  ],
//   ["cuisine","kitchen, cuisine"  ],
//   ["poser","put (down)"  ],
//   ["journal","newspaper, journal"  ],
//   ["dommage","damage, pity, shame"  ],
//   ["peau","skin"  ],
//   ["servir","serve; use"  ],
//   ["sympa","frienly, nice"  ],
//   ["juger","judge"  ],
//   ["bruit","noise"  ],
//   ["paraître","appear, sound, be published"  ],
//   ["asseoir","sit"  ],
//   ["bonheur","happiness"  ],
//   ["tas","pile, lots"  ],
//   ["à travers","through"  ],
//   ["conseil","advice, council"  ],
//   ["robe","dress"  ],
//   ["rêve","dream"  ],
//   ["pitié","pity, mercy"  ],
//   ["don","gift, donation"  ],
//   ["sol","floor, ground"  ],
//   ["vent","wind"  ],
//   ["gamin","kid"  ],
//   ["tante","aunt"  ],
//   ["milieu","middle, environment"  ],
//   ["reine","queen"  ],
//   ["au lieu de","instead of"  ],
//   ["bière","beer"  ],
//   ["dingue","crazy"  ],
//   ["inutile","unnecessary, useless"  ],
//   ["nul","no, no one; bad, worthless"  ],
//   ["sentir","smell, feel"  ],
//   ["armée","army"  ],
//   ["emmener","take (somewhere)"  ],
//   ["vêtement","garment, clothes"  ],
//   ["unir","unite"  ],
//   ["soin","care, carefulness"  ],
//   ["pierre","stone"  ],
//   ["lequel","which one"  ],
//   ["parole","word, speech"  ],
//   ["ennemi","enemy, hostile"  ],
//   ["recherche","research, search"  ],
//   ["intérêt","interest"  ],
//   ["rôle","role"  ],
//   ["tourner","turn, spin"  ],
//   ["humain","human"  ],
//   ["coupable","guilty, culprit"  ],
//   ["environ","about, around"  ],
//   ["espoir","hope"  ],
//   ["mur","wall"  ],
//   ["lâche","coward"  ],
//   ["face","face, side"  ],
//   ["sauter","jump, skip"  ],
//   ["colère","anger"  ],
//   ["adieu","farewell"  ],
//   ["parier","bet, gamble"  ],
//   ["tort","wrong, harm"  ],
//   ["conduire","lead, drive; behave"  ],
//   ["revenu","income"  ],
//   ["quartier","neighborhood, district"  ],
//   ["preuve","evidence, proof"  ],
//   ["épouser","marry"  ],
//   ["gosse","kid"  ],
//   ["rose","pink, rose"  ],
//   ["vide","empty, void"  ],
//   ["fier","proud"  ],
//   ["manière","way, form, manner"  ],
//   ["occasion","opportunity, occasion, secondhand"  ],
//   ["défense","defense, prohibition"  ],
//   ["jeter","throw"  ],
//   ["base","base, basis"  ],
//   ["glace","ice, mirror, ice cream"  ],
//   ["parmi","among"  ],
//   ["tueur","killer"  ],
//   ["naître","be born"  ],
//   ["course","race; shopping"  ],
//   ["mien","mine"  ],
//   ["couper","cut"  ],
//   ["dégager","clear, bugger off"  ],
//   ["prévoir","foresee, plan"  ],
//   ["lorsque","when"  ],
//   ["bain","bath"  ],
//   ["court","short"  ],
//   ["déranger","disturb"  ],
//   ["ramener","bring back"  ],
//   ["enquête","survey, investigation"  ],
//   ["camion","truck"  ],
//   ["rencontre","meeting"  ],
//   ["éviter","avoid"  ],
//   ["plupart","most"  ],
//   ["empêcher","prevent, stop"  ],
//   ["envers","towards; the backside/inverse"  ],
//   ["ange","angel"  ],
//   ["dossier","folder, file"  ],
//   ["règle","rule, ruler (measuring stick)"  ],
//   ["drogue","drug"  ],
//   ["charger","load, charge; take care of"  ],
//   ["pont","bridge"  ],
//   ["douleur","pain"  ],
//   ["fait","fact"  ],
//   ["magasin","store, shop"  ],
//   ["entier","whole, full"  ],
//   ["raconter","tell, talk about"  ],
//   ["permettre","allow, afford","La loi permet de fumer à l'extérieur.","The law allows smoking outdoors."  ],
//   ["frais","fees; fresh","Les fruits frais sont toujours délicieux en été.","Fresh fruits are always delicious in the summer."  ],
//   ["champ","field","Les enfants jouent dans le champ de blé.","The children play in the wheat field."  ],
//   ["couleur","color","Elle a choisi une robe de couleur rouge vif.","She chose a dress in a bright red color."  ],
//   ["destin","destiny","Le destin peut parfois être imprévisible.","Destiny can sometimes be unpredictable."  ],
//   ["puisque","since","Puisque tu es là, nous pouvons commencer la réunion.","Since you are here, we can start the meeting."  ],
//   ["taille","size, height","Cette robe est disponible en plusieurs tailles.","This dress is available in various sizes."  ],
//   ["vaisseau","vessel, starship","Le vaisseau spatial a voyagé jusqu'à la lune.","The spacecraft traveled to the moon."  ],
//   ["sacré","sacred, a heck of a","Cet endroit a une signification sacrée pour la communauté.","This place has a sacred meaning for the community."  ],
//   ["repas","meal","Nous avons partagé un délicieux repas ensemble.","We shared a delicious meal together."  ],
//   ["détruire","destroy","La guerre a le pouvoir de détruire des villes entières.","War has the power to destroy entire cities."  ],
//   ["personnel","staff;  personal","C'est un choix personnel que je dois faire.","It's a personal choice that I have to make."  ],
//   ["garde","custody; guard","Le garde surveille l'entrée du musée.","The guard is watching the entrance of the museum."  ],
//   ["couteau","knife","Elle a utilisé un couteau tranchant pour couper les légumes.","She used a sharp knife to cut the vegetables."  ],
//   ["témoin","witness","Le témoin a raconté ce qu'il a vu à la police.","The witness told the police what he saw."  ],
//   ["remercier","thank","Je tiens à vous remercier pour votre aide précieuse.","I want to thank you for your valuable assistance."  ],
//   ["direction","direction, management","La flèche indique la direction du nord.","The arrow points in the direction of the north."  ],
//   ["malin","smart","Il est malin et trouve toujours des solutions créatives.","He is clever and always finds creative solutions."  ],
//   ["niveau","level","Le niveau d'eau dans le lac a augmenté après la pluie.","The water level in the lake rose after the rain."  ],
//   ["remettre","hand over; recover","Je vais remettre le livre à la bibliothèque demain.","I will return the book to the library tomorrow."  ],
//   ["apporter","bring","N'oublie pas d'apporter tes clés avant de partir.","Don't forget to bring your keys before leaving."  ],
//   ["procès","trial","Le procès a duré plusieurs semaines avant le verdict.","The trial lasted several weeks before the verdict."  ],
//   ["rêver","dream","Elle aime rêver de voyager dans des endroits lointains.","She enjoys dreaming of traveling to distant places."  ],
//   ["doux","soft","Le tissu est doux et agréable au toucher.","The fabric is soft and pleasant to the touch."  ],
//   ["goût","taste, flavour","Le gâteau a un goût sucré et délicieux.","The cake has a sweet and delicious taste."  ],
//   ["enceinte","pregnant","Elle est enceinte de six mois et attend un bébé.","She is six months pregnant and expecting a baby."  ],
//   ["arranger","arrange, fix","Je vais arranger les fleurs dans un joli vase.","I will arrange the flowers in a beautiful vase."  ],
//   ["espace","space","L'espace entre les étoiles est infini.","The space between the stars is infinite."  ],
//   ["faillir","fail, almost","Il a failli manquer son avion à cause du trafic.","He almost missed his plane due to traffic."  ],
//   ["Angleterre","England","L'Angleterre est connue pour son histoire riche.","England is known for its rich history."  ],
//   ["vitesse","speed","La voiture a atteint une vitesse impressionnante sur l'autoroute.","The car reached an impressive speed on the highway."  ],
//   ["arbre","tree","L'ombre de l'arbre offre un refuge par temps chaud.","The shadow of the tree provides shelter in hot weather."  ],
//   ["trésor","treasure","Le pirate cherchait un trésor caché sur l'île.","The pirate was searching for a hidden treasure on the island."  ],
//   ["appartenir","belong","Cette maison appartient à une famille depuis des générations.","This house has belonged to a family for generations."  ],
//   ["moindre","least, slightest","Il n'y a pas le moindre doute quant à sa culpabilité.","There is not the slightest doubt about his guilt."  ],
//   ["censé","supposed to","Tu es censé finir ce projet avant la fin de la semaine.","You are supposed to finish this project by the end of the week."  ],
//   ["justement","(it just happens that)","Il avait justement le livre que je cherchais à la bibliothèque.","He happened to have the book I was looking for at the library."  ],
//   ["enlever","remove, take off","Il faut enlever les chaussures avant d'entrer dans la maison.","Shoes must be removed before entering the house."  ],
//   ["chasse","hunt","La chasse est une activité populaire pendant la saison automnale.","Hunting is a popular activity during the fall season."  ],
//   ["filer","leave / (gotta go!)","Il a essayé de filer discrètement sans être vu.","He tried to slip away discreetly without being seen."  ],
//   ["lycée","high school","Elle est au lycée et étudie les sciences.","She is in high school and studying science."  ],
//   ["morceau","piece, track","Elle a coupé un morceau de gâteau pour chacun.","She cut a piece of cake for each person."  ],
//   ["appareil","device","L'appareil photo a capturé un moment précieux.","The camera captured a precious moment."  ],
//   ["piste","lead, trail","La piste de danse était pleine de gens joyeux.","The dance floor was filled with happy people."  ],
//   ["régler","adjust, fix","Il a dû régler le problème technique avant le spectacle.","He had to fix the technical issue before the performance."  ],
//   ["aveugle","blind","L'aveugle utilise une canne pour se déplacer.","The blind person uses a cane to navigate."  ],
//   ["crise","crisis, attack","La crise économique a eu des conséquences graves sur l'emploi.","The economic crisis had serious consequences on employment."  ],
//   ["amener","bring","Peux-tu amener les documents à la réunion demain?","Can you bring the documents to the meeting tomorrow?"  ],
//   ["interdire","forbid","Il est interdit de fumer dans ce restaurant.","Smoking is prohibited in this restaurant."  ],
//   ["lever","raise; get up","Le soleil commence à se lever à l'horizon.","The sun is starting to rise on the horizon."  ],
//   ["obtenir","get, obtain","Il a travaillé dur pour obtenir son diplôme avec distinction.","He worked hard to obtain his degree with distinction."  ],
//   ["prouver","prove","Il doit prouver son innocence devant le tribunal.","He has to prove his innocence in court."  ],
//   ["folie","madness","Certains considèrent sa décision comme une pure folie.","Some consider his decision to be sheer madness."  ],
//   ["ancien","former, ancient, old","Le manoir était habité par une famille ancienne depuis des siècles.","The mansion was inhabited by an ancient family for centuries."  ],
//   ["relation","relationship","La relation entre eux a évolué au fil du temps.","The relationship between them has evolved over time."  ],
//   ["bouteille","bottle","Il a ouvert la bouteille de vin pour célébrer.","He opened the bottle of wine to celebrate."  ],
//   ["rejoindre","(re)join","Nous allons nous rejoindre au café à midi.","We are going to meet at the café at noon."  ],
//   ["maigré","despite","Malgré son appétit, elle reste toujours maigre.","Despite her appetite, she remains thin."  ],
//   ["méchant","wicked, bad","Il a fait une blague méchante qui a blessé ses sentiments.","He made a mean joke that hurt her feelings."  ],
//   ["frapper","hit, struck","Il a frappé à la porte avant d'entrer.","He knocked on the door before entering."  ],
//   ["sentiment","feeling","L'amour est un sentiment puissant et complexe.","Love is a powerful and complex feeling."  ],
//   ["toit","roof","Le chat est monté sur le toit pour observer les oiseaux.","The cat climbed onto the roof to watch the birds."  ],
//   ["lors","then, while","Il était calme lors de la réunion, malgré la pression.","He was calm during the meeting, despite the pressure."  ],
//   ["métier","job","Son métier en tant qu'architecte l'amène à voyager souvent.","Her profession as an architect requires her to travel frequently."  ],
//   ["maladie","disease, illness","La recherche médicale vise à trouver des traitements contre les maladies.","Medical research aims to find treatments for diseases."  ],
//   ["poche","pocket","Il a trouvé une clé dans la poche de son pantalon.","He found a key in the pocket of his pants."  ],
//   ["succès","success","Le film a remporté un grand succès au box-office.","The movie was a big success at the box office."  ],
//   ["dessous","beneath, under; bottom","Les clés sont sous la boîte aux lettres.","The keys are under the mailbox."  ],
//   ["craindre","fear, be afraid","Il ne faut pas craindre l'échec, mais apprendre de lui.","One should not fear failure but learn from it."  ],
//   ["afin","in order to","Nous travaillons dur afin d'atteindre nos objectifs.","We work hard in order to achieve our goals."  ],
//   ["gare","station; beware!","Le train partira de la gare à dix heures.","The train will depart from the station at ten o'clock."  ],
//   ["étranger","stranger; abroad","Il a voyagé dans de nombreux pays étrangers.","He has traveled to many foreign countries."  ],
//   ["campagne","countryside","La campagne est paisible avec de vastes champs et de l'air frais.","The countryside is peaceful with wide fields and fresh air."  ],
//   ["alcool","alcohol","La consommation excessive d'alcool peut avoir des conséquences graves sur la santé.","Excessive alcohol consumption can have serious health consequences."  ],
//   ["produire","produce; happen","Cette usine produit des millions de pièces chaque année.","This factory produces millions of parts every year."  ],
//   ["souhaiter","wish","Je souhaite une année nouvelle pleine de bonheur et de réussite.","I wish for a new year full of happiness and success."  ],
//   ["carrière","career","Elle a eu une carrière réussie en tant que pianiste renommée.","She had a successful career as a renowned pianist."  ],
//   ["rater","miss, fail","Il ne voulait pas rater son train, mais il était en retard.","He didn't want to miss his train, but he was running late."  ],
//   ["assurer","ensure, make sure","Le capitaine doit assurer la sécurité de l'équipage.","The captain has to ensure the safety of the crew."  ],
//   ["queue","tail, queue/line","Il y avait une longue queue devant le cinéma.","There was a long line in front of the cinema."  ],
//   ["viande","meat","Elle prépare un plat délicieux avec de la viande.","She is preparing a delicious dish with meat."  ],
//   ["suivant","next, following; according to","Lisez le chapitre suivant pour connaître la suite de l'histoire.","Read the next chapter to find out what happens next in the story."  ],
//   ["fusil","rifle","Le chasseur tenait son fusil prêt à tirer.","The hunter held his rifle ready to shoot."  ],
//   ["hasard","chance, coincidence","Il a trouvé la clé par hasard dans le tiroir.","He found the key by chance in the drawer."  ],
//   ["crétin","moron","Ce n'est pas gentil de traiter quelqu'un de crétin.","It's not nice to call someone a fool."  ],
//   ["coffre","safe, trunk","Il a rangé ses bijoux précieux dans le coffre-fort.","He stored his valuable jewelry in the safe."  ],
//   ["pression","pressure","La pression atmosphérique diminue en altitude.","Atmospheric pressure decreases at higher altitudes."  ],
//   ["volonté","will","Avec de la volonté, on peut atteindre ses objectifs.","With determination, one can achieve their goals."  ],
//   ["fiable","weak","Ce témoin est fiable et peut être cru.","This witness is reliable and can be believed."  ],
//   ["attraper","catch, seize","Il a réussi à attraper le ballon en plein vol.","He managed to catch the ball in mid-air."  ],
//   ["cesser","stop","Il faut cesser de fumer pour améliorer sa santé.","It is necessary to quit smoking to improve one's health."  ],
//   ["naissance","birth","La naissance d'un enfant est un moment joyeux.","The birth of a child is a joyful moment."  ],
//   ["gaz ","gas","Le gaz naturel est utilisé comme source d'énergie.","Natural gas is used as a source of energy."  ],
//   ["bataille","battle","La bataille a été féroce, mais ils ont réussi à gagner.","The battle was fierce, but they managed to win."  ],
//   ["retraite","retirement","Elle a décidé de prendre sa retraite après 40 ans de travail.","She decided to retire after 40 years of work."  ],
//   ["voleur","thief","Le voleur a été arrêté par la police.","The thief was arrested by the police."  ],
//   ["poids","weight","Le poids du colis est de dix kilogrammes.","The weight of the package is ten kilograms."  ],
//   ["discours","speech","Son discours a inspiré de nombreuses personnes.","His speech inspired many people."  ],
//   ["ventre","belly","Elle avait mal au ventre après avoir trop mangé.","She had a stomachache after eating too much."  ],
//   ["connaissance","knowledge, acquaintance","Il a une connaissance approfondie en informatique.","He has in-depth knowledge in computer science."  ],
//   ["vive","long live, hurray","Vive la révolution!","Long live the revolution!"  ],
//   ["date","date","La date limite de soumission est le 31 mars.","The submission deadline is March 31st."  ],
//   ["génie","genius","Einstein était un génie de la physique théorique.","Einstein was a genius in theoretical physics."  ],
//   ["autrement","otherwise","Fais-le autrement si tu penses que c'est mieux.","Do it otherwise if you think it's better."  ],
//   ["os","bone","Les chiens aiment ronger les os.","Dogs love to gnaw on bones."  ],
//   ["valeur","value, worth","Cette œuvre d'art a une grande valeur artistique.","This piece of art has great artistic value."  ],
//   ["puissant","powerful, strong","Un moteur puissant propulse la voiture à grande vitesse.","A powerful engine propels the car at high speed."  ],
//   ["embrasser","kiss","Les amoureux se sont embrassés sous le clair de lune.","The lovers kissed under the moonlight."  ],
//   ["genou","knee","Il s'est blessé au genou en faisant du sport.","He injured his knee while playing sports."  ],
//   ["célèbre","famous","Léonard de Vinci est célèbre pour sa peinture.","Leonardo da Vinci is famous for his painting."  ],
//   ["cible","target","La flèche a atteint la cible avec précision.","The arrow hit the target with precision."  ],
//   ["conscience","consciousness","Avoir une bonne conscience est important.","Having a clear conscience is important."  ],
//   ["prévenir","warn, inform","Il a essayé de prévenir son ami du danger imminent.","He tried to warn his friend of the imminent danger."  ],
//   ["millier","thousand","Il y avait des milliers de personnes lors du concert.","There were thousands of people at the concert."  ],
//   ["reprendre","resume, retake","Elle va reprendre ses études après une pause.","She is going to resume her studies after a break."  ],
//   ["mine","look, lead (pen), mine (the mine)","La mine de charbon a fermé après des décennies d'exploitation.","The coal mine closed after decades of operation."  ],
//   ["charmant","charming","Il est vraiment charmant avec son sourire et sa gentillesse.","He is truly charming with his smile and kindness."  ],
//   ["reposer","rest","Il aime se reposer dans le jardin après une longue journée.","He likes to rest in the garden after a long day."  ],
//   ["oreille","ear","Il a mis une fleur derrière son oreille.","He put a flower behind his ear."  ],
//   ["apparemment","apparently","Apparemment, il n'était pas au courant de la situation.","Apparently, he was not aware of the situation."  ],
//   ["marrant","funny","Le clown était vraiment marrant lors du spectacle.","The clown was really funny during the show."  ],
//   ["joue","cheek","Elle a une tache de rousseur sur la joue gauche.","She has a freckle on her left cheek."  ],
//   ["salon","living room","Le salon est décoré avec goût et élégance.","The living room is decorated with taste and elegance."  ],
//   ["fer","iron","Le fer est utilisé pour fabriquer des objets en métal.","Iron is used to make metal objects."  ],
//   ["gorge","throat","Elle a mal à la gorge depuis quelques jours.","She has had a sore throat for a few days."  ],
//   ["privé","private","C'est une conversation privée, ne l'écoutez pas.","It's a private conversation, don't listen."  ],
//   ["nerveux","nervous","Il était nerveux avant son discours devant la foule.","He was nervous before his speech in front of the crowd."  ],
//   ["tribunal","court, courthouse","L'affaire a été portée devant le tribunal pour jugement.","The case was brought to court for judgment."  ],
//   ["paquet","package, pack","Le paquet est prêt à être expédié par la poste.","The package is ready to be shipped by mail."  ],
//   ["aise","comfort","Elle se sentait à l'aise dans sa nouvelle maison.","She felt comfortable in her new house."  ],
//   ["joindre","attach; join","Veuillez joindre votre CV à votre demande d'emploi.","Please join your CV to your job application."  ],
//   ["usine","plant, factory","L'usine produit des milliers d'unités chaque jour.","The factory produces thousands of units every day."  ],
//   ["désormais","from now on","Désormais, nous devons travailler plus efficacement.","From now on, we need to work more efficiently."  ],
//   ["compte","account; count","Elle a ouvert un compte bancaire dans une nouvelle banque.","She opened a bank account at a new bank."  ],
//   ["mode","mode; fashion","La mode évolue rapidement chaque saison.","Fashion changes quickly with each season."  ],
//   ["série","series, set","J'aime regarder cette série télévisée tous les dimanches.","I like watching this TV series every Sunday."  ],
//   ["sage","wise","Il a donné un conseil sage à son ami.","He gave his friend a wise piece of advice."  ],
//   ["concerner","concern","Cela peut concerner tout le monde, donc soyez prudents.","This can concern everyone, so be cautious."  ],
//   ["grandir","grow","Les enfants grandissent si vite.","Children grow up so fast."  ],
//   ["repos","rest","Il a besoin de repos après une semaine chargée de travail.","He needs rest after a busy week of work."  ],
//   ["ombre","shade, shadow","L'ombre des arbres offrait un abri contre la chaleur.","The shadow of the trees provided shelter from the heat."  ],
//   ["russe","Russian","Elle parle couramment russe car elle a vécu en Russie.","She speaks Russian fluently because she lived in Russia."  ],
//   ["minuit","midnight","Le spectacle de feux d'artifice a eu lieu à minuit.","The fireworks show took place at midnight."  ],
//   ["nombreux","numerous","Il y avait de nombreux invités à la fête d'anniversaire.","There were many guests at the birthday party."  ],
//   ["également","also, equally","Elle est également compétente en gestion de projet.","She is also competent in project management."  ],
//   ["mince","thin, slim; dammit","Elle a une silhouette mince grâce à son régime équilibré.","She has a slim figure thanks to her balanced diet."  ],
//   ["essence","gasoline, essence","La voiture fonctionne à l'essence.","The car runs on gasoline."  ],
//   ["maire","mayor","Le maire a inauguré le nouveau parc municipal.","The mayor inaugurated the new municipal park."  ],
//   ["moteur","engine","Le moteur de la voiture a calé en plein milieu de la route.","The car engine stalled in the middle of the road."  ],
//   ["franchement","honestly, openly","Franchement, je ne comprends pas sa décision.","Frankly, I don't understand his decision."  ],
//   ["partager","share","Les amis aiment partager leurs expériences de voyage.","Friends love to share their travel experiences."  ],
//   ["puissance","power, strength","Cette machine a une puissance de calcul impressionnante.","This machine has an impressive computing power."  ],
//   ["épée","sword","Le chevalier brandissait son épée avant le combat.","The knight brandished his sword before the battle."  ],
//   ["souffle","breath, blast","Après la course, elle reprenait son souffle lentement.","After the race, she was catching her breath slowly."  ],
//   ["tenter","tempt, try, attempt","Il a décidé de tenter sa chance dans le monde du cinéma.","He decided to attempt his luck in the world of cinema."  ],
//   ["apprécier","appreciate","Nous apprécions votre collaboration et votre dévouement.","We appreciate your collaboration and dedication."  ],
//   ["créer","create","Les artistes utilisent différentes techniques pour créer des œuvres uniques.","Artists use different techniques to create unique works."  ],
//   ["lac","lake","Le lac était calme sous le ciel étoilé.","The lake was calm under the starry sky."  ],
//   ["sommeil","sleep, rest","Le sommeil est essentiel pour une bonne santé mentale.","Sleep is essential for good mental health."  ],
//   ["chemise","shirt","Il a enfilé une chemise propre avant le rendez-vous.","He put on a clean shirt before the appointment."  ],
//   ["fantôme","ghost","Certains croient en l'existence des fantômes après la mort.","Some believe in the existence of ghosts after death."  ],
//   ["chair","flesh","La viande est la chair des animaux que nous consommons.","Meat is the flesh of the animals we consume."  ],
//   ["reculer","step back, move back","Il a dû reculer la voiture pour se garer correctement.","He had to back up the car to park properly."  ],
//   ["japonais","Japanese","Elle a étudié la langue japonaise pendant plusieurs années.","She studied the Japanese language for several years."  ],
//   ["coûter","cost","Le nouveau modèle de téléphone peut coûter cher.","The new phone model can cost a lot."  ],
//   ["champagne","champagne","Nous avons célébré la victoire avec une bouteille de champagne.","We celebrated the victory with a bottle of champagne."  ],
//   ["annonce","announcement","L'annonce du produit a été diffusée à la télévision.","The product advertisement was broadcast on television."  ],
//   ["débarrasser","rid","Il a décidé de débarrasser la pièce du désordre.","He decided to clear the room of clutter."  ],
//   ["fuir","flee, run away","Les animaux sauvages peuvent fuir devant un danger imminent.","Wild animals may run away in the face of imminent danger."  ],
//   ["supplier","beg","Il a commencé à supplier pardon après avoir réalisé son erreur.","He started begging for forgiveness after realizing his mistake."  ],
//   ["fesse","buttock","Il a reçu une claque sur la fesse en signe de désapprobation.","He received a slap on the buttock as a sign of disapproval."  ],
//   ["souci","worry, care","Elle a un souci constant pour le bien-être de sa famille.","She has a constant worry for the well-being of her family."  ],
//   ["manteau","coat","Il a enfilé son manteau épais pour affronter le froid.","He put on his thick coat to face the cold."  ],
//   ["allemand","German","Elle parle couramment allemand après avoir vécu en Allemagne.","She speaks German fluently after living in Germany."  ],
//   ["pantalon","pants","Il a acheté un nouveau pantalon pour la saison d'automne.","He bought a new pair of pants for the fall season."  ],
//   ["véritable","true, real","C'est un véritable chef-d'œuvre de la littérature.","It's a true masterpiece of literature."  ],
//   ["caisse","crate, car","La caisse contenait des produits fragiles.","The box contained fragile items."  ],
//   ["monnaie","currency, change (money)","La monnaie locale est utilisée pour les transactions quotidiennes.","The local currency is used for everyday transactions."  ],
//   ["perte","loss, waste","La perte de données a été un coup dur pour l'entreprise.","The loss of data was a hard blow for the company."  ],
//   ["menace","threat","La police a enquêté sur la menace anonyme reçue par l'école.","The police investigated the anonymous threat received by the school."  ],
//   ["émission","emission, show","L'émission de télé-réalité est devenue très populaire.","The reality show has become very popular."  ],
//   ["front","front, forehead","Elle a une petite cicatrice sur le front.","She has a small scar on her forehead."  ],
//   ["juif","Jewish, Jew","La célébration juive du Hanoukka dure huit jours.","The Jewish celebration of Hanukkah lasts eight days."  ],
//   ["chouette","owl; neat, great","La chouette hulule la nuit dans la forêt.","The owl hoots at night in the forest."  ],
//   ["chaise","chair","Elle s'assit sur la chaise.","She sat on the chair."  ],
//   ["malheureusement","unfortunately","Malheureusement, il pleuvait.","Unfortunately, it was raining."  ],
//   ["douche","shower","Il prit une douche rafraîchissante.","He took a refreshing shower."  ],
//   ["chaleur","heat","La chaleur dans la pièce était insupportable.","The heat in the room was unbearable."  ],
//   ["lèvre","lip","Ses lèvres étaient douces et délicates.","Her lips were soft and delicate."  ],
//   ["étude","study","Il se concentrait sur ses études.","He focused on his studies."  ],
//   ["côte","coast","Ils ont apprécié un pique-nique près de la côte.","They enjoyed a picnic by the coast."  ],
//   ["soudain","suddenly; sudden","Soudain, les lumières se sont éteintes.","Suddenly, the lights went out."  ],
//   ["choc","shock","La collision a provoqué un bruit fort.","The collision caused a loud crash."  ],
//   ["piège","trap","Elle est tombée dans le piège.","She fell into the trap."  ],
//   ["portable","portable; laptop; cell phone","Je porte toujours mon téléphone portable.","I always carry my mobile phone."  ],
//   ["mensonge","lie","Son mensonge a été découvert.","His lie was exposed."  ],
//   ["gloire","glory, fame","Elle a atteint une grande gloire dans sa carrière.","She achieved great glory in her career."  ],
//   ["poupée","doll","La petite fille jouait avec sa poupée.","The little girl played with her doll."  ],
//   ["bref","short, brief; in short","En bref, c'était une expérience mémorable.","In short, it was a memorable experience."  ],
//   ["réel","real","Le monde virtuel semblait plus réel que jamais.","The virtual world felt more real than ever."  ],
//   ["ballon","ball","Les enfants jouaient avec un ballon coloré.","Children played with a colorful balloon."  ],
//   ["abri","shelter, shed","Ils ont cherché un abri contre la pluie.","They sought shelter from the rain."  ],
//   ["plat","flat; dish","Le chef a préparé un plat délicieux.","The chef prepared a delicious dish."  ],
//   ["emploi","employment, job","Il a trouvé une nouvelle opportunité d'emploi.","He found a new job opportunity."  ],
//   ["ennuyer","bore, annoy","Ne laissez pas l'ennui prendre le dessus.","Don't let boredom get the best of you."  ],
//   ["foule","crowd","La foule applaudissait bruyamment.","The crowd cheered loudly."  ],
//   ["larme","tear (crying tears)","Une larme a roulé sur sa joue.","A tear rolled down her cheek."  ],
//   ["siècle","century","Le roman se déroule au 19e siècle.","The novel is set in the 19th century."  ],
//   ["atteindre","reach, achieve","Il s'efforçait d'atteindre ses objectifs.","He strived to reach his goals."  ],
//   ["veste","jacket","Elle portait une veste élégante.","She wore a stylish jacket."  ],
//   ["couverture","blanket, cover","Ils se blottirent sous une couverture chaude.","They snuggled under a warm blanket."  ],
//   ["fac","university, college","Le campus de l'université était vaste.","The university campus was vast."  ],
//   ["mener","lead","Elle a mené l'équipe à la victoire.","She led the team to victory."  ],
//   ["lancer","launch; go for it","Il a lancé la balle avec précision.","He threw the ball with precision."  ],
//   ["couche","layer, diaper","Le bébé dort dans la couche.","The baby is sleeping in the crib."  ],
//   ["prêtre","priest","Le prêtre a conduit la cérémonie.","The priest conducted the ceremony."  ],
//   ["saison","season","Ils adorent la saison d'automne.","They love the autumn season."  ],
//   ["évidemment","obviously","Évidemment, elle était contrariée.","Obviously, she was upset."  ],
//   ["commettre","commit, make","Il a juré de ne jamais commettre la même erreur.","He vowed never to commit the same mistake."  ],
//   ["au-delà","beyond; hereafter","Au-delà des montagnes se trouve une belle vallée.","Beyond the mountains lies a beautiful valley."  ],
//   ["laver","wash","Elle s'est soigneusement lavé les mains.","She carefully washed her hands."  ],
//   ["somme","sum, amount","J'ai besoin d'une bonne nuit de sommeil.","I need a good night's sleep."  ],
//   ["affreux","awful","Le film d'horreur était vraiment affreux.","The horror movie was truly terrifying."  ],
//   ["ours","bear","Ils ont repéré un ours dans les bois.","They spotted a bear in the woods."  ],
//   ["geste","gesture","Un simple geste peut en dire long.","A simple gesture can speak volumes."  ],
//   ["prisonnier","prisoner","Le prisonnier aspirait à la liberté.","The prisoner longed for freedom."  ],
//   ["tableau","painting","La peinture représentait un paysage magnifique.","The painting portrayed a scenic view."  ],
//   ["reconnaître","recognize, admit","Il a du mal à reconnaître les visages.","He struggles to recognize faces."  ],
//   ["plaisanter","joke","Il aime plaisanter et faire rire les autres.","He enjoys joking and making others laugh."  ],
//   ["crier","shout","Elle a crié de joie en recevant la nouvelle.","She shouted with joy upon hearing the news."  ],
//   ["singe","monkey","Le singe était curieux et joueur.","The monkey was curious and playful."  ],
//   ["prudent","careful","Soyez prudent lors de la traversée de la route.","Be cautious when crossing the road."  ],
//   ["ressentir","feel","Elle a ressenti une profonde tristesse.","She felt a deep sadness."  ],
//   ["convaincre","convince","Il a réussi à la convaincre de changer d'avis.","He managed to convince her to change her mind."  ],
//   ["aube","dawn","L'aube annonce le début d'une nouvelle journée.","The dawn heralds the beginning of a new day."  ],
//   ["propriétaire","owner","Le propriétaire a rénové l'immeuble.","The owner renovated the building."  ],
//   ["coincer","jam, stuck","Ils ont réussi à se coincer dans l'ascenseur.","They managed to get stuck in the elevator."  ],
//   ["frontière","border, frontier","La frontière sépare deux pays différents.","The border separates two different countries."  ],
//   ["remonter","reascend, reassemble, go back","Il a réussi à remonter la pente après l'échec.","He managed to bounce back after the failure."  ],
//   ["sec","dry, dried","Le désert était aride et sec.","The desert was dry and barren."  ],
//   ["bosser","work","Il bosse dur pour atteindre ses objectifs.","He works hard to achieve his goals."  ],
//   ["diriger","direct; run; head towards","Elle dirigeait l'entreprise avec compétence.","She led the company with competence."  ],
//   ["soi","self","La connaissance de soi est essentielle.","Self-awareness is essential."  ],
//   ["porc","pork, pig","Le fermier élevait des porcs dans sa ferme.","The farmer raised pigs on his farm."  ],
//   ["vierge","virgin","La forêt était vierge de toute intervention humaine.","The forest was untouched by human intervention."  ],
//   ["haïr","hate","Il ne pouvait pas comprendre pourquoi elle le haïssait.","He couldn't understand why she hated him."  ],
//   ["tromper","deceive, cheat on; be wrong","Il a regretté de l'avoir trompée.","He regretted deceiving her."  ],
//   ["tir","shot","Le joueur a effectué un tir précis vers le but.","The player made a precise shot towards the goal."  ],
//   ["immeuble","building","L'immeuble était impressionnant avec ses nombreuses fenêtres.","The building was impressive with its many windows."  ],
//   ["virer","fire","Il a été viré de son travail à cause de son comportement.","He was fired from his job because of his behavior."  ],
//   ["enfance","childhood","Ses souvenirs d'enfance étaient empreints de bonheur.","His childhood memories were filled with happiness."  ],
//   ["maudit","cursed","Le trésor était maudit, apportant malheur à quiconque le trouvait.","The treasure was cursed, bringing misfortune to anyone who found it."  ],
//   ["cauchemar","nightmare","Elle a eu un cauchemar terrifiant cette nuit-là.","She had a terrifying nightmare that night."  ],
//   ["amitié","friendship","Le lien d'amitié entre eux était indestructible.","The bond of friendship between them was indestructible."  ],
//   ["magie","magic","Il croyait en la magie depuis son enfance.","He believed in magic since his childhood."  ],
//   ["nana","chick, babe","La nana était toujours pleine d'énergie.","The girl was always full of energy."  ],
//   ["patte","paw, leg","Le chat étirait sa patte pour attraper le jouet.","The cat stretched its paw to grab the toy."  ],
//   ["lendemain","next day","Le lendemain, ils planifiaient une excursion.","The next day, they were planning an excursion."  ],
//   ["désir","desire, wish","Son désir de réussir était inébranlable.","His desire to succeed was unwavering."  ],
//   ["sonner","ring, sound","La cloche a commencé à sonner la fin de la classe.","The bell began to ring, signaling the end of class."  ],
//   ["bague","ring","Il lui offrit une bague en signe d'amour éternel.","He gave her a ring as a symbol of eternal love."  ],
//   ["survivre","survive","Les explorateurs ont dû lutter pour survivre dans la jungle.","The explorers had to struggle to survive in the jungle."  ],
//   ["bâtiment","building","Le bâtiment était un exemple d'architecture moderne.","The building was an example of modern architecture."  ],
//   ["palais","palace, palate","Le palais était somptueux avec ses grandes salles.","The palace was sumptuous with its grand halls."  ],
//   ["valise","suitcase","Elle a fait ses bagages pour le voyage.","She packed her suitcase for the trip."  ],
//   ["haine","hatred","La haine ne mène qu'à la destruction.","Hatred only leads to destruction."  ],
//   ["assurance","insurance, assurance","Il parlait avec assurance lors de la présentation.","He spoke with confidence during the presentation."  ],
//   ["navire","ship","Le navire voguait à travers les eaux calmes.","The ship sailed through the calm waters."  ],
//   ["foyer","home, house","Le foyer était chaleureux et accueillant.","The hearth was warm and welcoming."  ],
//   ["printemps","spring","Les fleurs fleurissaient au printemps.","The flowers bloomed in spring."  ],
//   ["personnage","character, figure","Le personnage principal était courageux et déterminé.","The main character was brave and determined."  ],
//   ["piger","understand","Il a mis du temps à piger le concept.","It took him a while to grasp the concept."  ],
//   ["sucre","sugar","Elle ajouta une cuillère de sucre dans son café.","She added a spoonful of sugar to her coffee."  ],
//   ["davantage","more","Ils ont besoin d'un soutien financier davantage que jamais.","They need financial support more than ever."  ],
//   ["net","sharp, net","Son argument était clair et net.","His argument was clear and concise."  ],
//   ["vivant","living, alive","La forêt était pleine d'êtres vivants.","The forest was full of living beings."  ],
//   ["navré","sorry","Il était navré d'avoir causé du tort involontairement.","He was sorry to have unintentionally caused harm."  ],
//   ["hâte","haste","Ils attendaient avec impatience son retour.","They were eagerly awaiting his return."  ],
//   ["voisin","neighbor","Le voisin était amical et serviable.","The neighbor was friendly and helpful."  ],
//   ["lourd","heavy","Le carton était trop lourd à soulever seul.","The box was too heavy to lift alone."  ],
//   ["retirer","withdraw","Il a décidé de retirer son nom de la liste.","He decided to withdraw his name from the list."  ],
//   ["exploser","explode","Le feu d'artifice a commencé à exploser dans le ciel nocturne.","The fireworks started to explode in the night sky."  ],
//   ["brûler","burn","Le feu brûlait doucement dans la cheminée.","The fire was burning gently in the fireplace."  ],
//   ["soif","thirst","Il avait soif après une longue journée de travail.","He was thirsty after a long day of work."  ],
//   ["égal","equal, even","Chacun a le droit d'être traité de manière égale.","Everyone has the right to be treated equally."  ],
//   ["résultat","result, product","Le résultat de l'examen était excellent.","The exam result was excellent."  ],
//   ["siège","seat, siege","Il prit place sur le siège avant de la voiture.","He took a seat in the front of the car."  ],
//   ["canon","gun; hot","La photo était prise avec un objectif photo de haute qualité.","The photo was taken with a high-quality camera lens."  ],
//   ["troupe","troop","La troupe de théâtre répétait ses lignes dans les coulisses.","The theater troupe was rehearsing their lines backstage."  ],
//   ["terme","term","Le projet a été achevé dans les délais prévus.","The project was completed within the expected timeframe."  ],
//   ["commun","common, joint","Ce parc est un lieu commun pour les résidents.","This park is a common place for the residents."  ],
//   ["tien","yours","Tiens, voici ton livre.","Here, take your book."  ],
//   ["traduction","translation","La traduction de ce texte est complexe.","The translation of this text is complex."  ],
//   ["quant à","as for","Quant à moi, je préfère la version originale.","As for me, I prefer the original version."  ],
//   ["traiter","treat, deal","Il est important de traiter les autres avec respect.","It is important to treat others with respect."  ],
//   ["cellule","cell","La cellule est l'unité de base de la vie.","The cell is the basic unit of life."  ],
//   ["gêne","discomfort, embarrassment","Son commentaire a créé une gêne dans la conversation.","His comment created an awkwardness in the conversation."  ],
//   ["pêche","fishing","Il adore partir à la pêche le week-end.","He loves to go fishing on weekends."  ],
//   ["poule","hen","La poule a pondu un œuf ce matin.","The hen laid an egg this morning."  ],
//   ["péché","sin","Le péché originel est un concept religieux.","Original sin is a religious concept."  ],
//   ["débile","stupid","Il a fait une blague débile qui a fait rire tout le monde.","He made a silly joke that made everyone laugh."  ],
//   ["deviner","guess","J'ai du mal à deviner ce qu'il pense.","I find it difficult to guess what he's thinking."  ],
//   ["liquide","liquid; cash","Le savon est sous forme liquide dans cette bouteille.","The soap is in liquid form in this bottle."  ],
//   ["marin","nautical; sailor","Il a une expérience de vie en tant que marin.","He has life experience as a sailor."  ],
//   ["humeur","mood","Son humeur change rapidement ces jours-ci.","Her mood changes quickly these days."  ],
//   ["auprès","nearby, to","Il est toujours disponible auprès de ses amis.","He is always available to his friends."  ],
//   ["jaloux","jealous","Il était jaloux du succès de son collègue.","He was jealous of his colleague's success."  ],
//   ["bosse","bump","Il a une bosse sur la tête après l'accident.","He has a bump on his head after the accident."  ],
//   ["infirmier","nurse","L'infirmier a pris soin des patients toute la nuit.","The nurse took care of the patients all night."  ],
//   ["tâche","task","C'est une tâche difficile à accomplir.","It's a difficult task to accomplish."  ],
//   ["enfuir","run away","Il a essayé de s'enfuir mais a été rattrapé.","He tried to escape but was caught."  ],
//   ["cirque","circus, mess","Les enfants adorent aller au cirque.","Children love going to the circus."  ],
//   ["particulier","particular; individual","Ce livre a un charme particulier.","This book has a particular charm."  ],
//   ["engager","hire","Ils ont décidé d'engager un nouvel employé.","They decided to hire a new employee."  ],
//   ["réaliser","realize, direct, achieve","Elle a finalement réalisé son rêve.","She finally achieved her dream."  ],
//   ["Chut!","hush!","Chut! Le bébé dort.","Shh! The baby is sleeping."  ],
//   ["cloche","bell","La cloche de l'église sonne toutes les heures.","The church bell rings every hour."  ],
//   ["empreinte","(foot)print","L'empreinte digitale est utilisée pour l'identification.","The fingerprint is used for identification."  ],
//   ["croix","cross","La croix est un symbole religieux important.","The cross is an important religious symbol."  ],
//   ["vente","sale","La vente aux enchères a attiré de nombreux collectionneurs.","The auction attracted many collectors."  ],
//   ["barrer","run away, get away","Il a décidé de barrer cette option de sa liste.","He decided to cross out that option from his list."  ],
//   ["aventure","adventure","Ils ont vécu une incroyable aventure en voyageant à travers le monde.","They had an amazing adventure traveling around the world."  ],
//   ["veille","eve, day before","Il a travaillé tard dans la veille de l'examen.","He worked late on the eve of the exam."  ],
//   ["boutique","shop","La boutique propose une variété de produits artisanaux.","The shop offers a variety of handmade products."  ],
//   ["ménage","couple, house cleaning","Ils partagent les tâches ménagères équitablement.","They share household chores fairly."  ],
//   ["baisser","lower, put down","Il a dû baisser la tête pour entrer dans la petite porte.","He had to lower his head to enter the small door."  ],
//   ["bouffe","food","J'adore la bouffe épicée.","I love spicy food."  ],
//   ["abruti","jerk","Arrête d'agir comme un abruti.","Stop acting like a fool."  ],
//   ["promesse","promise","Une promesse doit être tenue coûte que coûte.","A promise must be kept no matter what."  ],
//   ["inconnu","unknown","L'avenir reste souvent un territoire inconnu.","The future often remains an unknown territory."  ],
//   ["concours","contest","Elle a remporté le premier prix lors du concours de chant.","She won first place in the singing competition."  ],
//   ["cependant","however, yet","Il a fait de son mieux, cependant le résultat n'était pas satisfaisant.","He did his best; however, the result was not satisfactory."  ],
//   ["sauvage","wild; savage","La forêt était pleine de vie sauvage.","The forest was full of wild life."  ],
//   ["donnée","data","La donnée statistique indique une tendance à la hausse.","The statistical data indicates an upward trend."  ],
//   ["royaume","kingdom","Il rêvait de régner sur un royaume fantastique.","He dreamed of ruling over a fantastic kingdom."  ],
//   ["centaine","hundred","Ils ont vendu des centaines de billets pour le concert.","They sold hundreds of tickets for the concert."  ],
//   ["pot","pot, luck","Le pot de fleurs ornait la fenêtre.","The flower pot adorned the window."  ],
//   ["cochon","pig","Le cochon était curieux et gourmand.","The pig was curious and greedy."  ],
//   ["tapis","carpet","Le tapis ajoutait une touche de chaleur à la pièce.","The rug added a touch of warmth to the room."  ],
//   ["accompagner","accompany","Elle a décidé de l'accompagner lors de son voyage.","She decided to accompany him on his journey."  ],
//   ["lien","link, connection","Le lien familial est important pour elle.","Family ties are important to her."  ],
//   ["profond","deep","L'océan est très profond à cet endroit.","The ocean is very deep at this location."  ],
//   ["nommer","appoint, name","Il a été nommé directeur de l'entreprise.","He was named the director of the company."  ],
//   ["roman","novel","Le roman captivant a retenu son attention jusqu'à la fin.","The captivating novel held his attention until the end."  ],
//   ["poussière","dust","Il a nettoyé la poussière qui s'était accumulée sur les étagères.","He cleaned the dust that had accumulated on the shelves."  ],
//   ["récemment","recently","Elle a récemment déménagé dans une nouvelle ville.","She recently moved to a new city."  ],
//   ["lutte","struggle","La lutte pour l'égalité des droits a été longue.","The struggle for civil rights has been long."  ],
//   ["briser","break, shatter","Il a dû briser la vitre pour entrer.","He had to break the window to get in."  ],
//   ["quiconque","who(m)ever","Quiconque peut participer à cet événement.","Anyone can participate in this event."  ],
//   ["cap","cape, course","Il a décidé de changer de cap dans sa carrière.","He decided to change course in his career."  ],
//   ["entraînement","training","L'entraînement intensif a porté ses fruits lors de la compétition.","The intensive training paid off during the competition."  ],
//   ["meurtrier","murderer, murderous","Le meurtrier a été condamné à la prison à perpétuité.","The murderer was sentenced to life imprisonment."  ],
//   ["examen","exam, review","Il se prépare sérieusement pour l'examen final.","He is seriously preparing for the final exam."  ],
//   ["élever","raise, elevate","Les parents ont pour responsabilité d'élever leurs enfants.","Parents have the responsibility to raise their children."  ],
//   ["bouton","button","Elle a appuyé sur le bouton pour allumer la télévision.","She pressed the button to turn on the television."  ]
// ];


[
  ["meurtrier","Murderer","Le meurtrier a été arrêté par la police.; Le meurtrier est toujours en fuite.","The murderer was arrested by the police.; \"The murderer is still at large.\""  ],
  ["examen","Exam","J'ai un examen de mathématiques demain.; L'examen de français était difficile.","I have a math exam tomorrow.; \"The French exam was difficult.\""  ],
  ["septembre","September","Mon anniversaire est en septembre.; Les écoles commencent en septembre.","My birthday is in September.; \"Schools start in September.\""  ],
  ["élever","Raise; Breed","Élever des enfants est une tâche exigeante.; Elle élève des chiens de race.","Raising children is a demanding task.; \"She breeds purebred dogs.\""  ],
  ["profiter","Benefit; Profit","Nous devons profiter des opportunités qui se présentent.; L'entreprise a réalisé un bon profit cette année.","We need to take advantage of the opportunities that arise.; \"The company made a good profit this year.\""  ],
  ["serpent","Serpent","Le serpent glissait silencieusement à travers l'herbe.; Les serpents n'ont pas de pattes.","The snake slithered silently through the grass.; \"Snakes don't have legs.\""  ],
  ["bouton","Button; Pimple","J'ai appuyé sur le bouton pour ouvrir la porte.; J'ai un bouton sur le visage.","I pressed the button to open the door.; \"I have a pimple on my face.\""  ],
  ["piscine","Pool","La piscine est fermée pour l'entretien.; Nous allons à la piscine cet après-midi.","The pool is closed for maintenance.; \"We're going to the pool this afternoon.\""  ],
  ["courrier","Mail; Postman","J'ai reçu un courrier important aujourd'hui.; Le courrier a livré le colis ce matin.","I received important mail today.; \"The mailman delivered the package this morning.\""  ],
  ["logique","Logic","Ce raisonnement n'a pas de sens logique.; La logique est une matière fascinante.","This reasoning doesn't make logical sense.; \"Logic is a fascinating subject.\""  ],
  ["rythme","Rhythm","La musique a un rythme entraînant.; Dansez au rythme de la musique.","The music has a catchy rhythm.; \"Dance to the rhythm of the music.\""  ],
  ["cancer","Cancer","Le cancer est une maladie grave.; Elle a survécu au cancer du sein.","Cancer is a serious illness.; \"She survived breast cancer.\""  ],
  ["proposer","Suggest; Propose","Je vais lui proposer un café.; Il a proposé une idée intéressante lors de la réunion.","I'm going to suggest a coffee to him.; \"He proposed an interesting idea during the meeting.\""  ],
  ["peinture","Painting; Paint","Cette peinture a été réalisée par un artiste célèbre.; J'aime faire de la peinture pendant mon temps libre.","This painting was done by a famous artist.; \"I enjoy painting in my free time.\""  ],
  ["jeudi","Thursday","Jeudi est le jour de la réunion.; Nous partons en vacances jeudi prochain.","Thursday is the day of the meeting.; \"We're going on vacation next Thursday.\""  ],
  ["courageux","Brave","Il a été très courageux pendant la crise.; Les pompiers ont effectué un sauvetage courageux.","He was very brave during the crisis.; \"The firefighters performed a brave rescue.\""  ],
  ["boss","Boss; Leader","Le boss a félicité l'équipe pour son excellent travail.; Elle est une boss compétente dans le domaine des affaires.","The boss congratulated the team for their excellent work.; \"She is a competent leader in the business field.\""  ],
  ["œuvre","Work; Artwork","L'œuvre de cet artiste est exposée au musée.; La construction de l'immeuble est en œuvre.","The work of this artist is exhibited in the museum.; \"The construction of the building is in progress.\""  ],
  ["hall","Hall","Le hall de l'hôtel était magnifique.; Nous avons organisé une réception dans le hall.","The hotel's hall was magnificent.; \"We organized a reception in the hall.\""  ],
  ["figurer","Appear; Feature","Il va figurer dans le prochain film.; Cette fonction figure dans la liste des mises à jour.","He will appear in the upcoming movie.; \"This feature is listed in the updates.\""  ],
  ["ascenseur","Elevator","L'ascenseur est en panne aujourd'hui.; Prenez l'ascenseur jusqu'au cinquième étage.","The elevator is out of order today.; \"Take the elevator to the fifth floor.\""  ],
  ["garage","Garage","Le garage est plein de vieux meubles.; Nous avons garé la voiture dans le garage.","The garage is full of old furniture.; \"We parked the car in the garage.\""  ],
  ["traitement","Treatment","Le traitement médical a été efficace.; Nous devons commencer le traitement dès que possible.","Medical treatment was effective.; \"We need to start the treatment as soon as possible.\""  ],
  ["sein","Breast","Elle a ressenti une douleur dans le sein gauche.; Le cancer du sein est plus fréquent chez les femmes.","She felt pain in her left breast.; \"Breast cancer is more common in women.\""  ],
  ["nation","Nation","La nation célèbre son indépendance aujourd'hui.; Chaque nation a sa propre histoire et culture.","The nation celebrates its independence today.; \"Every nation has its own history and culture.\""  ],
  ["propriété","Property","La propriété a été vendue à un nouveau propriétaire.; La propriété comprend une grande maison et un jardin.","The property was sold to a new owner.; \"The property includes a large house and a garden.\""  ],
  ["labo","Laboratory","Le labo de recherche travaille sur de nouvelles découvertes.; J'ai visité le labo de chimie à l'université.","The research lab is working on new discoveries.; \"I visited the chemistry lab at the university.\""  ],
  ["pub","Advertisement; Pub","La pub à la télévision était très drôle.; Les pubs en ligne peuvent être gênantes.","The TV ad was very funny.; \"Online ads can be annoying.\""  ],
  ["sable","Sand","La plage est recouverte de sable blanc.; Les enfants jouent dans le sable.","The beach is covered with white sand.; \"Children play in the sand.\""  ],
  ["commission","Commission","La commission examine les allégations de corruption.; J'ai reçu une commission pour la vente de cette maison.","The commission is investigating allegations of corruption.; \"I received a commission for the sale of this house.\""  ],
  ["section","Section","La section locale organise un événement ce week-end.; Le livre a été divisé en plusieurs sections.","The local section is organizing an event this weekend.; \"The book was divided into several sections.\""  ],
  ["nager","Swim","J'aime nager dans la mer.; Il a appris à nager à un jeune âge.","I love swimming in the sea.; \"He learned to swim at a young age.\""  ],
  ["pratique","Practice","La pratique régulière améliore les compétences.; La musique nécessite beaucoup de pratique.","Regular practice improves skills.; \"Music requires a lot of practice.\""  ],
  ["écran","Screen","L'écran de l'ordinateur est cassé.; Le film sera diffusé sur grand écran.","The computer screen is broken.; \"The movie will be shown on the big screen.\""  ],
  ["chute","Fall","La chute de neige a recouvert le sol.; Sa chute a été rapide et inattendue.","The snowfall covered the ground.; \"Her fall was quick and unexpected.\""  ],
  ["ceinture","Belt","La ceinture est trop serrée.; Il porte une belle ceinture en cuir.","The belt is too tight.; \"He's wearing a nice leather belt.\""  ],
  ["brillant","Brilliant","La lumière du soleil était brillante.; Il a eu une idée brillante pour résoudre le problème.","The sunlight was brilliant.; \"He had a brilliant idea to solve the problem.\""  ],
  ["miel","Honey","Le miel est un édulcorant naturel.; Les abeilles produisent du miel dans la ruche.","Honey is a natural sweetener.; \"Bees produce honey in the hive.\""  ],
  ["crever","Burst","Le pneu a crevé sur la route.; Il a fait éclater le ballon en le perçant.","The tire burst on the road.; \"He burst the balloon by puncturing it.\""  ],
  ["estomac","Stomach","Son estomac lui faisait mal après le repas.; L'estomac est un organe digestif important.","Her stomach hurt after the meal.; \"The stomach is an important digestive organ.\""  ],
  ["salaire","Salary","Son salaire a augmenté cette année.; Le salaire minimum a été révisé par le gouvernement.","Her salary increased this year.; \"The minimum wage was revised by the government.\""  ],
  ["inventer","Invent","Il aime inventer des histoires fantastiques.; L'inventeur a breveté sa dernière création.","He likes to invent fantastic stories.; \"The inventor patented his latest creation.\""  ],
  ["étonnant","Amazing","C'est un résultat étonnant de l'expérience.; La vue depuis la montagne est vraiment étonnante.","It's an amazing result from the experiment.; \"The view from the mountain is truly amazing.\""  ],
  ["nourrir","Feed","Les parents nourrissent le bébé avec du lait maternel.; Nourrir les oiseaux au parc est une activité agréable.","Parents feed the baby with breast milk.; \"Feeding the birds in the park is a pleasant activity.\""  ],
  ["incendie","Fire","L'incendie a ravagé la forêt.; Les pompiers ont rapidement maîtrisé l'incendie.","The fire ravaged the forest.; \"Firefighters quickly controlled the fire.\""  ],
  ["pur","Pure","L'eau de source est pure et fraîche.; Son intention était pure et sincère.","Spring water is pure and fresh.; \"His intention was pure and sincere.\""  ],
  ["refaire","Redo","Je dois refaire la décoration de ma chambre.; Ils ont décidé de refaire le jardin.","I have to redo the decoration of my room.; \"They decided to redo the garden.\""  ],
  ["prénom","First name","Son prénom est unique et inhabituel.; Demandez-moi mon prénom avant de m'appeler.","Her first name is unique and unusual.; \"Ask me for my first name before calling me.\""  ],
  ["fuite","Leak","Il y a une fuite d'eau dans la cuisine.; La fuite d'informations a été corrigée par une nouvelle politique.","There is a water leak in the kitchen.; \"The information leak was corrected by a new policy.\""  ],
  ["idéal","Ideal","L'amour parfait est souvent considéré comme idéal.; Elle a un idéal de justice et d'équité.","Perfect love is often considered ideal.; \"She has an ideal of justice and fairness.\""  ],
  ["disque","Record","Le disque vinyle est un support audio classique.; Il a battu le record du monde du saut en hauteur.","The vinyl record is a classic audio medium.; \"He broke the world record in high jump.\""  ],
  ["condition","Condition","La voiture est en excellent état.; Les athlètes doivent respecter certaines conditions pour participer.","The car is in excellent condition.; \"Athletes must meet certain conditions to participate.\""  ],
  ["élève","Student","Chaque élève doit faire ses devoirs.; L'élève a obtenu la meilleure note de la classe.","Every student must do their homework.; \"The student got the highest grade in the class.\""  ],
  ["virus","Virus","Le virus informatique a infecté le réseau.; Les scientifiques étudient le comportement du virus.","The computer virus infected the network.; \"Scientists are studying the behavior of the virus.\""  ],
  ["poil","Hair; Fur","Les chats ont un beau poil doux.; Il a trouvé un poil sur son manteau.","Cats have beautiful soft fur.; \"He found a hair on his coat.\""  ],
  ["jeunesse","Youth","La jeunesse est souvent associée à l'énergie et à la créativité.; Elle travaille pour un programme de développement de la jeunesse.","Youth is often associated with energy and creativity.; \"She works for a youth development program.\""  ],
  ["ordinaire","Ordinary","La journée a été plutôt ordinaire.; Son apparence est ordinaire, mais son talent est exceptionnel.","The day has been rather ordinary.; His appearance is ordinary, but his talent is exceptional."  ],
  ["agence","Agency","L'agence de voyages organise des excursions.; L'agence immobilière propose des maisons à vendre.","The travel agency organizes excursions.; \"The real estate agency offers houses for sale.\""  ],
  ["revolver","Revolver","Il a sorti son revolver pour se défendre.; Les policiers portent souvent un revolver.","He pulled out his revolver to defend himself.; \"Police officers often carry a revolver.\""  ],
  ["loup","Wolf","Le loup hurle à la pleine lune.; Les loups chassent en meute.","The wolf howls at the full moon.; \"Wolves hunt in packs.\""  ],
  ["naturel","Natural","C'est un produit naturel sans additifs artificiels.; Le talent de danse est naturel chez elle.","It's a natural product without artificial additives.; \"Dance talent comes naturally to her.\""  ],
  ["autrefois","Formerly","Autrefois, les gens communiquaient par lettres.; Le village était autrefois un centre commercial important.","In the past, people communicated through letters.; \"The village was formerly an important trading center.\""  ],
  ["équipage","Crew","L'équipage du navire était très expérimenté.; L'équipage de l'avion a assuré un vol en toute sécurité.","The ship's crew was very experienced.; \"The airplane crew ensured a safe flight.\""  ],
  ["tempête","Storm","La tempête a provoqué des dégâts importants.; Nous resterons à l'abri pendant la tempête.","The storm caused significant damage.; \"We'll stay indoors during the storm.\""  ],
  ["central","Central","La gare centrale est très animée.; Le bureau central gère les opérations administratives.","The central station is very busy.; \"The central office handles administrative operations.\""  ],
  ["forcément","Necessarily","Le succès n'est pas forcément lié à l'argent.; Elle n'a pas forcément besoin d'aide.","Success is not necessarily tied to money.; \"She doesn't necessarily need help.\""  ],
  ["calmer","Calm","Il a besoin de se calmer après cette nouvelle.; La musique douce peut calmer les nerfs.","He needs to calm down after this news.; \"Soft music can calm the nerves.\""  ],
  ["miroir","Mirror","Le miroir reflète l'image.; Elle se regarde dans le miroir avant de sortir.","The mirror reflects the image.; \"She looks at herself in the mirror before going out.\""  ],
  ["chic","Chic","C'est une soirée chic avec code vestimentaire.; Elle a un style vestimentaire très chic.","It's a chic evening with a dress code.; \"She has a very chic fashion style.\""  ],
  ["jury","Jury","Le jury a délibéré pendant des heures.; Faire partie d'un jury est une responsabilité.","The jury deliberated for hours.; \"Being part of a jury is a responsibility.\""  ],
  ["pardonner","Forgive","Il a décidé de pardonner après des années de rancune.; Pardonner libère l'esprit de la colère.","He decided to forgive after years of resentment.; \"Forgiving frees the mind from anger.\""  ],
  ["affronter","Face; Confront","Il a dû affronter de nombreux défis dans sa carrière.; Affronter la réalité peut être difficile.","He had to face many challenges in his career.; \"Facing reality can be difficult.\""  ],
  ["lâcher","Release; Let go","Lâcher prise est important pour la santé mentale.; Elle a dû lâcher la corde pour descendre.","Letting go is important for mental health.; \"She had to release the rope to come down.\""  ],
  ["cérémonie","Ceremony","La cérémonie de remise des prix était émouvante.; La cérémonie de mariage a eu lieu à l'église.","The award ceremony was moving.; \"The wedding ceremony took place at the church.\""  ],
  ["tasse","Cup","Elle a renversé sa tasse de café sur la table.; La tasse est remplie de thé chaud.","She spilled her cup of coffee on the table.; \"The cup is filled with hot tea.\""  ],
  ["absence","Absence","Son absence a été remarquée lors de la réunion.; L'absence de réponse a suscité des inquiétudes.","Her absence was noticed during the meeting.; \"The absence of a response raised concerns.\""  ],
  ["comportement","Behavior","Son comportement en classe est exemplaire.; Le comportement des enfants peut être influencé par l'environnement.","His behavior in class is exemplary.; \"Children's behavior can be influenced by the environment.\""  ],
  ["correct","Correct","C'est la réponse correcte à la question.; Il est important d'avoir la posture correcte.","That's the correct answer to the question.; \"It's important to have the correct posture.\""  ],
  ["récompense","Reward","La récompense était bien méritée.; Les enfants ont reçu une récompense pour leurs efforts.","The reward was well-deserved.; \"The children received a reward for their efforts.\""  ],
  ["national","National","La fête nationale est célébrée avec des feux d'artifice.; L'équipe nationale a remporté le championnat.","National day is celebrated with fireworks.; \"The national team won the championship.\""  ],
  ["masque","Mask","Elle porte un masque pour se protéger du virus.; Le bal masqué était plein de mystère.","She wears a mask to protect herself from the virus.; \"The masked ball was full of mystery.\""  ],
  ["raisonnable","Reasonable","C'est une décision raisonnable compte tenu de la situation.; Il a une approche raisonnable dans la résolution des problèmes.","It's a reasonable decision given the situation.; \"He has a reasonable approach to problem-solving.\""  ],
  ["bijou","Jewel","Le bijou était orné de diamants étincelants.; Elle porte un bijou hérité de sa grand-mère.","The jewel was adorned with sparkling diamonds.; \"She wears a jewel inherited from her grandmother.\""  ],
  ["mystère","Mystery","La disparition reste un mystère non résolu.; Le roman policier est plein de mystère.","The disappearance remains an unsolved mystery.; \"The detective novel is full of mystery.\""  ],
  ["cabine","Cabin","La cabine dans les bois était un refuge tranquille.; La cabine du pilote offre une vue imprenable sur le paysage.","The cabin in the woods was a peaceful retreat.; \"The pilot's cabin offers a breathtaking view of the landscape.\""  ],
  ["étudiant","Student","L'étudiant a travaillé dur pour réussir l'examen.; Les étudiants participent à des activités parascolaires.","The student worked hard to pass the exam.; \"Students participate in extracurricular activities.\""  ],
  ["parfum","Perfume","Elle porte un parfum délicat.; Le parfum des fleurs embaume l'air.","She wears a delicate perfume.; \"The scent of flowers perfumes the air.\""  ],
  ["avouer","Admit","Il a décidé d'avouer la vérité.; Avouer ses erreurs est un signe de maturité.","He decided to admit the truth.; \"Admitting one's mistakes is a sign of maturity.\""  ],
  ["vengeance","Revenge","La vengeance n'apporte pas la paix intérieure.; Il a juré de prendre sa revanche.","Revenge doesn't bring inner peace.; \"He swore to take revenge.\""  ],
  ["nu","Naked","Il se tenait nu devant le miroir.; Le bébé dort nu pendant la sieste.","He stood naked in front of the mirror.; \"The baby sleeps naked during the nap.\""  ],
  ["pressé","Hurried","Je suis pressé, je dois partir rapidement.; Les gens sont souvent pressés le matin.","I'm in a hurry, I have to leave quickly.; \"People are often in a hurry in the morning.\""  ],
  ["qualité","Quality","La qualité du produit est excellente.; Il a été reconnu pour la qualité de son travail.","The quality of the product is excellent.; \"He has been recognized for the quality of his work.\""  ],
  ["couvert","Covered","La table était couverte de fleurs.; Le ciel était couvert de nuages gris.","The table was covered with flowers.; \"The sky was covered with gray clouds.\""  ],
  ["couloir","Hallway","Il marchait rapidement dans le couloir.; Le couloir était éclairé par une lumière douce.","He was walking quickly in the hallway.; \"The hallway was lit by a soft light.\""  ],
  ["prier","Pray","Elle s'agenouilla pour prier.; Il a l'habitude de prier avant le coucher.","She knelt down to pray.; \"He usually prays before bedtime.\""  ],
  ["technique","Technique","Cette technique est très efficace.; Il a étudié la technique pendant des années.","This technique is very effective.; \"He studied the technique for years.\""  ],
  ["œuf","Egg","Elle a cassé un œuf dans le bol.; Les œufs sont une source de protéines.","She cracked an egg into the bowl.; \"Eggs are a source of protein.\""  ],
  ["réaction","Reaction","Sa réaction à la nouvelle a été surprenante.; La réaction chimique produit de la chaleur.","His reaction to the news was surprising.; \"The chemical reaction produces heat.\""  ],
  ["doué","Talented","Il est doué pour la musique.; Les enfants doués ont besoin de défis.","He is talented in music.; \"Talented children need challenges.\""  ],
  ["attente","Waiting","Il a attendu patiemment à l'arrêt de bus.; L'attente peut être longue à l'aéroport.","He waited patiently at the bus stop.; \"Waiting can be long at the airport.\""  ],
  ["nôtre","Ours","Cette maison est la nôtre.; L'équipe a remporté la victoire, et la célébration est la nôtre.","This house is ours.; \"The team won the victory and the celebration is ours.”"  ],
  ["race","Race","Il ne faut pas juger les gens selon leur race.; La course de chevaux était passionnante.","People should not be judged based on their race.; \"The horse race was exciting.\""  ],
  ["moquer","Mock","Il aime se moquer des autres.; Se moquer des gens n'est pas gentil.","He likes to mock others.; \"Mocking people is not nice.\""  ],
  ["coller","Stick","Elle a utilisé de la colle pour coller les morceaux.; Les timbres doivent être collés sur l'enveloppe.","She used glue to stick the pieces together.; \"Stamps must be stuck on the envelope.\""  ],
  ["poitrine","Chest","Il a ressenti une douleur à la poitrine.; Elle a un tatouage sur la poitrine.","He felt pain in his chest.; \"She has a tattoo on her chest.\""  ],
  ["enterrement","Funeral","L'enterrement a eu lieu au cimetière.; Les funérailles étaient empreintes d'émotion.","The funeral took place at the cemetery.; \"The funeral was emotional.\""  ],
  ["installer","Install","Il a aidé à installer les meubles dans la nouvelle maison.; Installer un logiciel est facile.","He helped install the furniture in the new house.; \"Installing software is easy.\""  ],
  ["noble","Noble","Il avait des manières nobles.; La cause était noble et juste.","He had noble manners.; \"The cause was noble and just.\""  ],
  ["large","Wide","La rue était large et animée.; Elle a un sourire large et contagieux.","The street was wide and bustling.; \"She has a wide and contagious smile.\""  ],
  ["urgent","Urgent","C'est un problème urgent à résoudre.; L'appel était urgent, elle devait répondre immédiatement.","It's an urgent problem to solve.; \"The call was urgent; she had to answer immediately.\""  ],
  ["pointe","Tip","La pointe du stylo est fine.; Elle a mis une pointe de sucre dans le café.","The tip of the pen is fine.; \"She added a tip of sugar to the coffee.\""  ],
  ["digne","Worthy","Elle est une personne digne de confiance.; Son comportement était digne malgré les difficultés.","She is a trustworthy person.; \"Her behavior was worthy despite the difficulties.\""  ],
  ["uniquement","Only","Ces informations sont destinées uniquement aux membres.; L'accès est réservé uniquement au personnel autorisé.","This information is intended only for members.; \"Access is restricted only to authorized personnel.\""  ],
  ["riz","Rice","Le riz est un aliment de base dans de nombreuses cuisines.; Elle a préparé un délicieux plat de riz.","Rice is a staple in many cuisines.; \"She prepared a delicious rice dish.\""  ],
  ["plaisant","Pleasant","Le temps était plaisant pour une promenade.; C'est toujours plaisant de passer du temps en famille.","The weather was pleasant for a walk.; \"It's always pleasant to spend time with family.\""  ],
  ["condamner","Condemn","La société condamne les actes de violence.; Il a été condamné à une peine de prison.","Society condemns acts of violence.; \"He was sentenced to prison.\""  ],
  ["puce","Flea","Le chien a attrapé des puces dans le jardin.; Les puces peuvent causer des démangeaisons.","The dog caught fleas in the garden.; \"Fleas can cause itching.\""  ],
  ["ex-","Former","Il a travaillé comme avocat ex-ministre.; Elle est l'ex-propriétaire du magasin.","He worked as a lawyer, former minister.; \"She is the former owner of the store.\""  ],
  ["origine","Origin","L'origine du problème est difficile à déterminer.; Il a étudié l'origine des espèces.","The origin of the problem is difficult to determine.; \"He studied the origin of species.\""  ],
  ["attitude","Attitude","Sa nouvelle attitude a surpris tout le monde.; L'attitude positive peut changer la journée.","His new attitude surprised everyone.; \"A positive attitude can change the day.\""  ],
  ["absurde","Absurd","C'est une situation complètement absurde.; Son comportement était absurde et incompréhensible.","It's a completely absurd situation.; \"His behavior was absurd and incomprehensible.\""  ],
  ["union","Union","L'union des travailleurs a abouti à de meilleures conditions.; L'union fait la force.","The union of workers led to better conditions.; \"Unity is strength.\""  ],
  ["bagnole","Car","Il a acheté une nouvelle bagnole.; La bagnole était garée devant la maison.","He bought a new car.; \"The car was parked in front of the house.\""  ],
  ["maximum","Maximum","La vitesse maximale autorisée est de 120 km/h.; Il a atteint le niveau maximum dans son domaine.","The maximum authorized speed is 120 km/h.; \"He reached the maximum level in his field.\""  ],
  ["effort","Effort","Elle a mis beaucoup d'effort dans ce projet.; Le succès nécessite un effort constant.","She put a lot of effort into this project.; \"Success requires constant effort.\""  ],
  ["vélo","Bicycle","Il a réparé son vélo pour la balade.; Elle préfère aller au travail à vélo.","He fixed his bicycle for the ride.; \"She prefers to go to work by bike.\""  ],
  ["esclave","Slave","L'abolition de l'esclavage a marqué un tournant dans l'histoire.; Il a vécu en tant qu'esclave pendant de nombreuses années.","The abolition of slavery marked a turning point in history.; \"He lived as a slave for many years.\""  ],
  ["foot","Football","Le foot est un sport très populaire.; Ils regardent un match de foot à la télévision.","Football is a very popular sport.; \"They are watching a football match on television.\""  ],
  ["éducation","Education","L'éducation est la clé du développement.; Elle travaille dans le domaine de l'éducation.","Education is the key to development.; \"She works in the field of education.\""  ],
  ["réellement","Truly","Il l'a réellement apprécié.; La situation est réellement difficile.","He truly enjoyed it.; \"The situation is truly difficult.\""  ],
  ["paire","Pair","Elle a acheté une nouvelle paire de chaussures.; Les chaussettes sont vendues par paire.","She bought a new pair of shoes.; \"Socks are sold in pairs.\""  ],
  ["moche","Ugly","Elle trouve cette robe moche.; La météo est moche aujourd'hui.","She finds this dress ugly.; \"The weather is ugly today.\""  ],
  ["blond","Blond","Il a les cheveux blonds depuis l'enfance.; La fille aux yeux bleus a des cheveux blonds.","He has had blond hair since childhood.; \"The girl with blue eyes has blond hair.\""  ],
  ["boule","Ball","Il a lancé la boule loin dans le parc.; La boule de cristal était magnifique.","He threw the ball far into the park.; \"The crystal ball was beautiful.\""  ],
  ["déclaration","Declaration","La déclaration a été signée par les deux parties.; La déclaration d'amour était émouvante.","The declaration was signed by both parties.; \"The love declaration was moving.\""  ],
  ["chasser","Hunt","Il aime chasser le week-end.; Chasser les papillons est une activité amusante pour les enfants.","He enjoys hunting on the weekend.; \"Hunting butterflies is a fun activity for children.\""  ],
  ["site","Site","Le site archéologique a révélé des découvertes importantes.; Le site web est en cours de maintenance.","The archaeological site revealed important discoveries.; \"The website is undergoing maintenance.\""  ],
  ["scientifique","Scientific","La méthode scientifique est basée sur l'observation.; Elle a une approche scientifique pour résoudre les problèmes.","The scientific method is based on observation.; \"She has a scientific approach to problem-solving.\""  ],
  ["scientifique","Traitor","Le traître a été découvert par ses collègues.; La trahison est difficile à pardonner.","The traitor was discovered by his colleagues.; \"Betrayal is hard to forgive.\""  ],
  ["traître","Inspector","L'inspecteur a enquêté sur l'affaire.; L'inspecteur de l'éducation évalue les écoles.","The inspector investigated the case.; \"The education inspector evaluates schools.\""  ],
  ["inspecteur","Breakdown","La panne de la voiture a gâché leur voyage.; Il y a eu une panne de courant dans le quartier.","The car breakdown spoiled their trip.; \"There was a power breakdown in the neighborhood.\""  ],
  ["panne","Linger","Il aime traîner dans les cafés.; La musique fait traîner les souvenirs.","He likes to linger in cafes.; \"Music makes memories linger.\""  ],
  ["traîner","Cellar","La cave était fraîche en été.; Il stocke ses vins dans la cave.","The cellar was cool in summer.; \"He stores his wines in the cellar.\""  ],
  ["cave","Tape","Il écoutait la musique sur cassette.; La cassette vidéo contenait des souvenirs précieux.","He listened to music on tape.; \"The video cassette contained precious memories.\""  ],
  ["cassette","Trial","L'essai clinique a montré des résultats prometteurs.; Il a réussi son essai sur le terrain.","The clinical trial showed promising results.; \"He passed his trial on the field.\""  ],
  ["essai","Museum","Le musée abrite des œuvres d'art exceptionnelles.; Ils ont visité le musée d'histoire naturelle.","The museum houses exceptional works of art.; \"They visited the natural history museum.\""  ],
  ["musée","Miserable","Le temps pluvieux rendait la journée minable.; C'est une excuse minable pour ne pas agir.","The rainy weather made the day miserable.; \"It's a miserable excuse for not taking action.\""  ],
  ["minable","Summit","Le sommet de la montagne était enneigé.; Ils ont atteint le sommet après une longue ascension.","The summit of the mountain was snowy.; \"They reached the summit after a long climb.\""  ],
  ["minable","Hurt","Il a accidentellement blessé son doigt avec un couteau.; Les paroles blessantes peuvent laisser des cicatrices.","He accidentally hurt his finger with a knife.; \"Hurtful words can leave scars.\""  ],
  ["sommet","Scuffle","Une bagarre a éclaté à la sortie du bar.; La bagarre a été rapidement maîtrisée par la sécurité.","A scuffle broke out at the bar exit.; \"The scuffle was quickly brought under control by security.\""  ],
  ["blesser","Production","La production de voitures a augmenté ce trimestre.; La production artistique nécessite de la créativité.","Car production increased this quarter.; \"Artistic production requires creativity.\""  ],
  ["bagarre","Rank","Il a atteint le rang de général dans l'armée.; Les étagères sont organisées par rangées.","He reached the rank of general\n"  ],
  ["production","manufacturing;theatrical presentation","La production de voitures a augmenté ce mois-ci.; La production de la pièce de théâtre a été un grand succès.","Car manufacturing has increased this month. The theatrical production of the play was a great success."  ],
  ["rang","row;rank","Les arbres sont plantés en rangées régulières.; Il a atteint le rang de général dans l'armée.","Trees are planted in regular rows. He reached the rank of general in the army."  ],
  ["Bible","sacred scripture;book or authority","La Bible est un texte sacré pour de nombreuses religions.; Cet ouvrage est la Bible de la cuisine française.","The Bible is a sacred text for many religions. This book is the Bible of French cuisine."  ],
  ["lisse","smooth;shiny","La pierre polie est lisse au toucher.; La surface de l'eau était lisse comme un miroir.","The polished stone is smooth to the touch. The water's surface was smooth as a mirror."  ],
  ["livrer","to deliver;to surrender","Il va livrer le colis demain matin.; Il a décidé de se livrer à l'ennemi.","He will deliver the package tomorrow morning. He decided to surrender to the enemy."  ],
  ["venger","to avenge;to revenge","Il veut venger son ami injustement traité.; Elle cherche à se venger de l'humiliation.","He wants to avenge his unfairly treated friend. She is seeking to revenge the humiliation."  ],
  ["show","entertainment event;to show","Le show de ce soir promet d'être exceptionnel.; Elle va lui montrer comment faire.","Tonight's entertainment show promises to be exceptional. She will show him how to do it."  ],
  ["flotte","fleet;to float","La flotte maritime est en route.; Les bateaux flottent sur l'eau calme.","The maritime fleet is on the way. The boats float on the calm water."  ],
  ["humour","humor;temperament","Son humour est toujours contagieux.; Il a un bon sens de l'humour.","His humor is always contagious. He has a good sense of humor."  ],
  ["naturellement","naturally;of course","Il a répondu naturellement à la question.; Bien sûr, elle viendra naturellement.","He naturally answered the question. Of course, she will come, naturally."  ],
  ["résoudre","to solve;to resolve","Il a réussi à résoudre le problème difficile.; Ils veulent résoudre leurs différends de manière pacifique.","He managed to solve the difficult problem. They want to resolve their disputes peacefully."  ],
  ["commandement","command;leadership","Le commandement militaire est bien organisé.; Son commandement a conduit à la victoire.","The military command is well-organized. His command led to victory."  ],
  ["remplacer","to replace;to substitute","Elle va remplacer la vieille machine.; Il doit être prêt à remplacer le titulaire à tout moment.","She will replace the old machine. He must be ready to substitute for the regular player at any time."  ],
  ["mandat","mandate;term","Son mandat politique se termine l'année prochaine.; Le mandat du président dure quatre ans.","His political mandate ends next year. The president's term lasts four years."  ],
  ["fruit","fruit;result","Cueillez les fruits mûrs.; Le succès est le fruit du travail acharné.","Pick the ripe fruits. Success is the fruit of hard work."  ],
  ["plaindre","to pity;to complain","Je la plains pour ses difficultés.; Il ne cesse de se plaindre de son travail.","I pity her for her difficulties. He never stops complaining about his job."  ],
  ["partage","sharing;division","Le partage des responsabilités est équitable.; Ils ont décidé de faire un partage équitable de l'héritage.","The sharing of responsibilities is fair. They decided to make a fair division of the inheritance."  ],
  ["bourse","stock exchange;pocket","La bourse est fermée le week-end.; Il a trouvé de l'argent dans sa bourse.","The stock exchange is closed on the weekend. He found money in his pocket."  ],
  ["jungle","jungle;confusion","La jungle est dense et dangereuse.; C'est une jungle là-bas avec toutes ces règles contradictoires.","The jungle is dense and dangerous. It's a jungle out there with all these contradictory rules."  ],
  ["aimable","kind;pleasant","Elle est toujours aimable avec les autres.; C'est une personne aimable et sociable.","She is always kind to others. She is a kind and sociable person."  ],
  ["guide","guide;to guide","Le guide touristique connaît bien la région.; Il va vous guider à travers la forêt.","The tour guide knows the region well. He will guide you through the forest."  ],
  ["gâcher","to spoil;to waste","Ne gâche pas la surprise!; Il a gâché son talent en ne travaillant pas dur.","Don't spoil the surprise! He wasted his talent by not working hard."  ],
  ["adulte","adult;grown-up","En tant qu'adulte, il doit prendre ses propres décisions.; Être adulte comporte des responsabilités.","As an adult, he must make his own decisions. Being an adult comes with responsibilities."  ],
  ["pomme","apple;core","Elle a mangé une délicieuse pomme.; Il a jeté le trognon de la pomme.","She ate a delicious apple. He threw away the apple core."  ],
  ["auteur","author;originator","L'auteur du livre est célèbre.; Il est l'auteur de cette idée brillante.","The author of the book is famous. He is the originator of this brilliant idea."  ],
  ["jugement","judgment;opinion","Son jugement est toujours impartial.; Il a donné son jugement sur la question.","His judgment is always impartial. He gave his opinion on the matter."  ],
  ["organisation","organization;arrangement","L'organisation de l'événement était impeccable.; Le plan nécessite une bonne organisation.","The organization of the event was impeccable. The plan requires good arrangement."  ],
  ["vague","wave;vague","Les vagues de l'océan sont magnifiques.; Il a une idée vague de ce qu'il veut faire.","The ocean waves are beautiful. He has a vague idea of what he wants to do."  ],
  ["légende","legend;caption","La légende de ce héros est connue de tous.; N'oublie pas de mettre une légende à la photo.","The legend of this hero is known to all. Don't forget to put a caption on the photo."  ],
  ["botte","boot;bunch","Elle porte des bottes en cuir.; Une botte de carottes est dans le réfrigérateur.","She is wearing leather boots. A bunch of carrots is in the fridge."  ],
  ["barbe","beard;barb","Il a une barbe bien taillée.; La barbe du rasoir est très tranchante.","He has a well-groomed beard. The razor's barb is very sharp."  ],
  ["territoire","territory;area","Les loups protègent leur territoire.; C'est le territoire des coyotes.","Wolves protect their territory. It's the territory of the coyotes."  ],
  ["blessure","injury;wound","La blessure nécessite des soins médicaux.; Il a subi une blessure grave lors de l'accident.","The injury requires medical care. He suffered a serious wound in the accident."  ],
  ["géant","giant;enormous","Les arbres de la forêt sont géants.; C'est un pas de géant pour l'humanité.","The trees in the forest are giants. It's a giant step for humanity."  ],
  ["moto","motorcycle;motion","Il conduit une moto rapide.; La motion a été adoptée à l'unanimité.","He rides a fast motorcycle. The motion was unanimously adopted."  ],
  ["communauté","community","La communauté locale organise un événement.; Ils sont fiers de faire partie de cette communauté.","The local community is organizing an event. They are proud to be part of this community."  ],
  ["cage","cage","Le lion est dans la cage.; Elle a acheté une cage pour son hamster.","The lion is in the cage. She bought a cage for her hamster."  ],
  ["désirer","to desire","Il désire une vie meilleure.; Elle désire rencontrer de nouvelles personnes.","He desires a better life. She desires to meet new people."  ],
  ["rayon","aisle;range","Le rayon des produits laitiers est là-bas.; Les vêtements sont rangés par rayon.","The dairy products aisle is over there. Clothes are arranged by aisle."  ],
  ["sorcier","wizard;sorcerer","Le sorcier jeta un sort magique.; Harry Potter est un célèbre sorcier.","The wizard cast a magical spell. Harry Potter is a famous sorcerer."  ],
  ["pile","battery;stack","Ma lampe ne fonctionne plus, la pile est morte.; Il y a une pile de livres sur la table.","My lamp is not working anymore; the battery is dead. There is a stack of books on the table."  ],
  ["kilo","kilogram","Il pèse 70 kilos.; J'ai acheté un kilo de pommes.","He weighs 70 kilograms. I bought a kilogram of apples."  ],
  ["écrivain","writer","Cet écrivain a remporté de nombreux prix.; Chaque écrivain a son propre style.","This writer has won many awards. Every writer has their own style."  ],
  ["forcer","to force","Il a dû forcer la porte pour entrer.; Ne forcez pas la serrure, appelez un professionnel.","He had to force the door to enter. Don't force the lock, call a professional."  ],
  ["respecter","to respect","Il faut respecter les règles.; Elle respecte la diversité des opinions.","Rules must be respected. She respects the diversity of opinions."  ],
  ["limite","limit","Il a atteint la limite de vitesse.; La limite d'âge pour participer est de 18 ans.","He reached the speed limit. The age limit for participation is 18 years."  ],
  ["orange","orange;color","Il a mangé une orange pour le petit-déjeuner.; Le coucher de soleil était d'une belle teinte orange.","He ate an orange for breakfast. The sunset had a beautiful orange hue."  ],
  ["associé","associate;partner","Il est mon associé en affaires.; Elle est devenue son associée dans cette aventure.","He is my business associate. She became his partner in this venture."  ],
  ["bénir","to bless","Le prêtre va bénir le mariage.; Les parents bénissent leurs enfants avant de dormir.","The priest will bless the marriage. Parents bless their children before sleeping."  ],
  ["posséder","to own","Il possède une grande collection de timbres.; Elle rêve de posséder sa propre entreprise.","He owns a large stamp collection. She dreams of owning her own business."  ],
  ["conseiller","to advise;advisor","Il peut conseiller sur les investissements.; Elle est une excellente conseillère en carrière.","He can advise on investments. She is an excellent career advisor."  ],
  ["escalier","staircase","L'escalier mène au deuxième étage.; Ne courez pas dans l'escalier.","The staircase leads to the second floor. Don't run on the stairs."  ],
  ["explication","explanation","Il a donné une explication détaillée du problème.; L'explication de la professeure était claire.","He gave a detailed explanation of the problem. The teacher's explanation was clear."  ],
  ["voyager","to travel","Elle aime voyager et découvrir de nouvelles cultures.; Nous avons l'intention de voyager en Europe l'année prochaine.","She loves to travel and discover new cultures. We plan to travel to Europe next year."  ],
  ["attirer","to attract","Les couleurs vives peuvent attirer l'attention.; Son talent a attiré de nombreux admirateurs.","Bright colors can attract attention. His talent has attracted many admirers."  ],
  ["poursuivre","to pursue","Il veut poursuivre une carrière artistique.; Elle poursuit ses rêves malgré les obstacles.","He wants to pursue an artistic career. She pursues her dreams despite obstacles."  ],
  ["professionnel","professional","Il est un joueur de football professionnel.; Le discours était très professionnel.","He is a professional football player. The speech was very professional."  ],
  ["incident","incident","L'incident a été signalé à la police.; Un petit incident a retardé le vol.","The incident was reported to the police. A minor incident delayed the flight."  ],
  ["colline","hill","La maison est située en haut de la colline.; Les enfants aiment rouler en bas de la colline.","The house is located at the top of the hill. Children enjoy rolling down the hill."  ],
  ["autorisation","authorization;permission","Il a obtenu l'autorisation de construire.; L'autorisation parentale est requise pour les mineurs.","He obtained the authorization to build. Parental permission is required for minors."  ],
  ["assassiner","to assassinate","L'assassinat du président a choqué le pays.; Il a été accusé d'assassiner un homme d'affaires influent.","The assassination of the president shocked the country. He was accused of assassinating an influential businessman."  ],
  ["ministère","ministry","Le ministère de la Santé gère les politiques de santé.; Elle travaille au ministère des Finances.","The Ministry of Health manages health policies. She works at the Ministry of Finance."  ],
  ["exprès","on purpose;intentionally","Il l'a fait exprès pour attirer l'attention.; C'était fait exprès pour être drôle.","He did it on purpose to attract attention. It was done intentionally to be funny."  ],
  ["football","football;soccer","Le football américain est populaire aux États-Unis.; Elle joue au football depuis son enfance.","American football is popular in the United States. She has been playing soccer since her childhood."  ],
  ["rond","round;circle","La table est ronde.; Il a dessiné un joli rond sur la feuille de papier.","The table is round. He drew a nice circle on the paper."  ],
  ["exercice","exercise;drill","Faire de l'exercice régulièrement est bon pour la santé.; Les pompiers font des exercices d'entraînement.","Exercising regularly is good for health. Firefighters do training drills."  ],
  ["fichu","scarf;damned","Elle porte un fichu rouge autour du cou.; Le projet est fichu à cause de problèmes imprévus.","She wears a red scarf around her neck. The project is damned due to unforeseen problems."  ],
  ["vote","vote","Le vote a eu lieu hier.; Chacun a le droit de vote.","The vote took place yesterday. Everyone has the right to vote."  ],
  ["domaine","domain;field","Il est expert dans son domaine.; Les avancées technologiques dans le domaine médical sont impressionnantes.","He is an expert in his field. Technological advances in the medical domain are impressive."  ],
  ["retenir","to retain;to remember","Il a du mal à retenir les noms.; Essayez de retenir cette information importante.","He has difficulty retaining names. Try to remember this important information."  ],
  ["religion","religion","La liberté de religion est un droit fondamental.; Les gens pratiquent différentes formes de religion dans le monde.","Freedom of religion is a fundamental right. People practice different forms of religion around the world."  ],
  ["clairement","clearly","Il a expliqué le concept clairement.; Les instructions étaient formulées clairement.","He explained the concept clearly. The instructions were formulated clearly."  ],
  ["furieux","furious","Il était furieux après l'incident.; Elle a réagi de manière furieuse à la nouvelle.","He was furious after the incident. She reacted furiously to the news."  ],
  ["pisser","to pee","Le chien a besoin de pisser.; Il a été vu en train de pisser dans la rue.","The dog needs to pee. He was seen peeing in the street."  ],
  ["bol","bowl","Elle a mangé de la soupe dans un bol.; Le bol est rempli de céréales.","She ate soup in a bowl. The bowl is filled with cereal."  ],
  ["circonstance","circumstance;occasion","Dans cette circonstance particulière, il a agi ainsi.; C'était une circonstance spéciale pour célébrer leur réussite.","In this particular circumstance, he acted this way. It was a special occasion to celebrate their success."  ],
  ["excellence","excellence","L'école vise l'excellence académique.; Elle a été récompensée pour son excellence dans le domaine des sciences.","The school aims for academic excellence. She was rewarded for her excellence in the field of sciences."  ],
  ["cimetière","cemetery","Le cimetière est un lieu de repos éternel.; Ils ont enterré leur chien dans le cimetière familial.","The cemetery is a place of eternal rest. They buried their dog in the family cemetery."  ],
  ["classique","classic","La musique classique est intemporelle.; Elle porte une robe classique pour l'occasion.","Classical music is timeless. She is wearing a classic dress for the occasion."  ],
  ["arrestation","arrest","L'arrestation du suspect a été effectuée hier soir.; Ils ont procédé à l'arrestation du criminel.","The arrest of the suspect was made last night. They carried out the arrest of the criminal."  ],
  ["taper","to type;to hit","Elle aime taper rapidement sur le clavier.; Il a tapé fort sur la porte.","She likes to type quickly on the keyboard. He hit the door hard."  ],
  ["cabinet","cabinet","Le cabinet du médecin est bien équipé.; Il travaille dans un cabinet d'avocats renommé.","The doctor's cabinet is well-equipped. He works in a renowned law firm's cabinet."  ],
  ["comédie","comedy","La comédie romantique est son genre préféré.; Ils ont regardé une comédie hilarante hier soir.","Romantic comedy is her favorite genre. They watched a hilarious comedy last night."  ],
  ["bond","leap;jump","Le chat a fait un bond pour attraper la souris.; Il a fait un bond de joie en apprenant la nouvelle.","The cat made a leap to catch the mouse. He made a joyful jump upon hearing the news."  ],
  ["tunnel","tunnel","Le train traverse un long tunnel.; Ils ont exploré le tunnel abandonné.","The train goes through a long tunnel. They explored the abandoned tunnel."  ],
  ["amant","lover","Ils étaient des amants passionnés.; Elle a un amant secret.","They were passionate lovers. She has a secret lover."  ],
  ["tandis que","while","Il travaille tandis que les autres se reposent.; Tandis que je lisais, elle regardait la télévision.","He works while others rest. While I was reading, she was watching TV."  ],
  ["incapable","incapable","Il se sentait incapable de prendre une décision.; Elle est incapable de résister au chocolat.","He felt incapable of making a decision. She is incapable of resisting chocolate."  ],
  ["drapeau","flag","Le drapeau national flotte fièrement.; Ils ont agité le drapeau pendant la cérémonie.","The national flag flies proudly. They waved the flag during the ceremony."  ],
  ["échouer","to fail","Il ne veut pas échouer dans ses études.; Elle a peur d'échouer dans son projet.","He doesn't want to fail in his studies. She is afraid of failing in her project."  ],
  ["auparavant","previously","Il avait déjà visité Paris auparavant.; Auparavant, elle travaillait dans le domaine de la finance.","He had already visited Paris previously. Previously, she worked in the finance industry."  ],
  ["risqué","risky","Investir dans cette startup est risqué.; Porter une robe rouge était un choix risqué.","Investing in this startup is risky. Wearing a red dress was a risky choice."  ],
  ["magazine","magazine","Elle aime lire des magazines de mode.; Le magazine mensuel a publié un article intéressant.","She likes to read fashion magazines. The monthly magazine published an interesting article."  ],
  ["remplir","to fill","Il doit remplir ce formulaire.; Elle a réussi à remplir le verre sans renverser une goutte.","He has to fill out this form. She managed to fill the glass without spilling a drop."  ],
  ["véhicule","vehicle","Le véhicule tout-terrain est idéal pour la randonnée.; Le camion est un véhicule de livraison.","The all-terrain vehicle is ideal for hiking. The truck is a delivery vehicle."  ],
  ["précieux","precious","Le temps est un bien précieux.; Elle porte un collier avec des pierres précieuses.","Time is a precious asset. She is wearing a necklace with precious stones."  ],
  ["éternité","eternity","Il a attendu une éternité pour la réponse.; L'amour éternel est rare.","He waited an eternity for the answer. Eternal love is rare."  ],
  ["cité","city","Paris est une belle cité.; La cité médiévale attire de nombreux touristes.","Paris is a beautiful city. The medieval city attracts many tourists."  ],
  ["huile","oil","L'huile d'olive est utilisée dans la cuisine méditerranéenne.; Le moteur a besoin d'une vidange d'huile.","Olive oil is used in Mediterranean cuisine. The engine needs an oil change."  ],
  ["proposition","proposal","Il a fait une proposition de mariage romantique.; La proposition de projet a été bien reçue.","He made a romantic marriage proposal. The project proposal was well-received."  ],
  ["soutien","support","Il a besoin de soutien dans cette période difficile.; Son soutien indéfectible a été précieux.","He needs support in this difficult time. His unwavering support has been invaluable."  ],
  ["hauteur","height","La montagne atteint une grande hauteur.; La tour a une hauteur impressionnante.","The mountain reaches a great height. The tower has an impressive height."  ],
  ["échec","failure","L'échec n'est pas la fin, mais un nouveau départ.; Il a surmonté plusieurs échecs dans sa carrière.","Failure is not the end but a new beginning. He has overcome several failures in his career."  ],
  ["fâcher","to anger","Il ne voulait pas la fâcher.; Ses commentaires ont fini par la fâcher.","He didn't want to anger her. His comments eventually angered her."  ],
  ["culture","culture","La culture japonaise est riche et diversifiée.; Ils explorent la culture locale lors de leurs voyages.","Japanese culture is rich and diverse. They explore the local culture during their travels."  ],
  ["précis","precise","Il a donné des instructions précises.; La réponse était précise et claire.","He gave precise instructions. The answer was precise and clear."  ],
  ["langage","language","Le langage des signes est utilisé par les sourds-muets.; Apprendre une nouvelle langue peut enrichir l'esprit.","Sign language is used by the deaf. Learning a new language can enrich the mind."  ],
  ["objectif","goal","Atteindre cet objectif demande de la persévérance.; Son objectif principal est d'obtenir son diplôme.","Achieving this goal requires perseverance. His main goal is to obtain his degree."  ],
  ["profondément","deeply","Il est profondément attaché à sa famille.; Elle est profondément touchée par le geste.","He is deeply attached to his family. She is deeply touched by the gesture."  ],
  ["souffrance","suffering","La souffrance peut être surmontée avec le temps.; Ils ont enduré d'immenses souffrances pendant la guerre.","Suffering can be overcome with time. They endured immense suffering during the war."  ],
  ["gang","gang","La police a arrêté un gang de voleurs."," \"The police arrested a gang of thieves.\""  ],
  ["pétrole","petroleum, oil","Le pétrole est une source d'énergie importante."," \"Petroleum is an important source of energy.\""  ],
  ["entièrement","completely, entirely","Elle est entièrement dédiée à son travail."," \"She is entirely dedicated to her work.\""  ],
  ["épreuve","test, trial","L'examen était une épreuve difficile."," \"The exam was a difficult test.\""  ],
  ["copier","to copy","Il a besoin de copier ces notes."," \"He needs to copy those notes.\""  ],
  ["bibliothèque","library","Je vais à la bibliothèque pour emprunter des livres."," \"I am going to the library to borrow some books.\""  ],
  ["énerver","to annoy, to irritate","Il est facile de m'énerver."," \"It's easy to annoy me.\""  ],
  ["altesse","highness","L'altesse royale a visité l'école."," \"Her highness visited the school.\""  ],
  ["électrique","electric","La voiture fonctionne avec un moteur électrique."," \"The car runs on an electric motor.\""  ],
  ["ranger","to tidy up, to organize","Il faut ranger la chambre avant le dîner."," \"You need to tidy up the room before dinner.\""  ],
  ["enterrer","to bury","Nous devons enterrer le trésor."," \"We have to bury the treasure.\""  ],
  ["assistant","assistant","Elle travaille comme assistante dans une entreprise informatique."," \"She works as an assistant in a computer company.\""  ],
  ["vallée","valley","La vallée était entourée de montagnes."," \"The valley was surrounded by mountains.\""  ],
  ["pizza","pizza","J'adore manger une bonne pizza."," \"I love eating a good pizza.\""  ],
  ["golf","golf","Il joue au golf chaque week-end."," \"He plays golf every weekend.\""  ],
  ["las","tired","Je suis las de cette longue journée."," \"I am tired of this long day.\""  ],
  ["soigner","to treat, to care for","Le médecin va soigner votre blessure."," \"The doctor will treat your injury.\""  ],
  ["loyer","rent","Le loyer est dû à la fin du mois."," \"The rent is due at the end of the month.\""  ],
  ["producteur","producer","Il est producteur de films."," \"He is a film producer.\""  ],
  ["quart","quarter","Il est parti au premier quart de la journée."," \"He left in the first quarter of the day.\""  ],
  ["critique","critical","La situation est très critique."," \"The situation is very critical.\""  ],
  ["cardiaque","cardiac","Il a eu un problème cardiaque."," \"He had a cardiac problem.\""  ],
  ["plateau","plateau","Le serveur a apporté les plats sur un plateau."," \"The waiter brought the dishes on a tray.\""  ],
  ["auto","car","Elle conduit une auto rouge."," \"She drives a red car.\""  ],
  ["concernant","concerning","J'ai une question concernant votre proposition."," \"I have a question concerning your proposal.\""  ],
  ["conférence","conference","La conférence commence à 10 heures.","\"The conference starts at 10 o'clock.\""  ],
  ["charmer","to charm","Il sait comment charmer les gens."," \"He knows how to charm people.\""  ],
  ["fièvre","fever","Elle a de la fièvre depuis hier."," \"She has had a fever since yesterday.\""  ],
  ["réception","reception","La réception de l'hôtel est ouverte 24h/24.","\"The hotel reception is open 24/7.\""  ],
  ["italien","Italian","La cuisine italienne est délicieuse."," \"Italian cuisine is delicious.\""  ],
  ["couvrir","to cover","N'oublie pas de couvrir la nourriture pour la garder au chaud."," \"Don't forget to cover the food to keep it warm.\""  ],
  ["cervelle","brain","Il faut utiliser sa cervelle pour résoudre ce problème."," \"You need to use your brain to solve this problem.\""  ],
  ["moral","morale","Il a une forte morale."," \"He has strong morals.\""  ],
  ["supérieur","superior","Son niveau de compétence est supérieur."," \"His skill level is superior.\""  ],
  ["personnellement","personally","Personnellement, je ne suis pas d'accord."," \"Personally, I don't agree.\""  ],
  ["tendre","tender","La viande est très tendre."," \"The meat is very tender.\""  ],
  ["discussion","discussion","Nous avons eu une discussion intéressante."," \"We had an interesting discussion.\""  ],
  ["sandwich","sandwich","Je prends toujours un sandwich pour le déjeuner."," \"I always have a sandwich for lunch.\""  ],
  ["alarmer","to alarm","Les bruits forts peuvent alarmer les animaux."," \"Loud noises can alarm animals.\""  ],
  ["ivre","drunk","Il était ivre après avoir bu trop de vin."," \"He was drunk after drinking too much wine.\""  ],
  ["nationalité","nationality","Quelle est votre nationalité?"," \"What is your nationality?\""  ],
  ["gagnant","winner","Le gagnant de la compétition sera annoncé demain."," \"The winner of the competition will be announced tomorrow.\""  ],
  ["beurre","butter","Le beurre est un ingrédient essentiel en cuisine."," \"Butter is an essential ingredient in cooking.\""  ],
  ["commerce","commerce","Le commerce international est en croissance."," \"International commerce is growing.\""  ],
  ["fleuve","river","Le Nil est le plus long fleuve du monde."," \"The Nile is the longest river in the world.\""  ],
  ["appétit","appetite","Je n'ai pas beaucoup d'appétit ce soir."," \"I don't have much appetite tonight.\""  ],
  ["nerf","nerve","Il a touché un nerf sensible."," \"He touched a sensitive nerve.\""  ],
  ["séparer","to separate","Nous devons séparer les articles recyclables."," \"We need to separate the recyclable items.\""  ],
  ["employé","employee","Chaque employé doit signer le contrat."," \"Each employee must sign the contract.\""  ],
  ["liaison","connection","La liaison Internet est très lente aujourd'hui."," \"The internet connection is very slow today.\""  ],
  ["document","document","Veuillez signer le document à la fin de la réunion."," \"Please sign the document at the end of the meeting.\""  ],
  ["nuage","cloud","Les nuages couvrent le ciel aujourd'hui."," \"Clouds cover the sky today.\""  ],
  ["fiancé","fiancé","Elle va se marier avec son fiancé l'année prochaine."," \"She is going to marry her fiancé next year.\""  ],
  ["avenue","avenue","L'avenue principale est bordée d'arbres."," \"The main avenue is lined with trees.\""  ],
  ["guitare","guitar","Il joue de la guitare dans un groupe de musique."," \"He plays the guitar in a music band.\""  ],
  ["portrait","portrait","Le peintre a créé un magnifique portrait."," \"The painter created a beautiful portrait.\""  ],
  ["final","final","Le match final est prévu pour samedi prochain."," \"The final match is scheduled for next Saturday.\""  ],
  ["robot","robot","Les robots sont utilisés dans l'industrie automobile."," \"Robots are used in the automotive industry.\""  ],
  ["brise","breeze","Une brise légère soufflait à travers la fenêtre ouverte."," \"A gentle breeze was blowing through the open window.\""  ],
  ["sauce","sauce","La sauce tomate est un ingrédient de base en cuisine."," \"Tomato sauce is a basic ingredient in cooking.\""  ],
  ["réseau","network","Le réseau informatique a été mis à niveau."," \"The computer network has been upgraded.\""  ],
  ["prière","prayer","Il a dit une prière avant le repas."," \"He said a prayer before the meal.\""  ],
  ["réalisateur","director","Le réalisateur du film a remporté de nombreux prix."," \"The director of the film has won many awards.\""  ],
  ["poison","poison","Certains champignons peuvent contenir du poison."," \"Some mushrooms may contain poison.\""  ],
  ["surveillance","surveillance","La surveillance de la maison est assurée par des caméras de sécurité."," \"The surveillance of the house is ensured by security cameras.\""  ],
  ["épaule","shoulder","Il a une blessure à l'épaule."," \"He has a shoulder injury.\""  ],
  ["médecine","medicine","La médecine moderne a fait d'énormes progrès."," \"Modern medicine has made tremendous progress.\""  ],
  ["placard","cupboard","Je range mes vêtements dans le placard."," \"I store my clothes in the cupboard.\""  ],
  ["mercredi","Wednesday","Nous avons une réunion mercredi prochain."," \"We have a meeting next Wednesday.\""  ],
  ["lampe","lamp","La lampe éclaire la pièce."," \"The lamp lights up the room.\""  ],
  ["expert","expert","Il est un expert dans son domaine."," \"He is an expert in his field.\""  ],
  ["autorité","authority","L'autorité doit être exercée avec responsabilité."," \"Authority must be exercised with responsibility.\""  ],
  ["destruction","destruction","La guerre a causé beaucoup de destruction."," \"The war caused a lot of destruction.\""  ],
  ["congrès","congress","Le congrès annuel se tiendra à Paris."," \"The annual congress will be held in Paris.\""  ],
  ["poudre","powder","La poudre est utilisée dans la cuisine."," \"Powder is used in the kitchen.\""  ],
  ["juillet","July","Mon anniversaire est en juillet."," \"My birthday is in July.\""  ],
  ["moderne","modern","L'architecture moderne est souvent innovante."," \"Modern architecture is often innovative.\""  ],
  ["stade","stadium","Le stade est plein de supporters enthousiastes."," \"The stadium is full of enthusiastic fans.\""  ],
  ["serment","oath","Il a prêté serment devant le tribunal."," \"He took an oath in front of the court.\""  ],
  ["dette","debt","Il essaie de rembourser sa dette rapidement."," \"He is trying to repay his debt quickly.\""  ],
  ["dragon","dragon","Le dragon crachait du feu."," \"The dragon was breathing fire.\""  ],
  ["entraîner","to train","Il faut beaucoup de discipline pour entraîner un chien."," \"It takes a lot of discipline to train a dog.\""  ],
  ["sensible","sensitive","Il est très sensible aux critiques."," \"He is very sensitive to criticism.\""  ],
  ["ajouter","to add","N'oublie pas d'ajouter du sel à la soupe."," \"Don't forget to add salt to the soup.\""  ],
  ["expression","expression","Son expression faciale montrait de la surprise."," \"His facial expression showed surprise.\""  ],
  ["métro","subway","Je prends le métro pour aller au travail."," \"I take the subway to go to work.\""  ],
  ["foncer","to rush","Il a dû foncer pour attraper le bus."," \"He had to rush to catch the bus.\""  ],
  ["durer","to last","La réunion va durer deux heures."," \"The meeting is going to last for two hours.\""  ],
  ["balance","scale","La balance est utilisée pour mesurer le poids."," \"The scale is used to measure weight.\""  ],
  ["lion","lion","Le lion est appelé le roi de la jungle."," \"The lion is called the king of the jungle.\""  ],
  ["extrêmement","extremely","Il fait extrêmement froid aujourd'hui."," \"It is extremely cold today.\""  ],
  ["séance","session","La séance de thérapie a été très bénéfique."," \"The therapy session was very beneficial.\""  ],
  ["collier","necklace","Elle porte un joli collier en perles."," \"She is wearing a beautiful pearl necklace.\""  ],
  ["alliance","alliance","L'alliance symbolise l'engagement."," \"The alliance symbolizes commitment.\""  ],
  ["congé","leave","Il a pris un congé pour voyager."," \"He took leave to travel.\""  ],
  ["portefeuille","wallet","Il a oublié son portefeuille à la maison."," \"He forgot his wallet at home.\""  ],
  ["trahir","to betray","La trahison est difficile à pardonner."," \"Betrayal is hard to forgive.\""  ],
  ["repartir","to leave again","Il a décidé de repartir en vacances."," \"He decided to leave again for vacation.\""  ],
  ["terroriste","terrorist","Les forces de sécurité ont arrêté un présumé terroriste."," \"Security forces arrested a suspected terrorist.\""  ],
  ["clan","clan","Le clan familial est très uni."," \"The family clan is very close-knit.\""  ],
  ["exécution","execution","L'exécution de ce plan nécessite une bonne coordination."," \"The execution of this plan requires good coordination.\""  ],
  ["pourrir","to rot","Les fruits commencent à pourrir."," \"The fruits are starting to rot.\""  ],
  ["juge","judge","Le juge a rendu un verdict équitable."," \"The judge delivered a fair verdict.\""  ],
  ["invitation","invitation","J'ai reçu une invitation pour la fête."," \"I received an invitation to the party.\""  ],
  ["électricité","electricity","L'électricité est essentielle dans notre vie quotidienne."," \"Electricity is essential in our daily life.\""  ],
  ["admettre","to admit","Il a dû admettre qu'il avait tort."," \"He had to admit that he was wrong.\""  ],
  ["avril","April","Mon anniversaire est en avril."," \"My birthday is in April.\""  ],
  ["convenir","to agree","Nous devons convenir d'une date."," \"We need to agree on a date.\""  ],
  ["acier","steel","L'acier est utilisé dans la construction."," \"Steel is used in construction.\""  ],
  ["promener","to walk","Il aime se promener dans le parc."," \"He enjoys walking in the park.\""  ],
  ["sourd","deaf","Elle communique avec des personnes sourdes."," \"She communicates with deaf people.\""  ],
  ["majeur","major","Il a choisi la majeure en informatique."," \"He chose a major in computer science.\""  ],
  ["sire","sire","Le roi était souvent appelé 'sire'."," \"The king was often addressed as 'sire'.\""  ],
  ["degré","degree","La température a chuté de dix degrés."," \"The temperature dropped by ten degrees.\""  ],
  ["instruction","instruction","L'instruction est cruciale pour le développement intellectuel."," \"Instruction is crucial for intellectual development.\""  ],
  ["injuste","unfair","C'est vraiment injuste."," \"It's really unfair.\""  ],
  ["division","division","La division du travail améliore l'efficacité."," \"Division of labor improves efficiency.\""  ],
  ["fierté","pride","Elle ressentait une grande fierté après sa victoire."," \"She felt a great sense of pride after her victory.\""  ],
  ["exprimer","to express","Il a du mal à exprimer ses sentiments."," \"He struggles to express his feelings.\""  ],
  ["fidèle","loyal","Il est un ami fidèle."," \"He is a loyal friend.\""  ],
  ["causer","to cause","Le stress peut causer des problèmes de santé."," \"Stress can cause health problems.\""  ],
  ["mamie","grandma","Ma mamie fait les meilleurs gâteaux."," \"My grandma makes the best cakes.\""  ],
  ["couler","to flow","L'eau commence à couler du robinet."," \"Water is starting to flow from the tap.\""  ],
  ["renseignement","information","Je vais demander un renseignement à l'accueil."," \"I will ask for information at the reception.\""  ],
  ["total","total","Le total des dépenses est élevé ce mois-ci."," \"The total expenses are high this month.\""  ],
  ["singulier","singular","Le mot 'chien' est au singulier."," \"The word 'dog' is in the singular.\""  ],
  ["réserver","to book","Il faut réserver une chambre d'hôtel à l'avance."," \"You need to book a hotel room in advance.\""  ],
  ["taré","crazy","Son comportement est vraiment taré."," \"His behavior is really crazy.\""  ],
  ["espagnol","Spanish","Il apprend l'espagnol pour son voyage en Espagne."," \"He is learning Spanish for his trip to Spain.\""  ],
  ["solide","solid","Cette table est en bois, elle est très solide."," \"This table is made of wood, it is very solid.\""  ],
  ["avantage","advantage","Il faut tirer avantage de chaque opportunité."," \"You should take advantage of every opportunity.\""  ],
  ["habitant","inhabitant","La ville a de nombreux habitants."," \"The city has many inhabitants.\""  ],
  ["rage","rage","Sa réaction était pleine de rage."," \"His reaction was full of rage.\""  ],
  ["normalement","normally","Normalement, il vient nous rendre visite le week-end."," \"Normally, he comes to visit us on weekends.\""  ],
  ["neveu","nephew","Mon neveu aime jouer au football."," \"My nephew likes to play football.\""  ],
  ["emprunter","to borrow","Puis-je emprunter votre livre un moment?"," \"Can I borrow your book for a moment?\""  ],
  ["ouverture","opening","L'ouverture du magasin est à 9 heures du matin.","\"The store's opening is at 9 in the morning.\""  ],
  ["habiller","to dress","Il faut bien s'habiller pour l'entretien."," \"You need to dress well for the interview.\""  ],
  ["blé","wheat","Le pain est fait à partir de blé."," \"Bread is made from wheat.\""  ],
  ["veuf","widower","Il est veuf depuis deux ans."," \"He has been a widower for two years.\""  ],
  ["munition","ammunition","Les soldats transportaient des munitions."," \"The soldiers were carrying ammunition.\""  ],
  ["écraser","to crush","Faites attention, ne pas écraser les fleurs."," \"Be careful, don't crush the flowers.\""  ],
  ["juin","June","Mon anniversaire est en juin."," \"My birthday is in June.\""  ],
  ["dégoûtant","disgusting","Ce plat est vraiment dégoûtant."," \"This dish is really disgusting.\""  ],
  ["démarrer","to start","Il faut démarrer la voiture avant de partir."," \"You need to start the car before leaving.\""  ],
  ["louer","to rent","Ils vont louer une maison pour les vacances."," \"They are going to rent a house for the holidays.\""  ],
  ["bâton","stick","Il ramasse un bâton pour jouer avec le chien."," \"He picks up a stick to play with the dog.\""  ],
  ["timide","shy","Elle est timide en public."," \"She is shy in public.\""  ],
  ["fermé","closed","Le magasin est fermé le dimanche."," \"The store is closed on Sundays.\""  ],
  ["caractère","character","Il a un caractère très fort."," \"He has a very strong character.\""  ],
  ["dépêcher","to hurry","Il faut se dépêcher pour ne pas être en retard."," \"We need to hurry so we won't be late.\""  ],
  ["célibataire","single","Elle est célibataire et cherche l'amour."," \"She is single and looking for love.\""  ],
  ["pasteur","pastor","Le pasteur dirige la cérémonie religieuse."," \"The pastor leads the religious ceremony.\""  ],
  ["progrès","progress","Il a fait beaucoup de progrès dans ses études."," \"He has made a lot of progress in his studies.\""  ],
  ["ordure","trash","Ne jette pas ces papiers par terre, utilise la poubelle à ordure."," \"Don't throw these papers on the ground, use the trash bin.\""  ],
  ["matière","subject","La matière de mathématiques est difficile."," \"The subject of mathematics is difficult.\""  ],
  ["bonté","kindness","Sa bonté envers les autres est remarquable."," \"His kindness towards others is remarkable.\""  ],
  ["déposer","to deposit","Il faut déposer de l'argent à la banque."," \"You need to deposit money in the bank.\""  ],
  ["mondial","global","Le problème de la pollution est un problème mondial."," \"The pollution issue is a global problem.\""  ],
  // ["intelligence","intelligence","L'intelligence artificielle progresse rapidement."," \"Artificial intelligence is progressing rapidly.\""  ],
  // ["généreux","generous","Il est connu pour être très généreux."," \"He is known to be very generous.\""  ],
  // ["gérer","to manage","Elle sait bien gérer son temps."," \"She knows how to manage her time.\""  ],
  // ["température","temperature","La température baisse rapidement en hiver."," \"The temperature drops quickly in winter.\""  ],
  // ["saloperie","nastiness","Il a dit une saloperie qui a blessé ses sentiments."," \"He said something nasty that hurt her feelings.\""  ],
  // ["bonbon","candy","Les enfants aiment les bonbons."," \"Children love candy.\""  ],
  // ["rapporter","to report","Il faut rapporter ce problème à la direction."," \"You need to report this issue to management.\""  ],
  // ["filmer","to film","Le réalisateur va filmer la scène demain."," \"The director will film the scene tomorrow.\""  ],
  // ["business","business","Il gère un business prospère."," \"He manages a successful business.\""  ],
  // ["tension","tension","Il y a une tension palpable dans la pièce."," \"There is a palpable tension in the room.\""  ],
  // ["serviette","towel","Elle sèche ses mains avec une serviette."," \"She dries her hands with a towel.\""  ],
  // ["guérir","to heal","Le temps peut guérir toutes les blessures."," \"Time can heal all wounds.\""  ],
  // ["rouler","to roll","La balle va rouler jusqu'au bout de la colline."," \"The ball will roll to the bottom of the hill.\""  ],
  // ["passeport","passport","Il a perdu son passeport en voyage."," \"He lost his passport while traveling.\""  ],
  // ["suffisamment","enough","Il n'a pas mangé suffisamment aujourd'hui."," \"He didn't eat enough today.\""  ],
  // ["échelle","scale","La montée des prix est mesurée sur une échelle."," \"The rise in prices is measured on a scale.\""  ],
  // ["cercle","circle","Il a dessiné un cercle parfait."," \"He drew a perfect circle.\""  ],
  // ["exiger","to demand","Le client peut exiger un remboursement."," \"The customer can demand a refund.\""  ],
  // ["citoyen","citizen","Chaque citoyen a des droits et des devoirs."," \"Every citizen has rights and responsibilities.\""  ],
  // ["pervers","perverse","Son sens de l'humour peut être un peu pervers."," \"His sense of humor can be a bit perverse.\""  ],
  // ["tentative","attempt","Il a fait une tentative de battre le record."," \"He made an attempt to break the record.\""  ],
  // ["fan","fan","Les fans étaient excités avant le concert."," \"The fans were excited before the concert.\""  ],
  // ["règlement","regulation","Le règlement interdit l'utilisation de téléphones."," \"The regulation prohibits the use of phones.\""  ],
  // ["rapidité","speed","La rapidité est cruciale dans cette compétition."," \"Speed is crucial in this competition.\""  ],
  // ["immense","immense","La forêt était immense et mystérieuse."," \"The forest was immense and mysterious.\""  ],
  // ["crainte","fear","La crainte du danger les a paralysés."," \"Fear of danger paralyzed them.\""  ],
  // ["plaque","plate","Elle a mis le plat dans la plaque."," \"She put the dish on the plate.\""  ],
  // ["réunir","to gather","Nous devons réunir toutes les informations nécessaires."," \"We need to gather all the necessary information.\""  ],
  // ["manuel","manual","Le manuel d'utilisation est inclus dans la boîte."," \"The user manual is included in the box.\""  ],
  // ["cruel","cruel","Le traitement infligé aux animaux était cruel."," \"The treatment inflicted on the animals was cruel.\""  ],
  // ["octobre","October","Halloween est célébré en octobre."," \"Halloween is celebrated in October.\""  ],
  // ["relax","relax","Il faut parfois prendre un moment pour se relaxer."," \"Sometimes you need to take a moment to relax.\""  ],
  // ["bétail","livestock","Les fermiers élèvent du bétail pour la viande."," \"Farmers raise livestock for meat.\""  ],
  // ["dessin","drawing","Elle a gagné un concours de dessin."," \"She won a drawing competition.\""  ],
  // ["Inde","India","L'Inde est connue pour sa diversité culturelle."," \"India is known for its cultural diversity.\""  ],
  // ["dé","die","Le joueur a lancé le dé pour avancer."," \"The player rolled the die to move forward.\""  ],
  // ["demeure","residence","Sa demeure est une magnifique villa."," \"His residence is a beautiful villa.\""  ],
  // ["léger","light","Le bagage est léger et facile à porter."," \"The luggage is light and easy to carry.\""  ],
  // ["diamant","diamond","Le diamant est une pierre précieuse."," \"Diamond is a precious stone.\""  ],
  // ["dalle","slab","La dalle de béton était fissurée."," \"The concrete slab was cracked.\""  ],
  // ["emporter","to take away","Vous pouvez emporter votre repas si vous le souhaitez."," \"You can take away your meal if you want.\""  ],
  // ["asile","asylum","Il a demandé l'asile politique dans un autre pays."," \"He applied for political asylum in another country.\""  ],
  // ["organiser","to organize","Elle sait bien comment organiser un événement."," \"She knows how to organize an event well.\""  ],
  // ["sou","cent","Il n'a pas un sou en poche."," \"He doesn't have a cent in his pocket.\""  ],
  // ["oser","to dare","Il faut oser pour réaliser ses rêves."," \"You need to dare to pursue your dreams.\""  ],
  // ["tournage","shooting","Le tournage du film a commencé hier."," \"The shooting of the film started yesterday.\""  ],
  // ["nucléaire","nuclear","L'énergie nucléaire est controversée."," \"Nuclear energy is controversial.\""  ],
  // ["populaire","popular","Cette chanson est très populaire."," \"This song is very popular.\""  ],
  // ["orchestre","orchestra","L'orchestre a donné un concert exceptionnel."," \"The orchestra gave an exceptional concert.\""  ],
  // ["couronne","crown","La reine portait une magnifique couronne."," \"The queen wore a beautiful crown.\""  ],
  // ["vedette","star","La vedette du film était présente à la première."," \"The star of the film was present at the premiere.\""  ],
  // ["renvoyer","to dismiss","Le patron a décidé de le renvoyer."," \"The boss decided to dismiss him.\""  ],
  // ["garce","bitch","Elle a été traitée de garce à tort."," \"She was wrongly called a bitch.\""  ],
  // ["formation","training","La formation professionnelle est importante pour le développement."," \"Professional training is important for development.\""  ],
  // ["Canada","Canada","Le Canada est un pays situé en Amérique du Nord."," \"Canada is a country located in North America.\""  ],
  // ["audience","audience","L'audience du spectacle était enthousiaste."," \"The audience of the show was enthusiastic.\""  ],
  // ["participer","to participate","Elle aime participer aux activités communautaires."," \"She enjoys participating in community activities.\""  ],
  // ["issue","outcome","On ne connaît pas encore l'issue de la situation."," \"The outcome of the situation is not known yet.\""  ],
  // ["procédure","procedure","Suivez la procédure indiquée dans le manuel."," \"Follow the procedure outlined in the manual.\""  ],
  // ["branche","branch","L'oiseau était perché sur une branche."," \"The bird was perched on a branch.\""  ],
  // ["influencer","to influence","Les médias peuvent influencer l'opinion publique."," \"The media can influence public opinion.\""  ],
  // ["salade","salad","Je vais prendre une salade pour le déjeuner."," \"I will have a salad for lunch.\""  ],
  // ["mouche","fly","La mouche volait autour de la corbeille de fruits."," \"The fly was buzzing around the fruit basket.\""  ],
  // ["conséquence","consequence","Les actions ont des conséquences."," \"Actions have consequences.\""  ],
  // ["mortel","deadly","Le poison était mortel."," \"The poison was deadly.\""  ],
  // ["collègue","colleague","Il travaille avec des collègues très compétents."," \"He works with very competent colleagues.\""  ],
  // ["espion","spy","L'espion était infiltré depuis des mois."," \"The spy had been infiltrated for months.\""  ],
  // ["objection","objection","Il a soulevé une objection pendant la réunion."," \"He raised an objection during the meeting.\""  ],
  // ["éteindre","to extinguish","N'oublie pas d'éteindre les lumières en partant."," \"Don't forget to extinguish the lights before leaving.\""  ],
  // ["bouffer","to eat","J'ai faim, je vais bouffer quelque chose."," \"I'm hungry, I'm going to eat something.\""  ],
  // ["allumer","to light up","Elle va allumer la bougie."," \"She is going to light up the candle.\""  ],
  // ["obéir","to obey","Il est important d'obéir aux règles."," \"It is important to obey the rules.\""  ],
  // ["chevalier","knight","Le chevalier portait une armure brillante."," \"The knight wore shining armor.\""  ],
  // ["sain","healthy","Manger des légumes est bon pour rester en bonne santé."," \"Eating vegetables is good to stay healthy.\""  ],
  // ["tradition","tradition","Cette fête est une tradition familiale."," \"This celebration is a family tradition.\""  ],
  // ["décevoir","to disappoint","Il ne veut pas te décevoir."," \"He doesn't want to disappoint you.\""  ],
  // ["département","department","Le département des finances gère les budgets."," \"The finance department manages budgets.\""  ],
  // ["résister","to resist","Il faut résister à la tentation."," \"You need to resist temptation.\""  ],
  // ["habit","clothing","Elle aime acheter des habits à la mode."," \"She likes to buy fashionable clothing.\""  ],
  // ["impressionnant","impressive","Son talent artistique est impressionnant."," \"His artistic talent is impressive.\""  ],
  // ["accusation","accusation","L'accusation a été portée sans preuve suffisante."," \"The accusation was made without sufficient evidence.\""  ],
  // ["piquer","to sting","Attention, la piqûre de cette plante peut faire mal."," \"Be careful, the sting of this plant can be painful.\""  ],
  // ["entretien","interview","L'entretien d'embauche s'est bien déroulé."," \"The job interview went well.\""  ],
  // ["accueillir","to welcome","Nous allons accueillir nos invités chaleureusement."," \"We will welcome our guests warmly.\""  ],
  // ["chasseur","hunter","Le chasseur a suivi la piste du gibier."," \"The hunter followed the trail of the game.\""  ],
  // ["examiner","to examine","Le médecin va examiner les résultats des tests."," \"The doctor will examine the test results.\""  ],
  // ["solitaire","lonely","Il se sentait solitaire sans ses amis."," \"He felt lonely without his friends.\""  ],
  // ["goutte","drop","Une goutte d'eau tomba du toit."," \"A drop of water fell from the roof.\""  ],
  // ["micro","microphone","Le chanteur tenait le micro pendant le concert."," \"The singer held the microphone during the concert.\""  ],
  // ["technologie","technology","La technologie a révolutionné nos vies."," \"Technology has revolutionized our lives.\""  ],
  // ["original","original","Son style vestimentaire est très original."," \"His fashion style is very original.\""  ],
  // ["dépasser","to exceed","Le projet a dépassé le budget prévu."," \"The project exceeded the budget.\""  ],
  // ["patrie","homeland","Il était fier de son patriotisme envers sa patrie."," \"He was proud of his patriotism towards his homeland.\""  ],
  // ["tuyau","pipe","L'eau fuyait d'un tuyau cassé."," \"Water was leaking from a broken pipe.\""  ],
  // ["psy","psychiatrist","Elle consulte un psy pour ses problèmes émotionnels."," \"She sees a psychiatrist for her emotional issues.\""  ],
  // ["clinique","clinic","La clinique offre des services médicaux spécialisés."," \"The clinic provides specialized medical services.\""  ],
  // ["régime","diet","Il suit un régime strict pour perdre du poids."," \"He is following a strict diet to lose weight.\""  ],
  // ["album","album","Son nouvel album est un grand succès."," \"His new album is a big success.\""  ],
  // ["suprême","supreme","Il a atteint le niveau suprême de maîtrise."," \"He has reached the supreme level of mastery.\""  ],
  // ["sincère","sincere","Sa gratitude était sincère."," \"His gratitude was sincere.\""  ],
  // ["violent","violent","Le film contenait des scènes violentes."," \"The movie contained violent scenes.\""  ],
  // ["émotion","emotion","Son discours a suscité beaucoup d'émotion."," \"His speech elicited a lot of emotion.\""  ],
  // ["coucou","peekaboo","Le bébé jouait à coucou avec sa mère."," \"The baby was playing peekaboo with his mother.\""  ],
  // ["franc","frank","Il est connu pour sa personnalité franche."," \"He is known for his frank personality.\""  ],
  // ["remarque","remark","Sa remarque a attiré l'attention de tous."," \"His remark caught everyone's attention.\""  ],
  // ["excitant","exciting","Le voyage promet d'être excitant."," \"The trip promises to be exciting.\""  ],
  // ["guère","hardly","Il ne reste guère de temps avant la fin du spectacle."," \"There is hardly any time left before the end of the show.\""  ],
  // ["sel","salt","Il a ajouté un peu de sel pour relever le goût."," \"He added a bit of salt to enhance the flavor.\""  ],
  // ["canapé","sofa","Le canapé était confortable pour se détendre."," \"The sofa was comfortable for relaxation.\""  ],
  // ["abattre","to shoot down","Les chasseurs ont réussi à abattre l'oiseau en plein vol."," \"The hunters managed to shoot down the bird in mid-flight.\""  ],
  // ["déclarer","to declare","Il a déclaré son amour avec sincérité."," \"He declared his love sincerely.\""  ],
  // ["splendide","splendid","La vue depuis la colline était splendide."," \"The view from the hill was splendid.\""  ],
  // ["promotion","promotion","Il a été promu après avoir montré son engagement."," \"He was promoted after demonstrating his commitment.\""  ],
  // ["scandale","scandal","Le scandale a secoué la communauté politique."," \"The scandal shook the political community.\""  ],
  // ["cran","guts","Il a eu le cran de dire la vérité."," \"He had the guts to tell the truth.\""  ],
  // ["mêler","to mix","Il aime mêler les saveurs dans sa cuisine."," \"He likes to mix flavors in his cooking.\""  ],
  // ["élément","element","Chaque élément a sa place dans la composition."," \"Each element has its place in the composition.\""  ],
  // ["multiplier","to multiply","Pour résoudre ce problème, il faut multiplier les chiffres."," \"To solve this problem, you need to multiply the numbers.\""  ],
  // ["arracher","to pull out","Il a dû arracher les mauvaises herbes du jardin."," \"He had to pull out the weeds from the garden.\""  ],
  // ["interroger","to question","Le détective a commencé à interroger les témoins."," \"The detective began to question the witnesses.\""  ],
  // ["efficace","efficient","Le nouveau système est plus efficace."," \"The new system is more efficient.\""  ],
  // ["événement","event","L'événement était marqué par la présence de célébrités."," \"The event was marked by the presence of celebrities.\""  ],
  // ["personnalité","personality","Chacun a une personnalité unique."," \"Everyone has a unique personality.\""  ],
  // ["gentleman","gentleman","Il se comporte toujours comme un vrai gentleman."," \"He always behaves like a true gentleman.\""  ],
  // ["buter","to stumble","Il a failli buter sur une pierre."," \"He almost stumbled over a stone.\""  ],
  // ["rumeur","rumor","La rumeur circulait rapidement dans le quartier."," \"The rumor was spreading quickly in the neighborhood.\""  ],
  // ["parking","parking","Le parking était complet ce matin."," \"The parking lot was full this morning.\""  ],
  // ["divin","divine","La musique créait une atmosphère divine."," \"The music created a divine atmosphere.\""  ],
  // ["dégât","damage","L'accident a causé des dégâts importants."," \"The accident caused significant damage.\""  ],
  // ["négatif","negative","Les commentaires étaient plutôt négatifs."," \"The comments were rather negative.\""  ],
  // ["éclater","to burst","Le ballon a fini par éclater."," \"The balloon eventually burst.\""  ],
  // ["viser","to aim","Il a pris son temps pour bien viser."," \"He took his time to aim carefully.\""  ],
  // ["invisible","invisible","L'homme était quasiment invisible dans l'obscurité."," \"The man was almost invisible in the darkness.\""  ],
  // ["signature","signature","Sa signature est unique et reconnaissable."," \"His signature is unique and recognizable.\""  ],
  // ["user","user","Le user doit se connecter avec son mot de passe."," \"The user needs to log in with their password.\""  ],
  // ["insister","to insist","Elle a dû insister pour être entendue."," \"She had to insist to be heard.\""  ],
  // ["autoriser","to authorize","Il faut autoriser l'accès aux utilisateurs."," \"Access needs to be authorized for users.\""  ],
  // ["canard","duck","Les canards nageaient paisiblement dans l'étang."," \"The ducks were swimming peacefully in the pond.\""  ],
  // ["stylo","pen","J'ai prêté mon stylo à un collègue."," \"I lent my pen to a colleague.\""  ],
  // ["possibilité","possibility","Il existe toujours une possibilité de réussite."," \"There is always a possibility of success.\""  ],
  // ["réveil","alarm clock","Son réveil sonne tous les matins à 7 heures.","\"His alarm clock rings every morning at 7 o'clock.\""  ],
  // ["pleuvoir","to rain","Il risque de pleuvoir cet après-midi."," \"It might rain this afternoon.\""  ],
  // ["ère","era","La Renaissance était une époque artistique."," \"The Renaissance was an artistic era.\""  ],
  // ["conclure","to conclude","Il faut bien conclure son discours."," \"You need to conclude your speech effectively.\""  ],
  // ["étape","stage","La première étape du projet est terminée."," \"The first stage of the project is completed.\""  ],
  // ["contacter","to contact","N'hésitez pas à me contacter si vous avez des questions."," \"Feel free to contact me if you have any questions.\""  ],
  // ["identifier","to identify","Il est important d'identifier les problèmes rapidement."," \"It is important to identify issues quickly.\""  ],
  // ["attacher","to attach","Vous pouvez attacher le fichier à l'e-mail."," \"You can attach the file to the email.\""  ],
  // ["prime","bonus","Le salarié a reçu une prime pour son excellent travail."," \"The employee received a bonus for his excellent work.\""  ],
  // ["renfort","reinforcement","Nous avons besoin de renfort pour terminer le projet à temps."," \"We need reinforcement to finish the project on time.\""  ],
  // ["publicité","advertisement","La publicité a attiré l'attention sur le nouveau produit."," \"The advertisement drew attention to the new product.\""  ],
  // ["séjour","stay","Le séjour à l'hôtel était très agréable."," \"The stay at the hotel was very pleasant.\""  ],
  // ["tabac","tobacco","Il a décidé d'arrêter de fumer pour protéger sa santé."," \"He decided to quit smoking to protect his health.\""  ],
  // ["chaos","chaos","Le trafic était dans un état de chaos total."," \"The traffic was in a state of total chaos.\""  ],
  // ["enfermer","to lock in","Il a accidentellement enfermé ses clés dans la voiture."," \"He accidentally locked his keys in the car.\""  ],
  // ["tarte","pie","Elle a préparé une délicieuse tarte aux pommes."," \"She made a delicious apple pie.\""  ],
  // ["cravate","tie","Il porte toujours une cravate au bureau."," \"He always wears a tie to the office.\""  ],
  // ["frigo","fridge","Les légumes doivent être conservés au frigo."," \"Vegetables should be kept in the fridge.\""  ],
  // ["câble","cable","Le câble électrique était endommagé."," \"The electrical cable was damaged.\""  ],
  // ["rarement","rarely","Il sort rarement le soir."," \"He rarely goes out in the evening.\""  ],
  // ["goûter","to taste","N'oublie pas de goûter la sauce avant de l'ajouter."," \"Don't forget to taste the sauce before adding it.\""  ],
  // ["dispute","dispute","La dispute a éclaté à cause d'un malentendu."," \"The dispute broke out due to a misunderstanding.\""  ],
  // ["impliquer","to involve","Le projet va impliquer plusieurs équipes."," \"The project will involve several teams.\""  ],
  // ["remarquable","remarkable","Son talent artistique est remarquable."," \"His artistic talent is remarkable.\""  ],
  // ["exception","exception","Cette règle a quelques exceptions."," \"This rule has a few exceptions.\""  ],
  // ["gant","glove","Il a mis ses gants pour se protéger du froid."," \"He put on his gloves to protect himself from the cold.\""  ],
  // ["ennuyeux","boring","Le film était ennuyeux, donc je suis parti."," \"The movie was boring, so I left.\""  ],
  // ["ouvrier","worker","Les ouvriers ont travaillé dur toute la journée."," \"The workers worked hard all day.\""  ],
  // ["record","record","Il a établi un nouveau record de vitesse."," \"He set a new speed record.\""  ],
  // ["délirer","to rave","Il a commencé à délirer après avoir pris des médicaments."," \"He started to rave after taking medication.\""  ],
  // ["enseigne","sign","L'enseigne lumineuse indiquait l'entrée du magasin."," \"The illuminated sign indicated the entrance of the store.\""  ],
  // ["angle","angle","Changez l'angle de la caméra pour une meilleure vue."," \"Change the angle of the camera for a better view.\""  ],
  // ["instinct","instinct","Son instinct lui disait de faire attention."," \"His instinct told him to be careful.\""  ],
  // ["impôt","tax","Les citoyens doivent payer leurs impôts chaque année."," \"Citizens must pay their taxes every year.\""  ],
  // ["rompre","to break up","Ils ont décidé de rompre leur relation."," \"They decided to break up their relationship.\""  ],
  // ["rattraper","to catch up","Il faut rattraper le temps perdu."," \"We need to catch up on lost time.\""  ],
  // ["vilain","naughty","Le petit chien était un peu vilain, mais adorable."," \"The little dog was a bit naughty but adorable.\""  ],
  // ["complexe","complex","La situation est plus complexe qu'elle n'y paraît."," \"The situation is more complex than it seems.\""  ],
  // ["méthode","method","Il a développé une nouvelle méthode pour résoudre le problème."," \"He developed a new method to solve the problem.\""  ],
  // ["suggérer","to suggest","Elle a osé suggérer une alternative."," \"She dared to suggest an alternative.\""  ],
  // ["tigre","tiger","Le tigre était majestueux dans sa cage."," \"The tiger was majestic in its cage.\""  ],
  // ["tragédie","tragedy","La tragédie a profondément affecté la communauté."," \"The tragedy deeply affected the community.\""  ],
  // ["torture","torture","La torture est une violation des droits de l'homme."," \"Torture is a violation of human rights.\""  ],
  // ["industrie","industry","L'industrie automobile connaît des évolutions rapides."," \"The automotive industry is experiencing rapid developments.\""  ],
  // ["population","population","La population mondiale continue de croître."," \"The world population continues to grow.\""  ],
  // ["adaptation","adaptation","L'adaptation au changement est essentielle."," \"Adaptation to change is essential.\""  ],
  // ["admirer","to admire","Il aime admirer le coucher de soleil."," \"He enjoys admiring the sunset.\""  ],
  // ["autoroute","highway","L'autoroute était congestionnée pendant les heures de pointe."," \"The highway was congested during rush hours.\""  ],
  // ["pro","professional","Il travaille comme pro dans son domaine."," \"He works as a professional in his field.\""  ],
  // ["obscurité","darkness","L'obscurité de la nuit était totale."," \"The darkness of the night was complete.\""  ],
  // ["fabuleux","fabulous","C'était un voyage fabuleux à travers les montagnes."," \"It was a fabulous journey through the mountains.\""  ],
  // ["linge","laundry","Il a lavé tout le linge sale."," \"He washed all the dirty laundry.\""  ],
  // ["illégal","illegal","C'est illégal de traverser la frontière sans autorisation."," \"It is illegal to cross the border without permission.\""  ],
  // ["rigoler","to laugh","On a beaucoup rigolé pendant la soirée."," \"We laughed a lot during the evening.\""  ],
  // ["opérer","to operate","Le chirurgien va opérer le patient demain matin."," \"The surgeon will operate on the patient tomorrow morning.\""  ],
  // ["fauteuil","armchair","Il s'est assis confortablement dans son fauteuil préféré."," \"He sat comfortably in his favorite armchair.\""  ],
  // ["vendeur","salesperson","Le vendeur a expliqué les fonctionnalités du produit."," \"The salesperson explained the features of the product.\""  ],
  // ["novembre","November","Son anniversaire est en novembre."," \"His birthday is in November.\""  ],
  // ["collection","collection","Il a une impressionnante collection de timbres."," \"He has an impressive collection of stamps.\""  ],
  // ["bonhomme","fellow","C'est un bonhomme très sympathique."," \"He's a very friendly fellow.\""  ],
  // ["accent","accent","Son accent français était très prononcé."," \"His French accent was very pronounced.\""  ],
  // ["déplacer","to move","Nous devons déplacer ces meubles pour nettoyer."," \"We need to move these furniture pieces to clean.\""  ],
  // ["serrer","to squeeze","Il faut serrer fort pour ouvrir ce bocal."," \"You need to squeeze hard to open this jar.\""  ],
  // ["plastique","plastic","Les emballages en plastique sont souvent critiqués."," \"Plastic packaging is often criticized.\""  ],
  // ["marche","walk","Il a fait une longue marche dans la forêt."," \"He took a long walk in the forest.\""  ],
  // ["commande","order","J'ai passé une commande en ligne pour des vêtements."," \"I placed an order online for some clothes.\""  ],
  // ["lot","lot","Le lot de produits est arrivé en retard."," \"The lot of products arrived late.\""  ],
  // ["trahison","betrayal","La trahison a brisé la confiance entre eux."," \"The betrayal shattered the trust between them.\""  ],
  // ["sensation","sensation","Il a ressenti une sensation étrange dans son dos."," \"He felt a strange sensation in his back.\""  ],
  // ["résistance","resistance","La résistance du matériau est essentielle dans ce projet."," \"The resistance of the material is crucial in this project.\""  ],
  // ["chanceux","lucky","Il se considère chanceux d'avoir survécu à l'accident."," \"He considers himself lucky to have survived the accident.\""  ],
  // ["boue","mud","Il a glissé dans la boue après la pluie."," \"He slipped in the mud after the rain.\""  ],
  // ["cabane","cabin","La cabane en bois était nichée au sommet de la montagne."," \"The wooden cabin was nestled at the top of the mountain.\""  ],
  // ["merveille","wonder","La nature offre des merveilles incroyables."," \"Nature provides incredible wonders.\""  ],
  // ["poing","fist","Il a serré le poing avec détermination."," \"He clenched his fist with determination.\""  ],
  // ["sacrifice","sacrifice","Leur sacrifice a permis de sauver d'autres vies."," \"Their sacrifice saved other lives.\""  ],
  // ["communication","communication","Une bonne communication est essentielle dans une relation."," \"Good communication is essential in a relationship.\""  ],
  // ["appuyer","to press","Appuyez sur le bouton pour démarrer la machine."," \"Press the button to start the machine.\""  ],
  // ["chagrin","grief","Le chagrin de la perte était difficile à surmonter."," \"The grief of the loss was hard to overcome.\""  ],
  // ["concentrer","to focus","Il faut se concentrer sur les tâches importantes."," \"You need to focus on the important tasks.\""  ],
  // ["gratuit","free","Le service est gratuit pour les utilisateurs enregistrés."," \"The service is free for registered users.\""  ],
  // ["britannique","British","Il est de nationalité britannique."," \"He is of British nationality.\""  ],
  // ["social","social","Les médias sociaux sont devenus un outil de communication important."," \"Social media has become an important communication tool.\""  ],
  // ["coach","coach","Le coach sportif les guide lors des entraînements."," \"The sports coach guides them during training.\""  ],
  // ["coïncidence","coincidence","C'est une étrange coïncidence que nous nous rencontrions ici."," \"It's a strange coincidence that we meet here.\""  ],
  // ["halte","stop","Le conducteur a effectué un arrêt complet à la halte."," \"The driver made a complete stop at the stop sign.\""  ],
  // ["août","August","Son anniversaire est en août."," \"Her birthday is in August.\""  ],
  // ["malédiction","curse","On raconte qu'une malédiction pèse sur ce lieu."," \"It is said that a curse hangs over this place.\""  ],
  // ["pension","pension","Il prévoit de prendre sa retraite avec une bonne pension."," \"He plans to retire with a good pension.\""  ],
  // ["vampire","vampire","Le vampire se nourrit du sang des mortels."," \"The vampire feeds on the blood of mortals.\""  ],
  // ["ténèbres","darkness","Les ténèbres enveloppaient la forêt la nuit."," \"Darkness enveloped the forest at night.\""  ],
  // ["phase","phase","Le projet passe à la prochaine phase de développement."," \"The project is moving to the next phase of development.\""  ],
  // ["noix","nut","Les noix sont une excellente source de protéines."," \"Nuts are an excellent source of protein.\""  ],
  // ["toast","toast","Ils ont levé leur verre pour proposer un toast."," \"They raised their glasses to propose a toast.\""  ],
  // ["boum","boom","Le boum économique a stimulé la croissance."," \"The economic boom stimulated growth.\""  ],
  // ["sexuel","sexual","L'éducation sexuelle est importante à l'école."," \"Sexual education is important in school.\""  ],
  // ["honnêtement","honestly","Honnêtement, je ne sais pas quoi penser de tout cela."," \"Honestly, I don't know what to think about all this.\""  ],
  // ["défi","challenge","Relever ce défi demandera beaucoup d'efforts."," \"Meeting this challenge will require a lot of effort.\""  ],
  // ["oublié","forgotten","Le livre a été oublié sur la table."," \"The book was forgotten on the table.\""  ],
  // ["estime","esteem","Il a une haute estime de lui-même."," \"He has a high esteem of himself.\""  ],
  // ["désastre","disaster","L'ouragan a causé un véritable désastre."," \"The hurricane caused a real disaster.\""  ],
  // ["éliminer","to eliminate","Il faut éliminer les obstacles pour atteindre le succès."," \"Obstacles must be eliminated to achieve success.\""  ],
  // ["reconnaissant","grateful","Je suis reconnaissant de ton aide précieuse."," \"I am grateful for your valuable help.\""  ],
  // ["particulièrement","particularly","Cela m'a particulièrement touché."," \"It particularly touched me.\""  ],
  // ["bâtard","bastard","Utiliser des termes offensants comme 'bâtard' n'est pas approprié."," \"Using offensive terms like 'bastard' is not appropriate.\""  ],
  // ["solitude","solitude","Il préfère la solitude pour réfléchir."," \"He prefers solitude to reflect.\""  ],
  // ["débrouiller","to manage","Elle sait toujours se débrouiller dans les situations difficiles."," \"She always knows how to manage in difficult situations.\""  ],
  // ["jouet","toy","Le magasin de jouets offre une grande variété de jeux."," \"The toy store offers a wide variety of games.\""  ],
  // ["tarder","to delay","Il ne faut pas tarder à prendre une décision."," \"There should be no delay in making a decision.\""  ],
  // ["ingénieur","engineer","L'ingénieur travaille sur la conception du nouveau pont."," \"The engineer is working on the design of the new bridge.\""  ],
  // ["chant","song","Elle a une voix exceptionnelle pour le chant."," \"She has an exceptional voice for singing.\""  ],
  // ["poésie","poetry","La poésie est une forme d'expression artistique."," \"Poetry is a form of artistic expression.\""  ],
  // ["ongle","nail","Elle a peint ses ongles avec un vernis brillant."," \"She painted her nails with a shiny polish.\""  ],
  // ["trafic","traffic","Le trafic était dense pendant l'heure de pointe."," \"Traffic was heavy during rush hour.\""  ],
  // ["activité","activity","L'activité physique est importante pour la santé."," \"Physical activity is important for health.\""  ],
  // ["médaille","medal","Il a reçu une médaille pour son courage."," \"He received a medal for his bravery.\""  ],
  // ["reconnaissance","recognition","Son travail a été salué avec reconnaissance."," \"His work was greeted with recognition.\""  ],
  // ["foie","liver","Le foie est un organe vital du système digestif."," \"The liver is a vital organ in the digestive system.\""  ],
  // ["cercueil","coffin","Le cercueil était recouvert de fleurs blanches."," \"The coffin was covered with white flowers.\""  ],
  // ["gris","gray","Le ciel était couvert de nuages gris."," \"The sky was covered with gray clouds.\""  ],
  // ["livraison","delivery","La livraison des colis a été retardée en raison du mauvais temps."," \"Delivery of packages was delayed due to bad weather.\""  ],
  // ["pilule","pill","Elle prend une pilule chaque matin."," \"She takes a pill every morning.\""  ],
  // ["pratiquement","practically","Pratiquement tous les élèves ont réussi l'examen."," \"Practically all students passed the exam.\""  ],
  // ["diplôme","diploma","Il a obtenu son diplôme en sciences politiques."," \"He earned his diploma in political science.\""  ],
  // ["armé","armed","Les forces de sécurité étaient armées pour assurer la protection."," \"Security forces were armed to ensure protection.\""  ],
  // ["chapitre","chapter","Chaque chapitre du livre apporte de nouvelles informations."," \"Each chapter of the book provides new information.\""  ],
  // ["communiste","communist","Il était membre du parti communiste pendant de nombreuses années."," \"He was a member of the communist party for many years.\""  ],
  // ["commissariat","police station","Le commissariat de police est ouvert 24 heures sur 24.","\"The police station is open 24 hours a day.\""  ],
  // ["oxygène","oxygen","Les plantes produisent de l'oxygène lors de la photosynthèse."," \"Plants produce oxygen during photosynthesis.\""  ],
  // ["trouille","fear","Il a une trouille bleue des araignées."," \"He is terrified of spiders.\""  ],
  // ["analyser","to analyze","Il faut analyser les données pour tirer des conclusions."," \"You need to analyze the data to draw conclusions.\""  ],
  // ["essentiel","essential","La communication claire est essentielle dans tout projet."," \"Clear communication is essential in any project.\""  ],
  // ["génération","generation","Chaque génération apporte son lot de changements."," \"Each generation brings its share of changes.\""  ],
  // ["adjoint","deputy","L'adjoint du directeur était en charge du projet."," \"The deputy director was in charge of the project.\""  ],
  // ["écriture","writing","Son style d'écriture est unique et captivant."," \"Her writing style is unique and captivating.\""  ],
  // ["annuler","to cancel","Il a dû annuler son voyage à la dernière minute."," \"He had to cancel his trip at the last minute.\""  ],
  // ["massacre","massacre","Le massacre a laissé une marque indélébile sur l'histoire."," \"The massacre left an indelible mark on history.\""  ],
  // ["volontiers","willingly","Je t'aiderai volontiers avec ton projet."," \"I will willingly help you with your project.\""  ],
  // ["poème","poem","Elle a écrit un poème inspirant sur l'amour."," \"She wrote an inspiring poem about love.\""  ],
  // ["bail","lease","Le bail de l'appartement expire le mois prochain."," \"The lease for the apartment expires next month.\""  ],
  // ["ravi","delighted","Il était ravi de recevoir une invitation."," \"He was delighted to receive an invitation.\""  ],
  // ["pénis","penis","La discussion sur le pénis était gênante."," \"The discussion about the penis was awkward.\""  ],
  // ["statue","statue","La statue du héros trône au centre de la place."," \"The statue of the hero stands in the center of the square.\""  ],
  // ["époux","spouse","Les époux célébreront leur anniversaire de mariage."," \"The spouses will celebrate their wedding anniversary.\""  ],
  // ["automne","autumn","Les feuilles tombent des arbres en automne."," \"Leaves fall from the trees in autumn.\""  ],
  // ["brigade","brigade","La brigade de police a été dépêchée sur les lieux."," \"The police brigade was dispatched to the scene.\""  ],
  // ["éloigner","to distance","Il a dû s'éloigner pour réfléchir."," \"He had to distance himself to think.\""  ],
  // ["magicien","magician","Le magicien a surpris le public avec ses tours."," \"The magician surprised the audience with his tricks.\""  ],
  // ["survie","survival","La survie en pleine nature demande des compétences spécifiques."," \"Survival in the wilderness requires specific skills.\""  ],
  // ["batterie","battery","La batterie du téléphone était complètement déchargée."," \"The phone battery was completely discharged.\""  ],
  // ["ordonner","to order","Le général a ordonné une retraite stratégique."," \"The general ordered a strategic retreat.\""  ],
  // ["manche","sleeve","La chemise avait une tache sur la manche."," \"The shirt had a stain on the sleeve.\""  ],
  // ["creuser","to dig","Il a dû creuser un trou pour enterrer le trésor."," \"He had to dig a hole to bury the treasure.\""  ],
  // ["pourvu que","provided that","Pourvu que le temps soit clément pour la cérémonie."," \"Provided that the weather is favorable for the ceremony.\""  ],
  // ["mordre","to bite","Le chien a tendance à mordre quand il est effrayé."," \"The dog tends to bite when he is scared.\""  ],
  // ["contenir","to contain","La boîte doit contenir tous les documents."," \"The box must contain all the documents.\""  ],
  // ["principe","principle","Il a des principes stricts en matière d'éthique."," \"He has strict principles when it comes to ethics.\""  ],
  // ["bourré","drunk","Il était complètement bourré après la fête."," \"He was completely drunk after the party.\""  ],
  // ["rembourser","to reimburse","L'entreprise va rembourser les frais de déplacement."," \"The company will reimburse the travel expenses.\""  ],
  // ["masse","mass","La masse de l'objet détermine sa gravité."," \"The mass of the object determines its gravity.\""  ],
  // ["luxe","luxury","Ils ont séjourné dans un hôtel de luxe pendant les vacances."," \"They stayed in a luxury hotel during the holidays.\""  ],
  // ["chariot","cart","Il a chargé le chariot avec des provisions pour la semaine."," \"He loaded the cart with groceries for the week.\""  ],
  // ["terreur","terror","La terreur s'est emparée de la population pendant la guerre."," \"Terror seized the population during the war.\""  ],
  // ["mobile","mobile","Son numéro de téléphone mobile a changé récemment."," \"His mobile phone number changed recently.\""  ],
  // ["sagesse","wisdom","La sagesse vient avec l'expérience."," \"Wisdom comes with experience.\""  ],
  // ["informer","to inform","Il est important de bien informer le public."," \"It is important to inform the public thoroughly.\""  ],
  // ["saluer","to greet","Elle s'est arrêtée pour saluer un vieil ami."," \"She stopped to greet an old friend.\""  ],
  // ["terriblement","terribly","Il a été blessé terriblement dans l'accident de voiture."," \"He was terribly injured in the car accident.\""  ],
  // ["satisfait","satisfied","Le client était pleinement satisfait du service."," \"The customer was fully satisfied with the service.\""  ],
  // ["avaler","to swallow","Il a du mal à avaler les pilules."," \"He has trouble swallowing pills.\""  ],
  // ["décembre","December","Les vacances de Noël sont en décembre."," \"Christmas holidays are in December.\""  ],
  // ["plante","plant","La plante a besoin de beaucoup de lumière pour pousser."," \"The plant needs a lot of light to grow.\""  ],
  // ["four","oven","Le gâteau est en train de cuire dans le four."," \"The cake is baking in the oven.\""  ],
  // ["usage","use","Il a trouvé un nouvel usage pour cet objet."," \"He found a new use for this object.\""  ],
  // ["collège","college","Le collège offre des cours de niveau supérieur."," \"The college offers higher-level courses.\""  ],
  // ["symbole","symbol","Le drapeau est un symbole national."," \"The flag is a national symbol.\""  ],
  // ["aile","wing","L'aile de l'oiseau est magnifiquement colorée."," \"The bird's wing is beautifully colored.\""  ],
  // ["flamme","flame","La flamme de la bougie danse dans le vent."," \"The flame of the candle dances in the wind.\""  ],
  // ["bloc","block","Le bloc de béton était trop lourd à soulever."," \"The concrete block was too heavy to lift.\""  ],
  // ["règne","reign","Son règne a été marqué par des réformes importantes."," \"His reign was marked by significant reforms.\""  ],
  // ["orage","storm","L'orage approche, il vaut mieux se mettre à l'abri."," \"The storm is approaching"  ],
  // ["renoncer","to give up","Il ne faut jamais renoncer à ses rêves."," \"One should never give up on their dreams.\""  ],
  // ["grève","strike","Les travailleurs ont organisé une grève pour des conditions meilleures."," \"The workers organized a strike for better conditions.\""  ],
  // ["royal","royal","C'était un repas royal avec des plats exquis."," \"It was a royal meal with exquisite dishes.\""  ],
  // ["texte","text","Le texte du livre était difficile à comprendre."," \"The text of the book was difficult to understand.\""  ],
  // ["officiel","official","Le document officiel a été signé par toutes les parties."," \"The official document was signed by all parties.\""  ],
  // ["gouverneur","governor","Le gouverneur a prononcé un discours lors de la cérémonie."," \"The governor delivered a speech at the ceremony.\""  ],
  // ["poubelle","trash can","Jette le papier à la poubelle."," \"Throw the paper in the trash can.\""  ],
  // ["équipement","equipment","L'équipement de camping était prêt pour l'aventure."," \"The camping equipment was ready for the adventure.\""  ],
  // ["taux","rate","Le taux de chômage a diminué ce trimestre."," \"The unemployment rate decreased this quarter.\""  ],
  // ["casino","casino","Le casino est ouvert 24 heures sur 24.","\"The casino is open 24 hours a day.\""  ],
  // ["métal","metal","Le métal est un matériau robuste et durable."," \"Metal is a sturdy and durable material.\""  ],
  // ["destination","destination","La plage était leur destination de vacances préférée."," \"The beach was their favorite vacation destination.\""  ],
  // ["accomplir","to accomplish","Il a réussi à accomplir son objectif après beaucoup d'efforts."," \"He succeeded in accomplishing his goal after a lot of effort.\""  ],
  // ["pique","spade","Le joueur a tiré la carte de pique."," \"The player drew the spade card.\""  ],
  // ["accueil","welcome","Ils ont reçu un accueil chaleureux à leur arrivée."," \"They received a warm welcome upon their arrival.\""  ],
  // ["roue","wheel","La roue du vélo était crevée."," \"The bike wheel was flat.\""  ],
  // ["économie","economy","L'économie mondiale est en constante évolution."," \"The global economy is constantly changing.\""  ],
  // ["tombe","grave","La tombe était recouverte de fleurs fraîches."," \"The grave was covered with fresh flowers.\""  ],
  // ["charité","charity","La charité vient en aide aux personnes dans le besoin."," \"Charity helps people in need.\""  ],
  // ["endormir","to put to sleep","La musique douce peut aider à endormir les bébés."," \"Soft music can help put babies to sleep.\""  ],
  // ["cuisiner","to cook","Elle aime cuisiner des plats exotiques."," \"She loves to cook exotic dishes.\""  ],
  // ["laboratoire","laboratory","Le laboratoire de recherche travaille sur de nouvelles découvertes."," \"The research laboratory is working on new discoveries.\""  ],
  // ["déconner","to joke","Il adore déconner et faire rire ses amis."," \"He loves to joke and make his friends laugh.\""  ],
  // ["plaisanterie","joke","C'était juste une plaisanterie, ne le prends pas au sérieux."," \"It was just a joke, don't take it seriously.\""  ],
  // ["culotte","underwear","Elle a acheté une nouvelle culotte en dentelle."," \"She bought a new lace underwear.\""  ],
  // ["boisson","drink","Quelle boisson préférez-vous avec votre repas?"," \"Which drink do you prefer with your meal?\""  ],
  // ["saut","jump","Le saut en parachute procure une sensation incroyable."," \"Skydiving provides an incredible sensation.\""  ],
  // ["matinée","morning","La matinée était calme et ensoleillée."," \"The morning was calm and sunny.\""  ],
  // ["relever","to lift","Il faut être fort pour relever les défis de la vie."," \"One must be strong to lift the challenges of life.\""  ],
  // ["jean","jeans","Il préfère porter des jean plutôt que des pantalons."," \"He prefers to wear jeans rather than trousers.\""  ],
  // ["otage","hostage","Les négociateurs tentent de libérer les otages."," \"Negotiators are trying to free the hostages.\""  ],
  // ["ravissant","charming","Elle était vêtue d'une robe ravissante pour la soirée."," \"She was dressed in a charming dress for the evening.\""  ],
  // ["fabriquer","To manufacture;To produce","Ils fabriquent des meubles dans cette usine.;Elle a appris à fabriquer du pain.","They manufacture furniture in this factory.;She learned to make bread."  ],
  // ["tireur","Shooter;Drawer","Le tireur d'élite a neutralisé la menace.;Le tireur a dessiné un magnifique paysage.","The sniper neutralized the threat.;The drawer drew a beautiful landscape."  ],
  // ["lave","To wash;Lava","Je lave mes vêtements tous les jours.;La lave du volcan a détruit la ville.","I wash my clothes every day.;The lava from the volcano destroyed the city."  ],
  // ["ambassadeur","Ambassador","L'ambassadeur a représenté son pays lors de la réunion internationale.","The ambassador represented his country at the international meeting."  ],
  // ["atmosphère","Atmosphere","L'atmosphère était tendue pendant la réunion.;La couche d'ozone protège l'atmosphère de la Terre.","The atmosphere was tense during the meeting.;The ozone layer protects the Earth's atmosphere."  ],
  // ["menacer","To threaten;To menace","Il a menacé de révéler le secret.;La tempête menace la côte.","He threatened to reveal the secret.;The storm menaces the coast."  ],
  // ["casier","Locker;File","Il a oublié sa clé de casier.;Classez ces documents dans le casier approprié.","He forgot his locker key.;File these documents in the appropriate locker."  ],
  // ["capital","Capital","Paris est la capitale de la France.;L'éducation est un capital précieux.","Paris is the capital of France.;Education is a precious capital."  ],
  // ["cendre","Ash","Les cendres de la cheminée étaient froides.;Le volcan a craché des cendres dans le ciel.","The fireplace ashes were cold.;The volcano spewed ash into the sky."  ],
  // ["syndicat","Union;Syndicate","Le syndicat lutte pour les droits des travailleurs.;Il est membre d'un syndicat depuis plusieurs années.","The union fights for workers' rights.;He has been a member of a syndicate for several years."  ],
  // ["suisse","Swiss","Le chocolat suisse est réputé dans le monde entier.;Elle est de nationalité suisse.","Swiss chocolate is renowned worldwide.;She is of Swiss nationality."  ],
  // ["énormément","Enormously","Il a réussi à accomplir énormément de travail en peu de temps.;Elle apprécie énormément son soutien.","He managed to accomplish a lot of work in a short time.;She appreciates his support enormously."  ],
  // ["outil","Tool","Un bon menuisier a besoin de bons outils.;Cet ordinateur est un outil essentiel pour mon travail.","A good carpenter needs good tools.;This computer is an essential tool for my work."  ],
  // ["testament","Will;Testament","Il a rédigé son testament pour exprimer ses dernières volontés.;Le Nouveau Testament est une partie de la Bible.","He wrote his will to express his last wishes.;The New Testament is a part of the Bible."  ],
  // ["poète","Poet","Le poète a capturé la beauté du coucher de soleil dans ses vers.;Elle est une poète renommée dans le monde littéraire.","The poet captured the beauty of the sunset in his verses.;She is a renowned poet in the literary world."  ],
  // ["combinaison","Combination;Jumpsuit","La combinaison des saveurs rend ce plat délicieux.;Elle porte une combinaison pour le travail dans le laboratoire.","The combination of flavors makes this dish delicious.;She wears a jumpsuit for work in the laboratory."  ],
  // ["transformer","To transform;Transformer (noun)","Il peut transformer une simple idée en une grande réalisation.;Le robot est un puissant transformateur d'énergie.","He can transform a simple idea into a great accomplishment.;The robot is a powerful energy transformer."  ],
  // ["ramasser","To pick up;To gather","N'oublie pas de ramasser tes affaires.;Nous devons ramasser des informations pour le projet.","Don't forget to pick up your things.;We need to gather information for the project."  ],
  // ["avertir","To warn","Il a essayé de l'avertir du danger.;Le panneau avertit les conducteurs du virage imminent.","He tried to warn her of the danger.;The sign warns drivers of the upcoming turn."  ],
  // ["lecture","Reading;Lecture","La lecture régulière améliore la compréhension.;La conférence a été suivie d'une session de questions-réponses et de lectures.","Regular reading improves comprehension.;The lecture was followed by a Q&A session and readings."  ],
  // ["processus","Process","Le processus de fabrication est bien établi.;Comprendre le processus est essentiel pour résoudre le problème.","The manufacturing process is well-established.;Understanding the process is essential to solving the problem."  ],
  // ["vaincre","To conquer","Il a lutté pour vaincre ses peurs.;Vaincre cette maladie demande du courage et de la persévérance.","He struggled to conquer his fears.;Conquering this illness requires courage and perseverance."  ],
  // ["médical","Medical","L'examen médical a révélé un problème de santé.;Elle travaille dans le domaine médical depuis plusieurs années.","The medical examination revealed a health issue.;She has been working in the medical field for several years."  ],
  // ["atelier","Workshop;Studio","L'atelier de menuiserie est équipé de machines modernes.;Il a un atelier de peinture où il crée ses œuvres.","The woodworking workshop is equipped with modern machines.;He has a painting studio where he creates his works."  ],
  // ["guerrier","Warrior","Le guerrier s'est battu avec courage sur le champ de bataille.;Elle est une guerrière de la justice.","The warrior fought courageously on the battlefield.;She is a warrior for justice."  ],
  // ["pouce","Thumb;Inch","Il a une blessure au pouce.;La taille de l'écran est mesurée en pouces.","He has an injury to his thumb.;The screen size is measured in inches."  ],
  // ["entraîneur","Coach;Trainer","L'entraîneur motive l'équipe avant le match.;Elle est une excellente entraîneuse physique.","The coach motivates the team before the game.;She is an excellent physical trainer."  ],
  // ["peindre","To paint","Il aime peindre des paysages naturels.;Elle a décidé de peindre sa chambre en bleu.","He likes to paint natural landscapes.;She decided to paint her room blue."  ],
  // ["panier","Basket;Basket (shopping)","Il a marqué un panier à la dernière seconde du match.;Elle fait du shopping avec un panier dans le supermarché.","He scored a basket in the last second of the game.;She is shopping with a basket in the supermarket."  ],
  // ["pétrin","Kneading trough;Bind","La pâte à pain est mise dans le pétrin.;Il se retrouve souvent dans le pétrin à cause de ses choix.","The bread dough is placed in the kneading trough.;He often finds himself in a bind because of his choices."  ],
  // ["carrément","Squarely;Absolutely","Il a répondu carrément à la question.;Elle aime carrément cette nouvelle chanson.","He answered the question squarely.;She absolutely loves this new song."  ],
  // ["tonnerre","Thunder","Le tonnerre a retenti après l'éclair.;Le tonnerre a effrayé le chien.","Thunder rumbled after the lightning.;The thunder frightened the dog."  ],
  // ["témoignage","Testimony","Son témoignage a été crucial lors du procès.;Le document est un témoignage de l'histoire ancienne.","His testimony was crucial during the trial.;The document is a testimony to ancient history."  ],
  // ["douter","To doubt","Il commence à douter de sa décision.;Elle ne veut pas douter de sa sincérité.","He is starting to doubt his decision.;She doesn't want to doubt his sincerity."  ],
  // ["indice","Clue;Index","Les détectives recherchent des indices sur la scène du crime.;Le livre a un indice détaillé à la fin.","Detectives are looking for clues at the crime scene.;The book has a detailed index at the end."  ],
  // ["création","Creation","La création de l'univers est un mystère.;Son dernier film est une création artistique exceptionnelle.","The creation of the universe is a mystery.;His latest film is an exceptional artistic creation."  ],
  // ["environnement","Environment","La protection de l'environnement est cruciale pour l'avenir de la planète.;Il travaille dans le domaine de l'environnement.","Protecting the environment is crucial for the future of the planet.;He works in the environmental field."  ],
  // ["certes","Certainly","Certes, c'est une idée intéressante.;Certes, il est talentueux mais il doit encore s'améliorer.","Certainly, it's an interesting idea.;Certainly, he is talented, but he still needs to improve."  ],
  // ["dégueulasse","Disgusting","Ce comportement est vraiment dégueulasse.;La nourriture était tellement dégueulasse que je n'ai pas pu la manger.","This behavior is really disgusting.;The food was so disgusting that I couldn't eat it."  ],
  // ["enseigner","To teach","Elle aime enseigner les mathématiques aux élèves.;Il a décidé d'enseigner l'histoire à l'université.","She enjoys teaching mathematics to students.;He decided to teach history at the university."  ],
  // ["dose","Dose","La dose recommandée de médicament est indiquée sur l'emballage.;Il a reçu une forte dose de radiation lors de l'accident.","The recommended dose of medication is indicated on the packaging.;He received a high dose of radiation during the accident."  ],
  // ["môme","Kid","C'est une histoire pour les mômes.;Les mômes jouent dans le parc.","It's a story for kids.;The kids are playing in the park."  ],
  // ["curiosité","Curiosity","La curiosité est une qualité importante pour apprendre.;Le chat a regardé la boîte avec curiosité.","Curiosity is an important quality for learning.;The cat looked at the box with curiosity."  ],
  // ["administration","Administration","L'administration gère les affaires quotidiennes de l'entreprise.;Il étudie l'administration des affaires à l'université.","The administration manages the daily affairs of the company.;He is studying business administration at the university."  ],
  // ["misère","Misery","La misère sociale doit être combattue.;Il a vécu dans la misère pendant de nombreuses années.","Social misery must be fought against.;He lived in misery for many years."  ],
  // ["cuir","Leather","Le canapé est recouvert de cuir.;Elle porte une veste en cuir à la mode.","The sofa is covered in leather.;She is wearing a stylish leather jacket."  ],
  // ["transport","Transportation","Le transport public est essentiel dans une grande ville.;Le transport de marchandises est un secteur clé de l'économie.","Public transportation is essential in a large city.;Transportation of goods is a key sector of the economy."  ],
  // ["prêter","To lend","Il a accepté de me prêter de l'argent.;Ne prêtez pas attention aux rumeurs.","He agreed to lend me some money.;Don't lend attention to rumors."  ],
  // ["trône","Throne","Le roi s'assoit sur le trône lors des cérémonies officielles.;Le trône est un symbole de pouvoir.","The king sits on the throne during official ceremonies.;The throne is a symbol of power."  ],
  // ["fourchette","Fork;Range","Elle utilise une fourchette pour manger la salade.;Le prix des maisons dans cette région est dans une fourchette élevée.","She uses a fork to eat the salad.;The price of houses in this region is in a high range."  ],
  // ["savon","Soap","Le savon parfumé laisse une agréable odeur sur la peau.;Il a fait fondre du savon pour créer des bougies parfumées.","The scented soap leaves a pleasant smell on the skin.;He melted soap to create scented candles."  ],
  // ["pirate","Pirate","Le pirate informatique a compromis la sécurité du réseau.;Le livre parle d'un pirate célèbre du XVIIIe siècle.","The hacker compromised the network security.;The book talks about a famous pirate from the 18th century."  ],
  // ["pipi","Pee;Potty","Le chien fait pipi dans le jardin.;Il a appris à son fils à faire pipi dans le pot.","The dog pees in the garden.;He taught his son to pee in the potty."  ],
  // ["fouiller","To search;To rummage","La police a fouillé la maison à la recherche d'indices.;Elle a fouillé son sac à la recherche de ses clés.","The police searched the house for clues.;She rummaged through her bag looking for her keys."  ],
  // ["viol","Rape","Le viol est un crime odieux et inacceptable.;La victime a témoigné contre son agresseur lors du procès pour viol.","Rape is a heinous and unacceptable crime.;The victim testified against her assailant in the rape trial."  ],
  // ["clown","Clown","Le clown a fait rire tout le public avec ses blagues.;Les enfants adorent regarder les spectacles de clowns.","The clown made the entire audience laugh with his jokes.;Children love watching clown shows."  ],
  // ["douceur","Sweetness;Gentleness","La douceur du miel rend le thé délicieux.;Sa douceur et sa gentillesse ont conquis tous les collègues.","The sweetness of honey makes the tea delicious.;Her sweetness and gentleness won over all colleagues."  ],
  // ["vain","Vain","Il est obsédé par son apparence, mais c'est en vain.;Sa tentative de persuader a été vaine.","He is obsessed with his appearance, but it's in vain.;His attempt to persuade was in vain."  ],
  // ["détendre","To relax","Prends le temps de te détendre après une longue journée.;La musique douce peut détendre l'esprit.","Take time to relax after a long day.;Soft music can relax the mind."  ],
  // ["interrompre","To interrupt","Il a dû interrompre la réunion pour répondre à un appel urgent.;N'interromps pas quand quelqu'un parle.","He had to interrupt the meeting to take an urgent call.;Don't interrupt when someone is speaking."  ],
  // ["écart","Gap;Margin","Il y a un écart important entre les deux versions.;Le bénéfice net représente la marge bénéficiaire.","There is a significant gap between the two versions.;Net profit represents the profit margin."  ],
  // ["peste","Plague","La peste a décimé la population au Moyen Âge.;Son comportement est une véritable peste.","The plague decimated the population in the Middle Ages.;His behavior is a real plague."  ],
  // ["fonction","Function","La fonction principale de cette application est de calculer.;Il travaille dans la fonction publique.","The main function of this application is to calculate.;He works in the public service."  ],
  // ["élu","Elected;Chosen","Il a été élu maire de la ville.;Elle est l'élue de son cœur.","He was elected mayor of the city.;She is the chosen one of his heart."  ],
  // ["machin","Thing;Gadget","Il a oublié son machin à la maison.;Ce machin électronique est très pratique.","He forgot his thing at home.;This electronic gadget is very handy."  ],
  // ["fameux","Famous","C'est le fameux restaurant dont tout le monde parle.;Il a réalisé un coup fameux dans le domaine des affaires.","It's the famous restaurant everyone is talking about.;He achieved a famous move in the business field."  ],
  // ["catholique","Catholic","Il pratique la foi catholique depuis son enfance.;La catholique est la plus grande confession chrétienne.","He has practiced the Catholic faith since childhood.;Catholicism is the largest Christian denomination."  ],
  // ["catholique","To indicate","La flèche rouge indique la direction à suivre.;Les résultats préliminaires indiquent une amélioration.","The red arrow indicates the direction to follow.;Preliminary results indicate an improvement."  ],
  // ["indiquer","Miserable;Wretched","Il vit dans des conditions misérables.;C'est une situation misérable à laquelle personne ne devrait être confronté.","He lives in miserable conditions.;It's a wretched situation that no one should face."  ],
  // ["misérable","Shark","Le requin nageait près de la plage.;Il est un requin des affaires très prospère.","The shark was swimming near the beach.;He is a very successful business shark."  ],
  // ["misérable","Sincerely","Je vous remercie sincèrement pour votre aide.;Elle s'excusa sincèrement pour la confusion.","I sincerely thank you for your help.;She apologized sincerely for the confusion."  ],
  // ["requin","Affection","Elle lui montra de l'affection en lui faisant un câlin.;Les animaux ont besoin d'affection et d'attention.","She showed him affection by giving him a hug.;Animals need affection and attention."  ],
  // ["sincèrement","Porn;Pornographic","Il ne devrait pas regarder de films porno au travail.;La distribution de matériel pornographique est illégale.","He shouldn't watch porn movies at work.;The distribution of pornographic material is illegal."  ],
  // ["affection","Opponent;Adversary","L'adversaire était plus fort mais il a bien lutté.;Il respecte toujours ses adversaires sur le terrain de jeu.","The opponent was stronger, but he fought well.;He always respects his adversaries on the playing field."  ],
  // ["porno","Currently","Il travaille actuellement sur un nouveau projet.;Actuellement, elle étudie la biologie à l'université.","He is currently working on a new project.;Currently, she is studying biology at the university."  ],
  // ["adversaire","Furniture","Le salon est meublé avec des pièces vintage.;Il a acheté de nouveaux meubles pour sa chambre.","The living room is furnished with vintage pieces.;He bought new furniture for his room."  ],
  // ["actuellement","Screwed;Ruined","La machine est foutue, il faudra la réparer.;Son comportement l'a foutu dans une situation délicate.","The machine is screwed; it will need repair.;His behavior has screwed him into a difficult situation."  ],
  // ["meuble","Dignity","Chacun a le droit d'être traité avec dignité.;Elle a défendu sa dignité malgré les critiques.","Everyone has the right to be treated with dignity.;She defended her dignity despite the criticisms."  ],
  // ["foutu","To wait patiently","Il faut patienter avant que les résultats ne soient annoncés.;Merci de patienter, votre appel est important pour nous.","You need to wait patiently before the results are announced.;Thank you for waiting; your call is important to us."  ],
  // ["dignité","To vomit","Il a dû courir aux toilettes pour vomir.;La nourriture a provoqué chez elle l'envie de vomir.","He had to run to the bathroom to vomit.;The food triggered the urge to vomit in her."  ],
  // ["patienter","Depression","La dépression peut affecter profondément la vie quotidienne.;Il a été diagnostiqué avec une dépression sévère.","Depression can deeply affect daily life.;He has been diagnosed with severe depression."  ],
  // ["vomir","Precisely","Il a répondu précisément à toutes les questions.;Le rapport décrit précisément les étapes du processus.","He answered precisely to all the questions.;The report precisely describes the steps of the process."  ],
  // ["dépression","Circuit","Le circuit électrique est défectueux.;Le circuit de course est très exigeant.","The electrical circuit is faulty.;The racing circuit is very demanding."  ],
  // ["précisément","Sail;Veil","Le bateau avance grâce au vent dans les voiles.;Elle porte un voile blanc lors de la cérémonie.","The boat moves forward thanks to the wind in the sails.;She wears a white veil during the ceremony."  ],
  // ["circuit","Correctly","Il n'a pas compris la question et n'a pas répondu correctement.;Assurez-vous de suivre correctement les instructions.","He didn't understand the question and didn't answer correctly.;Make sure to follow the instructions correctly."  ],
  // ["voile","Clothes","Elle adore acheter de nouvelles fringues.;Il ne se soucie pas beaucoup de ses fringues.","She loves buying new clothes.;He doesn't care much about his clothes."  ],
  // ["correctement","To improve","Il cherche constamment à améliorer ses compétences.;Les suggestions des clients peuvent aider à améliorer le service.","He constantly seeks to improve his skills.;Customer suggestions can help improve the service."  ],
  // ["fringues","To observe","Il aime s'asseoir et observer les oiseaux dans le parc.;Observer attentivement peut révéler des détails importants.","He likes to sit and observe the birds in the park.;Observing carefully can reveal important details."  ],
  // ["améliorer","Volunteer;Willing","Elle est volontaire dans une organisation caritative.;Son départ a été volontaire, il voulait explorer de nouvelles opportunités.","She volunteers for a charitable organization.;His departure was voluntary; he wanted to explore new opportunities."  ],
  // ["observer","Zoo","Les enfants adorent visiter le zoo pour voir les animaux.;Le zoo s'engage dans la conservation des espèces en voie de disparition.","Children love visiting the zoo to see the animals.;The zoo is committed to the conservation of endangered species."  ],
  // ["volontaire","Selfish","Il est trop égoïste pour partager ses jouets.;Le comportement égoïste peut causer des conflits dans les relations.","He is too selfish to share his toys.;Selfish behavior can cause conflicts in relationships."  ],
  // ["volontaire","Fog","Le brouillard rend la conduite dangereuse.;La ville était enveloppée dans un épais brouillard.","Fog makes driving dangerous.;The city was enveloped in thick fog."  ],
  // ["zoo","Construction","La construction du nouveau pont a commencé.;La construction de l'immeuble a pris plusieurs mois.","The construction of the new bridge has started.;The construction of the building took several months."  ],
  // ["égoïste","Weather","La météo annonce de la pluie pour demain.;Il regarde toujours la météo avant de sortir.","The weather forecast predicts rain for tomorrow.;He always checks the weather before going out."  ],
  // ["brouillard","Little girl","La fillette joue dans le jardin.;La fillette était timide lors de la première journée d'école.","The little girl is playing in the garden.;The little girl was shy on the first day of school."  ],
  // ["construction","Reason;Pattern","Il n'a pas donné de motif valable pour son absence.;Le motif du tissu est unique et artistique.","He didn't provide a valid reason for his absence.;The pattern of the fabric is unique and artistic."  ],
  // ["météo","His;Hers","Il a pris son livre et elle a pris le sien.;Ses opinions sont différentes des siennes.","He took his book, and she took hers.;His opinions are different from hers."  ],
  // ["fillette","Vodka","La vodka est une boisson populaire en Russie.;Il a commandé une vodka martini au bar.","Vodka is a popular drink in Russia.;He ordered a vodka martini at the bar."  ],
  // ["motif","Loyalty","Sa loyauté envers ses amis est inébranlable.;La loyauté est une qualité appréciée dans les relations professionnelles.","His loyalty to his friends is unwavering.;Loyalty is an appreciated quality in professional relationships."  ],
  // ["sien","Evidence","Les empreintes digitales étaient une évidence de sa présence sur les lieux.;L'évidence de l'évolution est soutenue par de nombreuses découvertes scientifiques.","Fingerprints were evidence of his presence at the scene.;The evidence of evolution is supported by many scientific discoveries."  ],
  // ["vodka","Sheep","Le berger veille sur son troupeau de moutons.;Il a comparé suivre la masse à être un mouton.","The shepherd watches over his flock of sheep.;He compared following the crowd to being a sheep."  ],
  // ["loyauté","Salesman;Commercial","Il travaille comme commercial dans une entreprise informatique.;Le quartier est une zone résidentielle, sans activité commerciale.","He works as a salesman in a computer company.;The neighborhood is a residential area, without commercial activity."  ],
  // ["évidence","Slang","L'argot peut varier d'une région à l'autre.;Il a utilisé un argot que je n'avais jamais entendu.","Slang can vary from one region to another.;He used slang that I had never heard before."  ],
  // ["mouton","Linked;Connected","Les deux événements sont liés.;Son succès est étroitement lié à son travail acharné.","The two events are linked.;His success is closely connected to his hard work."  ],
  // ["commercial","Remedy;Cure","Il cherche un remède naturel pour le rhume.;Il n'y a pas de remède miracle pour tous les problèmes.","He is looking for a natural remedy for the cold.;There is no miracle cure for all problems."  ],
  // ["commercial","To maintain","Il doit maintenir la concentration pendant l'examen.;Il s'efforce de maintenir un équilibre entre travail et vie personnelle.","He has to maintain concentration during the exam.;He strives to maintain a balance between work and personal life."  ],
  // ["argot","Dessert","Le tiramisu est un délicieux dessert italien.;Elle a préparé un dessert aux fruits pour la fête.","Tiramisu is a delicious Italian dessert.;She prepared a fruit dessert for the party."  ],
  // ["lié","Catastrophe","La tempête a provoqué une véritable catastrophe dans la région.;L'accident a été une catastrophe évitable.","The storm caused a real catastrophe in the region.;The accident was an avoidable catastrophe."  ],
  // ["remède","Disappearance","La disparition soudaine a choqué la communauté.;La police enquête sur la mystérieuse disparition.","The sudden disappearance shocked the community.;The police are investigating the mysterious disappearance."  ],
  // ["maintenir","Eternal","L'amour éternel est un thème courant dans la littérature.;La beauté de la nature semble éternelle.","Eternal love is a common theme in literature.;The beauty of nature seems eternal."  ],
  // ["dessert","Sheet","Elle a changé les draps du lit ce matin.;Le drap était doux et confortable.","She changed the sheets on the bed this morning.;The sheet was soft and comfortable."  ],
  // ["catastrophe","Envelope","Il a reçu une enveloppe scellée avec une lettre à l'intérieur.;L'enveloppe contenait une invitation à la fête.","He received a sealed envelope with a letter inside.;The envelope contained an invitation to the party."  ],
  // ["disparition","Cigar","Il savoure un bon cigare après le dîner.;Les cigares cubains sont réputés dans le monde entier.","He enjoys a good cigar after dinner.;Cuban cigars are renowned worldwide."  ],
  // ["éternel","Lightning;Eclair","L'éclair a illuminé le ciel pendant l'orage.;Elle a acheté un éclair au chocolat à la pâtisserie.","The lightning illuminated the sky during the storm.;She bought a chocolate eclair at the pastry shop."  ],
  // ["drap","Sheet; Cloth","J'ai mis un drap propre sur le lit; Le drap est en coton.","I put a clean sheet on the bed; The sheet is made of cotton."  ],
  // ["enveloppe","Envelope; Wrap","Il a reçu une enveloppe par la poste; Le cadeau est enveloppé dans du papier coloré.","He received an envelope in the mail; The gift is wrapped in colored paper."  ],
  // ["cigare","Cigar","Il fume un cigare après le dîner; Les cigares cubains sont réputés.","He smokes a cigar after dinner; Cuban cigars are renowned."  ],
  // ["éclair","Lightning; Eclair (pastry)","Le ciel était illuminé par un éclair; J'ai acheté un éclair au chocolat.","The sky was lit up by lightning; I bought a chocolate eclair."  ],
  // ["témoigner","Testify; Witness","Il a dû témoigner lors du procès; Les témoins ont confirmé l'accident.","He had to testify in court; The witnesses confirmed the accident."  ],
  // ["feuille","Leaf; Sheet (of paper)","L'automne, les feuilles tombent des arbres; J'ai écrit quelque chose sur la feuille de papier.","In autumn, leaves fall from the trees; I wrote something on the sheet of paper."  ],
  // ["embêter","Bother; Annoy","Arrête de m'embêter!; Il est toujours là pour embêter les autres.","Stop bothering me!; He's always there to annoy others."  ],
  // ["cash","Cash","Je préfère payer en cash; Il a payé la voiture cash.","I prefer to pay in cash; He paid for the car in cash."  ],
  // ["interview","Interview","Il a donné une interview à la télévision; L'intervieweur a posé des questions intéressantes.","He gave an interview on television; The interviewer asked interesting questions."  ],
  // ["partant","Ready; Departing","Je suis partant pour la soirée; Le train partant à 15h.","I'm ready for the evening; The departing train is at 3 pm."  ],
  // ["promenade","Walk; Promenade","J'aime faire une promenade dans le parc; Nous avons fait une promenade en bord de mer.","I like to take a walk in the park; We took a promenade by the sea."  ],
  // ["extra","Extra; Bonus","Il a commandé une pizza avec des ingrédients extra; Ce travail supplémentaire est un extra.","He ordered a pizza with extra toppings; This additional work is an extra."  ],
  // ["association","Association; Organization","Il est membre d'une association caritative; Cette association aide les personnes défavorisées.","He is a member of a charity association; This association helps disadvantaged people."  ],
  // ["leader","Leader","Il est le leader de l'équipe; Les leaders doivent prendre des décisions difficiles.","He is the leader of the team; Leaders have to make tough decisions."  ],
  // ["gus","Guy; Dude","Ce gus est vraiment drôle; Salut, gus, comment ça va?","That guy is really funny; Hey dude, how's it going?"  ],
  // ["demoiselle","Miss; Dragonfly","Elle a remporté le concours de demoiselle d'honneur; J'ai vu une demoiselle voler près de l'étang.","She won the Miss competition; I saw a dragonfly flying near the pond."  ],
  // ["discipline","Discipline; Field of study","La discipline est essentielle pour réussir; Quelle est ta discipline académique préférée?","Discipline is essential for success; What is your favorite academic field of study?"  ],
  // ["civil","Civil; Polite","Il a un comportement civil en public; Soyez civils les uns envers les autres.","He has civil behavior in public; Be polite to each other."  ],
  // ["lancement","Launch; Launching","Le lancement de la fusée a été un succès; Nous préparons le lancement du nouveau produit.","The rocket launch was successful; We are preparing the launching of the new product."  ],
  // ["gras","Fat; Bold","Les aliments gras ne sont pas bons pour la santé; Utilisez une police de caractères gras pour attirer l'attention.","Fatty foods are not good for health; Use bold font to draw attention."  ],
  // ["transfert","Transfer; Transport","Le transfert d'argent s'est effectué rapidement; Le transfert de marchandises nécessite un bon système de transport.","The money transfer was done quickly; The transfer of goods requires a good transportation system."  ],
  // ["satellite","Satellite; Companion","La Terre a un satellite naturel, la Lune; Ce satellite artificiel collecte des données météorologiques.","Earth has a natural satellite, the Moon; This artificial satellite collects weather data."  ],
  // ["pompier","Firefighter","Les pompiers sont intervenus rapidement; Mon frère est pompier.","The firefighters intervened quickly; My brother is a firefighter."  ],
  // ["tennis","Tennis","Il joue au tennis tous les weekends; Le match de tennis a duré trois heures.","He plays tennis every weekend; The tennis match lasted three hours."  ],
  // ["toc","Knock; Tick (sound)","J'ai entendu un toc à la porte; Le toc-toc-toc du bois me relaxe.","I heard a knock at the door; The tick-tock of the wood relaxes me."  ],
  // ["tragique","Tragic","La fin de l'histoire était tragique; C'est une situation vraiment tragique.","The end of the story was tragic; It's a truly tragic situation."  ],
  // ["enregistrement","Recording; Registration","L'enregistrement de la chanson a pris une journée; L'enregistrement des participants commence à 9 heures.","The recording of the song took a day; Participant registration starts at 9 o'clock."  ],
  // ["pognon","Money","Il a gagné beaucoup de pognon avec ce contrat; On a besoin de pognon pour financer le projet.","He earned a lot of money with this contract; We need money to fund the project."  ],
  // ["circulation","Traffic; Circulation","La circulation était dense ce matin; La circulation sanguine transporte l'oxygène.","Traffic was heavy this morning; Blood circulation carries oxygen."  ],
  // ["casque","Helmet; Headset","Il portait un casque de vélo; Le pilote a mis son casque avec un micro.","He was wearing a bicycle helmet; The pilot put on his headset with a microphone."  ],
  // ["compétition","Competition","La compétition était féroce; La compétition sportive a attiré des athlètes du monde entier.","The competition was fierce; The sports competition attracted athletes from around the world."  ],
  // ["caution","Caution; Bail","Il a versé une caution pour la location; La caution sera remboursée à la fin du bail.","He paid a caution for the rental; The bail will be refunded at the end of the lease."  ],
  // ["ADN","DNA","L'ADN contient des informations génétiques; Les experts ont analysé l'ADN trouvé sur les lieux du crime.","DNA contains genetic information; Experts analyzed the DNA found at the crime scene."  ],
  // ["opportunité","Opportunity","C'est une excellente opportunité de carrière; Saisissez cette opportunité dès maintenant.","It's an excellent career opportunity; Seize this opportunity right now."  ],
  // ["officiellement","Officially","Le document a été signé officiellement; C'est officiellement reconnu par le gouvernement.","The document was officially signed; It is officially recognized by the government."  ],
  // ["fixé","Set; Fixed","Le rendez-vous est fixé à 15 heures; Le prix est fixé et non négociable.","The appointment is set for 3 pm; The price is set and non-negotiable."  ],
  // ["fascinant","Fascinating","C'est un sujet fascinant; Son histoire est vraiment fascinante.","It's a fascinating subject; His story is truly fascinating."  ],
  // ["menu","Menu","Le menu du restaurant a beaucoup de choix; Voici le menu du jour.","The restaurant menu has a lot of choices; Here is today's menu."  ],
  // ["planche","Board; Plank","Il a utilisé une planche pour construire l'étagère; La planche de surf est prête pour la plage.","He used a board to build the shelf; The surfboard is ready for the beach."  ],
  // ["subir","Undergo; Suffer","Il a dû subir une opération; Les civils ne devraient pas subir les conséquences de la guerre.","He had to undergo surgery; Civilians should not suffer the consequences of war."  ],
  // ["saigner","Bleed","La plaie saigne encore; Il saigne du nez.","The wound is still bleeding; He is bleeding from the nose."  ],
  // ["dentiste","Dentist","Il doit aller chez le dentiste demain; Le dentiste a recommandé un brossage régulier.","He has to go to the dentist tomorrow; The dentist recommended regular brushing."  ],
  // ["légal","Legal","C'est un document légal; Le mariage est légal dans ce pays.","It's a legal document; Marriage is legal in this country."  ],
  // ["ticket","Ticket","Il a perdu son ticket de parking; J'ai acheté un ticket pour le concert.","He lost his parking ticket; I bought a ticket for the concert."  ],
  // ["civilisation","Civilization","L'Égypte ancienne était une grande civilisation; La guerre menace la civilisation moderne.","Ancient Egypt was a great civilization; War threatens modern civilization."  ],
  // ["coca","Coca (cola); Cocaine","Je préfère le coca light; La coca est une substance illégale.","I prefer diet coke; Cocaine is an illegal substance."  ],
  // ["avertissement","Warning","Il a ignoré l'avertissement; L'avertissement sur la boîte indique un danger.","He ignored the warning; The warning on the box indicates a danger."  ],
  // ["tache","Stain; Task","Il y a une tache sur la chemise; La tache principale est de terminer le projet.","There is a stain on the shirt; The main task is to finish the project."  ],
  // ["balade","Stroll; Ride","J'aime faire une balade à vélo; Nous avons pris une balade à cheval dans la campagne.","I enjoy taking a bike ride; We took a horse ride in the countryside."  ],
  // ["nid","Nest","Les oiseaux construisent un nid dans l'arbre; Le nid est confortable et douillet.","Birds are building a nest in the tree; The nest is comfortable and cozy."  ],
  // ["antenne","Antenna","L'antenne capte les signaux radio; L'antenne parabolique est utilisée pour recevoir des signaux satellite.","The antenna captures radio signals; The parabolic antenna is used to receive satellite signals."  ],
  // ["confier","Entrust","Je vais te confier un secret; Il a confié la responsabilité à son collègue.","I will entrust you with a secret; He entrusted the responsibility to his colleague."  ],
  // ["onde","Wave","Les ondes sonores se propagent dans l'air; L'onde de choc a secoué la région.","Sound waves propagate through the air; The shockwave shook the region."  ],
  // ["assaut","Assault","Les soldats ont lancé un assaut surprise; L'assaut a été repoussé avec succès.","The soldiers launched a surprise assault; The assault was successfully repelled."  ],
  // ["épisode","Episode","J'ai manqué le dernier épisode de la série; Chaque épisode de la série est captivant.","I missed the last episode of the series; Each episode of the series is captivating."  ],
  // ["anneau","Ring; Ring (jewelry)","Il a offert un anneau de mariage; Elle porte un bel anneau en or.","He gave a wedding ring; She wears a beautiful gold ring."  ],
  // ["maquillage","Makeup","Elle porte un maquillage élégant; Le maquillage peut accentuer les traits du visage.","She wears elegant makeup; Makeup can accentuate facial features."  ],
  // ["enregistrer","Record","Je vais enregistrer la réunion; L'artiste a enregistré une nouvelle chanson.","I will record the meeting; The artist recorded a new song."  ],
  // ["impact","Impact","L'impact de la collision était violent; Le projet aura un impact positif sur la communauté.","The impact of the collision was violent; The project will have a positive impact on the community."  ],
  // ["médias","Media","Les médias couvrent l'événement en direct; Les médias sociaux sont devenus très influents.","The media is covering the event live; Social media has become very influential."  ],
  // ["éléphant","Elephant","L'éléphant est le plus grand mammifère terrestre; Les éléphants ont une mémoire remarquable.","The elephant is the largest land mammal; Elephants have a remarkable memory."  ],
  // ["déménager","Move (residence)","Nous allons déménager dans une nouvelle maison; Déménager peut être stressant mais excitant.","We are going to move to a new house; Moving can be stressful but exciting."  ],
  // ["chaussette","Sock","J'ai besoin d'une paire de chaussettes chaudes; La chaussette rouge a une petite déchirure.","I need a pair of warm socks; The red sock has a small tear."  ],
  // ["poker","Poker","Il joue au poker avec ses amis; Le poker est un jeu de cartes très populaire.","He plays poker with his friends; Poker is a very popular card game."  ],
  // ["ancêtre","Ancestor","Nos ancêtres ont traversé des moments difficiles; Les ancêtres ont influencé notre culture.","Our ancestors went through difficult times; Ancestors have influenced our culture."  ],
  // ["effacer","Erase","Il a utilisé une gomme pour effacer le dessin; Effacer le disque dur supprimera toutes les données.","He used an eraser to erase the drawing; Erasing the hard drive will delete all data."  ],
  // ["loger","Lodge; Accommodate","Le chalet peut loger jusqu'à six personnes; Le grand hôtel peut loger de nombreux invités.","The cabin can lodge up to six people; The large hotel can accommodate many guests."  ],
  // ["conflit","Conflict","Le conflit a éclaté entre deux nations; La résolution pacifique des conflits est préférable.","Conflict broke out between two nations; Peaceful resolution of conflicts is preferable."  ],
  // ["hélicoptère","Helicopter","L'hélicoptère survole la ville; Les hélicoptères sont utilisés pour des missions de sauvetage.","The helicopter is flying over the city; Helicopters are used for rescue missions."  ],
  // ["mâle","Male","Le lion est un animal mâle; Le mâle et la femelle ont des caractéristiques différentes.","The lion is a male animal; Male and female have different characteristics."  ],
  // ["profit","Profit","L'entreprise a réalisé un grand profit; Le profit financier n'est pas le seul objectif.","The company made a big profit; Financial profit is not the only goal."  ],
  // ["cadre","Frame; Executive","Il a encadré la photo dans un joli cadre; Il occupe un poste de cadre dans l'entreprise.","He framed the picture in a nice frame; He holds an executive position in the company."  ],
  // ["audition","Audition","Elle a réussi l'audition pour le rôle principal; L'audition a attiré de nombreux talents.","She passed the audition for the lead role; The audition attracted many talents."  ],
  // ["pape","Pope","Le pape est le chef de l'Église catholique; Le nouveau pape a été élu récemment.","The Pope is the head of the Catholic Church; The new Pope was recently elected."  ],
  // ["fragile","Fragile","La porcelaine est fragile; Les sentiments peuvent être fragiles.","Porcelain is fragile; Feelings can be fragile."  ],
  // ["assiette","Plate","Il a posé le sandwich sur une assiette; L'assiette était pleine de délicieux petits fours.","He placed the sandwich on a plate; The plate was full of delicious appetizers."  ],
  // ["culpabilité","Guilt","Il ressentait une forte culpabilité après l'incident; La culpabilité peut peser lourd sur la conscience.","He felt a strong guilt after the incident; Guilt can weigh heavily on the conscience."  ],
  // ["foirer","Mess up","Il a vraiment foiré cette fois-ci; Ne foire pas cette opportunité.","He really messed up this time; Don't mess up this opportunity."  ],
  // ["arabe","Arab","Il parle arabe couramment; La culture arabe est riche et diversifiée.","He speaks Arabic fluently; Arab culture is rich and diverse."  ],
  // ["soutenir","Support","Je vais te soutenir dans cette décision; La famille doit se soutenir mutuellement.","I will support you in this decision; Family should support each other."  ],
  // ["bidon","Can; Fake","Il a jeté le bidon vide; Ce discours était totalement bidon.","He threw away the empty can; That speech was totally fake."  ],
  // ["république","Republic","La France est une république; La République dominicaine est dans les Caraïbes.","France is a republic; The Dominican Republic is in the Caribbean."  ],
  // ["saleté","Dirt","Nettoie cette saleté sur le sol; La saleté peut causer des problèmes de santé.","Clean up that dirt on the floor; Dirt can cause health problems."  ],
  // ["quai","Quay; Platform","Les bateaux sont amarrés au quai; Attendez-moi sur le quai de la gare.","The boats are moored at the quay; Wait for me on the train platform."  ],
  // ["funérailles","Funeral","Les funérailles auront lieu demain; Les funérailles étaient empreintes de tristesse.","The funeral will take place tomorrow; The funeral was filled with sadness."  ],
  // ["pré","Meadow; Field","Les vaches paissent dans le pré; Nous avons pique-niqué dans le pré.","Cows graze in the meadow; We had a picnic in the field."  ],
  // ["tristesse","Sadness","La tristesse envahit son cœur; Exprimez votre tristesse librement.","Sadness overwhelms his heart; Express your sadness freely."  ],
  // ["tribu","Tribe","La tribu vit en harmonie avec la nature; Les tribus indigènes préservent leurs traditions.","The tribe lives in harmony with nature; Indigenous tribes preserve their traditions."  ],
  // ["établir","Establish","Il veut établir sa propre entreprise; L'établissement des règles est essentiel.","He wants to establish his own business; Establishing rules is essential."  ],
  // ["disponible","Available","Le produit est maintenant disponible en ligne; Je suis disponible pour une réunion demain.","The product is now available online; I am available for a meeting tomorrow."  ],
  // ["pacifique","Peaceful","C'est une région pacifique; La méditation crée un état d'esprit pacifique.","It's a peaceful region; Meditation creates a peaceful state of mind."  ],
  // ["mystérieux","Mysterious","Le vieux manoir a un air mystérieux; L'inconnu a quelque chose de mystérieux.","The old manor has a mysterious air; The unknown has something mysterious."  ],
  // ["concevoir","Design; Conceive","Il a contribué à concevoir le nouveau bâtiment; Elle a conçu un plan innovant.","He contributed to designing the new building; She conceived an innovative plan."  ],
  // ["historique","Historic","C'est un site historique important; L'événement a une signification historique.","It's an important historic site; The event has historical significance."  ],
  // ["boucher","Butcher","Le boucher coupe la viande fraîche; La boucherie propose des produits de qualité.","The butcher cuts fresh meat; The butcher shop offers quality products."  ],
  // ["légitime","Legitimate","La demande est légitime; Il a un droit légitime sur la propriété.","The request is legitimate; He has a legitimate right to the property."  ],
  // ["cuit","Cooked","Les légumes sont bien cuits; Le poulet est parfaitement cuit.","The vegetables are well-cooked; The chicken is perfectly cooked."  ],
  // ["épuiser","Exhaust","Le travail intense peut épuiser; Ne vous laissez pas épuiser par le stress.","Intense work can exhaust; Don't let yourself be exhausted by stress."  ],
  // ["former","Train","Elle veut former une équipe performante; La formation est essentielle pour le développement.","She wants to train a high-performing team; Training is essential for development."  ],
  // ["considérer","Consider","Il faut considérer toutes les options; Considérez cela comme une opportunité.","All options must be considered; Consider this as an opportunity."  ],
  // ["décrire","Describe","Il a du mal à décrire ses émotions; Elle a bien décrit la scène.","He has trouble describing his emotions; She described the scene well."  ],
  // ["effectivement","Indeed","Effectivement, c'est une excellente idée; Il a effectivement remporté la compétition.","Indeed, it's an excellent idea; He indeed won the competition."  ],
  // ["honorable","Honorable","Il a reçu une mention honorable; C'est un homme honorable.","He received an honorable mention; He is an honorable man."  ],
  // ["minimum","Minimum","La température a atteint le minimum; Le salaire minimum est fixé par la loi.","The temperature reached the minimum; The minimum wage is set by law."  ],
  // ["absent","Absent","Il était absent lors de la réunion; Soyez présent, l'absence est remarquée.","He was absent from the meeting; Be present, absence is noticed."  ],
  // ["vachement","Really","C'est vachement intéressant; Il a vachement bien joué.","It's really interesting; He played really well."  ]
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

  // document.querySelectorAll('.sentenceContainer').forEach(e => e.remove());

  const sentencesDict = {};

  for (let i=0; i<originalCards.length; i++){
    sentencesDict[originalCards[i][0]] = originalCards[i]
  }

  const frenchWordOpened = String(opened[0][0].innerText).trim();

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
