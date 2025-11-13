import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import HomeScreen125171 from './pages/HomeScreen125171';
import HomeScreenEmpty898 from './pages/HomeScreenEmpty898';

// PUBLIC_INTERFACE
function App() {
  /** App component: handles theme toggle, top-level navigation, backend health indicator, and renders routes. */
  const [theme, setTheme] = useState('light');
  const [health, setHealth] = useState({ status: 'checking', ok: false });

  // Apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Backend health check (non-blocking, runs once on mount and then periodically)
  useEffect(() => {
    let cancelled = false;
    const base =
      process.env.REACT_APP_BACKEND_URL ||
      process.env.REACT_APP_API_BASE ||
      '';
    const healthPath =
      process.env.REACT_APP_HEALTHCHECK_PATH || '/';

    async function ping() {
      try {
        if (!base) {
          // No backend URL configured; mark unknown but not failing
          if (!cancelled) setHealth({ status: 'not-configured', ok: false });
          return;
        }
        const url = `${base.replace(/\/+$/, '')}${healthPath.startsWith('/') ? healthPath : `/${healthPath}`}`;
        const res = await fetch(url, { method: 'GET' });
        if (!cancelled) {
          setHealth({ status: res.ok ? 'healthy' : `error-${res.status}`, ok: res.ok });
        }
      } catch (e) {
        if (!cancelled) setHealth({ status: 'offline', ok: false });
      }
    }

    // Initial ping and interval refresh
    ping();
    const id = setInterval(ping, 15000);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

  const HealthBadge = () => {
    const badgeStyle = {
      fontSize: 12,
      padding: '4px 8px',
      borderRadius: 8,
      border: '1px solid var(--border-color)',
      color: health.ok ? '#16a34a' : '#f59e0b',
      background: 'rgba(0,0,0,0.04)',
      marginLeft: 12,
    };
    let label = 'Checking...';
    if (health.status === 'healthy') label = 'Backend: Healthy';
    else if (health.status === 'offline') label = 'Backend: Offline';
    else if (health.status === 'not-configured') label = 'Backend: Not configured';
    else if (health.status?.startsWith('error-')) label = `Backend: ${health.status}`;
    return <span role="status" aria-live="polite" style={badgeStyle}>{label}</span>;
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
        <HealthBadge />
      </header>

      <main style={{ display: 'flex', justifyContent: 'center', padding: 16 }}>
        <Routes>
          {/* PUBLIC_INTERFACE: Routes for Figma screens */}
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomeScreen125171 />} />
          <Route path="/home-empty" element={<HomeScreenEmpty898 />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
