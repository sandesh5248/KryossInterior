import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Hero.jsx.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-background"></div>
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-text"
                >
                    <h1>Home Interiors <br />Made <span className="accent-text italic">Easy</span></h1>
                    <p>Transform your living space with expert guidance from 400+ top designers. We handle everything from concept to flawless installation.</p>
                    <div className="hero-btns" >
                        <Link to="/contact-us" className="btn hero-btn-primary">
                            Book Free Consultation <ArrowRight size={18} />
                        </Link>
                        <Link to="/projects" className="btn hero-btn-outline" >
                            View Recent Projects
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
