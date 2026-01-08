"use client";
import React, { useRef, useEffect, useState } from 'react';
import { motion, useTransform, useInView, useMotionValue, animate } from 'framer-motion';
import { Terminal, Layers, Users, Cpu, Quote, Sparkles, Code } from 'lucide-react';
const portraitImg = { src: '/nikiiii.jpg' };

const StatItem = ({ label, value, suffix = "", pad = 0, icon, index, isMobile }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const count = useMotionValue(0);
    const rounded = useTransform(count, latest => {
        const num = Math.round(latest);
        return num.toString().padStart(pad, '0') + suffix;
    });

    useEffect(() => {
        if (isInView) {
            animate(count, value, { duration: 2.5, ease: "circOut" });
        }
    }, [isInView, value, count]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                zIndex: 1
            }}
        >
            {/* The Reactor Core Container */}
            <motion.div
                whileHover={{ scale: 1.1 }}
                style={{
                    position: 'relative',
                    width: isMobile ? '70px' : '100px',
                    height: isMobile ? '70px' : '100px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: isMobile ? '1rem' : '2rem',
                    cursor: 'pointer'
                }}
            >
                {/* Rotating Outer Ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    style={{
                        position: 'absolute', inset: 0,
                        borderRadius: '50%',
                        border: '1px dashed rgba(255,255,255,0.1)',
                        borderTop: '1px solid var(--accent-primary)',
                        opacity: 0.5
                    }}
                />

                {/* Counter-Rotating Inner Ring */}
                <motion.div
                    whileHover={{ rotate: -360, scale: 1.1 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    style={{
                        position: 'absolute', inset: isMobile ? '6px' : '10px',
                        borderRadius: '50%',
                        border: '1px solid rgba(255,255,255,0.05)',
                        borderLeft: '1px solid rgba(255,255,255,0.3)',
                    }}
                />

                {/* The Core Lens */}
                <div style={{
                    width: isMobile ? '40px' : '60px', height: isMobile ? '40px' : '60px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1), #050505)',
                    boxShadow: 'inset 0 0 10px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: '1px solid rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(4px)',
                    zIndex: 2
                }}>
                    <div style={{ color: 'var(--text-primary)' }}>
                        {React.cloneElement(icon, { size: isMobile ? 20 : 28, strokeWidth: 1.5 })}
                    </div>
                </div>
            </motion.div>

            <motion.h3 style={{
                fontSize: isMobile ? '2rem' : '3rem',
                fontWeight: '800',
                color: 'var(--text-primary)',
                margin: 0,
                fontFamily: 'var(--font-heading)',
                letterSpacing: '-0.03em',
                lineHeight: 1
            }}>
                <motion.span>{rounded}</motion.span>
            </motion.h3>

            <p style={{
                fontSize: isMobile ? '0.65rem' : '0.75rem',
                color: 'var(--text-secondary)',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                marginTop: isMobile ? '0.5rem' : '1rem',
                padding: isMobile ? '0.4rem 0.75rem' : '0.5rem 1rem',
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '99px',
                border: '1px solid rgba(255,255,255,0.05)'
            }}>
                {label}
            </p>
        </motion.div>
    );
};

