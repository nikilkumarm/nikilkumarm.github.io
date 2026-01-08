"use client";
import React, { useState } from 'react';
import { Mail, ArrowRight, Send, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [isMobile, setIsMobile] = useState(false);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section id="contact" className="section container" style={{ padding: isMobile ? '4rem 1.5rem' : '6rem 0', position: 'relative' }}>
            {/* Ambient Background Mesh (Purple/Blue vibe from reference) */}
            <div style={{
                position: 'absolute', top: '20%', left: '-10%',
                width: isMobile ? '300px' : '600px', height: isMobile ? '300px' : '600px',
                background: 'radial-gradient(circle, rgba(120, 119, 198, 0.15) 0%, transparent 70%)',
                filter: 'blur(60px)', zIndex: 0, pointerEvents: 'none'
            }} />
            <div style={{
                position: 'absolute', bottom: '-10%', right: '-5%',
                width: isMobile ? '250px' : '500px', height: isMobile ? '250px' : '500px',
                background: 'radial-gradient(circle, rgba(255, 61, 139, 0.1) 0%, transparent 70%)',
                filter: 'blur(60px)', zIndex: 0, pointerEvents: 'none'
            }} />

            <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'minmax(300px, 0.8fr) minmax(350px, 1.2fr)',
                gap: isMobile ? '3rem' : '4rem',
                alignItems: 'center',
                position: 'relative', zIndex: 1
            }}>

                {/* LEFT COLUMN: Typography */}
                <div>
                    <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        marginBottom: '1.5rem',
                        padding: '0.5rem 1rem',
                        background: 'var(--glass-border)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '50px'
                    }}>
                        <Sparkles size={16} color="#A78BFA" />
                        <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)' }}>
                            Open for Collaboration
                        </span>
                    </div>

                    <h2 style={{
                        fontSize: isMobile ? 'clamp(1.8rem, 7vw, 2.5rem)' : 'clamp(3rem, 5vw, 4.5rem)',
                        fontWeight: '800',
                        lineHeight: '1.2',
                        color: 'var(--text-primary)',
                        marginBottom: '1rem',
                        fontFamily: 'var(--font-heading)',
                        letterSpacing: '-0.03em',
                        whiteSpace: isMobile ? 'nowrap' : 'normal'
                    }}>
                        Let's <span style={{
                            background: 'linear-gradient(to right, #A78BFA, #3B82F6)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>Create</span> {!isMobile && <br />}
                        <span style={{
                            background: 'linear-gradient(to right, #F472B6, #A78BFA)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>Together.</span>
                    </h2>

                    <p style={{
                        color: 'var(--text-secondary)',
                        fontSize: isMobile ? '0.9rem' : '1.2rem',
                        lineHeight: '1.6',
                        marginBottom: isMobile ? '2rem' : '3rem',
                        maxWidth: '450px',
                        textAlign: isMobile ? 'justify' : 'left'
                    }}>
                        Describe what you need. I'll help you build a digital experience that fits your brand — instantly.
                    </p>

                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <div>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>Email</p>
                            <a href="mailto:hello@nikilkumar.in" style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-primary)', textDecoration: 'none' }}>
                                nikilkingzzz@gmail.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: App Window Interface */}
                <div style={{ position: 'relative' }}>

                    {/* Floating Chat Bubbles */}
                    {!isMobile && (
                        <>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                style={{
                                    position: 'absolute', top: '-60px', right: '20px',
                                    background: 'linear-gradient(135deg, #A78BFA 0%, #8B5CF6 100%)',
                                    padding: '1rem 1.5rem',
                                    borderRadius: '20px 20px 0 20px',
                                    boxShadow: '0 10px 25px -5px rgba(139, 92, 246, 0.4)',
                                    zIndex: 10
                                }}
                            >
                                <p style={{ fontSize: '0.95rem', fontWeight: '600', color: '#fff', margin: 0 }}>
                                    What can we build for you?
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8 }}
                                style={{
                                    position: 'absolute', top: '10px', right: '-30px',
                                    background: 'rgba(30, 30, 30, 0.8)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    padding: '0.8rem 1.2rem',
                                    borderRadius: '20px 20px 20px 0',
                                    boxShadow: '0 10px 25px -5px rgba(0,0,0,0.3)',
                                    zIndex: 9
                                }}
                            >
                                <p style={{ fontSize: '0.85rem', fontWeight: '500', color: 'rgba(255,255,255,0.8)', margin: 0 }}>
                                    I need a portfolio site...
                                </p>
                            </motion.div>
                        </>
                    )}

                    {/* The Window Container */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{
                            background: '#121212',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 30px 60px -15px rgba(0,0,0,0.6)'
                        }}
                    >
                        {/* Title Bar */}
                        <div style={{
                            padding: isMobile ? '0.75rem 1rem' : '1rem 1.5rem',
                            borderBottom: '1px solid rgba(255,255,255,0.05)',
                            display: 'flex', alignItems: 'center', gap: '0.6rem',
                            background: 'rgba(255,255,255,0.02)'
                        }}>
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444' }}></div>
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B' }}></div>
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#12c743ff' }}></div>
                            <span style={{ marginLeft: '1rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace' }}>
                                Contact me!
                            </span>
                        </div>

                        {/* Form Body */}
                        <form style={{ padding: isMobile ? '1.5rem' : '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1.5rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'rgba(255,255,255,0.7)', marginLeft: '4px', fontFamily: 'inherit' }}>
                                        Full name <span style={{ color: '#EF4444' }}>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        style={{
                                            width: '100%',
                                            padding: '1rem',
                                            background: '#09090b',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            borderRadius: '8px',
                                            color: '#fff',
                                            fontSize: '0.9rem',
                                            outline: 'none',
                                            fontFamily: 'inherit'
                                        }}
                                    />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'rgba(255,255,255,0.7)', marginLeft: '4px', fontFamily: 'inherit' }}>
                                        Email <span style={{ color: '#EF4444' }}>*</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        style={{
                                            width: '100%',
                                            padding: '1rem',
                                            background: '#09090b',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            borderRadius: '8px',
                                            color: '#fff',
                                            fontSize: '0.9rem',
                                            outline: 'none',
                                            fontFamily: 'inherit'
                                        }}
                                    />
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.8rem', fontWeight: '600', color: 'rgba(255,255,255,0.7)', marginLeft: '4px', fontFamily: 'inherit' }}>
                                    Project Details <span style={{ color: '#EF4444' }}>*</span>
                                </label>
                                <textarea
                                    placeholder="Tell me about your project needs..."
                                    rows="4"
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        background: '#09090b',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: '8px',
                                        color: '#fff',
                                        fontSize: '0.9rem',
                                        outline: 'none',
                                        resize: 'none',
                                        fontFamily: 'inherit'
                                    }}
                                ></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                style={{
                                    marginTop: '0.5rem',
                                    padding: '1rem',
                                    background: 'linear-gradient(135deg, #A78BFA 0%, #8B5CF6 100%)',
                                    color: '#fff',
                                    borderRadius: '8px',
                                    border: 'none',
                                    fontSize: '0.95rem',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)',
                                    fontFamily: 'inherit'
                                }}
                            >
                                Submit Request
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
