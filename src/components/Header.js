import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav">
                <Link to="/" className="logo" style={{ color: 'var(--accent-primary)' }}>NIKILKUMAR</Link>

                <ul className="nav-links">
                    <li><Link to="/about" className="nav-link">About</Link></li>
                    <li><Link to="/projects" className="nav-link">Projects</Link></li>
                    <li><Link to="/contact" className="nav-link">Contact</Link></li>
                </ul>

                <Link to="/contact" className="btn btn-secondary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>
                    Let's Talk
                </Link>
            </div>
        </header>
    );
};

export default Header;
