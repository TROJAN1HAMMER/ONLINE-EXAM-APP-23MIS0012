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