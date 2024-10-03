const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Vaçê acha que o desflorestamento e mais causado por atividades agricolas ou industriais?",
        alternativas: [
            "Atividades Agricolas",
            "Atividades Industriais"
        ]
    },
    {
        enunciado: "Na sua opinião o desflorestamento tem mais impacto na biodiversidade ou no clina?",
        alternativas: [
            "Biodiversidade",
            "Clima"
        ]
    },
    {
        enunciado: "você acredita que a solução para o desflorestamento está mais ligada a politicas governamentais ou a conscientização da população?",
        alternativas: [
            "Politicas governamentais",
            "Conscientização da população"
        ]
    },
    {
        enunciado: "Na Sua perspectiva o combate ao desflorestamento deveria priorizar a preservação de florestas degradadas?",
        alternativas: [
            "Preservação de florestas existentes",
            "Reflorestamento de areas degradadas"
        ]
    },
    let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();