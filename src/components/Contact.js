import React from 'react';
import { Mail, MessageSquare, Linkedin, ArrowRight } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section container">
            <div className="glass-card" style={{ padding: '4rem' }}>
                <div className="contact-container">
                    <div className="contact-info">
                        <h2 className="gradient-text">Let's build <br />something great.</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.2rem' }}>
                            Have a project in mind or just want to say hi? <br />
                            My inbox is always open.
                        </p>

                        <div className="contact-method">
                            <div className="contact-icon"><Mail size={24} /></div>
                            <div>
                                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Email</p>
                                <p style={{ fontWeight: 600 }}>hello@yourname.com</p>
                            </div>
                        </div>

                        <div className="contact-method">
                            <div className="contact-icon"><MessageSquare size={24} /></div>
                            <div>
                                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Discord</p>
                                <p style={{ fontWeight: 600 }}>yourname#1234</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form">
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    style={{
                                        padding: '1rem',
                                        borderRadius: '12px',
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid var(--glass-border)',
                                        color: 'white'
                                    }}
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    style={{
                                        padding: '1rem',
                                        borderRadius: '12px',
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid var(--glass-border)',
                                        color: 'white'
                                    }}
                                />
                            </div>
                            <textarea
                                placeholder="Message"
                                rows="5"
                                style={{
                                    padding: '1rem',
                                    borderRadius: '12px',
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid var(--glass-border)',
                                    color: 'white',
                                    resize: 'none'
                                }}
                            ></textarea>
                            <button className="btn btn-primary shimmer" style={{ width: '100%', justifyContent: 'center' }}>
                                Send Message <ArrowRight size={20} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
