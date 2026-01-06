import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "EcoSphere AI",
        desc: "A machine learning platform for monitoring global climate patterns in real-time.",
        tag: "Next.js • Tailwind • Python",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Nova Dashboard",
        desc: "An enterprise-level dashboard featuring advanced data visualization and analytics.",
        tag: "React • D3.js • Node.js",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Lumina Studio",
        desc: "High-performance creative portfolio for modern design agencies and artists.",
        tag: "Three.js • GSAP • React",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section container">
            <div style={{ marginBottom: '4rem' }}>
                <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Selected Work</h2>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '500px' }}>
                    A collection of projects that demonstrate my passion for building beautiful and functional software.
                </p>
            </div>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="glass-card project-card"
                    >
                        <div className="project-image">
                            <img
                                src={project.image}
                                alt={project.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <span className="project-tag">{project.tag}</span>
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-desc">{project.desc}</p>

                        <div className="project-links">
                            <a href="#" className="btn btn-secondary" style={{ padding: '0.6rem 1rem', fontSize: '0.8rem' }}>
                                <Github size={16} /> Code
                            </a>
                            <a href="#" className="btn btn-primary" style={{ padding: '0.6rem 1rem', fontSize: '0.8rem' }}>
                                <ExternalLink size={16} /> Demo
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