const About = () => {
    const containerRef = useRef(null);

    // Parallax & creative Interaction State
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - left - width / 2);
        mouseY.set(e.clientY - top - height / 2);
    };

    // Parallax Transforms for Cards
    const card1X = useTransform(mouseX, [-500, 500], [20, -20]);
    const card1Y = useTransform(mouseY, [-500, 500], [20, -20]);
    const card2X = useTransform(mouseX, [-500, 500], [-15, 15]);
    const card2Y = useTransform(mouseY, [-500, 500], [-15, 15]);

    const stats = [
        { label: "Years Exp", value: 3, pad: 2, icon: <Terminal /> },
        { label: "Projects", value: 10, suffix: "+", icon: <Layers /> },
        { label: "Clients", value: 100, suffix: "%", icon: <Users /> },
        { label: "Tech Stack", value: 5, suffix: "+", icon: <Cpu /> }
    ];

    return (
        <section ref={containerRef} id="about" style={{
            position: 'relative',
            padding: isMobile ? '2rem 0 5rem' : '10rem 0',
            overflow: 'hidden'
        }}>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>

                {/* 01. HEADER SECTION */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    marginBottom: isMobile ? '4rem' : '8rem',
                    paddingLeft: isMobile ? '0' : '6%'
                }}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
                    >
                        <span style={{ color: 'var(--accent-primary)', fontFamily: 'monospace', fontSize: '1rem', fontWeight: 'bold' }}>01 //</span>
                        <span style={{ color: 'var(--text-secondary)', letterSpacing: '0.3em', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase' }}>The Manifesto</span>
                    </motion.div>

                    <h2 style={{
                        fontSize: isMobile ? 'clamp(1.4rem, 6.5vw, 2.5rem)' : 'clamp(2.5rem, 6vw, 5.5rem)',
                        lineHeight: isMobile ? '1.4' : '1.0',
                        fontWeight: '800',
                        color: 'var(--text-primary)',
                        fontFamily: 'var(--font-heading)',
                        letterSpacing: '-0.03em',
                        textShadow: '0 20px 60px rgba(0,0,0,0.5)'
                    }}>
                        <motion.span
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{ display: 'block', fontWeight: '200', whiteSpace: 'nowrap' }}
                        >
                            BEYOND THE <span style={{
                                color: 'var(--text-secondary)',
                                background: 'var(--glass)',
                                backdropFilter: 'blur(8px)',
                                WebkitBackdropFilter: 'blur(8px)',
                                border: '1px solid var(--glass-border)',
                                padding: isMobile ? '0.1rem 0.6rem' : '0.2rem 1rem',
                                borderRadius: '12px',
                                display: 'inline-block',
                                marginLeft: '0.5rem',
                                fontFamily: "'Courier New', Courier, monospace",
                                fontWeight: '700',
                                letterSpacing: '-0.05em',
                                verticalAlign: 'middle',
                                transform: 'translateY(-0.1em)',
                                fontSize: isMobile ? '0.9em' : '1em'
                            }}>CODE</span>
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            style={{ display: 'block', fontWeight: '900', WebkitTextStroke: isMobile ? '1px currentColor' : '2px currentColor', whiteSpace: 'nowrap', marginTop: isMobile ? '0.2rem' : '0' }}
                        >
                            I ENGINEER <span style={{ color: 'var(--accent-primary)', textShadow: '0 0 30px rgba(168, 85, 247, 0.3)' }}>IMPACT.</span>
                        </motion.span>
                    </h2>
                </div>

                {/* BIO SECTION: PROFESSIONAL MODERN */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
                    gap: isMobile ? '2.5rem' : '4rem',
                    marginBottom: isMobile ? '6rem' : '10rem',
                    alignItems: 'center'
                }}>

                    {/* LEFT COLUMN: THE NARRATIVE */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Tag */}
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.5rem 1rem',
                            background: 'rgba(59, 130, 246, 0.1)',
                            border: '1px solid rgba(59, 130, 246, 0.2)',
                            borderRadius: '50px',
                            marginBottom: '2rem'
                        }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3B82F6', boxShadow: '0 0 8px #3B82F6' }} />
                            <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em', color: '#3B82F6' }}>ABOUT ME</span>
                        </div>

                        {/* Headline */}
                        <h3 style={{
                            fontSize: isMobile ? '1.5rem' : '1.8rem',
                            fontWeight: '700',
                            lineHeight: '1.2',
                            marginBottom: '1.5rem',
                            color: 'var(--text-primary)',
                            letterSpacing: '-0.02em',
                            fontFamily: 'var(--font-heading)',
                            whiteSpace: isMobile ? 'normal' : 'nowrap'
                        }}>
                            Architecting <span className="gradient-text">digital ecosystems.</span>
                        </h3>

                        {/* Professional Copy */}
                        <p style={{ fontSize: isMobile ? '0.9rem' : '1rem', lineHeight: '1.7', color: 'var(--text-secondary)', marginBottom: '1.5rem', textAlign: 'justify' }}>
                            I am a <b>Web Developer</b> and <b>Broadcast Engineer</b> focused on high-performance digital ecosystems. I bridge the gap between technical complexity and seamless, intuitive user experience.
                        </p>
                        <p style={{ fontSize: isMobile ? '0.9rem' : '1rem', lineHeight: '1.7', color: 'var(--text-secondary)', marginBottom: isMobile ? '2rem' : '3rem', textAlign: 'justify' }}>
                            I build scalable, reliable systems and refined interfaces designed to thrive in real-world environments. My goal is simple: create digital products that are as robust under the hood as they are striking on the screen.
                        </p>

                        {/* Micro-Grid: Key Competencies */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: isMobile ? '0.5rem' : '1rem'
                        }}>
                            {[
                                {
                                    icon: <Code size={22} />,
                                    label: "Engineering",
                                    sub: "Full-Stack Scalability",
                                    color: "#A855F7"
                                },
                                {
                                    icon: <Sparkles size={22} />,
                                    label: "Design",
                                    sub: "Pixel-Perfect UI/UX",
                                    color: "#EC4899"
                                },
                                {
                                    icon: <Terminal size={22} />,
                                    label: "Strategy",
                                    sub: "Technical Leadership",
                                    color: "#3B82F6"
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -8, boxShadow: `0 15px 30px -10px ${item.color}30` }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    style={{
                                        padding: isMobile ? '1rem 0.75rem' : '1.5rem',
                                        background: 'var(--glass)',
                                        backdropFilter: 'blur(12px)',
                                        border: '1px solid var(--glass-border)',
                                        borderRadius: isMobile ? '16px' : '24px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        minHeight: isMobile ? '140px' : '180px',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                >
                                    {/* Ambient Glow */}
                                    <div style={{ position: 'absolute', top: '-30%', right: '-30%', width: '120px', height: '120px', background: item.color, filter: 'blur(50px)', opacity: 0.15 }} />

                                    {/* Icon Box */}
                                    <div style={{
                                        width: isMobile ? '32px' : '48px',
                                        height: isMobile ? '32px' : '48px',
                                        borderRadius: isMobile ? '10px' : '14px',
                                        background: `${item.color}15`,
                                        border: `1px solid ${item.color}30`,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: item.color,
                                        marginBottom: isMobile ? '0.75rem' : '1rem',
                                        boxShadow: `0 0 15px -5px ${item.color}40`
                                    }}>
                                        {React.cloneElement(item.icon, { size: isMobile ? 16 : 22 })}
                                    </div>

                                    <div style={{ position: 'relative', zIndex: 1 }}>
                                        <h4 style={{ color: 'var(--text-primary)', fontSize: isMobile ? '0.75rem' : '1.1rem', fontWeight: '700', marginBottom: isMobile ? '0.2rem' : '0.4rem', letterSpacing: '-0.01em' }}>{item.label}</h4>
                                        <span style={{ fontSize: isMobile ? '0.6rem' : '0.75rem', color: 'var(--text-secondary)', lineHeight: '1.2', display: 'block' }}>{item.sub}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN: THE VISUAL */}
                    <div style={{ position: 'relative' }}>
                        {/* Main Image Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{
                                position: 'relative',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                                border: '1px solid var(--glass-border)'
                            }}
                        >
                            <img
                                src={portraitImg.src}
                                alt="Nikilkumar Profile"
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                            />

                            {/* Professional Lower Third */}
                            <div style={{
                                position: 'absolute',
                                bottom: '0',
                                left: '0',
                                width: '100%',
                                padding: '2rem',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-end'
                            }}>
                                <div>
                                    <h4 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.2rem' }}>Nikilkumar</h4>
                                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', margin: 0 }}>Digital Architect</p>
                                </div>
                                <div style={{
                                    width: '40px', height: '40px',
                                    borderRadius: '50%',
                                    background: 'rgba(255,255,255,0.1)',
                                    backdropFilter: 'blur(5px)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    border: '1px solid rgba(255,255,255,0.2)'
                                }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                </div>
                            </div>
                        </motion.div>

                        {/* Subtle Background Accent */}
                        <div style={{
                            position: 'absolute',
                            top: '-20px',
                            right: '-20px',
                            width: '100%',
                            height: '100%',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '24px',
                            zIndex: -1,
                            opacity: 0.5
                        }} />
                    </div>
                </div>

                {/* 02. CYBER REACTOR STATS */}
                <div style={{ padding: isMobile ? '0 1rem' : '0 2rem', position: 'relative' }}>

                    {/* The Rail Line */}
                    <div style={{
                        position: 'absolute',
                        top: isMobile ? '35px' : '50px',
                        left: '0',
                        right: '0',
                        height: '1px',
                        background: 'rgba(255,255,255,0.05)',
                        zIndex: 0
                    }}>
                        {/* Moving Signal Packet */}
                        <motion.div
                            animate={{ left: ['0%', '100%'], opacity: [0, 1, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            style={{
                                position: 'absolute', top: 0, bottom: 0,
                                width: '100px',
                                background: 'linear-gradient(90deg, transparent, var(--accent-primary), transparent)',
                                opacity: 0.5
                            }}
                        />
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: isMobile ? '2.5rem 1rem' : '2rem',
                    }}>
                        {stats.map((stat, i) => (
                            <StatItem key={i} index={i} isMobile={isMobile} {...stat} />
                        ))}
                    </div>
                </div>
            </div>
        </section >
    );
};

export default About;
