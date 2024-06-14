//Creare una variabile contenente il riquadro per le caselle;
const container = document.getElementById('grid');

//Funzione che generi le caselle all'interno del container grid;
function generaTabella() {

    //Reset
    container.innerHTML = '';

    // Ciclo per N caselle;
    for(let i = 1; i <= 100; i++){

        //Creo dinamicamente le celle
        const box = document.createElement('div');
        //Add Class
        box.classList.add('square');

        //Add number
        box.innerHTML = i;

        // Aggiungo un event listener per il click a ciascun div
        box.addEventListener('click', () => {
            // Aggiungi una classe aggiuntiva al div cliccato
            box.classList.toggle('bk-blue');
            
            //Stampa il numero della casella in console
            console.log(i);
        });

        //Inserisco le caselle nel container
        container.append(box);
    }
}  
    
//L'utente preme un bottone per generare la griglia di gioco.
document.querySelector('.button-85').addEventListener('click', generaTabella);


