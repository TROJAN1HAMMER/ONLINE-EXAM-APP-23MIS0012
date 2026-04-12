const express = require("express");
const router = express.Router();
const quizController = require("../controllers/quiz.controller");

/**
 * @swagger
 * /api/quiz:
 *   get:
 *     summary: Get quiz questions
 *     tags: [Quiz]
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/", quizController.getQuestions);

/**
 * @swagger
 * /api/quiz/submit:
 *   post:
 *     summary: Submit quiz answers
 *     tags: [Quiz]
 *     responses:
 *       200:
 *         description: Score calculated
 */
router.post("/submit", quizController.submitQuiz);

module.exports = router;