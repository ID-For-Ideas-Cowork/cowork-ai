# 🎨 Frontend Developer - CoWork AI

**Aprende a integrar IA en aplicaciones React**

---

## 🎯 Objetivo

Dominar la integración de APIs de IA (OpenAI, Claude) en frontend, crear interfaces intuitivas para herramientas de IA, y aplicar prompt engineering desde la perspectiva del usuario.

---

## 📋 Roadmap de Tareas

### FE-01: Chatbot Simple con OpenAI ✨
**Descripción**: Crear interfaz de chat básica que se conecte a OpenAI API.

**Archivos a crear**:
- `src/components/ChatBox.js` - Componente principal del chat
- `src/components/ChatBox.css` - Estilos del chat
- `src/components/MessageBubble.js` - Bubble para cada mensaje
- `src/services/openai.js` - Servicio para llamadas a OpenAI

**Deliverables**:
- ✅ Interfaz de chat funcional
- ✅ Conexión a OpenAI API
- ✅ Manejo de estados (loading, error)
- ✅ Historial de mensajes en UI

**Aprendizaje clave**: Integración básica de API de IA, manejo de respuestas asíncronas, UX para IA

---

### FE-02: Selector de Modelos y Temperature 🎛️
**Descripción**: Añadir controles para seleccionar modelo (GPT-3.5, GPT-4) y ajustar temperature.

**Archivos a crear**:
- `src/components/ModelSelector.js`
- `src/components/TemperatureSlider.js`

**Deliverables**:
- ✅ Selector de modelos (dropdown)
- ✅ Slider de temperature (0-2)
- ✅ Parámetros aplicados en llamadas API
- ✅ Persistencia en localStorage

**Aprendizaje clave**: Parámetros de LLMs, diferencia entre modelos, control de creatividad vs determinismo

---

### FE-03: Generador de Imágenes con DALL-E 🖼️
**Descripción**: Página para generar imágenes con DALL-E API.

**Archivos a crear**:
- `src/pages/ImageGenerator.js`
- `src/pages/ImageGenerator.css`
- `src/services/dalle.js`

**Deliverables**:
- ✅ Input para prompts de imagen
- ✅ Selector de tamaño (256, 512, 1024)
- ✅ Preview de imagen generada
- ✅ Botón para descargar imagen

**Aprendizaje clave**: Generación de imágenes con IA, prompts efectivos para DALL-E

---

### FE-04: Traductor con IA 🌐
**Descripción**: Herramienta de traducción usando prompts optimizados.

**Archivos a crear**:
- `src/pages/Translator.js`
- `src/pages/Translator.css`

**Deliverables**:
- ✅ Textarea de entrada
- ✅ Selector de idioma destino (10+ idiomas)
- ✅ Área de resultado
- ✅ Copy to clipboard

**Aprendizaje clave**: Prompt engineering para tareas específicas, system prompts efectivos

---

### FE-05: Prompt Templates Library 📚
**Descripción**: Librería de prompts predefinidos organizados por categoría.

**Archivos a crear**:
- `src/pages/PromptLibrary.js`
- `src/components/PromptCard.js`
- `src/data/promptTemplates.js`

**Deliverables**:
- ✅ Cards con categorías (código, escritura, análisis)
- ✅ Variables editables ({{nombre}}, {{tema}})
- ✅ Botón "Usar template"
- ✅ Integración con chat

**Aprendizaje clave**: Mejores prácticas de prompts, templates reutilizables, variables en prompts

---

### FE-06: Análisis de Sentimientos 😊😐😢
**Descripción**: Herramienta que analiza el sentimiento de un texto.

**Archivos a crear**:
- `src/pages/SentimentAnalysis.js`
- `src/components/SentimentMeter.js`

**Deliverables**:
- ✅ Textarea para input
- ✅ Análisis (positivo/negativo/neutral)
- ✅ Barra de confianza
- ✅ Emoji visual del sentimiento

**Aprendizaje clave**: Análisis de texto con LLMs, structured outputs, visualización de datos de IA

---

## 🚀 Instalación

### 1. Instala dependencias

```bash
cd frontend
npm install
```

### 2. Configura tu API key

Crea un archivo `.env` en la carpeta `frontend`:

```bash
REACT_APP_OPENAI_API_KEY=sk-your-api-key-here
```

### 3. Instala OpenAI SDK

```bash
npm install openai
```

### 4. Inicia el servidor de desarrollo

```bash
npm start
```

La app estará disponible en `http://localhost:3000`

---

