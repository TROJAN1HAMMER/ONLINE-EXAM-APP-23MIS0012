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
 *     summary: Submit quiz answers and calculate score
 *     tags: [Quiz]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               answers:
 *                 type: object
 *                 example: { "1": "Analog SPL Meter", "2": "mmWave Radar" }
 *     responses:
 *       200:
 *         description: Score calculated successfully
 */
router.post("/submit", quizController.submitQuiz);

module.exports = router;