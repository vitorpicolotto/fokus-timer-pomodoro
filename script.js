let html = document.querySelector('html');
let focoBt = document.querySelector('.app__card-button--foco');
let curtoBt = document.querySelector('.app__card-button--curto');
let longoBt = document.querySelector('.app__card-button--longo');
let banner = document.querySelector('.app__image');
let titulo = document.querySelector('.app__title');




focoBt.addEventListener('click', () => {
    alteraContexto('foco')
});

curtoBt.addEventListener('click', () =>{
    alteraContexto('descanso-curto')
});

longoBt.addEventListener('click', () => {
    alteraContexto('descanso-longo')
});

function alteraContexto(contexto) {
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `/imagens/${contexto}.png`);
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

