import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaTwitter, FaHeart } from 'react-icons/fa'

const Footer = ({ darkMode }) => {
    const currentYear = new Date().getFullYear()

    const socialLinks = [
        { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
        { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' },
        { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
    ]

    return (
        <footer className={`relative py-12 ${darkMode ? 'bg-surface-dark border-t border-surface-dark-3/50' : 'bg-white border-t border-surface-light-3/50'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center gap-6">
                    {/* Logo */}
                    <motion.a
                        href="#home"
                        className="text-2xl font-bold gradient-text"
                        whileHover={{ scale: 1.05 }}
                    >
                        {'Dhaval '}
                    </motion.a>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.15, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className={`p-3 rounded-xl transition-colors duration-200 ${darkMode
                                    ? 'bg-surface-dark-2 hover:bg-primary/20 text-text-muted-dark hover:text-primary'
                                    : 'bg-surface-light-2 hover:bg-primary/10 text-text-muted-light hover:text-primary'
                                    }`}
                                aria-label={social.label}
                            >
                                <social.icon className="w-5 h-5" />
                            </motion.a>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className={`w-full max-w-xs h-px ${darkMode ? 'bg-surface-dark-3/50' : 'bg-surface-light-3/50'}`} />

                    {/* Copyright */}
                    <p className={`text-sm flex items-center gap-1.5 ${darkMode ? 'text-text-muted-dark' : 'text-text-muted-light'}`}>
                        © {currentYear} Made with <FaHeart className="text-red-500 text-xs" /> by
                        <span className="gradient-text font-semibold">Developer</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
