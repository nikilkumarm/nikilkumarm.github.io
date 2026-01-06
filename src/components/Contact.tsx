import { Mail, MessageSquare, ArrowRight } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container">
                <div className="glass" style={{ padding: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                    <div>
                        <h2 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1.5rem', lineHeight: 1.1 }}>
                            Let's create something <span className="gradient-text">extraordinary</span>.
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem' }}>
                            Have a project in mind or just want to say hi? I'm always open to discussing new ideas and collaborations.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div className="glass" style={{ padding: '0.75rem', borderRadius: '12px' }}>
                                    <Mail size={20} color="var(--accent-primary)" />
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Email me at</div>
                                    <div style={{ fontWeight: 600 }}>hello@nikkee.dev</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div className="glass" style={{ padding: '0.75rem', borderRadius: '12px' }}>
                                    <MessageSquare size={20} color="var(--accent-secondary)" />
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Telegram</div>
                                    <div style={{ fontWeight: 600 }}>@nikkee_dev</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <input
                            type="text"
                            placeholder="Your Name"
                            style={{
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid var(--glass-border)',
                                padding: '1.25rem',
                                borderRadius: '12px',
                                color: 'white',
                                outline: 'none',
                                width: '100%'
                            }}
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            style={{
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid var(--glass-border)',
                                padding: '1.25rem',
                                borderRadius: '12px',
                                color: 'white',
                                outline: 'none',
                                width: '100%'
                            }}
                        />
                        <textarea
                            placeholder="Tell me about your project"
                            rows={5}
                            style={{
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid var(--glass-border)',
                                padding: '1.25rem',
                                borderRadius: '12px',
                                color: 'white',
                                outline: 'none',
                                width: '100%',
                                resize: 'none'
                            }}
                        />
                        <button style={{
                            background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                            color: 'white',
                            padding: '1.25rem',
                            borderRadius: '12px',
                            border: 'none',
                            fontWeight: 600,
                            fontSize: '1rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem'
                        }}>
                            Send Message <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
