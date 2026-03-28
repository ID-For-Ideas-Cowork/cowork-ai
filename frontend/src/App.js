import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Agregar rutas de tus tareas aquí */}
          {/* 
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/image-generator" element={<ImageGenerator />} />
          <Route path="/translator" element={<Translator />} />
          <Route path="/prompts" element={<PromptLibrary />} />
          <Route path="/sentiment" element={<SentimentAnalysis />} />
          */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
