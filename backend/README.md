# ⚙️ Backend Developer - CoWork AI

**Aprende a crear APIs potenciadas por IA**

---

## 🎯 Objetivo

Dominar la integración de LLMs en backend, crear APIs robustas que consuman OpenAI/Claude, implementar RAG básico, Function Calling, y LangChain.

---

## 📋 Roadmap de Tareas

### Node.js Track

#### BE-01: API Gateway para OpenAI
- Endpoint `/api/chat` que proxy a OpenAI
- Manejo de API keys en `.env`
- Rate limiting básico
- Error handling y logs

#### BE-02: Sistema de Prompts Dinámicos
- Templates de prompts en JSON
- Variables reemplazables
- Builder de prompts
- Versionado de prompts

#### BE-04: RAG Básico - Búsqueda en Documentos
- Cargar documentos `.txt`
- Generar embeddings
- Vector store simple (memoria/JSON)
- Búsqueda por similitud

#### BE-05: Streaming de Respuestas
- Server-Sent Events (SSE)
- Streaming de OpenAI
- Chunks en tiempo real
- Manejo de conexiones

### Python Track

#### BE-03: Análisis de Texto con LangChain
- Servicio con FastAPI
- LangChain chains
- Resumir, extraer keywords
- Detectar idioma

#### BE-06: Function Calling - Herramientas para IA
- Function Calling de OpenAI
- 3+ funciones (clima, calculadora, búsqueda)
- Ejecución automática
- Respuesta integrada

---

## 🚀 Instalación

### Node.js

```bash
cd backend/nodejs
npm install
```

**Dependencias**:
```json
{
  "dependencies": {
    "express": "^4.18.0",
    "openai": "^4.20.0",
    "dotenv": "^16.3.0",
    "cors": "^2.8.5",
    "express-rate-limit": "^7.1.0"
  }
}
```

**Configuración**:
```bash
# backend/nodejs/.env
OPENAI_API_KEY=sk-your-api-key-here
PORT=5000
```

**Iniciar**:
```bash
npm run dev
```

### Python

```bash
cd backend/python
pip install -r requirements.txt
```

**Dependencias**:
```txt
fastapi==0.104.0
uvicorn==0.24.0
openai==1.3.0
langchain==0.0.340
python-dotenv==1.0.0
```

**Configuración**:
```bash
# backend/python/.env
OPENAI_API_KEY=sk-your-api-key-here
```

**Iniciar**:
```bash
uvicorn main:app --reload
```

---

## 💡 Ejemplo: API Gateway (Node.js)

```javascript
// src/routes/chat.js
const express = require('express');
const { OpenAI } = require('openai');
const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

router.post('/chat', async (req, res) => {
  try {
    const { message, model = 'gpt-3.5-turbo', temperature = 0.7 } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const response = await openai.chat.completions.create({
      model,
      messages: [
        { role: 'system', content: 'Eres un asistente útil.' },
        { role: 'user', content: message }
      ],
      temperature,
      max_tokens: 500
    });

    res.json({
      success: true,
      response: response.choices[0].message.content,
      model,
      usage: response.usage
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      error: 'Error processing request',
      details: error.message 
    });
  }
});

module.exports = router;
```

---

## 💡 Ejemplo: Servicio con LangChain (Python)

```python
# api/text_analysis.py
from fastapi import APIRouter, HTTPException
from langchain.chains.summarize import load_summarize_chain
from langchain.chat_models import ChatOpenAI
from langchain.schema import Document
from pydantic import BaseModel
import os

router = APIRouter()

class TextInput(BaseModel):
    text: str
    language: str = "es"

@router.post("/analyze/summarize")
async def summarize_text(input: TextInput):
    try:
        llm = ChatOpenAI(
            model_name="gpt-3.5-turbo",
            temperature=0.3,
            openai_api_key=os.getenv("OPENAI_API_KEY")
        )

        # Crear documento
        doc = Document(page_content=input.text)
        
        # Chain de resumen
        chain = load_summarize_chain(llm, chain_type="stuff")
        summary = chain.run([doc])

        return {
            "success": True,
            "summary": summary,
            "original_length": len(input.text),
            "summary_length": len(summary)
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
```

