# 🤖 CoWork AI

<div align="center">

**Proyecto de Aprendizaje de IA por [ID For IDeas](https://idforideas.com/)**

![CoWork AI](https://img.shields.io/badge/CoWork-AI-purple?style=for-the-badge)
![ID For IDeas](https://img.shields.io/badge/ID%20For-IDeas-orange?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Base%20Template-green?style=for-the-badge)

**Plataforma de herramientas de IA - Aprende Prompt Engineering y LLMs contribuyendo**

> 📚 **Este es un repositorio base de referencia**  
> Para participar activamente en el CoWork: [idforideas.com/cowork](https://idforideas.com/cowork)

</div>

---

## 🎯 ¿Qué es esto?

**CoWork AI** es un **repositorio base de ID For IDeas** enfocado en **Prompt Engineering y Large Language Models (LLMs)** para que desarrolladores juniors aprendan a integrar IA en su stack profesional.

**Tu misión**: Usar este repo como referencia, completar las tareas de tu rol usando IA, y compartir tu trabajo en LinkedIn.

✅ Aprende a usar OpenAI API, Claude, y otros LLMs  
✅ Domina Prompt Engineering desde tu rol  
✅ 6 tareas prácticas por rol (Frontend tiene 6 también)  
✅ Proyectos reales para tu portfolio  
✅ No necesitas ser experto en IA para empezar  

> 📌 **Nota importante**: Este es un repo de referencia. Para participar en el CoWork, visita [idforideas.com/cowork](https://idforideas.com/cowork)

---

## ⚡ Inicio Rápido

### 1. Requisitos Previos

Antes de empezar, necesitas:

- **API Key de OpenAI** (o Anthropic Claude)
  - Crea cuenta en [platform.openai.com](https://platform.openai.com)
  - Genera una API key en la sección API keys
  - ⚠️ **Importante**: Tendrás que añadir créditos (mínimo $5) para usar la API
  - Alternativa: Usa [Anthropic Claude](https://console.anthropic.com/)

- **Node.js 18+** o **Python 3.9+** (según tu rol)
- **Git** instalado
- Editor de código (VS Code recomendado)

### 2. Descarga o clona este repo como referencia

```bash
git clone https://github.com/ID-For-Ideas-Cowork/cowork-ai.git
cd cowork-ai
```

### 3. Configura tu API Key

Crea un archivo `.env` en la raíz del proyecto:

```bash
# .env
OPENAI_API_KEY=tu-api-key-aqui
```

⚠️ **NUNCA subas tu API key a GitHub**. El archivo `.gitignore` ya está configurado para evitarlo.

### 4. Elige tu rol y completa el roadmap

Ve a la sección [Roles y Tareas](#-roles-y-tareas) 👇

Cada rol tiene sus propias instrucciones de instalación y ejecución.

### 5. Participa en el CoWork

Regístrate y participa en [idforideas.com/cowork](https://idforideas.com/cowork) para recibir soporte y retroalimentación de la comunidad.

---

## 🚀 Roles y Tareas

### Resumen rápido por rol

| Rol | Rango de tareas | Enfoque IA | README |
|---|---|---|---|
| Frontend | FE-01 a FE-06 | Chatbots, generación de imágenes, interfaces con IA | [frontend/README.md](frontend/README.md) |
| Backend | BE-01 a BE-06 | APIs de IA, RAG, Function Calling, LangChain | [backend/README.md](backend/README.md) |
| Data Analyst | DA-01 a DA-06 | Análisis con IA, generación de código Pandas, insights | [data/README.md](data/README.md) |
| Designer | DS-01 a DS-06 | Prompts para diseño, DALL-E, design systems con IA | [design/README.md](design/README.md) |
| Project Manager | PM-01 a PM-06 | User stories, roadmaps, documentación con IA | [docs/README.md](docs/README.md) |
| QA Tester | QA-01 a QA-06 | Test cases con IA, generación de tests E2E | [qa/README.md](qa/README.md) |
| DevOps | DO-01 a DO-06 | Dockerfiles con IA, CI/CD automation, logs analysis | [devops/README.md](devops/README.md) |

---

## 📚 ¿Qué aprenderás?

### Conceptos de IA que dominarás:

- **Prompt Engineering**: Cómo escribir prompts efectivos para obtener mejores resultados
- **APIs de LLMs**: Integración con OpenAI, Claude, y otras APIs
- **Temperature y parámetros**: Control de creatividad y determinismo
- **System vs User prompts**: Diferencia y cuándo usar cada uno
- **Streaming**: Respuestas en tiempo real
- **Function Calling**: IA que ejecuta funciones
- **RAG (Retrieval Augmented Generation)**: IA con acceso a tus documentos
- **Embeddings**: Búsqueda semántica
- **LangChain**: Framework para aplicaciones con LLMs

### Por Rol:

#### 🎨 **Frontend Developer**
- Integrar chatbots en React
- Generar imágenes con DALL-E
- Crear interfaces para IA
- Manejar estados de loading/streaming
- UX para aplicaciones de IA

#### ⚙️ **Backend Developer**
- Crear APIs que consuman LLMs
- Implementar RAG básico
- Function Calling para herramientas
- Streaming de respuestas
- LangChain para Node.js/Python

#### 📊 **Data Analyst**
- Análisis de datos con IA
- Generar código Pandas automáticamente
- Dashboards con insights de IA
- Limpieza de datos asistida
- Explicación de SQL con IA

#### 🎨 **Designer**
- Prompts para diseño (UI, iconos, ilustraciones)
- Generar design systems con ChatGPT
- DALL-E para assets
- UX copywriting con IA
- User personas generadas

#### 📋 **Project Manager**
- User stories automáticas
- Roadmaps generados por IA
- Documentación técnica
- Análisis de reuniones
- Risk assessment con IA

#### 🧪 **QA Tester**
- Test cases generados por IA
- Código E2E (Playwright) automático
- Análisis de bug reports
- Datos de prueba sintéticos
- Test plans completos

#### 🔧 **DevOps**
- Dockerfiles generados
- GitHub Actions workflows
- Análisis de logs con IA
- Scripts de deployment
- Kubernetes manifests

---

## 📁 Estructura del Proyecto

```
cowork-ai/
├── frontend/                 # React + OpenAI API
│   ├── src/
│   │   ├── components/      # ChatBox, ModelSelector, etc.
│   │   ├── pages/           # ImageGenerator, Translator, etc.
│   │   ├── services/        # openai.js, dalle.js
│   │   └── data/            # promptTemplates.js
│   └── README.md
│
├── backend/
│   ├── nodejs/              # Express + OpenAI SDK
│   │   ├── src/
│   │   │   ├── routes/      # chat, prompts, rag, stream
│   │   │   ├── controllers/ # Business logic
│   │   │   ├── services/    # OpenAI service, embeddings
│   │   │   └── utils/       # Prompt builder, vector store
│   │   └── README.md
│   │
│   └── python/              # FastAPI + LangChain
│       ├── api/             # Endpoints
│       ├── chains/          # LangChain chains
│       ├── tools/           # Function calling tools
│       └── README.md
│
├── data/                    # Python + Pandas + IA
│   ├── scripts/             # Análisis, generación de código
│   ├── dashboard/           # Streamlit con IA
│   ├── prompts/             # Prompts para data analysis
│   └── README.md
│
├── design/                  # Prompts + DALL-E
│   ├── docs/                # Guías de prompts
│   ├── assets/              # Iconos, imágenes generadas
│   ├── prompts/             # Templates de prompts
│   ├── design-system/       # Design system con IA
│   └── README.md
│
├── devops/                  # AI-powered DevOps
│   ├── scripts/             # Generadores (Dockerfile, CI/CD)
│   ├── prompts/             # Prompts para DevOps
│   ├── examples/            # Ejemplos generados
│   └── README.md
│
├── docs/                    # PM + ChatGPT
│   ├── templates/           # PRD, user stories, roadmaps
│   ├── scripts/             # Generadores de docs
│   ├── prompts/             # Prompts para PM
│   └── README.md
│
├── qa/                      # QA + AI
│   ├── scripts/             # Generadores de tests
│   ├── tests/generated/     # Tests automáticos
│   ├── prompts/             # Prompts para QA
│   └── README.md
│
├── project-meta.json        # Metadata del proyecto y tareas
├── CONTRIBUTING.md          # Guía de contribución
├── LICENSE                  # MIT License
└── README.md                # Este archivo
```

---

## 🛠️ Stack Tecnológico

### Por Rol

| Rol | Tecnologías |
|-----|-------------|
| Frontend | React, OpenAI API, Anthropic Claude, Server-Sent Events |
| Backend Node.js | Express, OpenAI SDK, LangChain, embeddings |
| Backend Python | FastAPI, LangChain, OpenAI Python SDK |
| Data | Python, Pandas, Streamlit, Matplotlib, OpenAI API |
| Designer | ChatGPT, DALL-E, Midjourney, Markdown |
| DevOps | Docker, GitHub Actions, Kubernetes, ChatGPT, Python |
| PM | ChatGPT, Markdown, Python scripting |
| QA | Playwright, Cypress, ChatGPT, JavaScript, Python |

---

## 💡 Mejores Prácticas de Prompt Engineering

### 1. **Sé específico y claro**

❌ **Mal prompt**:
```
Escribe código
```

✅ **Buen prompt**:
```
Escribe una función en JavaScript que valide un email usando regex.
Debe retornar true si es válido, false si no.
Incluye comentarios explicativos.
```

### 2. **Proporciona contexto**

❌ **Mal prompt**:
```
Analiza estos datos
```

✅ **Buen prompt**:
```
Soy un analista de datos trabajando con ventas de e-commerce.
Tengo un CSV con columnas: fecha, producto, categoría, precio, cantidad.
Analiza los datos y encuentra los 5 productos más vendidos del último mes.
```

### 3. **Usa ejemplos (Few-shot learning)**

```
Convierte descripciones de producto en JSON.

Ejemplo:
Input: "Laptop HP 15 pulgadas, 8GB RAM, color negro"
Output: {"brand": "HP", "size": "15in", "ram": "8GB", "color": "black"}

Ahora convierte:
Input: "Mouse Logitech inalámbrico, color blanco"
Output:
```

### 4. **Itera y refina**

No esperes el prompt perfecto en el primer intento. Prueba, ajusta, mejora.

### 5. **Define el formato de salida**

```
Lista los 5 beneficios principales de usar TypeScript.
Formato: lista numerada, máximo 20 palabras por punto.
```

---

## 🔒 Seguridad y Mejores Prácticas

### ⚠️ NUNCA hagas esto:

- ❌ Subir tu API key a GitHub
- ❌ Compartir tu API key públicamente
- ❌ Hardcodear API keys en el código
- ❌ Usar API keys de producción para testing

### ✅ SIEMPRE haz esto:

- ✅ Usa variables de entorno (`.env`)
- ✅ Añade `.env` al `.gitignore`
- ✅ Rota tus API keys regularmente
- ✅ Monitorea tu uso de API
- ✅ Establece límites de gasto en OpenAI

### Monitoreo de costos

- Revisa tu uso en [platform.openai.com/usage](https://platform.openai.com/usage)
- Establece límites en [platform.openai.com/account/limits](https://platform.openai.com/account/limits)
- Usa modelos más económicos para desarrollo (`gpt-3.5-turbo`)
- Reserva modelos avanzados (`gpt-4`) para producción

---

## 🤝 Cómo Contribuir

1. **Fork** este repositorio
2. **Clona** tu fork localmente
3. Lee el **README de tu rol** en la carpeta correspondiente
4. Completa las **6 tareas** de tu roadmap
5. **Documenta** tu proceso de prompt engineering
6. **Comparte** en LinkedIn con #IDForIdeas

Ver [CONTRIBUTING.md](CONTRIBUTING.md) para detalles completos.

---

## 📖 Recursos de Aprendizaje

### Documentación Oficial

- [OpenAI API Docs](https://platform.openai.com/docs)
- [OpenAI Cookbook](https://github.com/openai/openai-cookbook)
- [Anthropic Claude Docs](https://docs.anthropic.com/)
- [LangChain Docs](https://python.langchain.com/)

### Guías de Prompt Engineering

- [OpenAI Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering)
- [Anthropic Prompt Engineering](https://docs.anthropic.com/claude/docs/prompt-engineering)
- [Prompt Engineering Guide by DAIR.AI](https://www.promptingguide.ai/)

### Comunidad

- [ID For Ideas CoWork](https://idforideas.com/cowork)
- [OpenAI Community Forum](https://community.openai.com/)
- [r/PromptEngineering](https://www.reddit.com/r/PromptEngineering/)

---

## 🎓 Objetivos de Aprendizaje

Al completar este proyecto, serás capaz de:

- ✅ Integrar APIs de IA (OpenAI, Claude) en aplicaciones
- ✅ Escribir prompts efectivos para diferentes casos de uso
- ✅ Manejar parámetros de LLMs (temperature, model, max_tokens)
- ✅ Implementar chatbots y interfaces de IA
- ✅ Usar Function Calling para herramientas
- ✅ Implementar RAG básico con embeddings
- ✅ Generar código, documentación y assets con IA
- ✅ Aplicar IA específicamente a tu rol profesional
- ✅ Crear un portfolio de proyectos con IA

---

## 📝 Licencia

Este proyecto está bajo la licencia MIT. Ver [LICENSE](LICENSE) para más detalles.

---

## 🌟 Contribuido por la Comunidad

Este proyecto es posible gracias a contribuidores de todo el mundo. Ver [CONTRIBUTORS.md](CONTRIBUTORS.md).

---

## 📞 Contacto y Soporte

- **Web**: [idforideas.com](https://idforideas.com)
- **CoWork**: [idforideas.com/cowork](https://idforideas.com/cowork)
- **Issues**: [GitHub Issues](https://github.com/ID-For-Ideas-Cowork/cowork-ai/issues)

---

<div align="center">

**¿Listo para empezar?**

[Elige tu rol](#-roles-y-tareas) y comienza tu journey en IA 🚀

**Hecho con 💜 por [ID For IDeas](https://idforideas.com/)**

</div>
