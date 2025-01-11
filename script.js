// Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
// Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)



// seleziono gli elementi da richiamare nel click

// elemento del bottone
const bottone = document.querySelector (".pulsante");
console.log(bottone);


// elemento dell'immagine
const lampadinaGialla = document.getElementById ('lampadinabianca');
console.log(lampadinaGialla);


// creo l'evento del click

bottone.addEventListener ('click', function(){
   
    // al momento del click nel bottone l'immagine cambia
    lampadinaGialla.src = "./img/yellow_lamp.png";

    console.log(lampadinaGialla);
    
});