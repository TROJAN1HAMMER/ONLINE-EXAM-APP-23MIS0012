// controllers/quiz.controller.js

// GET QUESTIONS
exports.getQuestions = (req, res) => {
  const questions = [
    {
      id: 1,
      question: "Which sensor is used to measure sound intensity in decibels (dB)?",
      options: ["PIR Sensor", "Analog SPL Meter", "LDR", "DHT11"]
    },
    {
      id: 2,
      question: "Which technology detects stationary presence via micro-movements?",
      options: ["Ultrasonic", "Passive Infrared", "mmWave Radar", "Photoresistor"]
    }
  ];

  res.status(200).json(questions);
};


// SUBMIT QUIZ (FINAL FIXED VERSION)
exports.submitQuiz = (req, res) => {
  try {
    const { answers } = req.body;

    // 🔒 validation
    if (!answers || typeof answers !== "object") {
      return res.status(400).json({
        success: false,
        message: "Answers are required"
      });
    }

    const correctAnswers = {
      "1": "Analog SPL Meter",
      "2": "mmWave Radar"
    };

    let score = 0;

    // 🔥 robust comparison
    Object.keys(correctAnswers).forEach((qId) => {
      const userAnswer = answers[qId];

      const cleanUser = userAnswer
        ? userAnswer.toString().trim().toLowerCase()
        : "";

      const cleanCorrect = correctAnswers[qId]
        .toString()
        .trim()
        .toLowerCase();

      // 🧪 DEBUG (leave this for now)
      console.log(`Q${qId} -> user: "${cleanUser}" | correct: "${cleanCorrect}"`);

      if (cleanUser === cleanCorrect) {
        score++;
      }
    });

    const total = Object.keys(correctAnswers).length;
    const percentage = Number(((score / total) * 100).toFixed(2));

    res.status(200).json({
      success: true,
      message: "Quiz submitted successfully",
      score,
      total,
      percentage
    });

  } catch (error) {
    console.error("Error evaluating quiz:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};