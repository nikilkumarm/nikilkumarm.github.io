"use client";
import React from 'react';
import footerLogo from '../assets/footer-logo.png';
import Link from 'next/link';
import { Twitter, Instagram, Youtube, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const navLinks = [
        { name: "HOME", path: "/" },
        { name: "ABOUT", path: "/about" },
        { name: "PROJECTS", path: "/projects" },
        { name: "CONTACT", path: "/contact" }
    ];

    const socialLinks = [
        { icon: <Github size={18} />, url: "https://github.com/nikilkumarm" },
        { icon: <Linkedin size={18} />, url: "https://linkedin.com/in/nikilkumarm" }, // Guessing based on pattern, or just generic
        { icon: <Twitter size={18} />, url: "https://twitter.com/nikilkumarm" },
        { icon: <Instagram size={18} />, url: "https://instagram.com/nikilkumarm" },
        { icon: <Youtube size={20} />, url: "https://youtube.com/@nikilkumarm" },
        { icon: <Mail size={18} />, url: "mailto:hello@nikilkumar.com" }
    ];

    return (
        <footer className="footer-main" style={{
            background: '#0a0a0a',
            color: '#ffffff',
            padding: '80px 0',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '3rem'
            }}>
                {/* Left Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {/* Logo - Green N Monogram */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 4H14L9 12L14 20H18V4Z" fill="#00cc33" />
                            <path d="M6 20H10L15 12L10 4H6V20Z" fill="#00ff40" />
                        </svg>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
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

                    <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
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
                    alignItems: 'flex-end',
                    minHeight: '160px'
                }}>
                    <nav style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                        {navLinks.map((link, i) => (
                            <Link
                                key={i}
                                href={link.path}
                                style={{
                                    color: 'rgba(255, 255, 255, 0.5)',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    textDecoration: 'none',
                                    transition: 'color 0.2s'
                                }}
                                onMouseOver={(e) => e.target.style.color = '#fff'}
                                onMouseOut={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.5)'}
                            >
                                {link.name.charAt(0) + link.name.slice(1).toLowerCase()}
                            </Link>
                        ))}
                    </nav>

                    <div style={{
                        marginTop: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        gap: '0.8rem'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '12px', height: '12px' }}>
                                <div style={{ width: '8px', height: '8px', background: '#00ff40ff', borderRadius: '50%', boxShadow: '0 0 10px rgba(0, 255, 98, 0.5)', zIndex: 2 }} />
                                <motion.div
                                    animate={{ scale: [1, 2.2], opacity: [0.5, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                                    style={{ position: 'absolute', width: '8px', height: '8px', background: '#00ff40ff', borderRadius: '50%', zIndex: 1 }}
                                />
                            </div>

                            <div style={{
                                height: '1px',
                                width: '35px',
                                background: 'rgba(255,255,255,0.15)'
                            }} />

                            <div style={{
                                color: '#ffffff',
                                textTransform: 'uppercase',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px'
                            }}>
                                <span style={{ fontSize: '11px', letterSpacing: '0.25em', fontWeight: '300', lineHeight: 1 }}>ARCHITECTED BY</span>
                                <span style={{ fontWeight: '800', letterSpacing: '0.05em', fontSize: '24px', lineHeight: 1 }}>NIKILKUMAR</span>
                            </div>
                        </div>

                        <div style={{
                            fontSize: '9px',
                            color: 'rgba(255,255,255,0.25)',
                            letterSpacing: '0.5em',
                            fontFamily: 'monospace',
                            textAlign: 'right',
                            textTransform: 'uppercase'
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
