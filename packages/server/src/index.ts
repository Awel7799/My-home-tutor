// packages/server/src/index.ts
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 5000; // Use port 5000 for the backend by default

app.use(cors()); // Enable CORS for frontend communication
app.use(express.json()); // Enable JSON body parsing

// Simple API route for testing
app.get('/', (req, res) => {
  res.send('Tutor Finder Backend is running!');
});

// Example route for a future API endpoint (e.g., for health check)
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});