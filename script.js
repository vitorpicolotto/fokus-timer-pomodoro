let html = document.querySelector('html');
let focoBt = document.querySelector('.app__card-button--foco');
let curtoBt = document.querySelector('.app__card-button--curto');
let longoBt = document.querySelector('.app__card-button--longo');
let banner = document.querySelector('.app__image');
let titulo = document.querySelector('.app__title');
let botoesAtivos = document.querySelectorAll('.app__card-button');
let musicaFocoInput = document.querySelector('#alternar-musica');
let startPauseBt = document.querySelector('#start-pause');
let startPauseBtTexto = document.querySelector('#start-pause span')
let imgPlayBt = document.querySelector('.app__card-primary-butto-icon')
let tempoNaTela = document.querySelector('#timer');
let musica = new Audio('/sons/luna-rise-part-one.mp3');
let somIniciar = new Audio('/sons/play.wav');
let somPausar = new Audio('/sons/pause.mp3');
let somEncerrar = new Audio('/sons/beep.mp3');

let tempoDecorridoEmSegundos = 900;
let intervaloId = null;


musica.loop = true

musicaFocoInput.addEventListener('change', () => {
    if (musica.paused){
        musica.play()
    } else {
        musica.pause()
    }
})

focoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 1500;
    alteraContexto('foco');
    focoBt.classList.add('active');
});

curtoBt.addEventListener('click', () =>{
    tempoDecorridoEmSegundos = 300;
    alteraContexto('descanso-curto');
    curtoBt.classList.add('active');
});

longoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 900;
    alteraContexto('descanso-longo');
    longoBt.classList.add('active')
});

function alteraContexto(contexto) {
    mostrarTempo();
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `/imagens/${contexto}.png`);   
    botoesAtivos.forEach(function (contexto) {
        contexto.classList.remove('active')
    })

    switch (contexto) {
        case 'foco':
            titulo.innerHTML = `Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
                `
            break;

        case 'descanso-curto':
        titulo.innerHTML = `Que tal dar uma respirada? <br>
            <strong class="app__title-strong"> Faça uma pausa curta! </strong>
            `
        break;

        case 'descanso-longo':
        titulo.innerHTML = `Hora de voltar à superfície. <br>
            <strong class="app__title-strong">Faça uma pausa longa.</strong>
            `
        break;
    
        default:
        break;
    }
}


let contagemRegressiva = () => {
    
    if(tempoDecorridoEmSegundos <= 0){
        somEncerrar.play();
        // alert('Tempo finalizado!');
        let focoAtivo = html.getAttribute('data-contexto') == 'foco';
        if(focoAtivo){
            let evento = new CustomEvent('FocoFinalizado')
            document.dispatchEvent(evento);
        }
        zerarContador();
        return
    }
    tempoDecorridoEmSegundos -= 1;
    mostrarTempo();
}

startPauseBt.addEventListener('click', iniciarOuPausarContador);

function iniciarOuPausarContador(){
    
    if(intervaloId){ //pausar
        zerarContador();
        somPausar.play();
        return
    }
    somIniciar.play();
    intervaloId = setInterval(contagemRegressiva, 1000);
    imgPlayBt.setAttribute('src', '/imagens/pause.png');
    startPauseBtTexto.textContent = 'Pausar';
}

function zerarContador(){
    clearInterval(intervaloId);
    startPauseBtTexto.textContent = 'Começar'
    imgPlayBt.setAttribute('src', '/imagens/play_arrow.png');
    intervaloId = null
}


function mostrarTempo(){
    let tempo = new Date(tempoDecorridoEmSegundos * 1000);
    let tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'});
    tempoNaTela.innerHTML = `${tempoFormatado}`;
}

mostrarTempo(); //mostrar o tempo a qualquer momento

