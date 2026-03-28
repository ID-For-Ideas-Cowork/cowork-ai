# 🧪 QA Tester - CoWork AI

**Automatiza testing con IA**

---

## 🎯 Objetivo

Usar LLMs para generar test cases, código de tests automatizados, datos de prueba, y mejorar cobertura de QA.

---

## 📋 Roadmap

1. **QA-01**: Generador de test cases
2. **QA-02**: Generador de tests E2E (Playwright)
3. **QA-03**: Analizador de bug reports
4. **QA-04**: Generador de datos de prueba
5. **QA-05**: Asistente de test planning
6. **QA-06**: Reviewer de código para QA

---

## 🚀 Setup

```bash
cd qa
npm install  # Para Playwright
pip install -r requirements.txt  # Para scripts Python
```

---

## 💡 Ejemplo: Generador de Test Cases

**Prompt**:
```
Genera test cases para esta user story:

{user story}

Para cada test case incluye:
1. ID: TC-XXX
2. Título descriptivo
3. Precondiciones
4. Steps (numerados)
5. Expected result
6. Test data
7. Priority (High/Medium/Low)

Incluye:
- Happy path (2-3 casos)
- Edge cases (3-4 casos)
- Negative cases (2-3 casos)

Formato: Markdown table
```

**Script Python**:
```python
# scripts/testcase_generator.py
from openai import OpenAI
import os

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def generate_test_cases(user_story):
    prompt = f"""
    Genera test cases completos para:
    {user_story}
    
    Incluye:
    - Happy path scenarios
    - Edge cases
    - Negative scenarios
    - Boundary value testing
    
    Formato tabla Markdown:
    | ID | Title | Preconditions | Steps | Expected | Data | Priority |
    """
    
    response = client.chat.completions.create(
        model="gpt-4",
        messages=[
            {
                "role": "system",
                "content": "Eres un QA Lead experto. Generas test cases exhaustivos."
            },
            {"role": "user", "content": prompt}
        ]
    )
    
    return response.choices[0].message.content
```

---

## 💡 Ejemplo: Generador de Tests E2E

**Prompt para Playwright**:
```
Genera un test E2E en Playwright para este flujo:

Flujo: {descripción del flujo de usuario}
URL: {url base}
Elementos: {selectores o descripciones}

Genera:
- Test completo en JavaScript
- Page Object Model (si es complejo)
- Assertions apropiados
- Error handling
- Comentarios explicativos
- Data-driven approach (si aplica)

Usa async/await y best practices de Playwright
```

**Script**:
```python
# scripts/e2e_generator.py
def generate_playwright_test(flow_description):
    prompt = f"""
    Genera código Playwright para este flujo:
    {flow_description}
    
    Requisitos:
    - async/await
    - Proper assertions
    - Error handling
    - Comentarios claros
    - Best practices
    
    Output: Código JavaScript completo y ejecutable
    """
    
    response = client.chat.completions.create(
        model="gpt-4",
        messages=[
            {
                "role": "system",
                "content": "Eres un automation engineer experto en Playwright."
            },
            {"role": "user", "content": prompt}
        ],
        temperature=0.2
    )
    
    return response.choices[0].message.content

# Uso
flow = """
Usuario va a login page, ingresa credenciales válidas,
hace clic en Login, verifica redirección a dashboard,
confirma que aparece mensaje de bienvenida con nombre de usuario
"""

test_code = generate_playwright_test(flow)

# Guardar en archivo
with open("tests/generated/login.spec.js", "w") as f:
    f.write(test_code)
```

---

## 💡 Ejemplo: Analizador de Bug Reports

```python
# scripts/bug_analyzer.py
def standardize_bug_report(raw_bug):
    prompt = f"""
    Estandariza este bug report:
    
    {raw_bug}
    
    Genera formato estructurado:
    
    ## Bug ID
    BUG-XXX
    
    ## Title
    [Descriptivo y conciso]
    
    ## Severity
    [Critical/High/Medium/Low]
    
    ## Priority  
    [P0/P1/P2/P3]
    
    ## Environment
    [Browser, OS, versión]
    
    ## Steps to Reproduce
    1. [paso]
    2. [paso]
    
    ## Expected Result
    [qué debería pasar]
    
    ## Actual Result
    [qué pasa actualmente]
    
    ## Screenshots/Logs
    [si disponible]
    
    ## Possible Cause
    [hipótesis técnica]
    
    ## Affected Area
    [Frontend/Backend/API/etc]
    """
    
    # ... llamada a OpenAI
```

---

## 💡 Ejemplo: Generador de Test Data

```python
# scripts/test_data_generator.py
def generate_test_data(schema, scenarios):
    prompt = f"""
    Genera datos de prueba realistas para:
    
    Schema:
    {schema}
    
    Escenarios necesitados:
    {scenarios}
    
    Requisitos:
    - Datos variados y realistas
    - Incluir edge cases
    - Formato JSON
    - 10 registros por escenario
    
    Ejemplos:
    - Emails válidos e inválidos
    - Nombres con caracteres especiales
    - Números en límites (min/max)
    - Fechas en diferentes formatos
    - Strings vacíos, muy largos, con emojis
    """
    
    response = client.chat.completions.create(
        model="gpt-4",
        messages=[
            {
                "role": "system",
                "content": "Generas test data realista y exhaustiva."
            },
            {"role": "user", "content": prompt}
        ]
    )
    
    return response.choices[0].message.content

# Uso
schema = """
{
  "user": {
    "name": "string",
    "email": "string",
    "age": "number (18-120)",
    "country": "string"
  }
}
"""

scenarios = """
1. Happy path: datos completamente válidos
2. Edge case: edades límite (18, 120)
3. Invalid: emails malformados
4. Boundary: nombres muy largos (>100 chars)
5. Special: caracteres unicode, emojis
"""

test_data = generate_test_data(schema, scenarios)
print(test_data)
```

---

## 💡 Prompt: Test Plan

```
Genera un test plan para: {feature/release}

Incluye:

1. Test Strategy
   - Tipos de testing (unit, integration, E2E, performance, security)
   - Herramientas a usar
   
2. Scope
   - In scope
   - Out of scope
   
3. Test Environment
   - Configuración necesaria
   
4. Test Data Requirements
   - Tipos de datos necesarios
   
5. Test Schedule
   - Timeline de testing phases
   
6. Resources
   - Team members
   - Tools
   
7. Risk Assessment
   - Riesgos de QA
   - Mitigaciones
   
8. Exit Criteria
   - Cuándo se considera "done"
   
Formato: Markdown profesional
```

---

## 🎯 Checklist

- [ ] QA-01: Test case generator
- [ ] QA-02: E2E code generator
- [ ] QA-03: Bug analyzer
- [ ] QA-04: Test data generator
- [ ] QA-05: Test planning assistant
- [ ] QA-06: Code reviewer for QA

---

**📖 Recursos**: [Playwright Docs](https://playwright.dev/) | [Test Case Design](https://www.guru99.com/test-case.html) | [QA Best Practices](https://www.ministryoftesting.com/)
