function CalcolaPesiForma(){
    var altezza = document.getElementById("altezza").value;
    var eta = document.getElementById("eta").value;
    var seMaschio;
    if (document.getElementById("sesso").value == "Maschio"){
        seMaschio = true;
    } else if (document.getElementById("sesso").value == "Femmina"){
        seMaschio = false;
    } else {
        console.log("Errore.")
        return;
    }

    var lorenz = document.getElementById("lorenz");
    var broca = document.getElementById("broca");
    var wandervael = document.getElementById("wandervael");
    var bmi = document.getElementById("bmi");
    
    lorenz.innerHTML = "Formula di Lorenz: "+FormulaDiLorenz(altezza, seMaschio)+"kg";
    broca.innerHTML = "Formula di Broca: "+FormulaDiBroca(altezza)+"kg";
    wandervael.innerHTML = "Formula di Wan Der Vael: "+FormulaDiWandervael(altezza, seMaschio)+"kg";
    bmi.innerHTML = "Peso Ideale (18.5 - 25): "+BMI(altezza);
}
function FormulaDiLorenz(altezza, seMaschio){
    if (seMaschio){
        return Number(altezza)-100-(Number(altezza)-150)/4;
    } else {
        return Number(altezza)-100-(Number(altezza)-150)/2;
    }
}

function FormulaDiBroca(altezza, seMaschio){
    if (seMaschio){
        return Number(altezza)-100;
    } else {
        return Number(altezza)-104;
    }
}

function FormulaDiWandervael(altezza, seMaschio){
    if (seMaschio){
        return (Number(altezza)-150)*0.75+50;
    } else {
        return (Number(altezza)-150)*0.6+50;
    }
}

function BMI(altezza){
    var bmimin = 18.5;
    var bmimax = 25;
    var altezzainmetri = Number(altezza)/100;
    return "Da "+(altezzainmetri*altezzainmetri)*bmimin+"kg a "+(altezzainmetri*altezzainmetri)*bmimax+"kg";
}