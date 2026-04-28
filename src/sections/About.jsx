import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { HiBriefcase, HiAcademicCap, HiLightBulb, HiSparkles } from 'react-icons/hi'

const About = ({ darkMode }) => {
    const highlights = [
        {
            icon: HiBriefcase,
            title: '1+ Years',
            desc: 'Building web application',
            color: 'text-primary',
            bg: darkMode ? 'bg-primary/10' : 'bg-primary/5',
        },
        {
            icon: HiAcademicCap,
            title: 'BCA Graduate',
            desc: 'Top university',
            color: 'text-accent',
            bg: darkMode ? 'bg-accent/10' : 'bg-accent/5',
        },
        {
            icon: HiLightBulb,
            title: '20+ Projects',
            desc: 'Completed',
            color: 'text-yellow-400',
            bg: darkMode ? 'bg-yellow-400/10' : 'bg-yellow-400/5',
        },
        {
            icon: HiSparkles,
            title: 'Open Source',
            desc: 'Contributor',
            color: 'text-green-400',
            bg: darkMode ? 'bg-green-400/10' : 'bg-green-400/5',
        },
    ]

    return (
        <section id="about" className="py-24 sm:py-32 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="About Me"
                    subtitle="Get to know who I am and what drives me"
                    darkMode={darkMode}
                />

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left - Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                        {highlights.map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.03, y: -4 }}
                                className={`p-6 rounded-2xl transition-all duration-200 ${darkMode
                                    ? 'bg-surface-dark-2 hover:shadow-lg hover:shadow-primary/5'
                                    : 'bg-white shadow-sm hover:shadow-lg hover:shadow-gray-200/50'
                                    }`}
                            >
                                <motion.div
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.2 }}
                                    className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-3`}
                                >
                                    <item.icon className={`w-6 h-6 ${item.color}`} />
                                </motion.div>
                                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                                <p className={`text-sm ${darkMode ? 'text-text-muted-dark' : 'text-text-muted-light'}`}>
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Right - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                        >
                            <h3 className="text-2xl font-bold mb-4">
                                Passionate about building{' '}
                                <span className="gradient-text">meaningful</span> digital products
                            </h3>
                            <p className={`leading-relaxed ${darkMode ? 'text-text-muted-dark' : 'text-text-muted-light'}`}>
                                I'm a Full Stack Developer with a passion for creating beautiful, functional web applications.
                                My journey started with curiosity about how websites work and evolved into a deep love for
                                crafting user-centric digital experiences.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <h4 className="text-lg font-semibold mb-2">My Journey</h4>
                            <p className={`leading-relaxed ${darkMode ? 'text-text-muted-dark' : 'text-text-muted-light'}`}>
                                Starting from building simple HTML pages, I've grown into a full-stack developer proficient
                                in React, Node.js, and modern web technologies. I've contributed to open-source projects,
                                built tools used by thousands, and continuously push myself to learn and grow.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            <h4 className="text-lg font-semibold mb-2">Goals & Interests</h4>
                            <p className={`leading-relaxed ${darkMode ? 'text-text-muted-dark' : 'text-text-muted-light'}`}>
                                I'm passionate about AI integration in web apps, contributing to developer tools, and
                                mentoring aspiring developers. When I'm not coding, you'll find me exploring new tech,
                                writing technical blogs, or contributing to community projects.
                            </p>
                        </motion.div>

                        <motion.a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault()
                                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                            }}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-2 px-6 py-3 gradient-bg text-white font-semibold rounded-xl shadow-lg shadow-primary/25"
                        >
                            Let's Connect
                            <span className="text-lg">→</span>
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About
