"use client";
import React, { useState } from 'react';
import footerLogo from '../assets/footer-logo.png';
import Link from 'next/link';
import { Instagram, Youtube, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [isMobile, setIsMobile] = useState(false);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const navLinks = [
        { name: "HOME", path: "/" },
        { name: "ABOUT", path: "/about" },
        { name: "PROJECTS", path: "/projects" },
        { name: "CONTACT", path: "/contact" }
    ];

    const socialLinks = [
        { icon: <Github size={18} />, url: "https://github.com/nikilkumarm" },
        { icon: <Linkedin size={18} />, url: "https://in.linkedin.com/in/nikilkumarm" }, // Guessing based on pattern, or just generic
        { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>, url: "https://twitter.com/inikil_" },
        { icon: <Instagram size={18} />, url: "https://instagram.com/inikil._" },
        { icon: <Youtube size={20} />, url: "https://www.youtube.com/@cinelinestudios" },
        { icon: <Mail size={18} />, url: "mailto:nikilkingzzz@gmail.com" }
    ];

    return (
        <footer className="footer-main" style={{
            background: '#0a0a0a',
            color: '#ffffff',
            padding: isMobile ? '60px 0' : '80px 0',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
        }}>
            <div className="container" style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                justifyContent: 'space-between',
                alignItems: isMobile ? 'center' : 'flex-start',
                flexWrap: 'wrap',
                gap: isMobile ? '2.5rem' : '3rem',
                textAlign: isMobile ? 'center' : 'left'
            }}>
                {/* Left Column */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: isMobile ? '1.5rem' : '2rem',
                    alignItems: isMobile ? 'center' : 'flex-start',
                    width: isMobile ? '100%' : 'auto'
                }}>
                    {/* Logo - Green N Monogram */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 4H14L9 12L14 20H18V4Z" fill="#00cc33" />
                            <path d="M6 20H10L15 12L10 4H6V20Z" fill="#00ff40" />
                        </svg>
                    </div>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px',
                        alignItems: isMobile ? 'center' : 'flex-start',
                        textAlign: isMobile ? 'center' : 'left'
                    }}>
                        <div style={{
                            color: '#e5e5e5',
                            fontSize: '13px',
                            fontWeight: '500',
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            letterSpacing: '0.01em'
                        }}>
                            Copyright &copy; {currentYear} NIKILKUMAR
                        </div>
                        <div style={{
                            color: '#737373',
                            fontSize: '12px',
                            fontWeight: '400',
                            fontFamily: "'Inter', sans-serif"
                        }}>
                            All rights reserved.
                        </div>
                    </div>

                    <div style={{
                        display: 'flex',
                        gap: isMobile ? '1.25rem' : '1.25rem',
                        alignItems: 'center',
                        justifyContent: isMobile ? 'center' : 'flex-start'
                    }}>
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: 'rgba(255, 255, 255, 0.6)', transition: 'color 0.2s' }}
                                onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
                                onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right Column */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: isMobile ? 'center' : 'flex-end',
                    minHeight: isMobile ? 'auto' : '160px',
                    gap: isMobile ? '2.5rem' : '0',
                    width: isMobile ? '100%' : 'auto'
                }}>
                    <nav style={{
                        display: 'flex',
                        gap: isMobile ? '1.5rem' : '1.5rem',
                        flexWrap: 'wrap',
                        justifyContent: isMobile ? 'center' : 'flex-end',
                        alignItems: 'center',
                        width: isMobile ? '100%' : 'auto',
                        margin: 0,
                        padding: 0
                    }}>
                        {navLinks.map((link, i) => (
                            <Link
                                key={i}
                                href={link.path}
                                style={{
                                    color: 'rgba(255, 255, 255, 0.5)',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    textDecoration: 'none',
                                    transition: 'color 0.2s',
                                    whiteSpace: 'nowrap'
                                }}
                                onMouseOver={(e) => e.target.style.color = '#fff'}
                                onMouseOut={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.5)'}
                            >
                                {link.name.charAt(0) + link.name.slice(1).toLowerCase()}
                            </Link>
                        ))}
                    </nav>

                    <div style={{
                        marginTop: isMobile ? '1.5rem' : 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: isMobile ? 'center' : 'flex-end',
                        gap: '0.8rem',
                        width: isMobile ? '100%' : 'auto'
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: isMobile ? '0.6rem' : '1.2rem',
                            justifyContent: isMobile ? 'center' : 'flex-end'
                        }}>
                            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '10px', height: '10px' }}>
                                <div style={{ width: '6px', height: '6px', background: '#00ff40', borderRadius: '50%', boxShadow: '0 0 10px rgba(0, 255, 64, 0.8)', zIndex: 2 }} />
                                <motion.div
                                    animate={{ scale: [1, 2.2], opacity: [0.6, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                                    style={{ position: 'absolute', width: '6px', height: '6px', background: '#00ff40', borderRadius: '50%', zIndex: 1 }}
                                />
                            </div>

                            <div style={{
                                height: '1px',
                                width: isMobile ? '20px' : '45px',
                                background: 'rgba(255,255,255,0.15)'
                            }} />

                            <div style={{
                                color: '#ffffff',
                                textTransform: 'uppercase',
                                display: 'flex',
                                alignItems: 'center',
                                gap: isMobile ? '8px' : '10px'
                            }}>
                                <span style={{
                                    fontSize: isMobile ? '7px' : '11px',
                                    letterSpacing: '0.3em',
                                    fontWeight: '300',
                                    lineHeight: 1,
                                    opacity: 0.8
                                }}>ARCHITECTED BY</span>
                                <span style={{
                                    fontWeight: '900',
                                    letterSpacing: '0.02em',
                                    fontSize: isMobile ? '15px' : '26px',
                                    lineHeight: 1,
                                    fontFamily: 'var(--font-heading)'
                                }}>NIKILKUMAR</span>
                            </div>
                        </div>

                        <div style={{
                            fontSize: isMobile ? '6.5px' : '10px',
                            color: 'rgba(255,255,255,0.2)',
                            letterSpacing: isMobile ? '0.4em' : '0.6em',
                            fontFamily: 'monospace',
                            textAlign: isMobile ? 'center' : 'right',
                            textTransform: 'uppercase',
                            marginTop: '0.2rem'
                        }}>
                            VER: 2.0.4 // 12.9716° N, 77.5946° E
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
