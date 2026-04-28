import React from 'react'
import { motion } from 'framer-motion'
import { HiArrowDown, HiCode } from 'react-icons/hi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Hero = ({ darkMode }) => {
    const handleScroll = (href) => {
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Animated Background Glows */}
            <motion.div
                animate={{ x: [-50, 50, -50], y: [-50, 50, -50] }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="hero-glow bg-primary top-20 -left-20"
            />
            <motion.div
                animate={{ x: [50, -50, 50], y: [50, -50, 50] }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className="hero-glow bg-accent top-40 right-0"
            />
            <motion.div
                animate={{ x: [-30, 30, -30], y: [30, -30, 30] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="hero-glow bg-primary-light bottom-20 left-1/3"
            />

            {/* Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `radial-gradient(circle, ${darkMode ? '#6366f1' : '#4f46e5'} 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 ${darkMode
                                    ? 'bg-primary/10 text-primary-light border border-primary/20'
                                    : 'bg-primary/5 text-primary-dark border border-primary/15'
                                    }`}
                            >
                                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                Available for opportunities
                            </motion.div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-4"
                        >
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="inline-block"
                            >
                                Hi, I'm{' '}
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: 'spring', damping: 10, delay: 0.3 }}
                                className="gradient-text inline-block"
                            >
                                Dhaval
                            </motion.span>
                            <br />
                            <motion.span
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: 'spring', damping: 10, delay: 0.4 }}
                                className="gradient-text inline-block"
                            >
                                Prajapati
                            </motion.span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className={`text-xl sm:text-2xl font-medium mb-2 ${darkMode ? 'text-text-muted-dark' : 'text-text-muted-light'}`}
                        >
                            Full Stack Developer
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className={`text-base sm:text-lg max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed ${darkMode ? 'text-text-muted-dark/80' : 'text-text-muted-light/80'}`}
                        >
                            Crafting pixel-perfect digital experiences with clean code and creative solutions. Turning complex problems into elegant, scalable applications.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-wrap items-center gap-4 justify-center lg:justify-start"
                        >
                            <motion.button
                                whileHover={{ scale: 1.03, boxShadow: '0 10px 40px rgba(99, 102, 241, 0.3)' }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() => handleScroll('#projects')}
                                className="px-8 py-3.5 gradient-bg text-white font-semibold rounded-xl shadow-lg shadow-primary/25 transition-all duration-200 flex items-center gap-2"
                            >
                                <HiCode className="w-5 h-5" />
                                View Projects
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() => handleScroll('#contact')}
                                className={`px-8 py-3.5 font-semibold rounded-xl transition-all duration-200 gradient-border ${darkMode
                                    ? 'bg-surface-dark-2 text-text-dark hover:bg-surface-dark-3'
                                    : 'bg-white text-text-light hover:bg-surface-light-2'
                                    }`}
                            >
                                Contact Me
                            </motion.button>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex items-center gap-3 mt-8 justify-center lg:justify-start"
                        >
                            {[
                                { icon: FaGithub, href: 'https://github.com/pjpdhval', label: 'GitHub' },
                                { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' },
                            ].map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    className={`p-3 rounded-xl transition-colors ${darkMode
                                        ? 'bg-surface-dark-2 hover:bg-surface-dark-3 text-text-muted-dark hover:text-primary'
                                        : 'bg-surface-light-2 hover:bg-surface-light-3 text-text-muted-light hover:text-primary'
                                        }`}
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative flex-shrink-0"
                    >
                        <div className="relative w-56 h-56 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                            {/* Animated ring */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                                className="absolute inset-4 rounded-full border-2 border-dashed border-accent/20"
                            />

                            {/* Avatar container */}
                            <motion.div
                                animate={{ scale: [1, 1.02, 1] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className={`absolute inset-8 rounded-full overflow-hidden gradient-border ${darkMode ? 'bg-surface-dark-2' : 'bg-surface-light-2'
                                    }`}>
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full gradient-bg flex items-center justify-center mb-2">
                                            <span className="text-4xl sm:text-5xl font-bold text-white">D</span>
                                        </div>
                                        <p className={`text-xs font-medium mt-2 ${darkMode ? 'text-text-muted-dark' : 'text-text-muted-light'}`}>
                                            Developer
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating badges */}
                            <motion.div
                                animate={{ y: [-5, 5, -5] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                                className={`absolute top-6 right-6 px-3 py-1.5 rounded-lg text-xs font-semibold shadow-lg ${darkMode ? 'bg-surface-dark-2 text-primary-light' : 'bg-white text-primary'
                                    }`}
                            >
                                React.js ⚛️
                            </motion.div>
                            <motion.div
                                animate={{ y: [5, -5, 5] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                                className={`absolute bottom-12 left-0 px-3 py-1.5 rounded-lg text-xs font-semibold shadow-lg ${darkMode ? 'bg-surface-dark-2 text-accent-light' : 'bg-white text-accent'
                                    }`}
                            >
                                Node.js 🚀
                            </motion.div>
                            <motion.div
                                animate={{ y: [-3, 7, -3] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                className={`absolute bottom-6 right-0 px-3 py-1.5 rounded-lg text-xs font-semibold shadow-lg ${darkMode ? 'bg-surface-dark-2 text-green-400' : 'bg-white text-green-600'
                                    }`}
                            >
                                MongoDB 🍃
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
                >
                    <motion.button
                        onClick={() => handleScroll('#about')}
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`p-2 rounded-full ${darkMode ? 'text-text-muted-dark' : 'text-text-muted-light'}`}
                        aria-label="Scroll down"
                    >
                        <HiArrowDown className="w-6 h-6" />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
