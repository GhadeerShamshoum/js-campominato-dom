/*L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
Consigli del giorno: :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.
const scatola = document.getElementById('container');*/

let button = document.getElementById("button");
const positions = [];
button.addEventListener("click", function(){//buttone
   
});

document.getElementById('button').addEventListener('click',() => {
    let levelDiff = document.getElementById("select-options").value;
    const container = document.getElementById('container');
    

    
    
        container.innerHTML = " ";
        if(levelDiff=="1"){
            for(let i=1; i<=100; i++){//numeri da 1 a 100
                console.log(i)                
                container.innerHTML += '<div class="cell box d-flex justify-content-center align-items-center">' + i +'</div>';  
            }  
            
            

        }else if (levelDiff=="2"){
            for(let i=1; i<=81; i++){//numeri da 1 a 81
                console.log(i)                
                container.innerHTML += '<div class="cell bo d-flex justify-content-center align-items-center">' + i +'</div>';  
            }
        }else if (levelDiff=="3"){
            for(let i=1; i<=49; i++){//numeri da 1 a 49
                console.log(i)                
                container.innerHTML += '<div class="cell b d-flex justify-content-center align-items-center">' + i +' </div>';  
            }
        }

        
            clickCells()
            createMines()
            gameOver()
});

function createMines(){//creare le bombe
    const numberOfMines = 16;         
                console.log(numberOfMines)
                while(positions.length < numberOfMines){
                    const position = Math.floor((Math.random() * 100) + 1)    
                    if (!positions.includes(position)){
                        positions.push(position);
                         
                    }  
                }
                console.log(positions);
                return positions          
}




function gameOver(){
    console.log("FINE");
}


function clickCells(){
    let cell = document.getElementsByClassName('cell');//add background color
    for(let i=0; i<cell.length; i++){
        cell[i].addEventListener("click", function(){ 
            const number = parseInt (this.innerHTML);
            if(positions.includes(number)){
                this.classList.add ("red");
                document.getElementById("result").innerHTML = `Hai perso!Fine gioco!` ;
                gameOver(); 
            }
            else{
            this.classList.add("blue")
            this.classList.add("white")
            document.getElementById("result").innerHTML = `Hai vinto!` ;
        }
    })
        
    }
}
        

        

        

        


        

        
        


