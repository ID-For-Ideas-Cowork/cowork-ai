# 🎯 Guía de Instalación - CoWork AI

Sigue estos pasos para configurar el proyecto en tu máquina local.

---

## 📋 Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** 18+ ([Descargar](https://nodejs.org/))
- **Python** 3.10+ ([Descargar](https://www.python.org/))
- **Git** ([Descargar](https://git-scm.com/))
- **Docker** (Opcional, para desarrollo con contenedores) ([Descargar](https://www.docker.com/))

---

## 🚀 Instalación Rápida

### 1. Clonar el Repositorio
```bash
git clone https://github.com/ID-For-Ideas-Cowork/cowork-ai.git
cd cowork-ai
```

### 2. Configurar Variables de Entorno

Copia el archivo de ejemplo y añade tu API Key de OpenAI:

```bash
cp .env.example .env
```

Edita `.env` y añade tu clave:
```env
OPENAI_API_KEY=sk-tu-clave-aqui
```

> 🔑 **Obtén tu API Key**: [platform.openai.com/api-keys](https://platform.openai.com/api-keys)

---

## 🎨 Frontend (React)

### Instalación
```bash
cd frontend
npm install
```

### Desarrollo
```bash
npm start
```

La aplicación estará disponible en `http://localhost:3000`

### Build
```bash
npm run build
```

---

## ⚙️ Backend - Node.js

### Instalación
```bash
cd backend/nodejs
npm install
```

### Desarrollo
```bash
npm run dev
```

El servidor estará disponible en `http://localhost:5000`

---

## 🐍 Backend - Python

### Instalación

#### Crear entorno virtual
```bash
cd backend/python
python -m venv venv

# Activar en Windows
venv\Scripts\activate

# Activar en Mac/Linux
source venv/bin/activate
```

#### Instalar dependencias
```bash
pip install -r requirements.txt
```

### Desarrollo
```bash
uvicorn main:app --reload
```

El servidor estará disponible en `http://localhost:8000`

**Documentación API**: `http://localhost:8000/docs`

---

## 📊 Data Dashboard (Streamlit)

### Instalación
```bash
cd data
pip install -r requirements.txt
```

### Ejecución
```bash
streamlit run dashboard.py
```

El dashboard estará disponible en `http://localhost:8501`

---

## 🐳 Docker (Alternativa)

Si prefieres usar Docker:

### Iniciar todos los servicios
```bash
docker-compose up
```

### Servicios disponibles:
- Frontend: `http://localhost:3000`
- Backend Node.js: `http://localhost:5000`
- Backend Python: `http://localhost:8000`
- Data Dashboard: `http://localhost:8501`

### Detener servicios
```bash
docker-compose down
```

---

## ✅ Verificar Instalación

### Frontend
Visita `http://localhost:3000` - Deberías ver la página de inicio

### Backend Node.js
```bash
curl http://localhost:5000/health
# Respuesta: {"status":"OK"}
```

### Backend Python
```bash
curl http://localhost:8000/health
# Respuesta: {"status":"OK"}
```

---

## 🛠️ Resolución de Problemas

### Error: "Cannot find module"
```bash
# Frontend
cd frontend && npm install

# Backend Node.js
cd backend/nodejs && npm install
```

### Error: "Module not found" (Python)
```bash
# Asegúrate de tener el entorno virtual activado
pip install -r requirements.txt
```

### Error: "Invalid API Key"
- Verifica que tu `.env` tenga una clave válida de OpenAI
- La clave debe empezar con `sk-`
- Nunca compartas tu clave en Git

### Puerto ya en uso
Si el puerto está ocupado, puedes cambiarlo:

**Frontend** - Edita `package.json`:
```json
"start": "PORT=3001 react-scripts start"
```

**Backend** - Edita `.env`:
```env
PORT=5001
```

---

## 📝 Próximos Pasos

1. ✅ Instalación completada
2. 📖 Lee el [README.md](README.md) principal
3. 🎯 Elige tu rol y comienza con la primera tarea
4. 💡 Consulta [PROMPT_TEMPLATES.md](PROMPT_TEMPLATES.md) para prompts útiles
5. 🤝 Lee [CONTRIBUTING.md](CONTRIBUTING.md) antes de contribuir

---

## 🆘 Ayuda

¿Problemas con la instalación?

- 📖 Revisa la documentación de cada rol en `<rol>/README.md`
- 💬 Abre un Issue en GitHub
- 🤝 Consulta con la comunidad en Discord

---

**¡Listo para empezar!** 🚀
