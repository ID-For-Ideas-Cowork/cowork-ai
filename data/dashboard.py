import streamlit as st
import pandas as pd

# Configuración de la página
st.set_page_config(
    page_title="CoWork AI - Data Dashboard",
    page_icon="📊",
    layout="wide"
)

# Título
st.title("📊 CoWork AI - Data Dashboard")
st.markdown("Dashboard potenciado por IA para análisis de datos")

# Sidebar
st.sidebar.header("⚙️ Configuración")
openai_configured = st.sidebar.checkbox("OpenAI API Key configurada", value=False)

if not openai_configured:
    st.sidebar.warning("⚠️ Configura tu API Key en .env")
    st.sidebar.code("OPENAI_API_KEY=tu_clave_aquí")

# Sección principal
st.header("🚀 Tareas Disponibles")

col1, col2, col3 = st.columns(3)

with col1:
    st.subheader("DA-01: Analizador CSV")
    st.markdown("""
    **Objetivo**: Subir un CSV y obtener análisis automático con GPT-4
    
    Features:
    - 📤 Upload de archivo
    - 🔍 Análisis exploratorio
    - 💡 Insights automáticos
    - 📈 Visualizaciones sugeridas
    """)
    if st.button("Ir a DA-01 →"):
        st.info("Implementa esta tarea en data/src/tasks/DA-01.py")

with col2:
    st.subheader("DA-02: Generador Pandas")
    st.markdown("""
    **Objetivo**: Escribe en lenguaje natural, obtén código Pandas
    
    Features:
    - ✍️ Input en español
    - 🐍 Código Pandas generado
    - ▶️ Ejecución automática
    - 📊 Resultados visualizados
    """)
    if st.button("Ir a DA-02 →"):
        st.info("Implementa esta tarea en data/src/tasks/DA-02.py")

with col3:
    st.subheader("DA-03: Dashboard IA")
    st.markdown("""
    **Objetivo**: Dashboard que genera insights con IA
    
    Features:
    - 📊 Métricas clave
    - 🤖 Insights automáticos
    - 💬 Chat con tus datos
    - 📈 Gráficos interactivos
    """)
    if st.button("Ir a DA-03 →"):
        st.info("Implementa esta tarea en data/src/tasks/DA-03.py")

# Datos de ejemplo
st.header("📁 Datos de Ejemplo")

if st.checkbox("Mostrar dataset de ejemplo"):
    df = pd.DataFrame({
        'fecha': pd.date_range('2024-01-01', periods=100),
        'ventas': [100 + i * 2 + (i % 10) * 5 for i in range(100)],
        'categoria': ['A', 'B', 'C', 'D'] * 25
    })
    
    st.dataframe(df.head(10), use_container_width=True)
    st.caption(f"Dataset de ejemplo con {len(df)} filas")
    
    # Estadísticas básicas
    st.subheader("📊 Estadísticas Básicas")
    st.write(df.describe())

# Footer
st.markdown("---")
st.markdown("💡 **Tip**: Empieza con DA-01 para aprender a integrar OpenAI con análisis de datos")
st.markdown("📖 **Docs**: [Ver README](../README.md) | [Prompt Templates](../../PROMPT_TEMPLATES.md)")
