let btnAdicionarTarefa = document.querySelector('.app__button--add-task');
let formAdicionarTarefa = document.querySelector('.app__form-add-task');
let textArea = document.querySelector('.app__form-textarea');

let tarefas = [];



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
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
})

