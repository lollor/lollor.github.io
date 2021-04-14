function CalcolaCosto(){
    var km = document.getElementById("chilometri").value;
    var classe = document.getElementsByName("classetreno");
    var numPersone = document.getElementById("numpersone").value;
    var costoAlKm;
    if (classe[0].checked){
        costoAlKm = 0.43;
    } else if (classe[1].checked){
        costoAlKm = 0.2;
    } else {
        console.log("nessuna classe inserita");
        return;
    }
    console.log(numPersone);
    document.getElementById("costo").innerHTML = "Il costo è: "+costoAlKm*Number(km)*Number(numPersone);
}