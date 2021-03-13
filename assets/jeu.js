
do{
    var niveau = Math.abs(parseInt(prompt("donner le niveau du jeu" , 5) )) ;
    while(isNaN(niveau) || niveau == 0){
        niveau =  Math.abs(parseInt(prompt("donner le niveau du jeu" , 5) )) ;
    }
    var nbr = Math.ceil(Math.random() * 10) ;
    var ch = "" ;
    while(niveau --){
        var answer = prompt(ch +"il vous rest "+(niveau +1 )+" essai donner votre reponse" ) ;
        if(answer == nbr){
            alert("votre reponse est correct  :)  !") ;
            break ;
        }else if(answer < nbr){
            ch = "la reponse est plus grande ,"
        }else{
            ch = "la reponse est plus petite ,"
        }
        // exit
    }
    if(niveau == -1){
        alert("vous aver perdu ! la reponse est " + nbr) ;
    }
    
}while(confirm("vouler vous relancer le jeu ?")) ;
