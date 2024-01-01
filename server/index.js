const express = require("express");
const dotenv = require("dotenv");
const OpenAI = require("openai");
const cors = require("cors");

const app = express();
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.API_KEY,
});

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());

app.post("/getMessage", async (req, res) => {
  try {
    const { question } = req.body;
    const AiRequest = await chatCompletion(question);
    res.json(AiRequest);
  } catch (error) {
    res.json(error);
  }
});

const chatCompletion = async (question) => {
  const response = await openai.chat.completions.create({
    messages: [{ role: "user", content: question }],
    model: "gpt-3.5-turbo",
  });
  return response;
};

const server = app.listen(4000);
