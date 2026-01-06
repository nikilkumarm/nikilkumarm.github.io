import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Twitter, Linkedin } from 'lucide-react';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="hero-badge">Available for freelance</span>
                    <h1 className="hero-title">
                        Crafting Digital <br />
                        <span className="gradient-text">Experiences</span> with Code
                    </h1>
                    <p className="hero-desc">
                        I'm a Full Stack Developer specializing in building high-performance
                        web applications with a focus on clean code and exceptional UI/UX.
                    </p>

                    <div className="hero-cta">
                        <a href="#projects" className="btn btn-primary shimmer">
                            View My Work <ArrowRight size={20} />
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            Contact Me
                        </a>
                    </div>

                    <div style={{ marginTop: '3rem', display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                        <a href="#" className="nav-link"><Github size={24} /></a>
                        <a href="#" className="nav-link"><Twitter size={24} /></a>
                        <a href="#" className="nav-link"><Linkedin size={24} /></a>
                    </div>
                </motion.div>
            </div>

            {/* Background Decorative Elements */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '10%',
                width: '300px',
                height: '300px',
                background: 'var(--accent-primary)',
                filter: 'blur(150px)',
                opacity: '0.1',
                zIndex: -1
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '20%',
                right: '10%',
                width: '300px',
                height: '300px',
                background: 'var(--accent-secondary)',
                filter: 'blur(150px)',
                opacity: '0.1',
                zIndex: -1
            }}></div>
        </section>
    );
};

export default Hero;
