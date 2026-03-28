# 📋 Project Manager - CoWork AI

**Gestiona proyectos con IA**

---

## 🎯 Objetivo

Automatizar documentación, generar user stories, crear roadmaps, analizar reuniones, y optimizar planning con LLMs.

---

## 📋 Roadmap

1. **PM-01**: Generador de User Stories
2. **PM-02**: Roadmap automatizado
3. **PM-03**: Generador de documentación técnica
4. **PM-04**: Analizador de reuniones
5. **PM-05**: Generador de PRDs
6. **PM-06**: Risk assessment automatizado

---

## 🚀 Setup

```bash
cd docs
pip install -r requirements.txt
```

---

## 💡 Ejemplo: User Stories

**Prompt**:
```
Genera user stories para la feature: {descripción de feature}

Para cada story incluye:
1. Formato: Como [rol], quiero [acción], para [beneficio]
2. Acceptance criteria (3-5 puntos)
3. Estimación (puntos: 1, 2, 3, 5, 8)
4. Prioridad (High/Medium/Low)
5. Dependencies (si aplica)

Genera 3-5 stories que cubran la feature completa.
```

**Script**:
```python
# scripts/story_generator.py
from openai import OpenAI
import os

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def generate_user_stories(feature_description):
    prompt = f"""
    Genera user stories para esta feature:
    {feature_description}
    
    Para cada story incluye:
    - Formato: Como [rol], quiero [acción], para [beneficio]
    - Acceptance criteria (3-5 puntos)
    - Estimación en story points (1,2,3,5,8)
    - Prioridad (High/Medium/Low)
    
    Output: Markdown formato GitHub Issues
    """
    
    response = client.chat.completions.create(
        model="gpt-4",
        messages=[
            {
                "role": "system",
                "content": "Eres un Product Owner experto. Escribes user stories claras y accionables."
            },
            {"role": "user", "content": prompt}
        ]
    )
    
    return response.choices[0].message.content

# Uso
feature = "Sistema de notificaciones push en la app móvil"
stories = generate_user_stories(feature)
print(stories)
```

---

## 💡 Ejemplo: Roadmap Automatizado

**Prompt**:
```
Crea un product roadmap para {producto} en {periodo, ej: Q1-Q2 2026}.

Objetivos principales:
1. {objetivo 1}
2. {objetivo 2}
3. {objetivo 3}

Features deseadas:
- {lista de features}

Genera:
1. Timeline por quarters
2. Priorización (usando MoSCoW o RICE)
3. Dependencias entre features
4. Milestones clave
5. Risks y mitigaciones

Formato: Markdown con tablas
```

---

## 💡 Ejemplo: Analizador de Reuniones

```python
# scripts/meeting_analyzer.py
from openai import OpenAI
import os

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def analyze_meeting(transcript):
    prompt = f"""
    Analiza esta transcripción de reunión:
    
    {transcript}
    
    Extrae y organiza:
    
    ## Decisiones Tomadas
    - [lista]
    
    ## Action Items
    - [tarea] - Responsable: [nombre] - Fecha: [fecha]
    
    ## Pendientes / Bloqueadores
    - [lista]
    
    ## Próximos Pasos
    - [lista]
    
    ## Resumen Ejecutivo
    [2-3 líneas]
    """
    
    response = client.chat.completions.create(
        model="gpt-4",
        messages=[
            {
                "role": "system",
                "content": "Eres un asistente de PM. Extraes información clave de reuniones."
            },
            {"role": "user", "content": prompt}
        ]
    )
    
    return response.choices[0].message.content

# Uso
with open("examples/meeting_transcript.txt", "r") as f:
    transcript = f.read()

summary = analyze_meeting(transcript)
print(summary)
```

---

## 💡 Prompt: PRD (Product Requirements Document)

```
Genera un PRD completo para: {feature/producto}

Secciones requeridas:

1. Overview
   - Problema que resuelve
   - Target users
   - Value proposition

2. Goals & Success Metrics
   - OKRs
   - KPIs a trackear

3. User Stories
   - Principales flujos de usuario

4. Requirements
   - Funcionales
   - No funcionales
   - Technical constraints

5. Out of Scope
   - Qué NO incluye v1

6. Design Mocks
   - Wireframes descritos

7. Technical Considerations
   - Arquitectura sugerida
   - Integraciones necesarias

8. Timeline & Milestones
   - Fases de desarrollo

9. Risks & Mitigations
   - Posibles blockers

Formato: Markdown profesional, ~2000 palabras
```

---

## 💡 Ejemplo: Risk Assessment

```python
# scripts/risk_analyzer.py
def assess_risks(project_description):
    prompt = f"""
    Analiza riesgos para este proyecto:
    {project_description}
    
    Genera una matriz de riesgos:
    
    | Risk | Probability (1-5) | Impact (1-5) | Score | Mitigation |
    |------|-------------------|--------------|-------|------------|
    
    Categorías de riesgo:
    - Técnicos
    - Timeline
    - Recursos
    - Stakeholders
    - Negocio
    
    Prioriza por score (Prob x Impact).
    Sugiere estrategias de mitigación específicas.
    """
    
    # ... llamada a OpenAI
```

---

## 🎯 Checklist

- [ ] PM-01: User stories generator
- [ ] PM-02: Roadmap generator
- [ ] PM-03: Documentation generator
- [ ] PM-04: Meeting analyzer
- [ ] PM-05: PRD generator
- [ ] PM-06: Risk analyzer

---

**📖 Recursos**: [Product Management](https://www.productplan.com/) | [User Stories](https://www.mountaingoatsoftware.com/agile/user-stories) | [PRD Templates](https://www.productboard.com/glossary/product-requirements-document/)
