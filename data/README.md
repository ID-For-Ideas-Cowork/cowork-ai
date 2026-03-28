# 📊 Data Analyst - CoWork AI

**Aprende a potenciar tus análisis con IA**

---

## 🎯 Objetivo

Usar LLMs para automatizar análisis de datos, generar código Pandas, crear dashboards inteligentes, y obtener insights automáticos.

---

## 📋 Roadmap

1. **DA-01**: Análisis automático de CSV con IA
2. **DA-02**: Generador de código Pandas
3. **DA-03**: Dashboard con insights de IA (Streamlit)
4. **DA-04**: Limpieza de datos asistida por IA
5. **DA-05**: Generador de preguntas de negocio
6. **DA-06**: Explicador de resultados SQL

---

## 🚀 Setup

```bash
cd data
pip install -r requirements.txt
```

**requirements.txt**:
```
pandas==2.1.0
openai==1.3.0
streamlit==1.28.0
matplotlib==3.8.0
python-dotenv==1.0.0
```

**Configurar**:
```bash
# .env
OPENAI_API_KEY=sk-your-key-here
```

---

## 💡 Ejemplo: Análisis de CSV

```python
# scripts/csv_analyzer.py
import pandas as pd
from openai import OpenAI
import os

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def analyze_csv(file_path):
    df = pd.read_csv(file_path)
    
    # Generar descripción de datos
    info = f"""
    Dataset: {file_path}
    Filas: {len(df)}
    Columnas: {df.columns.tolist()}
    Tipos: {df.dtypes.to_dict()}
    Primeras filas:
    {df.head().to_string()}
    """
    
    prompt = f"""
    Analiza este dataset y proporciona:
    1. Descripción general
    2. Tipo de datos (transaccional, temporal, etc.)
    3. 5 análisis sugeridos
    4. Posibles problemas de calidad
    
    {info}
    """
    
    response = client.chat.completions.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "Eres un experto analista de datos."},
            {"role": "user", "content": prompt}
        ]
    )
    
    return response.choices[0].message.content

if __name__ == "__main__":
    analysis = analyze_csv("examples/sales_data.csv")
    print(analysis)
```

---

## 💡 Ejemplo: Generador de Pandas

```python
# scripts/pandas_code_generator.py
from openai import OpenAI
import os

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def generate_pandas_code(question, df_info):
    prompt = f"""
    Genera código Pandas para responder esta pregunta.
    
    Estructura del DataFrame:
    {df_info}
    
    Pregunta: {question}
    
    Responde SOLO con código Python ejecutable, sin explicaciones.
    """
    
    response = client.chat.completions.create(
        model="gpt-4",
        messages=[
            {
                "role": "system", 
                "content": "Eres un experto en Pandas. Genera código conciso y eficiente."
            },
            {"role": "user", "content": prompt}
        ],
        temperature=0.2
    )
    
    return response.choices[0].message.content

# Uso
df_info = """
Columnas: fecha, producto, categoria, precio, cantidad, cliente
Tipos: datetime64, str, str, float64, int64, str
"""

question = "¿Cuáles son los 5 productos más vendidos?"
code = generate_pandas_code(question, df_info)
print(code)

# Ejecutar código generado (con precaución)
# exec(code)
```

---

## 💡 Ejemplo: Dashboard Streamlit

```python
# dashboard/app.py
import streamlit as st
import pandas as pd
from openai import OpenAI
import os

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

st.title("📊 Dashboard con IA")

uploaded_file = st.file_uploader("Sube tu CSV", type="csv")

if uploaded_file:
    df = pd.read_csv(uploaded_file)
    
    st.subheader("Vista de Datos")
    st.dataframe(df.head(10))
    
    # Generar insights automáticos
    if st.button("Generar Insights con IA"):
        with st.spinner("Analizando..."):
            stats = df.describe().to_string()
            
            prompt = f"""
            Analiza estos datos y genera 5 insights clave:
            
            {stats}
            
            Formato: Lista numerada, insights accionables.
            """
            
            response = client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "system", "content": "Eres analista de datos experto."},
                    {"role": "user", "content": prompt}
                ]
            )
            
            insights = response.choices[0].message.content
            st.success("Insights generados:")
            st.write(insights)

# Ejecutar: streamlit run dashboard/app.py
```

---

## 🎯 Checklist

- [ ] DA-01: CSV analyzer
- [ ] DA-02: Pandas code generator
- [ ] DA-03: Streamlit dashboard
- [ ] DA-04: Data cleaning AI
- [ ] DA-05: Business questions generator
- [ ] DA-06: SQL explainer

---

**📖 Recursos**: [Pandas](https://pandas.pydata.org/) | [Streamlit](https://streamlit.io/) | [OpenAI Cookbook](https://github.com/openai/openai-cookbook)
