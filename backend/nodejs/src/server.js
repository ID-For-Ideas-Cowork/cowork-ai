const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ 
    message: 'CoWork AI Backend - Node.js',
    tasks: [
      'BE-01: API Gateway para OpenAI',
      'BE-02: Sistema de prompts dinámicos',
      'BE-04: RAG con embeddings',
      'BE-05: Streaming de respuestas'
    ]
  });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// ⬇️ Aquí implementa tus rutas de tareas
// Ejemplo: app.use('/api/chat', require('./routes/chat'));

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

module.exports = app;