## 📦 Dependencias Principales

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0",
    "openai": "^4.20.0",
    "axios": "^1.6.0"
  }
}
```

---

## 🛠️ Estructura de Archivos

```
frontend/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── ChatBox.js              # FE-01
│   │   ├── ChatBox.css
│   │   ├── MessageBubble.js        # FE-01
│   │   ├── ModelSelector.js        # FE-02
│   │   ├── TemperatureSlider.js    # FE-02
│   │   ├── PromptCard.js           # FE-05
│   │   ├── SentimentMeter.js       # FE-06
│   │   └── Navbar.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── ImageGenerator.js       # FE-03
│   │   ├── Translator.js           # FE-04
│   │   ├── PromptLibrary.js        # FE-05
│   │   └── SentimentAnalysis.js    # FE-06
│   ├── services/
│   │   ├── openai.js               # Servicio principal
│   │   └── dalle.js                # FE-03
│   ├── data/
│   │   └── promptTemplates.js      # FE-05
│   ├── App.js
│   ├── App.css
│   └── index.js
├── .env (tu API key - NO subir a Git)
├── .env.example
├── package.json
└── README.md
```

---

## 💡 Ejemplo: Servicio de OpenAI

```javascript
// src/services/openai.js
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true // Solo para desarrollo
});

export const sendMessage = async (message, model = 'gpt-3.5-turbo', temperature = 0.7) => {
  try {
    const response = await openai.chat.completions.create({
      model: model,
      messages: [
        {
          role: 'system',
          content: 'Eres un asistente útil y amigable.'
        },
        {
          role: 'user',
          content: message
        }
      ],
      temperature: temperature,
      max_tokens: 500
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error('Error calling OpenAI:', error);
    throw error;
  }
};
```

---

## 💡 Ejemplo: Componente ChatBox

```javascript
// src/components/ChatBox.js
import React, { useState } from 'react';
import { sendMessage } from '../services/openai';
import './ChatBox.css';

function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState('gpt-3.5-turbo');
  const [temperature, setTemperature] = useState(0.7);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const aiResponse = await sendMessage(input, model, temperature);
      const aiMessage = { role: 'assistant', content: aiResponse };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage = { 
        role: 'error', 
        content: 'Error: No pude obtener respuesta. Verifica tu API key.' 
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chatbox">
      <div className="messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.role}`}>
            {msg.content}
          </div>
        ))}
        {loading && <div className="message loading">Pensando...</div>}
      </div>

      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Escribe tu mensaje..."
        />
        <button onClick={handleSend} disabled={loading}>
          Enviar
        </button>
      </div>
    </div>
  );
}

export default ChatBox;
```

---

## 📚 Recursos de Aprendizaje

### Documentación

- [OpenAI API Docs](https://platform.openai.com/docs)
- [DALL-E Guide](https://platform.openai.com/docs/guides/images)
- [React Best Practices](https://react.dev/)

### Prompts Efectivos

**Para traducción**:
```
System: Eres un traductor profesional experto en {idioma}.
Traduce con precisión manteniendo el tono y contexto.

User: Traduce al {idioma_destino}: {texto}
```

**Para análisis de sentimientos**:
```
Analiza el sentimiento del siguiente texto.
Responde SOLO con un JSON en este formato:
{
  "sentiment": "positive" | "negative" | "neutral",
  "confidence": 0-100,
  "reason": "breve explicación"
}

Texto: {texto}
```

---

## ⚠️ Seguridad

### ❌ NUNCA hagas esto:

```javascript
// NUNCA hardcodees la API key
const apiKey = "sk-1234567890";
```

### ✅ Siempre haz esto:

```javascript
// Usa variables de entorno
const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

// Valida que existe
if (!apiKey) {
  throw new Error('API key no configurada. Revisa tu archivo .env');
}
```

### Mejor Práctica: Backend Proxy

Para producción, **NO** expongas la API key en el frontend. Usa un backend como proxy:

```
Frontend (React) → Backend (Express) → OpenAI API
```

---

## 🎯 Checklist de Completado

Antes de hacer tu PR, verifica:

- [ ] Completé las 6 tareas (FE-01 a FE-06)
- [ ] Todas las funcionalidades funcionan correctamente
- [ ] No subí mi archivo `.env` con la API key
- [ ] Agregué manejo de errores en todas las llamadas a API
- [ ] Documenté los prompts efectivos que usé
- [ ] Los componentes tienen estados de loading
- [ ] Probé con diferentes modelos y temperaturas
- [ ] El código tiene comentarios explicativos
- [ ] Actualicé mi nombre en `CONTRIBUTORS.md`

---

## 🚀 Próximos Pasos

Una vez completes las 6 tareas:

1. Haz un PR al repo principal
2. Comparte en LinkedIn con #IDForIdeas
3. Considera agregar:
   - Modo oscuro
   - Historial persistente (localStorage)
   - Export de conversaciones
   - Más modelos (Claude, Gemini)
   - Streaming de respuestas

---

**¿Dudas?** Revisa [CONTRIBUTING.md](../CONTRIBUTING.md) o la documentación de [OpenAI](https://platform.openai.com/docs)
