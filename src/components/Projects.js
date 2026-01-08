"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Code2, Layers, Film, Brain, BarChart3, Palette } from 'lucide-react';
import cinelineLogo from '../assets/cs logo t.png';
import ecosphereDummy from '../assets/cyber_earth_thumbnail_1767782079178.png';
import novaDummy from '../assets/quantum_analytics_thumbnail_1767782097995.png';
import luminaDummy from '../assets/kinetic_typography_thumbnail_1767782117708.png';

const projects = [
    {
        title: "Cineline Studios",
        category: "Creative Production",
        desc: "A premier cinematic portfolio for a visual storytelling agency. Features immersive video backgrounds, fluid GSAP transitions, and a high-performance gallery engine.",
        tech: ["React", "GSAP", "Tailwind", "Framer Motion"],
        image: cinelineLogo,
        demo: "https://www.cinelinestudios.in",
        repo: "https://github.com/nikilkumarm/csws"
    },
    {
        title: "EcoSphere AI",
        category: "Machine Learning Platform",
        desc: "A machine learning platform for monitoring global climate patterns in real-time. Features predictive modeling and interactive heatmaps.",
        tech: ["Next.js", "Python", "TensorFlow", "Mapbox"],
        image: ecosphereDummy,
        demo: "#",
        repo: "#"
    },
    {
        title: "Nova Dashboard",
        category: "Fintech Analytics",
        desc: "An enterprise-level dashboard featuring advanced data visualization, real-time socket connections, and biometric security integration.",
        tech: ["React", "D3.js", "Node.js", "Socket.io"],
        image: novaDummy,
        demo: "#",
        repo: "#"
    },
    {
        title: "Lumina Studio",
        category: "Creative Portfolio",
        desc: "High-performance creative portfolio for modern design agencies. Uses WebGL for fluid distortions and kinetic typography.",
        tech: ["Three.js", "GSAP", "React", "WebGL"],
        image: luminaDummy,
        demo: "#",
        repo: "#"
    }
];

