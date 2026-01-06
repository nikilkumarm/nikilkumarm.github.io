import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
                position: 'fixed',
                top: 0,
                width: '100%',
                zIndex: 1000,
                padding: '1.5rem 0'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-1px' }}>
                    CS<span className="gradient-text">Studio</span>
                </div>
                <div className="glass" style={{ padding: '0.5rem 1.5rem', display: 'flex', gap: '2rem' }}>
                    {['Works', 'About', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            style={{
                                color: 'var(--text-secondary)',
                                textDecoration: 'none',
                                fontSize: '0.9rem',
                                fontWeight: 500,
                                transition: 'color 0.3s'
                            }}
                            onMouseOver={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                            onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                        >
                            {item}
                        </a>
                    ))}
                </div>
                <div style={{ width: '100px', display: 'flex', justifyContent: 'flex-end' }}>
                    {/* Social icons could go here */}
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
