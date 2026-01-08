"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth >= 768) setIsMenuOpen(false);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
            clearInterval(timer);
        };
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    const navLinks = [
        { name: "ABOUT", path: "/about" },
        { name: "PROJECTS", path: "/projects" },
        { name: "CONTACT", path: "/contact" }
    ];

    const timeString = currentTime.toLocaleTimeString('en-US', {
        hour12: true,
        hour: 'numeric',
        minute: '2-digit'
    });

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1000,
                padding: isMobile ? '1rem 0' : (scrolled ? '0.75rem 0' : '1.5rem 0'),
                transition: 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: isMobile ? '0.5rem 0.75rem' : '0.75rem 1.5rem',
                background: (scrolled || isMenuOpen || isHovered)
                    ? 'rgba(10, 10, 12, 0.85)'
                    : 'transparent',
                backdropFilter: (scrolled || isMenuOpen || isHovered) ? 'blur(20px) saturate(180%)' : 'none',
                WebkitBackdropFilter: (scrolled || isMenuOpen || isHovered) ? 'blur(20px) saturate(180%)' : 'none',
                borderRadius: (scrolled || isHovered || isMenuOpen) ? '100px' : (isMobile ? '100px' : '16px'),
                border: (scrolled || isHovered || isMenuOpen) ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
                boxShadow: (scrolled || isHovered || isMenuOpen)
                    ? '0 20px 40px -10px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                    : 'none',
                transition: 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
                maxWidth: isMobile ? '94%' : (scrolled ? '1000px' : '1400px'),
                margin: '0 auto',
                position: 'relative',
                zIndex: 1100
            }}>
                {/* Logo Section */}
                <Link
                    href="/"
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setIsMenuOpen(false);
                    }}
                    style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', zIndex: 10 }}
                >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 4H14L9 12L14 20H18V4Z" fill="#00cc33" />
                            <path d="M6 20H10L15 12L10 4H6V20Z" fill="#00ff40" />
                        </svg>
                    </div>
                    <AnimatePresence>
                        {!isMobile && (
                            <motion.span
                                initial={{ opacity: 0, width: 0 }}
                                animate={{ opacity: 1, width: 'auto' }}
                                exit={{ opacity: 0, width: 0 }}
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontWeight: '800',
                                    fontSize: '1.1rem',
                                    color: (scrolled || isMenuOpen || isHovered) ? '#ffffff' : 'var(--text-primary)',
                                    letterSpacing: '-0.02em',
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                NIKILKUMAR
                            </motion.span>
                        )}
                    </AnimatePresence>
                </Link>

                {/* Right Group: Nav + CTA + Menu Toggle */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>

                    {/* Desktop Navigation */}
                    {!isMobile && (
                        <nav style={{ marginRight: '1rem' }}>
                            <ul style={{ display: 'flex', listStyle: 'none', gap: '1.5rem', margin: 0, padding: 0 }}>
                                {navLinks.map((link) => (
                                    <li key={link.path}>
                                        <Link
                                            href={link.path}
                                            style={{
                                                position: 'relative',
                                                color: pathname === link.path
                                                    ? ((scrolled || isMenuOpen || isHovered) ? '#ffffff' : 'var(--text-primary)')
                                                    : ((scrolled || isMenuOpen || isHovered) ? 'rgba(255, 255, 255, 0.7)' : 'var(--text-secondary)'),
                                                fontSize: '0.75rem',
                                                fontWeight: '600',
                                                fontFamily: 'var(--font-main)',
                                                textDecoration: 'none',
                                                transition: 'all 0.3s ease',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '6px',
                                                letterSpacing: '0.05em'
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.color = (scrolled || isMenuOpen || isHovered) ? '#ffffff' : 'var(--text-primary)'}
                                            onMouseLeave={(e) => {
                                                if (pathname !== link.path) e.currentTarget.style.color = (scrolled || isMenuOpen || isHovered) ? 'rgba(255, 255, 255, 0.7)' : 'var(--text-secondary)';
                                            }}
                                        >
                                            {link.name}
                                            {pathname === link.path && (
                                                <motion.div
                                                    layoutId="nav-dot"
                                                    style={{
                                                        width: '4px',
                                                        height: '4px',
                                                        background: (scrolled || isMenuOpen || isHovered) ? '#ffffff' : 'var(--text-primary)',
                                                        borderRadius: '50%',
                                                        marginBottom: '1px'
                                                    }}
                                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                                />
                                            )}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    )}

                    {/* IST Clock - Hide on small mobile */}
                    {!isMobile && (
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.6rem',
                            padding: '6px 14px',
                            background: 'var(--glass-border)',
                            borderRadius: '100px',
                            border: '1px solid var(--glass-border)'
                        }}>
                            <span style={{ width: '6px', height: '6px', background: '#00ff40', borderRadius: '50%', boxShadow: '0 0 6px rgba(0,255,64,0.4)' }} />
                            <span style={{
                                fontSize: '0.8rem',
                                fontFamily: 'var(--font-main)',
                                fontWeight: '500',
                                color: (scrolled || isMenuOpen || isHovered) ? 'rgba(255, 255, 255, 0.7)' : 'var(--text-secondary)'
                            }}>
                                {timeString} IST
                            </span>
                        </div>
                    )}

                    {/* Let's Talk CTA - Hide on mobile, show menu toggle instead */}
                    {!isMobile && (
                        <Link href="/contact" className="btn btn-primary" style={{
                            padding: '0.6rem 1.2rem',
                            fontSize: '0.85rem',
                            background: '#fff',
                            color: '#000',
                            borderRadius: '100px',
                            fontWeight: '600',
                            border: 'none',
                            letterSpacing: '-0.01em',
                            display: scrolled ? 'none' : 'flex',
                            transition: 'transform 0.2s, box-shadow 0.2s',
                            whiteSpace: 'nowrap',
                            boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.05)';
                                e.currentTarget.style.boxShadow = '0 0 30px rgba(168, 85, 247, 0.8)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.boxShadow = '0 0 20px rgba(168, 85, 247, 0.5)';
                            }}
                        >
                            Let's Talk
                        </Link>
                    )}

                    {/* Mobile Menu Toggle */}
                    {isMobile && (
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            style={{
                                background: '#ffffff',
                                border: 'none',
                                color: '#000000',
                                width: '42px',
                                height: '42px',
                                borderRadius: '50%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '4px',
                                cursor: 'pointer',
                                transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                                position: 'relative',
                                overflow: 'hidden',
                                boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)'
                            }}
                        >
                            <motion.div
                                animate={isMenuOpen ? { rotate: 45, y: 3 } : { rotate: 0, y: 0 }}
                                style={{
                                    width: '18px',
                                    height: '2px',
                                    background: '#000000',
                                    borderRadius: '10px'
                                }}
                            />
                            <motion.div
                                animate={isMenuOpen ? { rotate: -45, y: -3, width: '18px' } : { rotate: 0, y: 0, width: '12px' }}
                                style={{
                                    height: '2px',
                                    background: isMenuOpen ? '#000000' : 'var(--accent-primary)',
                                    borderRadius: '10px',
                                    alignSelf: isMenuOpen ? 'center' : 'flex-end',
                                    marginRight: isMenuOpen ? '0' : '10px'
                                }}
                            />
                        </button>
                    )}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobile && isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                            position: 'absolute',
                            top: '100%',
                            left: '1.5rem',
                            right: '1.5rem',
                            background: 'var(--glass)',
                            backdropFilter: 'blur(20px)',
                            borderRadius: '24px',
                            marginTop: '1rem',
                            padding: '1.5rem',
                            border: '1px solid var(--glass-border)',
                            overflow: 'hidden',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                        }}
                    >
                        <nav>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', listStyle: 'none', padding: 0, margin: 0 }}>
                                {navLinks.map((link, idx) => (
                                    <motion.li
                                        key={link.path}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                    >
                                        <Link
                                            href={link.path}
                                            style={{
                                                display: 'block',
                                                padding: '1rem',
                                                borderRadius: '12px',
                                                color: pathname === link.path ? 'var(--accent-primary)' : 'var(--text-primary)',
                                                fontSize: '1.25rem',
                                                fontWeight: '700',
                                                textDecoration: 'none',
                                                background: pathname === link.path ? 'rgba(168, 85, 247, 0.1)' : 'transparent'
                                            }}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.li>
                                ))}
                                <motion.li
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: navLinks.length * 0.1 }}
                                    style={{ marginTop: '1rem' }}
                                >
                                    <Link
                                        href="/contact"
                                        style={{
                                            display: 'block',
                                            padding: '1.25rem',
                                            borderRadius: '16px',
                                            background: 'var(--accent-primary)',
                                            color: '#fff',
                                            textAlign: 'center',
                                            fontSize: '1.1rem',
                                            fontWeight: '800',
                                            textDecoration: 'none',
                                            boxShadow: '0 10px 20px rgba(168, 85, 247, 0.3)'
                                        }}
                                    >
                                        LET'S TALK
                                    </Link>
                                </motion.li>
                            </ul>
                        </nav>

                        <div style={{
                            marginTop: '2rem',
                            paddingTop: '1.5rem',
                            borderTop: '1px solid var(--glass-border)',
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '1rem',
                            color: 'var(--text-secondary)',
                            fontSize: '0.8rem',
                            fontWeight: '500'
                        }}>
                            <span>{timeString} IST</span>
                            <span style={{ opacity: 0.3 }}>|</span>
                            <span>AVAILABLE GLOBALLY</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;
