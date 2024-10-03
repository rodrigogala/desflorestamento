const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Voçê acha que o desflorestamento e mais causado por atividades agricolas ou industriais?",
        alternativas: [
            {
                texto: "Atividades agricolas",
            },
            {
                texto: "Atividades Industriais",
            }
        ]
    },
    {
        enunciado: "Na sua opinião o desflorestamento tem mais impacto na biodiversidade ou clima?",
        alternativas: [
            {
                texto: "Biodiversidade.",
            },
            {
                texto: "Clima.",
            }
        ]
    },
    {
        enunciado: "Voçê acredita que a solução para o desflorestamento está mais ligada a politicas governamentais ou a conscientização da população?",
        alternativas: [
            {
                texto: "Politicas governamentais.",
            },
            {
                texto: "Conscientização da população.",
            }
        ]
    },
    {
        enunciado: "Na sua perspectiva o combate ao desflorestamento deveria priorizar a preservação de florestas existententes ou reflorestamento de areas degradadas",
        alternativas: [
            {
                texto: "Preservação de florestas existentes",
            },
            {
                texto: "Reflorestamento de areas degradadas",
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
            }
        ]
    },
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
    caixaPerguntas.textContent = "O desflorestamento afeta tanto o clima quando a biodiversidade e causado por uma variedade de fatores. Sua solução exige um equilibrio entre politicas publicas e conscientização social alem de medidas que combinem preservação e recuperação ambiental. A reflexão sobre o tema nos lembra do importancia de agir para garantir um futuro sustentavel.";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
