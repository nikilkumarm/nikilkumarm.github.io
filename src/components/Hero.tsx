import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                top: '20%',
                right: '-10%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
                filter: 'blur(60px)',
                zIndex: -1
            }} />
            <div style={{
                position: 'absolute',
                bottom: '10%',
                left: '-10%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
                filter: 'blur(60px)',
                zIndex: -1
            }} />

            <div className="container">
                <div style={{ maxWidth: '800px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span style={{
                            color: 'var(--accent-primary)',
                            fontWeight: 600,
                            letterSpacing: '2px',
                            fontSize: '0.8rem',
                            textTransform: 'uppercase',
                            marginBottom: '1rem',
                            display: 'block'
                        }}>
                            Available for new projects
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{
                            fontSize: 'clamp(3rem, 8vw, 6rem)',
                            fontWeight: 700,
                            lineHeight: 1.1,
                            marginBottom: '2rem'
                        }}
                    >
                        Crafting Digital <span className="gradient-text">Experiences</span> that Matter.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        style={{
                            fontSize: '1.25rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.6,
                            marginBottom: '3rem',
                            maxWidth: '600px'
                        }}
                    >
                        I'm a Full-stack Developer and Designer specializing in building pixel-perfect,
                        performant, and accessible web applications.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}
                    >
                        <button style={{
                            background: 'white',
                            color: 'black',
                            padding: '1rem 2rem',
                            borderRadius: '100px',
                            border: 'none',
                            fontWeight: 600,
                            fontSize: '1rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}>
                            View My Work <ArrowDownRight size={20} />
                        </button>
                        <a href="#contact" style={{ color: 'white', textDecoration: 'none', fontWeight: 500 }}>
                            Let's talk →
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
