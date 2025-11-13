import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import HomeScreen125171 from './pages/HomeScreen125171';
import HomeScreenEmpty898 from './pages/HomeScreenEmpty898';

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');

  // Apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="App">
      {/* Minimal top bar to reach routes easily; not part of Figma pages */}
      <header className="App-header" style={{ minHeight: 'auto', padding: '12px', display: 'flex', gap: 12, alignItems: 'center', justifyContent: 'center' }}>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          style={{ position: 'static' }}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
        <nav aria-label="Demo routes">
          <Link to="/home" style={{ marginRight: 12 }}>Home</Link>
          <Link to="/home-empty">Home Empty</Link>
        </nav>
      </header>

      <main style={{ display: 'flex', justifyContent: 'center', padding: 16 }}>
        <BrowserRouter>
          <Routes>
            {/* PUBLIC_INTERFACE: Routes for Figma screens */}
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<HomeScreen125171 />} />
            <Route path="/home-empty" element={<HomeScreenEmpty898 />} />
            <Route path="*" element={<div>Not Found</div>} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
