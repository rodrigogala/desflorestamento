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
    {
        enunciado: "Pergunta 5",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    }
];
