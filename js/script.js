//Creare una variabile contenente il riquadro per le caselle;
const container = document.getElementById('grid');

//Funzione che generi le caselle all'interno del container grid;
function generaTabella() {

    //Array
    const bombe = [];

    //genera numeri randomici
    let j = 1;
    while(j <= 16) {
        
        j++;

        let random = Math.floor(Math.random() * 100);
        if(!bombe.includes.random){
            bombe.push(random);
        }
    }



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
            if(bombe.includes(i)){
                box.classList.add('bomba');
                box.removeEventListener('click', handleClick);
                console.log('bomba');
            }
            
            //Stampa il numero della casella in console
            console.log(i);
        });

        //Inserisco le caselle nel container
        container.append(box);
    }
}  
    
//L'utente preme un bottone per generare la griglia di gioco.
document.querySelector('.button-85').addEventListener('click', generaTabella);


