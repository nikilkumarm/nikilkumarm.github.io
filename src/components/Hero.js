"use client";
import React, { useState, useEffect } from 'react';
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion';
// Optimized approach: Import assets for the bundler to handle correctly for production/GitHub Pages
const portraitImg = { src: '/nikkeee.jpg' };

const ScrambleText = ({ text, style }) => {
    const [display, setDisplay] = useState(text);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+";

    useEffect(() => {
        let interval;
        let iteration = 0;

        const scramble = () => {
            clearInterval(interval);
            interval = setInterval(() => {
                setDisplay(
                    text
                        .split("")
                        .map((char, index) => {
                            if (index < iteration) {
                                return text[index];
                            }
                            return chars[Math.floor(Math.random() * chars.length)];
                        })
                        .join("")
                );

                if (iteration >= text.length) {
                    clearInterval(interval);
                }

                iteration += 1 / 3;
            }, 30);
        };

        scramble();
        return () => clearInterval(interval);
    }, [text]);

    return <span style={style}>{display}</span>;
};

const Hero = () => {
    // Mobile View Optimization
    const [isMobile, setIsMobile] = useState(false);
    const [latency, setLatency] = useState('0.002');

    useEffect(() => {
        const interval = setInterval(() => {
            // Simulate micro-latency fluctuations
            const val = (Math.random() * (0.005 - 0.001) + 0.001).toFixed(3);
            setLatency(val);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Initial check
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Mouse motion values
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth springs for fluid movement
    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

    // Transformations based on mouse position
    const textMoveX = useTransform(mouseXSpring, [-0.5, 0.5], [50, -50]);
    const textMoveY = useTransform(mouseYSpring, [-0.5, 0.5], [20, -20]);

    // Card Swing Logic (Pivot at top) - Enhanced for 3D
    const cardRotateZ = useTransform(mouseXSpring, [-0.5, 0.5], [-6, 6]);
    const cardRotateX = useTransform(mouseYSpring, [-0.5, 0.5], [6, -6]);
    const cardMoveX = useTransform(mouseXSpring, [-0.5, 0.5], [-25, 25]);

    // Holographic Glare Transformation
    const glareX = useTransform(mouseXSpring, [-0.5, 0.5], [-150, 150]);
    const glareY = useTransform(mouseYSpring, [-0.5, 0.5], [-150, 150]);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const width = window.innerWidth;
        const height = window.innerHeight;

        const xPct = (clientX / width) - 0.5;
        const yPct = (clientY / height) - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    return (
        <section
            className="hero"
            onMouseMove={handleMouseMove}
            style={{ height: '100vh', overflow: 'hidden', position: 'relative', perspective: '1200px' }}
        >
            {/* Background Text - Parallax Effect */}
            <motion.div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                x: textMoveX,
                y: textMoveY,
                translateX: '-50%',
                translateY: '-50%',
                width: '100%',
                textAlign: 'center',
                zIndex: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {/* Top Outline */}
                <h1 style={{
                    fontSize: 'clamp(3.5rem, 18vw, 16rem)',
                    fontWeight: '600',
                    fontFamily: "'Montserrat', sans-serif",
                    color: 'transparent',
                    WebkitTextStroke: '1px var(--text-stroke-subtle)',
                    lineHeight: '0.85',
                    letterSpacing: '5px',
                    margin: 0,
                    pointerEvents: 'none',
                    userSelect: 'none'
                }}>
                    NIKILKUMAR
                </h1>

                {/* Center Solid */}
                <h1 style={{
                    fontSize: 'clamp(3.5rem, 18vw, 16rem)',
                    fontWeight: '600',
                    fontFamily: "'Montserrat', sans-serif",
                    color: 'var(--text-subtle-fill)',
                    lineHeight: '0.85',
                    letterSpacing: '5px',
                    opacity: 1,
                    margin: 0,
                    pointerEvents: 'none',
                    userSelect: 'none'
                }}>
                    NIKILKUMAR
                </h1>

                {/* Bottom Outline */}
                <h1 style={{
                    fontSize: 'clamp(3.5rem, 18vw, 16rem)',
                    fontWeight: '900',
                    fontFamily: "'Montserrat', sans-serif",
                    color: 'transparent',
                    WebkitTextStroke: '1px var(--text-stroke-subtle)',
                    lineHeight: '0.85',
                    letterSpacing: '5px',
                    margin: 0,
                    pointerEvents: 'none',
                    userSelect: 'none'
                }}>
                    NIKILKUMAR
                </h1>
            </motion.div>

            {/* Accent Texts - Technical HUD Overlays */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                style={{
                    position: 'absolute',
                    top: isMobile ? '15%' : '25%',
                    left: isMobile ? '7%' : '5%',
                    zIndex: 5,
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    scale: isMobile ? 0.8 : 1,
                    transformOrigin: 'left top'
                }}
            >
                <div style={{ width: '2px', height: '40px', background: 'var(--accent-primary)', opacity: 0.6 }} />
                <div>
                    <div style={{
                        color: 'var(--accent-primary)',
                        fontFamily: 'monospace',
                        fontWeight: '800',
                        fontSize: '0.75rem',
                        letterSpacing: '0.3em',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                        <motion.span
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            style={{ width: '6px', height: '6px', background: 'var(--accent-primary)', borderRadius: '50%' }}
                        />
                        <ScrambleText text="[ ACCESS-GRANTED ]" />
                    </div>
                    <div style={{
                        color: 'var(--text-secondary)',
                        fontFamily: 'monospace',
                        fontSize: '10px',
                        letterSpacing: '0.1em',
                        marginTop: '4px'
                    }}>
                        STATUS: SECURE // LATENCY: {latency}MS
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
                style={{
                    position: 'absolute',
                    bottom: isMobile ? '14%' : '18%',
                    right: isMobile ? '7%' : '5%',
                    zIndex: 5,
                    textAlign: 'right',
                    scale: isMobile ? 0.8 : 1,
                    transformOrigin: 'right bottom'
                }}
            >
                <div style={{
                    color: 'var(--text-secondary)',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: '800',
                    fontSize: '0.65rem',
                    letterSpacing: '0.5em',
                    textTransform: 'uppercase',
                    marginBottom: '8px'
                }}>
                    // BEYOND_THE_BINARY
                </div>
                <div style={{ position: 'relative' }}>
                    <div style={{
                        color: 'var(--text-primary)',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: '900',
                        fontSize: isMobile ? '1.05rem' : '1.2rem',
                        letterSpacing: '-0.02em',
                        lineHeight: '1.1'
                    }}>
                        <ScrambleText text="ARCHITECTING DIGITAL" />
                        <br />
                        <ScrambleText text="SYMPHONIES." style={{ color: 'var(--accent-primary)' }} />
                    </div>
                    {/* Scanning Beam Effect */}
                    <motion.div
                        animate={{ x: ['100%', '-100%'], opacity: [0, 1, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                        style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            width: '40px',
                            height: '100%',
                            background: 'linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.15), transparent)',
                            pointerEvents: 'none'
                        }}
                    />
                </div>
            </motion.div>

            {/* 🛡️ THE FULL ASSEMBLY (Strap + Card) */}
            <div style={{
                position: 'absolute',
                top: '0',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 10,
                height: '100%',
                pointerEvents: 'none'
            }}>
                <motion.div
                    initial={{ y: -500, rotateZ: 10 }}
                    animate={{ y: 0, rotateZ: 0 }}
                    transition={{ type: "spring", stiffness: 40, damping: 12, mass: 1.2 }}
                    style={{
                        transformOrigin: 'top center',
                        rotateZ: cardRotateZ,
                        rotateX: cardRotateX,
                        x: cardMoveX,
                        scale: isMobile ? 0.58 : 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        zIndex: 3,
                        perspective: '2500px'
                    }}
                >
                    {/* 1. LANYARD STRAP (Realistic Fabric Texture) */}
                    <div style={{
                        width: 'auto',
                        height: isMobile ? '20vh' : '28vh',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        zIndex: 1
                    }}>
                        {/* THE STRAP */}
                        <div style={{
                            width: '60px',
                            flex: 1,
                            background: '#1a1a1a',
                            backgroundImage: `
                                repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,0,0,0.5) 2px, rgba(0,0,0,0.5) 4px),
                                linear-gradient(90deg, #0d0d0d, #262626, #0d0d0d)
                            `,
                            position: 'relative',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '0 3px'
                        }}>
                            {/* Stitching Lines */}
                            <div style={{ width: '1px', height: '100%', borderLeft: '2px dashed rgba(255,255,255,0.3)', opacity: 'var(--rope-thread-opacity)' }} />
                            <div style={{ width: '1px', height: '100%', borderLeft: '2px dashed rgba(255,255,255,0.3)', opacity: 'var(--rope-thread-opacity)' }} />
                        </div>

                        {/* METAL CLAMP ASEMBLY */}
                        <div style={{
                            width: '70px',
                            height: '32px',
                            background: 'linear-gradient(180deg, #5b5b5b, #e2e2e2, #5b5b5b)',
                            borderRadius: '4px',
                            marginTop: '-6px',
                            zIndex: 2,
                            boxShadow: '0 4px 6px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.4)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            border: '1px solid #333'
                        }}>
                            {/* Clamp Indentation/Slot */}
                            <div style={{
                                width: '40px',
                                height: '2px',
                                background: '#222',
                                borderRadius: '1px',
                                boxShadow: '0 1px 0 rgba(255,255,255,0.2)'
                            }} />
                        </div>
                    </div>

                    {/* 2. THE HOOK (Detailed Metal Clip) */}
                    <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '-6px' }}>
                        {/* D-Ring Connector */}
                        <div style={{
                            width: '24px',
                            height: '24px',
                            border: '4px solid #d4d4d4',
                            borderRadius: '12px 12px 0 0',
                            borderBottom: 'none',
                            marginBottom: '-8px',
                            background: 'transparent',
                            zIndex: 1,
                            boxShadow: '0 -1px 2px rgba(0,0,0,0.2)'
                        }} />

                        {/* Clip Body (Main Swivel) */}
                        <div style={{
                            width: '20px',
                            height: '28px',
                            background: 'linear-gradient(135deg, #e0e0e0 0%, #a0a0a0 50%, #d0d0d0 100%)',
                            borderRadius: '6px',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.8)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 2,
                            position: 'relative'
                        }}>
                            {/* Central Rivet */}
                            <div style={{
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                background: 'radial-gradient(circle at 30% 30%, #444, #111)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.5)'
                            }} />
                        </div>
                    </div>

                    {/* 3. THE CARD BODY - PLASTIC SLEEVE CONTAINER */}
                    <motion.div
                        animate={{ rotateZ: [0, 0.5, 0, -0.5, 0] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        style={{
                            width: '300px', // Wider for sleeve
                            height: '520px', // Taller for sleeve header
                            padding: '12px 12px 20px', // Padding mimics the plastic edge
                            background: 'var(--id-card-bg)',
                            backdropFilter: 'blur(8px)',
                            borderRadius: '16px',
                            marginTop: '-15px', // Connect to hook
                            zIndex: 5,
                            position: 'relative',
                            cursor: 'grab',
                            boxShadow: 'var(--id-card-shadow)',
                            border: '1px solid var(--id-card-border-color)',
                            display: 'flex',
                            flexDirection: 'column',
                            boxSizing: 'border-box'
                        }}
                        whileTap={{ scale: 0.98, cursor: 'grabbing' }}
                    >
                        {/* --- BACKGROUND EFFECTS (CLIPPED) --- */}
                        <div style={{ position: 'absolute', inset: 0, borderRadius: '16px', overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
                            {/* Plastic Sleeve Highlights */}
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.1) 100%)' }} />
                            {/* Glass Glare on Plastic */}
                            <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: '40%', background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)', transform: 'skewX(-20deg)' }} />
                        </div>

                        {/* Top Slots Area */}
                        <div style={{ flexShrink: 0, height: '30px', width: '100%', display: 'flex', justifyContent: 'center', gap: '40px', marginBottom: '8px', position: 'relative', zIndex: 10 }}>
                            {/* Side Slots */}
                            <div style={{ width: '30px', height: '6px', background: 'rgba(0,0,0,0.2)', borderRadius: '4px', boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.2)' }} />
                            <div style={{ width: '30px', height: '6px', background: 'rgba(0,0,0,0.2)', borderRadius: '4px', boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.2)' }} />
                            {/* Center Hole for Clip */}
                            <div style={{ position: 'absolute', top: '-10px', width: '16px', height: '16px', background: 'rgba(0,0,0,0.2)', borderRadius: '50%', boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.3)' }} />
                        </div>

                        {/* 3a. INNER PAPER CARD */}
                        <div style={{
                            width: '100%',
                            flex: 1,
                            background: 'var(--id-card-paper-bg)',
                            borderRadius: '12px',
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                        }}>
                            {/* Realistic Paper Texture */}
                            <div style={{ position: 'absolute', inset: 0, opacity: 'var(--paper-texture-opacity)', backgroundImage: 'url("https://www.transparenttextures.com/patterns/cardboard-flat.png")', mixBlendMode: 'multiply' }} />

                            {/* Minimal Grid Pattern Overlay */}
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                opacity: 'var(--paper-grid-opacity)',
                                backgroundImage: `
                                    linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
                                    linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)
                                `,
                                backgroundSize: '20px 20px',
                                top: '130px',
                                mixBlendMode: 'multiply'
                            }} />

                            {/* --- CARD CONTENT --- */}

                            {/* Header Background */}
                            <div style={{
                                height: '140px',
                                background: 'var(--accent-purple)',
                                position: 'relative',
                                clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' // Angled cut
                            }}>
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(45deg, var(--accent-purple), var(--accent-pink))', opacity: 0.9 }} />
                                {/* Geometric Shapes */}
                                <div style={{ position: 'absolute', right: '-20px', top: '-20px', width: '100px', height: '100px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }} />
                                <div style={{ position: 'absolute', left: '-10px', top: '40px', width: '60px', height: '60px', background: 'rgba(0,0,0,0.1)', transform: 'rotate(45deg)' }} />
                            </div>

                            {/* Portrait */}
                            <div style={{
                                width: '180px', height: '180px',
                                borderRadius: '50%',
                                border: '6px solid #fff',
                                boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                                margin: '-100px auto 0',
                                position: 'relative',
                                zIndex: 10,
                                overflow: 'hidden',
                                background: '#fff'
                            }}>
                                <img src={portraitImg.src} alt="Nikil" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>

                            {/* Info Section */}
                            <div style={{ padding: '12px 15px', textAlign: 'center', zIndex: 10, position: 'relative', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                <h2 style={{ fontSize: '28px', fontWeight: '900', color: '#111827', margin: '0', fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: '-0.5px' }}>NIKILKUMAR</h2>
                                <p style={{ fontSize: '9px', fontWeight: '600', color: '#4b5563', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Web Developer & Broadcast Engineer</p>

                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    gap: '10px',
                                    width: '100%',
                                    padding: '8px 10px',
                                    background: 'rgba(0,0,0,0.03)',
                                    borderRadius: '8px',
                                    border: '1px solid rgba(0,0,0,0.05)'
                                }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <div style={{ fontSize: '8px', color: '#6b7280', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px' }}>ID No.</div>
                                        <div style={{ fontSize: '12px', color: '#111', fontWeight: '700', fontFamily: 'monospace' }}>012345</div>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <div style={{ fontSize: '8px', color: '#6b7280', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Joined</div>
                                        <div style={{ fontSize: '12px', color: '#111', fontWeight: '700', fontFamily: 'monospace' }}>JAN 2026</div>
                                    </div>
                                </div>

                                {/* Barcode / Footer */}
                                <div style={{ marginTop: '8px', borderTop: '2px dashed #e5e7eb', paddingTop: '6px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                                    {/* Realistic Barcode */}
                                    <div style={{
                                        display: 'flex',
                                        gap: '2px',
                                        height: '28px',
                                        width: '80%',
                                        maxWidth: '200px',
                                        mixBlendMode: 'multiply'
                                    }}>
                                        {[3, 1, 4, 1, 2, 5, 1, 2, 1, 3, 4, 1, 2, 1, 5, 2, 1, 3, 1, 4, 2, 1, 2, 3, 1, 2, 1].map((w, i) => (
                                            <div key={i} style={{ flex: w, background: '#111', height: '100%', borderRadius: '1px' }} />
                                        ))}
                                    </div>

                                    {/* Site URL */}
                                    <a
                                        href="https://www.cinelinestudios.in"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            fontSize: '10px',
                                            color: 'black',
                                            fontWeight: '500',
                                            textDecoration: 'none',
                                            letterSpacing: '0.5px',
                                            fontFamily: "sans-serif",
                                            opacity: 0.8,
                                            marginTop: '4px',
                                            pointerEvents: 'auto',
                                            position: 'relative',
                                            zIndex: 50
                                        }}
                                    >
                                        www.cinelinestudios.in
                                    </a>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </motion.div>
            </div>

            {/* Vignette Overlay */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at center, transparent 10%, var(--vignette-color) 100%)',
                pointerEvents: 'none',
                zIndex: 4
            }} />
        </section>
    );
};

export default Hero;
