import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section container">
            <div style={{ marginBottom: '4rem' }}>
                <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>About Me</h2>
                <div className="glass-card" style={{ padding: '3rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                        <div>
                            <p style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                                I'm a passionate Full Stack Developer with a keen eye for design and a love for creating seamless digital experiences.
                            </p>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                                With over 5 years of experience in building web applications, I specialize in React, Node.js, and modern CSS frameworks. I believe in writing clean, maintainable code and putting the user first.
                            </p>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical writing.
                            </p>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                            <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                                <h3 className="gradient-text" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>5+</h3>
                                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Years Experience</p>
                            </div>
                            <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                                <h3 className="gradient-text" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>50+</h3>
                                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Projects Completed</p>
                            </div>
                            <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                                <h3 className="gradient-text" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>20+</h3>
                                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Happy Clients</p>
                            </div>
                            <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                                <h3 className="gradient-text" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>10+</h3>
                                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Tech Stack</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
