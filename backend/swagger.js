const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Online Exam API",
      version: "1.0.0"
    }
  },
  apis: ["./routes/*.js", "./controllers/*.js"]
};

module.exports = swaggerJsdoc(options);