---

## 💡 Ejemplo: RAG Básico (Node.js)

```javascript
// src/services/embeddingService.js
const { OpenAI } = require('openai');
const fs = require('fs');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Generar embeddings
async function generateEmbedding(text) {
  const response = await openai.embeddings.create({
    model: "text-embedding-ada-002",
    input: text
  });
  return response.data[0].embedding;
}

// Similitud coseno
function cosineSimilarity(a, b) {
  const dotProduct = a.reduce((sum, val, i) => sum + val * b[i], 0);
  const magnitudeA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
  const magnitudeB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));
  return dotProduct / (magnitudeA * magnitudeB);
}

// Buscar documentos similares
async function searchDocuments(query, documents) {
  const queryEmbedding = await generateEmbedding(query);
  
  const results = documents.map(doc => ({
    ...doc,
    similarity: cosineSimilarity(queryEmbedding, doc.embedding)
  }));

  return results.sort((a, b) => b.similarity - a.similarity).slice(0, 3);
}

module.exports = { generateEmbedding, searchDocuments };
```

---

## 💡 Ejemplo: Function Calling (Python)

```python
# tools/calculator.py
def calculate(operation: str, a: float, b: float) -> float:
    """Realiza operaciones matemáticas básicas"""
    operations = {
        "suma": lambda x, y: x + y,
        "resta": lambda x, y: x - y,
        "multiplicacion": lambda x, y: x * y,
        "division": lambda x, y: x / y if y != 0 else "Error: División por cero"
    }
    return operations.get(operation, lambda x, y: "Operación no soportada")(a, b)

# Definición de función para OpenAI
CALCULATOR_FUNCTION = {
    "name": "calculate",
    "description": "Realiza operaciones matemáticas básicas",
    "parameters": {
        "type": "object",
        "properties": {
            "operation": {
                "type": "string",
                "enum": ["suma", "resta", "multiplicacion", "division"],
                "description": "Tipo de operación matemática"
            },
            "a": {
                "type": "number",
                "description": "Primer número"
            },
            "b": {
                "type": "number",
                "description": "Segundo número"
            }
        },
        "required": ["operation", "a", "b"]
    }
}
```

---

## 📚 Conceptos Clave

### Embeddings
Representación vectorial de texto. Permite búsqueda semántica.
```javascript
"Hello world" → [0.023, -0.142, 0.391, ...]  // Vector de 1536 dimensiones
```

### RAG (Retrieval Augmented Generation)
1. Cargar documentos
2. Generar embeddings
3. Buscar contexto relevante
4. Enviar contexto + pregunta a LLM

### Function Calling
LLM decide cuándo llamar una función:
```
User: "¿Cuánto es 15 + 27?"
→ LLM llama function: calculate("suma", 15, 27)
→ Función retorna: 42
→ LLM responde: "15 + 27 es igual a 42"
```

---

## 🎯 Checklist de Completado

### Node.js (4 tareas)
- [ ] BE-01: API Gateway funcional
- [ ] BE-02: Sistema de prompts dinámicos
- [ ] BE-04: RAG con embeddings
- [ ] BE-05: Streaming implementado

### Python (2 tareas)
- [ ] BE-03: Análisis con LangChain
- [ ] BE-06: Function Calling

**Todos**:
- [ ] No subí `.env` con API keys
- [ ] Agregué error handling
- [ ] Documenté endpoints
- [ ] Probé con Postman/Insomnia

---

**📖 Recursos**: [OpenAI API](https://platform.openai.com/docs) | [LangChain](https://python.langchain.com/) | [FastAPI](https://fastapi.tiangolo.com/)
