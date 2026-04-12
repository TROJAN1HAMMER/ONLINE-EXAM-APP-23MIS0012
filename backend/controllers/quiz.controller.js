exports.getQuestions = (req, res) => {
  const questions = [
    {
      id: 1,
      question: "What is 2 + 2?",
      options: ["2", "3", "4", "5"]
    },
    {
      id: 2,
      question: "Which language is used for web development?",
      options: ["Python", "JavaScript", "C++", "Java"]
    }
  ];

  res.json(questions);
};

exports.submitQuiz = (req, res) => {
  const { answers } = req.body;

  // Based on your current questions
  const correctAnswers = {
    1: "Analog SPL Meter",
    2: "mmWave Radar"
  };

  let score = 0;

  for (let qid in correctAnswers) {
    if (answers[qid] === correctAnswers[qid]) {
      score++;
    }
  }

  res.json({
    message: "Quiz evaluated",
    score: score
  });
};