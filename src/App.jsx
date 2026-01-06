import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

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
            © {new Date().getFullYear()} Your Name. Built with Love and Node.js.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
