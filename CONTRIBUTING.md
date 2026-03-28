# 🤝 Cómo Contribuir

**Proyecto by [ID For IDeas](https://idforideas.com/)**

---

## 🎯 Regla Principal

**Completa el roadmap completo de tu rol** (ver README del área), no solo una parte.

---

## 🚀 7 Pasos para Contribuir

### 1️⃣ Fork del Repositorio

El **Fork** crea una copia del proyecto en tu cuenta de GitHub donde puedes hacer cambios libremente.

**Cómo hacer Fork:**

1. Ve al repositorio original: [github.com/ID-For-Ideas-Cowork/cowork-ai](https://github.com/ID-For-Ideas-Cowork/cowork-ai)
2. Haz clic en el botón **"Fork"** (esquina superior derecha)
3. Selecciona tu cuenta personal
4. Espera a que GitHub copie el proyecto
5. ¡Listo! Ahora tienes tu propia copia en `github.com/TU-USUARIO/cowork-ai`

---

### 2️⃣ Clona tu Fork

**Clona** significa descargar el proyecto a tu computadora para trabajar localmente.

```bash
# 1. Clona TU fork (no el original)
git clone https://github.com/TU-USUARIO/cowork-ai.git

# 2. Entra a la carpeta
cd cowork-ai

# 3. Verifica que estás en tu fork
git remote -v
# Debe mostrar: origin  https://github.com/TU-USUARIO/cowork-ai.git
```

**💡 Tip:** Reemplaza `TU-USUARIO` con tu username de GitHub.

---

### 3️⃣ Configura tu API Key

**⚠️ IMPORTANTE: Nunca subas tu API key a GitHub**

1. Crea un archivo `.env` en la raíz del proyecto:

```bash
# .env
OPENAI_API_KEY=sk-tu-api-key-aqui-1234567890
```

2. Verifica que `.env` esté en el `.gitignore` (ya está incluido)

**¿Dónde conseguir tu API key?**

- **OpenAI**: [platform.openai.com/api-keys](https://platform.openai.com/api-keys)
- **Anthropic**: [console.anthropic.com/](https://console.anthropic.com/)

---

### 4️⃣ Lee el README de tu Área

Cada rol tiene instrucciones específicas:

- **Frontend**: [frontend/README.md](frontend/README.md)
- **Backend**: [backend/README.md](backend/README.md) (Node.js o Python)
- **Data Analyst**: [data/README.md](data/README.md)
- **Designer**: [design/README.md](design/README.md)
- **Project Manager**: [docs/README.md](docs/README.md)
- **QA Tester**: [qa/README.md](qa/README.md)
- **DevOps**: [devops/README.md](devops/README.md)

---

### 5️⃣ Completa las Tareas de tu Rol

Cada rol tiene **6 tareas** en el roadmap.

**Orden recomendado:**

```bash
# Paso 1: Crea una rama para tu trabajo
git checkout -b feat/tu-nombre-fe-01-chatbot

# Paso 2: Trabaja en la tarea
# Experimenta con prompts, itera, mejora

# Paso 3: Documenta tu proceso
# Guarda los prompts efectivos que usaste

# Paso 4: Commit frecuentes
git add .
git commit -m "feat: FE-01 - Chatbot simple con OpenAI"

# Paso 5: Push a tu fork
git push origin feat/tu-nombre-fe-01-chatbot
```

**💡 Tips importantes:**

- **Documenta tus prompts**: Guarda en un archivo `.md` los prompts que funcionaron
- **Itera**: El primer prompt rara vez es perfecto
- **Experimenta**: Prueba diferentes parámetros (temperature, model, etc.)
- **Comenta tu código**: Explica qué hace cada prompt
- **No te rindas**: Si un prompt no funciona, refínalo

---

### 6️⃣ Comparte en LinkedIn

Después de completar tus tareas:

```
🚀 Completé el CoWork AI de @ID For IDeas!

Aprendí a integrar IA en aplicaciones reales:
✅ Prompt Engineering
✅ OpenAI API
✅ [Tu stack específico]

Proyecto Open Source enfocado en LLMs para [tu rol]

#IDForIdeas #PromptEngineering #AI #OpenAI #AprendiendoEnPúblico

[Link a tu fork]
```

---

## 📋 Checklist de Completitud

- [ ] Completé **todas** las tareas de mi rol (6/6)
- [ ] Mi código funciona correctamente
- [ ] No subí archivos `.env` con API keys
- [ ] Documenté los prompts que usé
- [ ] Agregué comentarios explicativos
- [ ] Probé diferentes parámetros (temperature, model)
- [ ] Incluí manejo de errores
- [ ] Mi README de área está actualizado (si fue necesario)
- [ ] Agregué mi nombre en CONTRIBUTORS.md

---

## 🎓 Mejores Prácticas

### Prompt Engineering

1. **Sé específico**: Detalla exactamente qué quieres
2. **Proporciona contexto**: Ayuda a la IA a entender el escenario
3. **Usa ejemplos**: Few-shot learning funciona muy bien
4. **Itera**: Refina basado en resultados
5. **Documenta**: Guarda prompts efectivos para reutilizar

### Código

1. **Manejo de errores**: Siempre maneja posibles errores de la API
2. **Loading states**: Muestra feedback mientras la IA responde
3. **Rate limiting**: Respeta los límites de la API
4. **Costos**: Usa modelos económicos en desarrollo (`gpt-3.5-turbo`)
5. **Seguridad**: NUNCA expongas API keys en el frontend

### Git

1. **Commits descriptivos**: `feat: FE-01 - Implementar chatbot con OpenAI`
2. **Ramas por task**: Una rama por cada tarea grande
3. **Pull frecuente**: Mantén tu fork actualizado
4. **README actualizado**: Si añades features, documenta

---

## ⚠️ Errores Comunes

### 1. API Key expuesta

❌ **MAL**:
```javascript
const apiKey = "sk-1234567890"; // NUNCA
```

✅ **BIEN**:
```javascript
const apiKey = process.env.OPENAI_API_KEY;
```

### 2. Prompts vagos

❌ **MAL**:
```
Traduce esto
```

✅ **BIEN**:
```
Traduce el siguiente texto del español al inglés.
Mantén el tono formal y profesional.
Texto: [...]
```

### 3. No manejar errores

❌ **MAL**:
```javascript
const response = await openai.chat.completions.create({...});
```

✅ **BIEN**:
```javascript
try {
  const response = await openai.chat.completions.create({...});
} catch (error) {
  console.error('Error llamando a OpenAI:', error);
  // Mostrar mensaje amigable al usuario
}
```

### 4. No documentar prompts

❌ No guardar los prompts que funcionaron

✅ Crear archivo `prompts/my-prompts.md` con:
```markdown
## Prompt para Traducción

**Objetivo**: Traducir manteniendo tono profesional

**System Prompt**:
```
Eres un traductor profesional especializado en...
```

**User Prompt**:
```
Traduce el siguiente texto...
```

**Parámetros**:
- Model: gpt-3.5-turbo
- Temperature: 0.3
- Max tokens: 500

**Resultados**: Excelente calidad, mantiene contexto
```

---

## 🆘 ¿Necesitas Ayuda?

### Recursos

- **Documentación OpenAI**: [platform.openai.com/docs](https://platform.openai.com/docs)
- **Prompt Engineering Guide**: [promptingguide.ai](https://www.promptingguide.ai/)
- **LangChain Docs**: [python.langchain.com](https://python.langchain.com/)

### Comunidad

- **ID For Ideas Discord**: [idforideas.com/cowork](https://idforideas.com/cowork)
- **GitHub Issues**: [Issues del proyecto](https://github.com/ID-For-Ideas-Cowork/cowork-ai/issues)

### Costos y Problemas con API

**No me funciona la API**:
- Verifica que añadiste créditos en OpenAI ($5 mínimo)
- Revisa que la API key sea correcta
- Confirma que esté configurada en `.env`

**Me preocupan los costos**:
- Usa `gpt-3.5-turbo` para desarrollo (más barato)
- Establece límites en [platform.openai.com/account/limits](https://platform.openai.com/account/limits)
- Monitorea uso en [platform.openai.com/usage](https://platform.openai.com/usage)
- Costos típicos: $0.002 por cada llamada simple (~$1 para todo el proyecto)

---

## 📜 Código de Conducta

- ✅ Ser respetuoso con otros contributors
- ✅ Dar crédito cuando uses código de otros
- ✅ Ayudar a quienes están aprendiendo
- ✅ Compartir prompts y aprendizajes
- ❌ Plagio o copiar sin entender
- ❌ Compartir API keys de otras personas
- ❌ Spam o contenido ofensivo

---

## 🎯 Resumen Rápido

1. **Fork** → Crea tu copia
2. **Clone** → Descarga a tu PC
3. **API Key** → Configura en `.env`
4. **Tareas** → Completa las 6 de tu rol
5. **Documenta** → Guarda tus prompts efectivos
6. **Comparte** → LinkedIn con #IDForIdeas

---

**¡Listo! Ahora estás preparado para contribuir. 🚀**

¿Dudas? Revisa los [Issues](https://github.com/ID-For-Ideas-Cowork/cowork-ai/issues) o únete a la comunidad en [idforideas.com/cowork](https://idforideas.com/cowork)
