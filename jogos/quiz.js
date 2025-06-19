// Perguntas do quiz
const questions = [
    { question: "Qual dança é tradicional nas festas de São João?", options: ["Quadrilha", "Frevo"], answer: 0, image: "gameimagens/banner-quiz1.png" },
    { question: "O que se usa para tocar no grupo de capoeira?", options: ["Berimbau", "Guitarra"], answer: 0, image: "gameimagens/banner-quiz2.png" },
    { question: "Que prato típico não pode faltar na festa da comunidade?", options: ["Paçoca", "Cachorro quente"], answer: 1, image: "gameimagens/banner-quiz3.png" },
    { question: "Qual música é mais tocado por aqui?", options: ["Funk", "Jazz"], answer: 0, image: "gameimagens/banner-quiz4.png" },
    { question: "Em que mês acontece a principal festa popular da região?", options: ["Dezembro", "Junho"], answer: 1, image: "gameimagens/banner-quiz5.png" }
];

// Variáveis e estado do quiz
let currentQuestion = 0;
let score = 0;

// Função para iniciar o quiz
function startQuiz() {
    document.getElementById("intro").style.display = "none"; 
    document.getElementById("quiz").style.display = "block"; 
    document.getElementById("result").style.display = "none"; 
    loadQuestion();
}

// Função para carregar a pergunta atual
function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionElements = document.querySelectorAll(".option");
    const questionImage = document.getElementById("question-image");

    questionElement.innerText = questions[currentQuestion].question;
    questionImage.src = questions[currentQuestion].image;
    questionImage.style.display = "block"; 

    optionElements.forEach((option, index) => {
        option.innerText = questions[currentQuestion].options[index];
        option.disabled = false;
        option.classList.remove("correct", "incorrect");
    });

    document.getElementById("next-btn").style.display = "none";
}


// Função chamada ao selecionar uma resposta
function selectAnswer(selectedIndex) {
    const correctAnswer = questions[currentQuestion].answer;
    const optionElements = document.querySelectorAll(".option");

    optionElements.forEach((option, index) => {
        option.disabled = true;
        if (index === correctAnswer) {
            option.classList.add("correct"); 

        } else if (index === selectedIndex) {
            option.classList.add("incorrect"); 
            
        }
    });

    if (selectedIndex === correctAnswer) {
        score++;
    }

    document.getElementById("next-btn").style.display = "inline-block"; 
}

// Avança para a próxima pergunta ou exibe o resultado final
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// Função para exibir o resultado final
function showResult() {
    document.getElementById("quiz").style.display = "none"; 
    document.getElementById("result").style.display = "block"; 

    const resultMessage = document.getElementById("result-message");
    const resultImage = document.getElementById("result-image");

    if (score > 3) {
        resultMessage.innerText = `Parabéns! Você acertou ${score} de ${questions.length} perguntas! 🎉`;
        resultImage.src = "gameimagens/banner-comemoracao.png"; 
        resultImage.alt = "Imagem comemorativa de parabéns";
    } else {
        resultMessage.innerText = `Você acertou ${score} de ${questions.length} perguntas. Tente novamente e continue aprendendo! `;
        resultImage.src = "gameimagens/banner-quiz-tentativa.png"; 
        resultImage.alt = "Imagem encorajadora para tentar novamente";
    }
}


// Reinicia o quiz e volta para a tela inicial
function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("result").style.display = "none"; 
    document.getElementById("intro").style.display = "block"; 
}