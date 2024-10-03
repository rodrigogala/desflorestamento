const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "1. Você acha que o desflorestamento é mais causado por atividades agrícolas ou industriais?",
        alternativas: [
            {
                texto: "Atividades agrícolas",
                afirmacao: "Você acredita que a agricultura é a principal causa do desflorestamento. "
            },
            {
                texto: "Atividades industriais",
                afirmacao: "Você acredita que as atividades industriais são a principal causa do desflorestamento. "
            }
        ]
    },
    {
        enunciado: "2. Na sua opinião, o desflorestamento tem mais impacto na biodiversidade ou no clima?",
        alternativas: [
            {
                texto: "Biodiversidade",
                afirmacao: "Você considera que a perda de biodiversidade é o maior impacto do desflorestamento. "
            },
            {
                texto: "Clima",
                afirmacao: "Você considera que as mudanças climáticas são o maior impacto do desflorestamento. "
            }
        ]
    },
    {
        enunciado: "3. Você acredita que a solução para o desflorestamento está mais ligada a políticas governamentais ou à conscientização da população?",
        alternativas: [
            {
                texto: "Políticas governamentais",
                afirmacao: "Você acredita que políticas governamentais são a chave para resolver o desflorestamento. "
            },
            {
                texto: "Conscientização da população",
                afirmacao: "Você acredita que a conscientização da população é essencial para resolver o desflorestamento. "
            }
        ]
    },
    {
        enunciado: "4. Na sua perspectiva, o combate ao desflorestamento deveria priorizar a preservação de florestas existentes ou o reflorestamento de áreas degradadas?",
        alternativas: [
            {
                texto: "Preservação de florestas existentes",
                afirmacao: "Você acredita que é mais importante preservar as florestas existentes. "
            },
            {
                texto: "Reflorestamento de áreas degradadas",
                afirmacao: "Você acredita que o reflorestamento de áreas degradadas deve ser a prioridade. "
            }
        ]
    }
];

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
    caixaPerguntas.textContent = "Conclusão:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
