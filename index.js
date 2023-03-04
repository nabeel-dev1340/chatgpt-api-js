const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

async function getCompletion(prompt) {
  const headers = {
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    "Content-Type": "application/json",
  };

  const data = {
    model: "gpt-3.5-turbo",
    messages: [
      { role: "user", content: "Write a python function to sum two numbers." },
    ],
  };

  const response = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    data,
    { headers }
  );

  if (response.status === 200) {
    console.log(response.data.choices[0].message.content);
  } else {
    console.log(response.status);
  }
}

getCompletion();