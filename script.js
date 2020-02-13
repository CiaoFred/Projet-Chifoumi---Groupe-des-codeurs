let userChoice  = 0;
let cpuChoice   = 0;
let restart     = false;
let userScore   = 0;
let cpuScore    = 0;


/* * * RESET CSS FUNCTIONS * * */
function resetCpuCss(){
$("#cpurock").css('color','lightgray');
$("#cpuscissors").css('color','lightgray');
$("#cpupaper").css('color','lightgray');
}


/* * * PLAY MODE * * */

function initChoice(i){
    userChoice=i;
    document.getElementById("choice"+i);
    compChoice();
    
}

function compChoice(){
    cpuChoice=Math.floor(Math.random()*3)+1;
    console.log(cpuChoice);
    
    chifoumi();
}

function chifoumi(){
 
    resetCpuCss();   

    switch(userChoice){
        case 1:
            $("#rock").css('color','black');
            break;
        case 2:
            $("#scissors").css('color','black');
            break;
        case 3:
            $("#paper").css('color','black');
            break;
        default:
            console.log('Erreur d\'instruction, appelez Macron!');
            
    }   
    switch(cpuChoice){
        case 1:
            $("#cpurock").css('color','blue');
            break;
        case 2:
            $("#cpuscissors").css('color','blue');
            break;
        case 3:
            $("#cpupaper").css('color','blue');
            break;
        default:
            console.log('Erreur d\'instruction, appelez Macron!');
            
    }
    if(cpuChoice == userChoice)
    {
        $("#message").html("Egalité !");
    }

    else if (
        (cpuChoice == 2 && userChoice == 3) ||
        (cpuChoice == 3 && userChoice == 1) ||
        (cpuChoice == 1 && userChoice == 2)
        
    )
    {
        cpuScore ++;
        $("#cpu-result").html(parseInt($("#cpu-result").html())+1);
        $("#message").html("Perdu !");
    }
    else
    {
        userScore ++;
        $("#player-result").html(parseInt($("#player-result").html())+1);
        $("#message").html("Gagné !");
    }
    
    setTimeout(function(){resetCpuCss()},2000);

}



















// function chifoumi(){
    
//    if(cpuChoice == userChoice)
// 		{
// 			alert('Egalité');
// 		}

// 		else if (
// 			(cpuChoice == 2 && userChoice == 3) ||
// 			(cpuChoice == 3 && userChoice == 1) ||
// 			(cpuChoice == 1 && userChoice == 2)
			
// 		)
// 		{
// 			alert('L\'ordi a choisi ' + cpuChoice + ' Tu as perdu');
// 		}
// 		else
// 		{
// 			alert('L\'ordi a choisi ' + cpuChoice + ' Tu as gagné');
//         }
//         restart = confirm("Souhaitez-vous rejouer?");
//     }