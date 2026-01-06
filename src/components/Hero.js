import React, { useEffect } from 'react';
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion';

const Hero = () => {
    // Mouse motion values
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth springs for fluid movement
    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

    // Transformations based on mouse position
    const textMoveX = useTransform(mouseXSpring, [-0.5, 0.5], [50, -50]);
    const textMoveY = useTransform(mouseYSpring, [-0.5, 0.5], [20, -20]);

    // Card Swing Logic (Pivot at top)
    const cardRotateZ = useTransform(mouseXSpring, [-0.5, 0.5], [-5, 5]);
    const cardRotateX = useTransform(mouseYSpring, [-0.5, 0.5], [5, -5]);
    const cardMoveX = useTransform(mouseXSpring, [-0.5, 0.5], [-20, 20]);

    // Holographic Glare Transformation
    const glareX = useTransform(mouseXSpring, [-0.5, 0.5], [-100, 100]);
    const glareY = useTransform(mouseYSpring, [-0.5, 0.5], [-100, 100]);

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
            style={{ height: '100vh', overflow: 'hidden', position: 'relative', perspective: '1000px' }}
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
                whiteSpace: 'nowrap'
            }}>
                <h1 style={{
                    fontSize: 'clamp(5rem, 18vw, 16rem)',
                    fontWeight: '600',
                    fontFamily: "'Montserrat', sans-serif",
                    color: '#ffffff',
                    lineHeight: '0.8',
                    letterSpacing: '-0.08em',
                    opacity: 0.9,
                    pointerEvents: 'none'
                }}>
                    NIKILKUMAR
                </h1>
            </motion.div>

            {/* Accent Texts - Fade In */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                style={{
                    position: 'absolute',
                    top: '30%',
                    left: '5%',
                    color: 'var(--accent-primary)',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: '600',
                    fontSize: 'clamp(0.8rem, 1.5vw, 1.2rem)',
                    zIndex: 1
                }}
            >
                [ ACCESS_GRANTED // NIKIL ]
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                style={{
                    position: 'absolute',
                    bottom: '20%',
                    right: '5%',
                    color: 'var(--accent-primary)',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: '600',
                    fontSize: 'clamp(0.8rem, 1.5vw, 1.2rem)',
                    zIndex: 1,
                    textAlign: 'right'
                }}
            >
                ENGINEERING AESTHETICS<br />// THROUGH CODE
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
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        zIndex: 3,
                        perspective: '1000px'
                    }}
                >
                    {/* 1. LANYARD STRAP */}
                    <div style={{
                        width: '32px',
                        height: '42vh',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <div style={{
                            width: '100%',
                            flex: 1,
                            background: 'linear-gradient(90deg, #111 0%, #222 50%, #111 100%)',
                            position: 'relative',
                            boxShadow: '0 8px 16px rgba(0,0,0,0.3)'
                        }}>
                            <div style={{ position: 'absolute', inset: 0, opacity: 0.3, background: 'repeating-linear-gradient(90deg, transparent 0px, transparent 2px, #000 3px)' }} />
                            <div style={{ position: 'absolute', left: '3px', top: 0, bottom: 0, width: '1px', borderLeft: '1px dashed rgba(255,255,255,0.1)' }} />
                            <div style={{ position: 'absolute', right: '3px', top: 0, bottom: 0, width: '1px', borderLeft: '1px dashed rgba(255,255,255,0.1)' }} />
                        </div>

                        <div style={{
                            width: '46px',
                            height: '26px',
                            background: 'linear-gradient(to bottom, #444, #888 50%, #444)',
                            borderRadius: '4px',
                            marginTop: '-4px',
                            zIndex: 3,
                            boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <div style={{ width: '80%', height: '1px', background: 'rgba(0,0,0,0.5)', boxShadow: '0 1px 0 rgba(255,255,255,0.2)' }} />
                        </div>

                        <div style={{
                            width: '14px',
                            height: '16px',
                            background: 'radial-gradient(circle at 30% 30%, #aaa, #444)',
                            borderRadius: '3px',
                            marginTop: '-2px',
                            zIndex: 1
                        }} />
                    </div>

                    {/* 2. THE HOOK (MERGED ASSEMBLY) */}
                    <div style={{ position: 'relative', height: '32px', width: '24px', display: 'flex', justifyContent: 'center', marginTop: '-10px', zIndex: 10 }}>
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            width: '22px',
                            height: '35px',
                            border: '3px solid #999',
                            borderRadius: '6px 6px 12px 12px',
                            borderTop: 'none',
                            zIndex: 1
                        }} />

                        <div style={{
                            position: 'absolute',
                            top: '4px',
                            right: '3px',
                            width: '3.5px',
                            height: '20px',
                            background: '#ccc',
                            transform: 'rotate(-20deg)',
                            transformOrigin: 'top',
                            zIndex: 20,
                            boxShadow: '1px 1px 3px rgba(0,0,0,0.3)'
                        }} />
                    </div>

                    {/* 3. THE CARD BODY */}
                    <motion.div
                        animate={{ rotateZ: [0, 0.5, 0, -0.5, 0] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        style={{
                            width: '280px',
                            height: '420px',
                            background: '#ffffff',
                            borderRadius: '20px',
                            marginTop: '-28px',
                            // Realistic Plastic Edge + Deep Shadow
                            boxShadow: `
                                0 40px 80px -20px rgba(0, 0, 0, 0.6), 
                                0 0 0 1px rgba(0,0,0,0.1), 
                                inset 0 0 0 1px rgba(255,255,255,1),
                                inset 0 -2px 10px rgba(0,0,0,0.05)
                            `,
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            pointerEvents: 'auto',
                            cursor: 'grab',
                            zIndex: 5,
                            position: 'relative'
                        }}
                        whileTap={{ scale: 0.98, cursor: 'grabbing' }}
                    >
                        {/* NOISE/GRAIN FILTER (Realistic Plastic) */}
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            opacity: 0.03,
                            pointerEvents: 'none',
                            background: 'url("https://grainy-gradients.vercel.app/noise.svg")',
                            zIndex: 20
                        }} />

                        {/* HOLOGRAPHIC GLARE (Interactive) */}
                        <motion.div
                            style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(135deg, transparent 20%, rgba(255,255,255,0.4) 45%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.4) 55%, transparent 80%)',
                                opacity: 0.15,
                                pointerEvents: 'none',
                                zIndex: 10, // Lower than Portrait/Data
                                x: glareX,
                                y: glareY,
                                scale: 2,
                                filter: 'blur(40px)'
                            }}
                        />

                        {/* ID CARD CONTENT */}
                        <div style={{
                            position: 'relative',
                            width: '100%',
                            height: '180px',
                            background: 'var(--accent-primary)',
                            borderRadius: '0 0 50% 50% / 0 0 30px 30px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            zIndex: 2,
                            boxShadow: 'inset 0 -5px 15px rgba(0,0,0,0.1)'
                        }}>
                            {/* Glossy Header Effect */}
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)', pointerEvents: 'none' }} />

                            {/* THE SLOT */}
                            <div style={{ width: '100%', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{
                                    width: '38px',
                                    height: '7px',
                                    background: 'rgba(0,0,0,0.3)',
                                    borderRadius: '10px',
                                    marginTop: '12px',
                                    boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.2)'
                                }} />
                            </div>

                        </div>

                        {/* PORTRAIT */}
                        <div style={{ width: '150px', height: '150px', background: '#fff', borderRadius: '50%', margin: '-80px auto 0', padding: '5px', position: 'relative', zIndex: 20, boxShadow: '0 12px 30px rgba(0,0,0,0.15)' }}>
                            <div style={{ width: '100%', height: '100%', borderRadius: '50%', border: '4px solid var(--accent-primary)', overflow: 'hidden', position: 'relative' }}>
                                <img src="./src/assets/nikkeee.jpg" alt="Nikil" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                {/* Subtle Image Glare */}
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%)', pointerEvents: 'none' }} />
                            </div>
                        </div>

                        {/* DATA */}
                        <div style={{ flex: 1, padding: '15px', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 21 }}>
                            <h2 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--accent-primary)', margin: '4px 0', fontFamily: "'Montserrat', sans-serif" }}>NIKILKUMAR</h2>
                            <p style={{ fontSize: '14px', fontWeight: '800', color: '#111', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '15px' }}>Software Engineer</p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'center' }}>
                                <div style={{ fontSize: '11px', fontWeight: '600', color: '#666' }}><span style={{ color: 'var(--accent-primary)' }}>ID: </span> 012345</div>
                                <div style={{ fontSize: '11px', fontWeight: '600', color: '#666' }}><span style={{ color: 'var(--accent-primary)' }}>JOIN DATE: </span> JAN 2026</div>
                                <div style={{ fontSize: '11px', fontWeight: '600', color: '#666' }}><span style={{ color: 'var(--accent-primary)' }}>PHONE: </span> +91 8124887577</div>
                            </div>

                            {/* Security Hologram Sticker */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                style={{
                                    position: 'absolute',
                                    right: '15px',
                                    bottom: '60px',
                                    width: '35px',
                                    height: '35px',
                                    borderRadius: '50%',
                                    background: 'conic-gradient(from 0deg, #f0f, #0ff, #ff0, #f0f)',
                                    opacity: 0.15,
                                    zIndex: 1,
                                    filter: 'blur(2px)'
                                }}
                            />

                            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                                <div style={{ display: 'flex', gap: '2px', height: '30px', width: '160px', padding: '4px' }}>
                                    {[2, 1, 4, 1, 1, 2, 1, 1, 3, 1, 1, 2, 1, 4, 1, 1, 2, 1, 1, 3, 1].map((width, i) => (
                                        <div key={i} style={{ flex: width, background: '#000', height: '100%', opacity: 0.8 }} />
                                    ))}
                                </div>
                                <a
                                    href="https://www.cinelinestudios.in"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ textDecoration: 'none', display: 'block', pointerEvents: 'auto', cursor: 'pointer', zIndex: 25 }}
                                >
                                    <span style={{ fontSize: '10px', color: '#6e6e6eff', letterSpacing: '1px' }}>www.cinelinestudios.in</span>
                                </a>
                            </div>
                        </div>

                        {/* SCANNER overlay */}
                        <motion.div animate={{ top: ['0%', '100%'] }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }} style={{ position: 'absolute', left: 0, width: '100%', height: '2px', background: 'linear-gradient(90deg, transparent, var(--accent-primary), transparent)', opacity: 0.15, zIndex: 10 }} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
