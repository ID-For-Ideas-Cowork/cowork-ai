import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>🤖 CoWork AI</h1>
        <p className="subtitle">Herramientas potenciadas por IA</p>
        
        <div className="cards">
          <div className="card">
            <h3>💬 Chatbot</h3>
            <p>Conversa con GPT-4</p>
            <span className="badge">FE-01</span>
          </div>
          
          <div className="card">
            <h3>🖼️ Generador de Imágenes</h3>
            <p>Crea imágenes con DALL-E</p>
            <span className="badge">FE-03</span>
          </div>
          
          <div className="card">
            <h3>🌐 Traductor</h3>
            <p>Traduce con IA</p>
            <span className="badge">FE-04</span>
          </div>
          
          <div className="card">
            <h3>📚 Biblioteca de Prompts</h3>
            <p>Templates reutilizables</p>
            <span className="badge">FE-05</span>
          </div>
          
          <div className="card">
            <h3>😊 Análisis de Sentimientos</h3>
            <p>Detecta emociones en texto</p>
            <span className="badge">FE-06</span>
          </div>
        </div>
        
        <div className="cta">
          <p>Empieza completando FE-01: Chatbot Simple</p>
          <a 
            href="https://github.com/ID-For-Ideas-Cowork/cowork-ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-link"
          >
            Ver en GitHub →
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
