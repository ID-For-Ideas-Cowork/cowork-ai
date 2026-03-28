# 📚 Prompt Templates Library

Una colección de prompts efectivos categorizados por caso de uso.

---

## 💻 Código y Desarrollo

### Generación de código
```
Genera una función en {lenguaje} que {descripción}.

Requisitos:
- Manejo de errores
- Validación de inputs
- Comentarios explicativos
- Type hints/tipos (si aplica)
- Tests unitarios (opcional)

Output: Código limpio y bien estructurado
```

### Code Review
```
Revisa este código y sugiere mejoras:

{código}

Enfócate en:
1. Performance
2. Seguridad
3. Mantenibilidad
4. Best practices
5. Edge cases no considerados
```

### Debugging
```
Tengo este error:
{error message}

En este código:
{código}

Contexto: {descripción del contexto}

Ayúdame a:
1. Identificar la causa raíz
2. Explicar por qué ocurre
3. Proponer 2-3 soluciones
4. Prevenir errores similares
```

---

## ✍️ Escritura y Contenido

### Documentación técnica
```
Escribe documentación para {función/API/feature}.

Incluye:
1. Overview (qué hace, por qué existe)
2. Uso básico (ejemplos de código)
3. Parámetros (descripción, tipos, valores por defecto)
4. Retorno (qué retorna, tipo)
5. Errores comunes (troubleshooting)
6. Ejemplos avanzados

Audiencia: {junior/mid/senior developers}
Tono: {técnico/educativo/casual}
```

### README atractivo
```
Crea un README.md profesional para {proyecto}.

Secciones:
- 🎯 Título + tagline atractiva
- 📋 Descripción (problema que resuelve)
- ✨ Features principales
- 🚀 Quick start (instalación + primer uso)
- 📖 Documentación (link o inline)
- 🤝 Cómo contribuir
- 📝 Licencia
- 🌟 Badges relevantes

Usa emojis y formato Markdown profesional
```

---

## 📊 Análisis de Datos

### Análisis exploratorio
```
Analiza este dataset:

Columnas: {lista de columnas}
Tipos: {tipos de datos}
Muestra: {primeras filas}

Proporciona:
1. Descripción general del dataset
2. Tipo de datos (transaccional, temporal, etc.)
3. Posibles análisis interesantes
4. Problemas de calidad detectados
5. Visualizaciones sugeridas
```

### Generación de SQL
```
Genera una query SQL para: {pregunta de negocio}

Esquema de base de datos:
{describe tablas y relaciones}

Requisitos:
- Optimizada (usar índices apropiados)
- Legible (con CTEs si es complejo)
- Comentada
- Manejo de NULLs
```

---

## 🎨 Diseño

### Design System
```
Diseña un sistema de diseño para {tipo de app/sitio}.

Incluye:
1. Paleta de colores (primarios, secundarios, semánticos)
2. Tipografía (scale, weights, families)
3. Spacing system (base 4px/8px)
4. Border radius values
5. Shadow/elevation levels
6. Componentes base

Output: CSS custom properties + ejemplos visuales descritos
```

### Copywriting UX
```
Escribe {tipo de copy} para {contexto}.

Tono: {profesional/casual/amigable/técnico}
Longitud: {corto/medio/largo}

Tipos:
- Microcopy (botones, labels, tooltips)
- Error messages (qué pasó + cómo arreglar)
- Empty states (guía de siguiente paso)
- Onboarding (bienvenida + valor)
- Success messages (celebración + next action)

Principios:
- Claro y conciso
- Accionable
- Empático
- Inclusivo
```

---

## 🧪 Testing

### Test Cases
```
Genera test cases para: {feature/user story}

Incluye:
- Happy path (2-3 casos)
- Edge cases (3-4 casos)
- Negative scenarios (2-3 casos)
- Boundary values
- Performance scenarios (si aplica)

Formato tabla:
| ID | Descripción | Precondiciones | Steps | Expected | Data |
```

### Test Data
```
Genera datos de prueba para:

Schema: {estructura}

Necesito:
- 5 casos válidos (happy path)
- 5 casos con edge cases
- 5 casos inválidos

Incluye variación en:
- Longitud de strings
- Rangos numéricos
- Fechas (pasado/futuro/límites)
- Caracteres especiales
- Casos Unicode/emojis

Output: JSON array
```

---

## 🔧 DevOps

### Dockerfile
```
Genera un Dockerfile para {tipo de app}.

Stack: {lenguaje + framework}

Requisitos:
- Multi-stage build
- Non-root user
- Minimal image size
- Layer caching optimizado
- Health check
- Security best practices

Incluye .dockerignore apropiado
```

### CI/CD Pipeline
```
Crea un workflow de GitHub Actions para {proyecto}.

Triggers: {push, PR, schedule}

Stages:
1. Lint y formatting
2. Tests (unit + integration)
3. Build
4. Security scan
5. Deploy a {environment}

Requisitos:
- Cache de dependencias
- Secrets management
- Notificaciones
- Artefacts si aplica
```

---

## 💡 Tips de Uso

### Variables en Templates

Usa `{{variable}}` para partes reutilizables:

```
Traduce del {{idioma_origen}} al {{idioma_destino}}:

{{texto}}
```

### Ajustar Temperature

- **Creative tasks** (escritura, ideas): 0.7-0.9
- **Factual tasks** (código, análisis): 0.2-0.4
- **Balance**: 0.5-0.7

### System Prompts Útiles

```
System: Eres un {rol} experto con {X} años de experiencia.
Tu especialidad es {especialidad}.
Siempre {característica, ej: "proporcionas ejemplos de código"}.
```

---

## 🚀 Cómo Usar

1. Copia el template relevante
2. Reemplaza `{variables}` con tu contexto
3. Ajusta temperatura según necesidad
4. Itera si el resultado no es perfecto
5. Guarda prompts efectivos para reutilizar

---

**Contribuye**: Si encuentras un prompt especialmente efectivo, compártelo!
