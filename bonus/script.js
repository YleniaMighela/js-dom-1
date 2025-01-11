// BONUS
// Facciamo accendi e spegni:
// Al primo click la lampadina si accende e nel bottone compare la scritta “Spegni”
// Al secondo click la lampadina si spegne e nel bottone compare la scritta “Accendi”
// E così via...


// seleziono gli elementi da richiamare nel click

// elemento del bottone
const bottone = document.querySelector (".pulsante");
console.log(bottone);


// elemento dell'immagine
const lampadinaGialla = document.getElementById ('lampadinabianca');
console.log(lampadinaGialla);



// creo l'evento del click 
bottone.addEventListener ('click', function(){
    
    // creo una variabile per capire se la classe bottone include un contenuto "ACCENDI"
    const press = bottone.innerHTML.includes("ACCENDI");
    
    // se è vero accende la lampadina e restituisce il testo "SPEGNI"
    if (press){
        
        lampadinaGialla.src = "./img/yellow_lamp.png";
        bottone.innerHTML = "SPEGNI";
        
        //    altrimenti la lampadina di spegne e restituisce il testo "ACCENDI"
    } else  {
        
        lampadinaGialla.src = "img/white_lamp.png";
        bottone.innerHTML = "ACCENDI";
        
    }
    
    
});