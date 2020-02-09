//Demande du choix du signe pour l'user

//Main loop entry
let restart = false;
do{
do {var userChoice = prompt('Vous avez démarré une nouvelle partie de Chifoumi!\n Choisissez votre signe :\n\n 1 - Pierre\n 2 - Feuille\n 3 - Ciseau\n');

}while( userChoice != 1 && userChoice != 2 && userChoice != 3)

//Génération du signe random du CPU
function randInt(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
let cpuChoice = randInt(1,3);

if(cpuChoice == userChoice)
		{
			alert('Egalité');
		}

		else if (
			(cpuChoice == 2 && userChoice == 1) ||
			(cpuChoice == 3 && userChoice == 2) ||
			(cpuChoice == 1 && userChoice == 3)
			
		)
		{
			alert('L\'ordi a choisi ' + cpuChoice + ' Tu as perdu');
		}
		else
		{
			alert('L\'ordi a choisi ' + cpuChoice + ' Tu as gagné');
        }
        restart = confirm("Souhaitez-vous rejouer?");
    }while (restart)

// try{
//     switch (userChoice) {
//     case 1: if(cpuChoice == 3){
//         alert('Vous avez choisi LA PIERRE, l\'ordinateur a choisi LE CISEAU.\n LA PIERRE bat LE CISEAU.\n Bravo vous avez gagné!');
//     }
//     else if(cpuChoice ==2){
//         alert('Vous avez choisi LA PIERRE, l\'ordinateur a choisi LA FEUILLE.\n LA FEUILLE bat LA PIERRE.\n Pas de chance...vous avez perdu!');
//     }
//     else{
//         alert('Vous avez choisi LA PIERRE, l\'ordinateur a choisi LA PIERRE.\n Match nul!');
//     }
//         break;
    
//     case 2: if(cpuChoice == 1){
//         alert('Vous avez choisi LA FEUILLE, l\'ordinateur a choisi LA PIERRE.\n LA FEUILLE bat LA PIERRE.\n Bravo vous avez gagné!');
//     }
//     else if(cpuChoice == 3){
//         alert('Vous avez choisi LA FEUILLE, l\'ordinateur a choisi LE CISEAU.\n LE CISEAU bat LA FEUILLE.\n Pas de chance...vous avez perdu!');
//     }
//     else{
//         alert('Vous avez choisi LA FEUILLE, l\'ordinateur a choisi LA FEUILLE.\n Match nul!');
//     }
//         break;

//     case 3: if(cpuChoice == 2){
//         alert('Vous avez choisi LE CISEAU, l\'ordinateur a choisi LA FEUILLE.\n LE CISEAU bat LA FEUILLE.\n Bravo vous avez gagné!');
//     }
//     else if(cpuChoice == 1){
//         alert('Vous avez choisi LE CISEAU, l\'ordinateur a choisi LA PIERRE.\n LA PIERRE bat LE CISEAU.\n Pas de chance...vous avez perdu!');
//     }
//     else{
//         alert('Vous avez choisi LE CISEAU, l\'ordinateur a choisi LE CISEAU.\n Match nul!');
//     }
//         break;

//     default:
//         throw new Error('une erreur est survenue.')
        
// }

// alert('F5 la page pour rejouer');
// }
// catch(error){
//     alert(error);
// }
