import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiSun, HiMoon, HiMenuAlt3, HiX } from 'react-icons/hi'

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
]

const Navbar = ({ darkMode, toggleTheme }) => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('home')
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const handleScroll = useCallback(() => {
        setIsScrolled(window.scrollY > 20)
        const sections = navLinks.map(l => l.href.slice(1))
        for (let i = sections.length - 1; i >= 0; i--) {
            const el = document.getElementById(sections[i])
            if (el) {
                const rect = el.getBoundingClientRect()
                if (rect.top <= 120) {
                    setActiveSection(sections[i])
                    break
                }
            }
        }
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [handleScroll])

    const handleNavClick = (href) => {
        setMobileMenuOpen(false)
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? darkMode
                    ? 'glass-dark shadow-lg shadow-primary/5'
                    : 'glass-light shadow-lg shadow-gray-200/50'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <motion.a
                        href="#home"
                        onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
                        className="text-xl sm:text-2xl font-bold gradient-text cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {'Dhaval pjp '}
                    </motion.a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${activeSection === link.href.slice(1)
                                    ? 'text-primary'
                                    : darkMode
                                        ? 'text-text-muted-dark hover:text-text-dark'
                                        : 'text-text-muted-light hover:text-text-light'
                                    }`}
                            >
                                {link.name}
                                {activeSection === link.href.slice(1) && (
                                    <motion.span
                                        layoutId="activeNav"
                                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 gradient-bg rounded-full"
                                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </a>
                        ))}
                    </div>

                    {/* Theme Toggle + Mobile Menu Button */}
                    <div className="flex items-center gap-2">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleTheme}
                            className={`p-2.5 rounded-xl transition-colors duration-200 ${darkMode
                                ? 'bg-surface-dark-2 hover:bg-surface-dark-3 text-yellow-400'
                                : 'bg-surface-light-2 hover:bg-surface-light-3 text-primary-dark'
                                }`}
                            aria-label="Toggle theme"
                        >
                            <AnimatePresence mode="wait">
                                {darkMode ? (
                                    <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                        <HiSun className="w-5 h-5" />
                                    </motion.div>
                                ) : (
                                    <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                        <HiMoon className="w-5 h-5" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>

                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className={`md:hidden p-2.5 rounded-xl transition-colors duration-200 ${darkMode
                                ? 'bg-surface-dark-2 hover:bg-surface-dark-3'
                                : 'bg-surface-light-2 hover:bg-surface-light-3'
                                }`}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <HiX className="w-5 h-5" /> : <HiMenuAlt3 className="w-5 h-5" />}
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`md:hidden overflow-hidden ${darkMode ? 'glass-dark' : 'glass-light'}`}
                    >
                        <div className="px-4 py-4 space-y-1">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeSection === link.href.slice(1)
                                        ? 'gradient-bg text-white'
                                        : darkMode
                                            ? 'text-text-muted-dark hover:bg-surface-dark-2'
                                            : 'text-text-muted-light hover:bg-surface-light-2'
                                        }`}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

export default Navbar
