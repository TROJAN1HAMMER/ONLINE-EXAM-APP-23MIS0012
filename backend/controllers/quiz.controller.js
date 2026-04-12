exports.getQuestions = (req, res) => {
  const questions = [
    {
      id: 1,
      question: "What is 2 + 2?",
      options: ["2", "3", "4", "5"],
      answer: "4"
    },
    {
      id: 2,
      question: "Which language is used for web development?",
      options: ["Python", "JavaScript", "C++", "Java"],
      answer: "JavaScript"
    }
  ];

  res.json(questions);
};

exports.submitQuiz = (req, res) => {
  const { answers } = req.body;

  const questions = [
    { id: 1, answer: "4" },
    { id: 2, answer: "JavaScript" }
  ];

  let score = 0;

  questions.forEach(q => {
    if (answers[q.id] === q.answer) {
      score++;
    }
  });

  res.json({
    message: "Quiz submitted successfully",
    score,
    total: questions.length
  });
};