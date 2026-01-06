import React from 'react';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer style={{
        padding: '4rem 0',
        textAlign: 'center',
        borderTop: '1px solid var(--glass-border)',
        marginTop: '6rem'
      }}>
        <div className="container">
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            © {new Date().getFullYear()} NIKILKUMAR
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
