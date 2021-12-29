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


const numberOfMines = 16; 
let attemptsPossible;
let fine=false;
let totalNum='';
let listaPosizioniBombe='';
let button = document.getElementById("button");
button.addEventListener("click", function(){//buttone
   
});

document.getElementById('button').addEventListener('click',() => {
    let levelDiff = document.getElementById("select-options").value;
    const container = document.getElementById('container');
    

    
    
        container.innerHTML = " ";
        if(levelDiff=="1"){
            totalNum=100;
            for(let i=1; i<=totalNum; i++){//numeri da 1 a 100
                console.log(i)                
                container.innerHTML += '<div class="cell box d-flex justify-content-center align-items-center">' + i +'</div>';  
            }  
            
            

        }else if (levelDiff=="2"){
            totalNum=81;
            for(let i=1; i<=totalNum; i++){//numeri da 1 a 81
                console.log(i)                
                container.innerHTML += '<div class="cell bo d-flex justify-content-center align-items-center">' + i +'</div>';  
            }
        }else if (levelDiff=="3"){
            totalNum=49;
            for(let i=1; i<=totalNum; i++){//numeri da 1 a 49
                console.log(i)                
                container.innerHTML += '<div class="cell b d-flex justify-content-center align-items-center">' + i +' </div>';  
            }
        }
        attemptsPossible = totalNum - numberOfMines;
        const listaPosizioniBombe = createMines();
    

        
            clickCells();
            createMines();
            

function createMines(){//creare le bombe       
                
    const positions = []; 
        while(positions.length < numberOfMines){
            const position = generaRandomInt(1,totalNum);    
            if (!arrayIncludeValure(positions,position)){
                positions.push(position);                      
            }  
        }
        console.log(positions);
        return positions          
}

function arrayIncludeValure(arrayValue, value){
    for(let i=0; i<arrayValue.length; i++){
        if(arrayValue[i] == value){
        return true;
        }
    }
    return false;
}
function generaRandomInt(min,max) {
    let result = Math.floor(Math.random() * (max-min + 1)) +min;
    return result; 
}


function gameOver(){
    fine=true;
    const listCells = document.querySelectorAll(".cell");
    for (let i=0; i<listCells.length; i++){
        const cella = listCells[i]
        const number = parseInt (cella.innerHTML);
        if(arrayIncludeValure(listaPosizioniBombe,number)){  
            cella.classList.add("bomb");
        }
        
        
    }
    console.log("FINE");
}



function clickCells(){
    
        let cell = document.getElementsByClassName('cell');//add background color
        for(let i=0; i<cell.length; i++){
            cell[i].addEventListener("click", function(){ 
                const number = parseInt (this.innerHTML);
                if( arrayIncludeValure(listaPosizioniBombe,number)){  
                    
                     gameOver(); 
                }
                else{
                this.classList.add("safe")
            }
        })
            
        }
    
}
});



        

        

        

        


        

        
        


