const Footer = () => {
    return (
        <footer style={{ padding: '4rem 0', borderTop: '1px solid var(--glass-border)' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <div style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                        CS<span className="gradient-text">Studio</span>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                        © {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>
                <div style={{ display: 'flex', gap: '2rem' }}>
                    {['Twitter', 'GitHub', 'LinkedIn', 'Dribbble'].map((social) => (
                        <a
                            key={social}
                            href="#"
                            style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s' }}
                            onMouseOver={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                            onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                        >
                            {social}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
