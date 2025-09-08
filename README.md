# Portfolio Chatbot Backend

This is the backend API for the Portfolio Chatbot, using Express and Groq's Llama model.

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Create a `.env` file in this directory with your API key and system message:
   ```
   GROQ_API_KEY=your_groq_api_key_here
 
   ```


3. Start the server:
   ```
   node server.js
   ```

## API Endpoint

- **POST `/chat`**

  Send a JSON body:
  ```json
  { "message": "Your question here" }
  ```

  Returns:
  ```json
  { "reply": "Chatbot response" }
  ```

## Notes

- The backend proxies requests to Groq's API and includes a system message from `.env` so the chatbot answers only according to your information.
- Make sure your frontend is configured to send requests to `http://localhost:3001/chat`.
- Do **not** commit your `.env` file or API keys to version control.
