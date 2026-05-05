```javascript
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const quizQuestions = [
  {
    question: "¿Cuál es la capital de Francia?",
    options: ["A) Londres", "B) París", "C) Berlín", "D) Madrid"],
    correctAnswer: "B"
  },
  {
    question: "¿En qué año llegó el hombre a la Luna?",
    options: ["A) 1965", "B) 1969", "C) 1971", "D) 1973"],
    correctAnswer: "B"
  },
  {
    question: "¿Cuál es el planeta más grande del sistema solar?",
    options: ["A) Saturno", "B) Neptuno", "C) Júpiter", "D) Urano"],
    correctAnswer: "C"
  },
  {
    question: "¿Quién escribió 'Don Quijote'?",
    options: ["A) García Lorca", "B) Miguel de Cervantes", "C) Jorge Luis Borges", "D) Pablo Neruda"],
    correctAnswer: "B"
  },
  {
    question: "¿Cuál es el río más largo del mundo?",
    options: ["A) Amazonas", "B) Nilo", "C) Yangtsé", "D) Misisipi"],
    correctAnswer: "B"
  },
  {
    question: "¿En qué continente se encuentra Egipto?",
    options: ["A) Asia", "B) Europa", "C) África", "D) Oceanía"],
    correctAnswer: "C"
  },
  {
    question: "¿Cuántos lados tiene un hexágono?",
    options: ["A) 5", "B) 6", "C) 7", "D) 8"],
    correctAnswer: "B"
  },
  {
    question: "¿Cuál es el gas más abundante en la atmósfera terrestre?",
    options: ["A) Oxígeno", "B) Helio", "C) Nitrógeno", "D) Dióxido de carbono"],
    correctAnswer: "C"
  },
  {
    question: "¿Cuántos continentes hay?",
    options: ["A) 5", "B) 6", "C) 7", "D) 8"],
    correctAnswer: "C"
  },
  {
    question: "¿En qué año comenzó la Segunda Guerra Mundial?",
    options: ["A) 1937", "B) 1938", "C) 1939", "D) 1940"],
    correctAnswer: "C"
  }
];

let currentQuestion = 0;
let score = 0;
let userAnswers = [];

function displayQuestion() {
  if (currentQuestion >= quizQuestions.length) {
    displayResults();
    return;
  }

  const question = quizQuestions[currentQuestion];
  console.log(`\n${'='.repeat(60)}`);
  console.log(`Pregunta ${currentQuestion + 1}/${quizQuestions.length}`);
  console.log(`${'='.repeat(60)}`);
  console.log(`\n${question.question}\n`);
  
  question.options.forEach(option => {
    console.log(`  ${option}`);
  });

  rl.question("\nTu respuesta (A/B/C/D): ", (answer) => {
    processAnswer(answer.toUpperCase());
  });
}

function processAnswer(answer) {
  const validAnswers = ["A", "B", "C", "D"];
  
  if (!validAnswers.includes(answer)) {
    console.log("❌ Respuesta inválida. Por favor, ingresa A, B, C o D.");
    rl.question("Tu respuesta (A/B/C/D): ", (answer) => {
      processAnswer(answer.toUpperCase());
    });
    return;
  }

  const question = quizQuestions[currentQuestion];
  const isCorrect = answer === question.correctAnswer;

  if (isCorrect) {
    score++;
    console.log("✅ ¡Correcto!");
  } else {
    console.log(`❌ Incorrecto. La respuesta correcta es: ${question.correctAnswer}`);
  }

  userAnswers.push({
    questionNumber: currentQuestion + 1,
    question: question.question,
    userAnswer: answer,
    correctAnswer: question.correctAnswer,
    isCorrect: isCorrect
  });

  currentQuestion++;
  setTimeout(() => {
    displayQuestion();
  }, 1500);
}

function displayResults() {
  const percentage = ((score / quizQuestions.length) * 100).toFixed(2);
  
  console.log(`\n${'='.repeat(60)}`);
  console.log("📊 RESULTADOS DEL QUIZ");
  console.log(`${'='.repeat(60)}`);
  console.log(`\nPuntuación Final: ${score}/${quizQuestions.length}`);
  console.log(`Porcentaje: ${percentage}%`);
  
  if (percentage >= 90) {
    console.log("🏆 ¡Excelente! Demostraste tener excelentes conocimientos.");
  } else if (percentage >= 70) {
    console.log("🎉 ¡Muy bien! Tienes buenos conocimientos generales.");
  } else if (percentage >= 50) {
    console.log("👍 ¡Bien! Puedes mejorar estudiando más.");
  } else {
    console.log("💪 Sigue estudiando para mejorar tu desempeño.");
  }

  console.log(`\n${'='.repeat(60)}`);