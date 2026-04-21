# 🍅 Fokus - Seu Companheiro de Produtividade

Bem-vindo ao **Fokus**! Um aplicativo web simples e bonito para ajudar você a ficar focado e produtivo usando a famosa técnica Pomodoro.

---

## 🎯 O que é a Técnica Pomodoro?

A técnica Pomodoro é um método científico para gerenciar seu tempo e aumentar sua produtividade. A ideia é simples:

- ⏱️ **Trabalhe por 25 minutos** com total foco (um "pomodoro")
- ☕ **Descanse por 5 minutos** (descanso curto)
- 🌳 **A cada 4 pomodoros, descanse por 15 minutos** (descanso longo)

---

## ✨ Funcionalidades Principais

### 🎬 Três Modos de Trabalho

1. **Foco** 🎯
   - 25 minutos de trabalho concentrado
   - Tema roxo motivador
   - Mensagem: "Otimize sua produtividade, mergulhe no que importa"

2. **Descanso Curto** ☕
   - 5 minutos para se recuperar
   - Tema verde relaxante
   - Mensagem: "Que tal dar uma respirada? Faça uma pausa curta!"

3. **Descanso Longo** 🌳
   - 15 minutos para recarregar
   - Tema azul tranquilizador
   - Mensagem: "Hora de voltar à superfície. Faça uma pausa longa."

### ⏲️ Timer Inteligente

- **Contagem regressiva visual**: Acompanhe os minutos e segundos passando
- **Botão Play/Pause**: Controle total sobre quando iniciar e pausar
- **Alertas sonoros**: Sons diferentes para iniciar, pausar e terminar

### 🎵 Música de Fundo Relaxante

- Liga e desliga um a qualquer momento com o toggle
- Música ambiente para melhorar a concentração
- Pode usar ou não - você decide!

### 🎨 Interface Dinâmica

- A interface **muda de cor e imagem** conforme o modo selecionado
- Cada modo tem uma visual próprio e inspirador
- Totalmente responsiva e bonita

---

## 🛠️ Como o Projeto Foi Feito

### Tecnologias Utilizadas

| Tecnologia | Para o quê? |
|-----------|-----------|
| **HTML5** | Estrutura do aplicativo |
| **CSS3** | Estilos bonitos e responsivos |
| **JavaScript** | Lógica do timer e interatividade |
| **Fontawesome/Google Fonts** | Tipografia elegante |

### Estrutura do Projeto

```
fokus-timer-pomodoro/
├── index.html          # Página principal
├── script.js           # Lógica e interatividade (JavaScript)
├── styles.css          # Estilos visuais
├── imagens/            # Imagens para cada modo
│   ├── foco.png
│   ├── descanso-curto.png
│   ├── descanso-longo.png
│   └── ...
└── sons/              # Áudios de feedback
    ├── luna-rise-part-one.mp3
    ├── play.wav
    ├── pause.mp3
    └── beep.mp3
```

### Como Funciona? 🔧

1. **Seleção do Modo**: Clique em "Foco", "Descanso Curto" ou "Descanso Longo"
   - O aplicativo define o tempo automaticamente (25min, 5min ou 15min)
   - A interface muda de cor, imagem e mensagem

2. **Iniciar a Contagem**: Clique no botão "Começar"
   - O timer começa a descer
   - Um som toca para confirmar
   - O ícone muda para "Pausar"

3. **Controlar o Timer**: 
   - Pause quando quiser clicando no botão
   - Mude de modo a qualquer momento para reiniciar o timer
   - A música de fundo toca continuamente (se ativada)

4. **Fim do Timer**:
   - Um alerta sonoro toca
   - Uma mensagem avisa que o tempo acabou
   - O timer retorna ao estado inicial

### Principais Componentes de Código

**Timer em Contagem Regressiva:**
```javascript
// Subtrai 1 segundo a cada iteração
let contagemRegressiva = () => {
    if(tempoDecorridoEmSegundos <= 0){
        // Tempo acabou!
        return
    }
    tempoDecorridoEmSegundos -= 1;
    mostrarTempo();
}
```

**Mudança de Contexto (Foco → Descanso → etc):**
```javascript
// Muda a cor, imagem, mensagem e tempo
function alteraContexto(contexto) {
    // Aplica o novo visual
    // Reseta o timer
}
```

**Exibição do Tempo:**
```javascript
// Formata e mostra o tempo na tela
function mostrarTempo(){
    let tempo = new Date(tempoDecorridoEmSegundos * 1000);
    let tempoFormatado = tempo.toLocaleTimeString('pt-Br', 
        {minute: '2-digit', second: '2-digit'});
    tempoNaTela.innerHTML = `${tempoFormatado}`;
}
```

---

## 🚀 Como Usar

### Abrir no Navegador

1. Clique duas vezes em `index.html` ou
2. Arraste o arquivo para o navegador ou
3. Abra pelo VS Code com a extensão Live Server

### Passo a Passo

1. ✅ Escolha o modo (Foco, Descanso Curto ou Descanso Longo)
2. ✅ Ative a música se quiser (toggle no lado direto)
3. ✅ Clique em "Começar" para iniciar o timer
4. ✅ Trabalhe/descanse enquanto o timer conta regressivamente
5. ✅ Quando acabar, mude de modo se necessário e repita!

---

## 🎨 Design e Visual

- **Gradientes bonitos** que mudam conforme o modo
- **Imagens geradas por IA** (Adobe Firefly) para cada contexto
- **Animações suaves** e responsivas
- **Tipografia elegante** usando Google Fonts

---

## 📱 Compatibilidade

- ✅ Chrome, Firefox, Safari, Edge
- ✅ Funciona em Desktop, Tablet e Mobile (responsivo)
- ✅ Sem necessidade de instalação - funciona direto no navegador

---

## 💡 Por que Usar o Fokus?

✨ **Simples** - Fácil de usar, sem complicações  
🎯 **Eficiente** - Baseado em técnica científica comprovada  
🎵 **Agradável** - Música relaxante e interface bonita  
⚡ **Rápido** - Nenhum download ou instalação necessária  
🎨 **Personalizalizável** - Mude entre modos conforme precisar  

---

## 📝 Notas

- Este é um projeto educacional desenvolvido como parte do Curso Carreira Front-End da Alura
- Todas as imagens foram geradas por IA
- Trabalhe com foco, descanse quando necessário, e seja produtivo! 🚀

---

**Desenvolvido com ❤️ para aumentar sua produtividade**

Boa sorte e bom foco! 🍅⏰
