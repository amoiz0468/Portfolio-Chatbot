const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

const app = express();
app.use(express.json());
app.use(cors());

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const GROQ_API_KEY = process.env.GROQ_API_KEY; // Use env variable

app.post('/chat', async (req, res) => {
    const { message } = req.body;
    try {
        const response = await axios.post(
            GROQ_API_URL,
            {
                model: "meta-llama/llama-4-scout-17b-16e-instruct",
                messages: [
                    {
                        role: "system",
                        content: "You are a helpful assisstant of Moiz that answers only about Moiz Ghauri ."
                    },
                    { role: "user", content: message }
                ]
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${GROQ_API_KEY}`
                }
            }
        );
        res.json({ reply: response.data.choices[0].message.content });
    } catch (err) {
        res.status(500).json({ error: 'Failed to get response from Groq API' });
    }
});

app.listen(3001, () => console.log('Backend running on http://localhost:3001'));
