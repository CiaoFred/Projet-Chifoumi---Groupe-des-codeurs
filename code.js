//Génération du signe random du CPU
// On peut sortir la définition de cette fonction en-dehors du code principal
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Fonction pour récupérer le choix de l'utilisateur
function getUserChoice() {
  let userChoice;

  do {
    userChoice = prompt(
      "Vous avez démarré une nouvelle partie de Chifoumi!\n Choisissez votre signe :\n\n 1 - Pierre\n 2 - Feuille\n 3 - Ciseau\n"
    );
  } while (userChoice != 1 && userChoice != 2 && userChoice != 3);

  return userChoice;
}

//Main loop entry
do {
  // Ici du coup on peut appeler la fonction pour récupérer le choix de l'utilisateur
  // On regroupe du coup la définition de userChoice et cpuChoice
  let userChoice = getUserChoice();
  let cpuChoice = randInt(1, 3);

  if (cpuChoice == userChoice) {
    alert("Egalité");
  } else if (
    (cpuChoice == 2 && userChoice == 1) ||
    (cpuChoice == 3 && userChoice == 2) ||
    (cpuChoice == 1 && userChoice == 3)
  ) {
    alert("L'ordi a choisi " + cpuChoice + " Tu as perdu");
  } else {
    alert("L'ordi a choisi " + cpuChoice + " Tu as gagné");
  }

  // Vu que "confirm" renvoie un booléen, on peut l'évaluer directement dans le while
  // Plus besoin de la variable restart
} while (confirm("Souhaitez-vous rejouer?"));
