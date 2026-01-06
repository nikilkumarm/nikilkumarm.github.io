import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import ScrollToTop from './components/ScrollToTop.js';
import BackgroundShapes from './components/BackgroundShapes.js';
import Home from './pages/Home.js';
import AboutPage from './pages/AboutPage.js';
import ProjectsPage from './pages/ProjectsPage.js';
import ContactPage from './pages/ContactPage.js';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <BackgroundShapes />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <footer style={{
          padding: '4rem 0',
          textAlign: 'center',
          borderTop: '1px solid var(--glass-border)',
          marginTop: '6rem',
          position: 'relative',
          zIndex: 1
        }}>
          <div className="container" style={{ margin: '0 auto', maxWidth: '1200px', padding: '0 2rem' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              © {new Date().getFullYear()} NIKILKUMAR
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
