const piedra="piedra";
const papel="papel";
const tijera = "tijera";

const gano= 0;
const perdio= 1;
const empate= 2;

const rockBtn = document.getElementById("piedra");
const paperBtn = document.getElementById("papel");
const scissorsBtn = document.getElementById("tijera");
const resultText = document.getElementById("start-text");
const img_maquina= document.getElementById("sel_maquina");
const img_usuario= document.getElementById("sel_usu");

rockBtn.addEventListener("click", () => {
    Jugar(piedra);
});
paperBtn.addEventListener("click", () => {
    Jugar(papel);
});
scissorsBtn.addEventListener("click", () => {
    Jugar(tijera);
});



function Jugar(entrada) {



    const resultado = cal_resultado(entrada);
    
    switch (resultado) {
        case 0:
            resultText.innerHTML="gano!!";
            
            break;
        case 1:
            resultText.innerHTML="perdio!!";
            
            break;
        case 2:
            resultText.innerHTML="empate!!";
            
            break;

    }



}

function cal_resultado(jugador) {
    const selec_maquina = cal_maquina();
    const selec_jugador = jugador;
    console.log(selec_jugador);

    img_maquina.src =`img/${selec_maquina}.png`;
    img_usuario.src =`img/${selec_jugador}.png`;

    if (jugador === piedra) {
        if (selec_maquina === piedra) return empate;
        if (selec_maquina === papel) return perdio;
        if (selec_maquina === tijera) return gano;

    }
    if (jugador === papel) {
        if (selec_maquina === papel) return empate;
        if (selec_maquina === piedra) return gano;
        if (selec_maquina === tijera) return perdio;

    }
    if (jugador === tijera) {
        if (selec_maquina === tijera) return empate;
        if (selec_maquina === papel) return gano;
        if (selec_maquina === piedra) return perdio;

    }



}

function cal_maquina() {

    const num_aleatorio = Math.floor(Math.random() * 3);

    switch (num_aleatorio) {
        case 0:
            return piedra;
        case 1:
            return papel;
        case 2:
            return tijera;

    }

}

