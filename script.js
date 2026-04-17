let html = document.querySelector('html');
let focoBt = document.querySelector('.app__card-button--foco');
let curtoBt = document.querySelector('.app__card-button--curto');
let longoBt = document.querySelector('.app__card-button--longo');
let banner = document.querySelector('.app__image');
let titulo = document.querySelector('.app__title');
let botoesAtivos = document.querySelectorAll('.app__card-button');
let musicaFocoInput = document.querySelector('#alternar-musica');
let musica = new Audio('/sons/luna-rise-part-one.mp3');
musica.loop = true

musicaFocoInput.addEventListener('change', () => {
    if (musica.paused){
        musica.play()
    } else {
        musica.pause()
    }
})

focoBt.addEventListener('click', () => {
    alteraContexto('foco');
    focoBt.classList.add('active');
});

curtoBt.addEventListener('click', () =>{
    alteraContexto('descanso-curto');
    curtoBt.classList.add('active');
});

longoBt.addEventListener('click', () => {
    alteraContexto('descanso-longo');
    longoBt.classList.add('active')
});

function alteraContexto(contexto) {
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

