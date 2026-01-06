import React from 'react';
import Hero from '../components/Hero.js';
import Projects from '../components/Projects.js';
import About from '../components/About.js';
import Contact from '../components/Contact.js';

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Projects />
            <Contact />
        </>
    );
};

export default Home;