const ProjectCard = ({ project, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                background: isHovered
                    ? 'linear-gradient(135deg, rgba(20, 20, 20, 0.8) 0%, rgba(20, 20, 20, 0.6) 100%)'
                    : 'linear-gradient(135deg, rgba(15, 15, 15, 0.5) 0%, rgba(15, 15, 15, 0.3) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
                borderColor: isHovered ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.08)',
                boxShadow: isHovered
                    ? '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 255, 255, 0.02)'
                    : '0 10px 30px -15px rgba(0, 0, 0, 0.3)'
            }}
        >
            {/* The Image Viewport (Separate Frame Approach) */}
            <div style={{
                position: 'relative',
                padding: '0.8rem', // Tighter Professional Frame
                background: 'rgba(255,255,255,0.01)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '260px',
            }}>
                <div style={{
                    position: 'absolute',
                    inset: '0.8rem',
                    background: '#050505', // Deep background for the image
                    borderRadius: '4px',
                    overflow: 'hidden'
                }}>
                    <motion.img
                        src={project.image.src || project.image}
                        alt={project.title}
                        animate={{
                            scale: isHovered ? 1.05 : 1,
                            opacity: isHovered ? 1 : 0.9
                        }}
                        transition={{ duration: 0.8 }}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: project.title === "Cineline Studios" ? 'contain' : 'cover',
                            filter: 'contrast(1.1)',
                            padding: project.title === "Cineline Studios" ? '2rem' : '0'
                        }}
                    />

                    {/* Dark gradient overlay for professionalism */}
                    <div style={{
                        position: 'absolute', inset: 0,
                        background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.6) 100%)',
                        pointerEvents: 'none'
                    }} />
                </div>
            </div>

            {/* Project Content */}
            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingBottom: '1rem',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                    marginBottom: '1rem'
                }}>
                    <h3 style={{
                        fontSize: '1.4rem',
                        fontWeight: '700',
                        color: '#fff',
                        fontFamily: 'var(--font-heading)',
                        letterSpacing: '-0.02em',
                        margin: 0
                    }}>
                        {project.title}
                    </h3>

                    {/* Domain Icon Badge */}
                    <div style={{
                        width: '32px', height: '32px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '50%',
                    }}>
                        {(() => {
                            const iconProps = { size: 16, color: 'rgba(255,255,255,0.8)', strokeWidth: 2 };
                            if (project.category.includes("Creative")) return <Film {...iconProps} />;
                            if (project.category.includes("Machine")) return <Brain {...iconProps} />;
                            if (project.category.includes("Analytics")) return <BarChart3 {...iconProps} />;
                            return <Palette {...iconProps} />;
                        })()}
                    </div>
                </div>

                <p style={{
                    fontSize: '0.95rem',
                    color: 'rgba(255,255,255,0.5)',
                    lineHeight: '1.7',
                    marginBottom: '2.5rem',
                    flex: 1,
                    letterSpacing: '0.01em'
                }}>
                    {project.desc}
                </p>

                {/* Professional Actions */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem', marginTop: 'auto' }}>
                    <motion.a
                        href={project.demo}
                        style={{
                            color: '#fff',
                            textDecoration: 'none',
                            fontSize: '0.85rem',
                            fontWeight: '600',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            transition: 'opacity 0.3s ease'
                        }}
                        whileHover={{ opacity: 0.7 }}
                    >
                        View Website <ArrowUpRight size={16} />
                    </motion.a>

                    <motion.a
                        href={project.repo}
                        style={{
                            color: 'rgba(255,255,255,0.4)',
                            textDecoration: 'none',
                            fontSize: '0.85rem',
                            fontWeight: '600',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            transition: 'color 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.color = '#fff'}
                        onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.4)'}
                    >
                        <Github size={18} /> Code
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="section" style={{ padding: '10rem 0', background: '#020202', position: 'relative' }}>
            {/* Background Grid Pattern */}
            <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
                backgroundSize: '4rem 4rem',
                opacity: 0.2,
                pointerEvents: 'none'
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>

                {/* Header Style Matching About.js */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    marginBottom: '8rem',
                    paddingLeft: '6%',
                    position: 'relative' // For ghost text positioning
                }}>
                    {/* Ghost Text Background */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 0.05, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        style={{
                            position: 'absolute',
                            top: '-40%',
                            left: '-10%',
                            fontSize: '15vw',
                            fontWeight: '950',
                            color: '#fff',
                            pointerEvents: 'none',
                            zIndex: -1,
                            whiteSpace: 'nowrap',
                            WebkitTextStroke: '1px rgba(255,255,255,0.2)',
                            color: 'transparent'
                        }}
                    >
                        SELECTED
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}
                    >
                        <div style={{
                            padding: '0.4rem 0.8rem',
                            borderLeft: '3px solid var(--accent-primary)',
                            background: 'rgba(168, 85, 247, 0.05)',
                            display: 'flex', alignItems: 'center', gap: '0.8rem'
                        }}>
                            <span style={{ color: 'var(--accent-primary)', fontFamily: 'monospace', fontSize: '1rem', fontWeight: 'bold' }}>02 //</span>
                            <span style={{ color: 'var(--text-secondary)', letterSpacing: '0.4em', fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase' }}>The Archive</span>
                        </div>

                        {/* Technical scanline indicator */}
                        <motion.div
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            style={{ width: '100px', height: '1px', background: 'linear-gradient(90deg, var(--accent-primary), transparent)' }}
                        />
                    </motion.div>

                    <h2 style={{
                        fontSize: 'clamp(4rem, 8vw, 8rem)',
                        lineHeight: '0.85',
                        fontWeight: '900',
                        color: 'var(--text-primary)',
                        fontFamily: 'var(--font-heading)',
                        letterSpacing: '-0.04em',
                        position: 'relative'
                    }}>
                        <motion.span
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{
                                display: 'block',
                                WebkitTextStroke: '1px rgba(255,255,255,0.4)',
                                color: 'transparent'
                            }}
                        >
                            SELECTED
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            style={{
                                display: 'block',
                                background: 'linear-gradient(to bottom, #fff 40%, #666 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                color: '#fff'
                            }}
                        >
                            WORKS<motion.span
                                animate={{ opacity: [1, 0, 1], scale: [1, 1.2, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                style={{
                                    color: 'var(--accent-primary)',
                                    WebkitTextFillColor: 'var(--accent-primary)',
                                    display: 'inline-block',
                                    marginLeft: '10px',
                                    textShadow: '0 0 30px var(--accent-primary)'
                                }}
                            >‣</motion.span>
                        </motion.span>

                        {/* Animated Scanning Line */}
                        <motion.div
                            animate={{ top: ['0%', '100%', '0%'] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            style={{
                                position: 'absolute',
                                left: '-5%',
                                width: '110%',
                                height: '1px',
                                background: 'linear-gradient(90deg, transparent, var(--accent-primary), transparent)',
                                opacity: 0.3,
                                zIndex: 1
                            }}
                        />
                    </h2>
                </div>

                <div className="projects-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
                    gap: '3rem',
                    padding: '0 2rem'
                }}>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
