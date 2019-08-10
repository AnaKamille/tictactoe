let plays = ["", "", "", "", "", "", "", "", ""]

const victory = [
	["0", "1", "2"], // 	["02, "0", "2"],
	["3", "4", "5"],
	["0", "3", "6"],
	["6", "7", "8"],
	["1", "4", "7"],
	["2", "5", "8"],
	["0", "4", "8"],
	["2", "4", "6"]
];

let player = "X";
init();


function init() {

    draw();

}

function draw() {

    let fullHtml = "";
    for (const index in plays) {
        fullHtml += `<div id="a1" class="espaço" onClick="selectPosition(${index})">${plays[index]}</div>`

      
    }
    document.getElementById('tabuleiro').innerHTML = fullHtml
}

function selectPosition(position) {
    if (checkPosition(position)) {
        plays[position] = player;
        
        draw();
        checkVictory();
        togglePlayer();
    } else{
        swal('Atenção','Está posição já está selecionada','error');
    }
}


function togglePlayer() {
    if (player == "X") {
        player = "O"
    } else {
        player = "X"
    }
    document.getElementById("player").innerText = ('  >' + player)
}

function checkPosition(position) {
    if (plays[position] == '') {
        return true;
    }
    return false
}

function checkVictory(){

let playerSelections = [];

for (const index in plays) {
    if (player == plays[index]) {
    playerSelections.push(index);        
    }
}
console.log(player,playerSelections);


for (const indexVictory in victory) {
    
    const win = 3;
    let winPlays = 0;
    const victoryRow = victory[indexVictory];

    for (const indexVictoryRow in victoryRow ) {
        
        const victoryCol = victoryRow[indexVictoryRow];
        if(playerSelections.includes(victoryRow[indexVictoryRow])){
            winPlays++
        }

        
    }

    if(win == winPlays){
        swal('Parabéns',`O jogador vitorioso é ${player}`, 'success')
        return;
       
    }



    console.log(win,winPlays)
}


}

function restart(){
 plays = ["", "", "", "", "", "", "", "", ""]
 draw();
}
