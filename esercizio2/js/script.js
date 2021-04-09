function CalcolaPeso(){
    var volume = document.getElementById("volume").value;
    var materiale = document.getElementById("materiale").value;
    
    var densita;
    if (materiale == "Acciaio"){
        densita = 7900;
    } else if (materiale == "Ottone"){
        densita = 8700;
    } else if (materiale == "Alluminio"){
        densita = 2700;
    } else if (materiale == "Rame"){
        densita = 9000;
    } else {return;}
    var peso = densita * volume;
    document.getElementById("risultato").innerHTML = "Il risultato è "+peso+" kg.";
}