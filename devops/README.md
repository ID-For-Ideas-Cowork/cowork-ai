# 🔧 DevOps Engineer - CoWork AI

**Automatiza DevOps con IA**

---

## 🎯 Objetivo

Usar LLMs para generar configuración de infraestructura, analizar logs, crear pipelines de CI/CD, y automatizar tareas DevOps.

---

## 📋 Roadmap

1. **DO-01**: Generador de Dockerfiles
2. **DO-02**: CI/CD Pipeline Assistant (GitHub Actions)
3. **DO-03**: Analizador de logs con IA
4. **DO-04**: Generador de scripts de deployment
5. **DO-05**: Kubernetes manifests assistant
6. **DO-06**: Chatbot para comandos DevOps

---

## 🚀 Setup

```bash
cd devops
pip install -r requirements.txt
```

---

## 💡 Ejemplo: Generador de Dockerfiles

**Prompt para ChatGPT**:
```
Genera un Dockerfile optimizado para {tipo de app}.

Stack: {Node.js 18 / Python 3.11 / etc}
Framework: {Express / FastAPI / etc}

Requisitos:
- Multi-stage build
- Non-root user
- Minimal image size
- Security best practices
- Health check
- .dockerignore

Output: Dockerfile + explicación de cada stage
```

**Script Python**:
```python
# scripts/dockerfile_generator.py
from openai import OpenAI
import os

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def generate_dockerfile(app_type, stack, framework):
    prompt = f"""
    Genera un Dockerfile optimizado para:
    - Tipo: {app_type}
    - Stack: {stack}
    - Framework: {framework}
    
    Incluye:
    1. Multi-stage build
    2. Non-root user
    3. Health check
    4. Security best practices
    
    Formato: Dockerfile completo con comentarios explicativos.
    """
    
    response = client.chat.completions.create(
        model="gpt-4",
        messages=[
            {
                "role": "system",
                "content": "Eres un experto en Docker y DevOps. Generas Dockerfiles optimizados siguiendo best practices."
            },
            {"role": "user", "content": prompt}
        ],
        temperature=0.3
    )
    
    return response.choices[0].message.content

# Uso
dockerfile = generate_dockerfile(
    app_type="API REST",
    stack="Node.js 20",
    framework="Express"
)
print(dockerfile)
```

---

## 💡 Ejemplo: CI/CD Pipeline

**Prompt para GitHub Actions**:
```
Genera un workflow de GitHub Actions para {tipo de proyecto}.

Stack: {tu stack}
Tareas:
1. Lint y tests
2. Build
3. Security scan
4. Deploy a {environment}

Requisitos:
- Cache de dependencias
- Matrix strategy para múltiples Node versions
- Secrets para credenciales
- Notificaciones en fallos

Output: archivo .github/workflows/ci-cd.yml
```

---

## 💡 Ejemplo: Analizador de Logs

```python
# scripts/log_analyzer.py
from openai import OpenAI
import os

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def analyze_logs(log_content):
    prompt = f"""
    Analiza estos logs de aplicación:
    
    {log_content[:4000]}  # Limitar a 4k chars
    
    Proporciona:
    1. Resumen de errores encontrados
    2. Severidad (critical/high/medium/low)
    3. Posibles causas raíz
    4. Soluciones sugeridas
    5. Patrones o anomalías detectadas
    
    Formato: Reporte estructurado en Markdown
    """
    
    response = client.chat.completions.create(
        model="gpt-4",
        messages=[
            {
                "role": "system",
                "content": "Eres un SRE experto. Analizas logs y diagnosticas problemas."
            },
            {"role": "user", "content": prompt}
        ]
    )
    
    return response.choices[0].message.content

# Uso
with open("examples/app.log", "r") as f:
    logs = f.read()

analysis = analyze_logs(logs)
print(analysis)
```

---

## 💡 Prompt: Kubernetes Manifests

```
Genera manifests de Kubernetes para {tipo de app}.

Componentes:
- Deployment (3 replicas)
- Service (ClusterIP)
- ConfigMap (para env vars)
- HorizontalPodAutoscaler (min: 2, max: 10)

App specs:
- Image: {tu-imagen}
- Port: {puerto}
- Resources: 100m CPU, 256Mi RAM
- Health checks: /health endpoint
- Environment: production

Output: deployment.yaml, service.yaml, configmap.yaml, hpa.yaml
```

---

## 🎯 Checklist

- [ ] DO-01: Dockerfile generator
- [ ] DO-02: GitHub Actions generator
- [ ] DO-03: Log analyzer
- [ ] DO-04: Deployment scripts
- [ ] DO-05: K8s manifests
- [ ] DO-06: DevOps chatbot

---

**📖 Recursos**: [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/) | [GitHub Actions](https://docs.github.com/actions) | [K8s Docs](https://kubernetes.io/docs/)
