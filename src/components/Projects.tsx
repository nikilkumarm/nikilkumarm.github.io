import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "Cinematic Wedding Films",
        category: "Video Production",
        desc: "A high-end platform for wedding cinematographers to showcase their stories.",
        image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Eco-Friendly E-commerce",
        category: "Full Stack Development",
        desc: "A headless shopify implementation for sustainable fashion brands.",
        image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "AI Analysis Tool",
        category: "Software Design",
        desc: "A dashboard for tracking AI model performance and data metrics.",
        image: "https://images.unsplash.com/photo-1551288049-bbbda536ad3a?auto=format&fit=crop&q=80&w=800"
    }
];

const Projects = () => {
    return (
        <section id="works" className="section">
            <div className="container">
                <div style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Selected Works</h2>
                    <p style={{ color: 'var(--text-secondary)' }}>A collection of projects that define my journey.</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '3rem'
                }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="glass"
                            style={{ overflow: 'hidden', cursor: 'pointer' }}
                            whileHover={{ y: -10 }}
                        >
                            <div style={{ height: '240px', overflow: 'hidden' }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                                    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                                />
                            </div>
                            <div style={{ padding: '2rem' }}>
                                <span style={{ color: 'var(--accent-primary)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase' }}>
                                    {project.category}
                                </span>
                                <h3 style={{ fontSize: '1.5rem', margin: '0.75rem 0' }}>{project.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                                    {project.desc}
                                </p>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <ExternalLink size={20} color="var(--text-secondary)" />
                                    <Github size={20} color="var(--text-secondary)" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
