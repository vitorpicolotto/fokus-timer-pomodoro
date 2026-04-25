let btnAdicionarTarefa = document.querySelector('.app__button--add-task');
let formAdicionarTarefa = document.querySelector('.app__form-add-task');
let textArea = document.querySelector('.app__form-textarea');
let ulTarefas = document.querySelector('.app__section-task-list')

let tarefas = JSON.parse(localStorage.getItem('tarefas')) || []; //SE NÃO HOUVER VALORES, CAI NO ARRAY VAZIO


function criarElementoTarefa(tarefa) {
    let li = document.createElement('li');
    li.classList.add('app__section-task-list-item');

    let svg = document.createElement('svg');
    svg.innerHTML = `
        <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
        </svg>    
    `

    let paragrafo = document.createElement('p');
    paragrafo.classList.add('app__section-task-list-item-description');
    paragrafo.textContent = tarefa.descricao;

    let botao = document.createElement('button');
    let imgBotao = document.createElement('img');
    botao.classList.add('app_button-edit')

    imgBotao.setAttribute('src', '/imagens/edit.png');
    botao.append(imgBotao);

    li.append(svg);
    li.append(paragrafo);
    li.append(botao);

    return li;
}

btnAdicionarTarefa.addEventListener('click', () => {
    formAdicionarTarefa.classList.toggle('hidden')
})

formAdicionarTarefa.addEventListener('submit', (evento) => {
    //sem essa etapa, ao submeter o formulário a página recarrega e não salva o evento em nenhum lugar
    evento.preventDefault();
    let tarefa = {
        descricao: textArea.value
    }
    tarefas.push(tarefa);
    let elementoTarefa = criarElementoTarefa(tarefa);
    ulTarefas.append(elementoTarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas))

    textArea.value = '';
    formAdicionarTarefa.classList.add('hidden')
})

tarefas.forEach(tarefa => {
   const elementoTarefa = criarElementoTarefa(tarefa);
   ulTarefas.append(elementoTarefa);
})
