import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import {
    SiReact, SiHtml5, SiTailwindcss, SiJavascript,
    SiNodedotjs, SiMongodb, SiMysql,
    SiGit, SiFigma, SiPostman, SiExpress
} from 'react-icons/si'

// Inline fallback for CSS3 (SiCss3 is not exported by react-icons/si)
const CssIcon = ({ className, style }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
    </svg>
)

const skillCategories = [
    {
        name: 'Frontend',
        icon: '🎨',
        skills: [
            { name: 'React.js', icon: SiReact, level: 92, color: '#61DAFB' },
            { name: 'JavaScript', icon: SiJavascript, level: 90, color: '#F7DF1E' },
            { name: 'HTML5', icon: SiHtml5, level: 95, color: '#E34F26' },
            { name: 'CSS3', icon: CssIcon, level: 90, color: '#1572B6' },
            { name: 'Tailwind CSS', icon: SiTailwindcss, level: 88, color: '#06B6D4' },
        ],
    },
    {
        name: 'Backend',
        icon: '⚙️',
        skills: [
            { name: 'Node.js', icon: SiNodedotjs, level: 85, color: '#339933' },
            { name: 'Express.js', icon: SiExpress, level: 82, color: '#000000' },
            { name: 'MongoDB', icon: SiMongodb, level: 80, color: '#47A248' },
            { name: 'MySQL', icon: SiMysql, level: 75, color: '#4479A1' },
        ],
    },
    {
        name: 'Tools & Other',
        icon: '🛠️',
        skills: [
            { name: 'Git', icon: SiGit, level: 88, color: '#F05032' },
            { name: 'Figma', icon: SiFigma, level: 72, color: '#F24E1E' },
            { name: 'Postman', icon: SiPostman, level: 85, color: '#FF6C37' },
        ],
    },
]

const SkillBar = ({ skill, index, darkMode, isVisible }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1, type: "spring", damping: 15 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className={`p-4 rounded-xl transition-all duration-200 shadow-sm hover:shadow-lg ${darkMode
                ? 'bg-surface-dark hover:bg-surface-dark/80'
                : 'bg-surface-light hover:bg-surface-light/80'
                }`}
        >
            <div className="flex items-center gap-3 mb-3">
                <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${skill.color}15` }}
                >
                    <skill.icon className="w-5 h-5" style={{ color: skill.color }} />
                </div>
                <div className="flex-1">
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold">{skill.name}</span>
                        <span className={`text-xs font-medium ${darkMode ? 'text-text-muted-dark' : 'text-text-muted-light'}`}>
                            {skill.level}%
                        </span>
                    </div>
                </div>
            </div>
            {/* Progress Bar */}
            <div className={`h-2 rounded-full overflow-hidden ${darkMode ? 'bg-surface-dark-3' : 'bg-surface-light-3'}`}>
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{
                        background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})`,
                    }}
                />
            </div>
        </motion.div>
    )
}

const Skills = ({ darkMode }) => {
    const [activeCategory, setActiveCategory] = useState(0)

    return (
        <section id="skills" className="py-24 sm:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="Skills & Expertise"
                    subtitle="Technologies and tools I use to bring ideas to life"
                    darkMode={darkMode}
                />

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {skillCategories.map((cat, i) => (
                        <motion.button
                            key={cat.name}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveCategory(i)}
                            className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${activeCategory === i
                                ? 'gradient-bg text-white shadow-lg shadow-primary/25'
                                : darkMode
                                    ? 'bg-surface-dark-2 text-text-muted-dark hover:bg-surface-dark-3'
                                    : 'bg-white text-text-muted-light hover:bg-surface-light-2 shadow-sm'
                                }`}
                        >
                            <span>{cat.icon}</span>
                            {cat.name}
                        </motion.button>
                    ))}
                </div>

                {/* Skills Grid */}
                <motion.div
                    key={activeCategory}
                    variants={{
                        hidden: { opacity: 0 },
                        show: { opacity: 1, transition: { staggerChildren: 0.1 } }
                    }}
                    initial="hidden"
                    animate="show"
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                    {skillCategories[activeCategory].skills.map((skill, index) => (
                        <SkillBar
                            key={skill.name}
                            skill={skill}
                            index={index}
                            darkMode={darkMode}
                            isVisible={true}
                        />
                    ))}
                </motion.div>

                {/* Overall Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16"
                >
                    {[
                        { label: 'Technologies', value: '14+', icon: '💻' },
                        { label: 'Projects Completed', value: '20+', icon: '🚀' },
                        { label: 'Years Experience', value: '1+', icon: '📅' },
                        { label: 'Cups of Coffee', value: '∞', icon: '☕' },
                    ].map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -4 }}
                            className={`text-center p-6 rounded-2xl transition-all duration-200 ${darkMode
                                ? 'bg-surface-dark-2 hover:shadow-lg hover:shadow-primary/5'
                                : 'bg-white shadow-sm hover:shadow-lg'
                                }`}
                        >
                            <motion.span
                                animate={{ y: [0, -4, 0] }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                                className="text-3xl mb-2 block"
                            >
                                {stat.icon}
                            </motion.span>
                            <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                            <div className={`text-xs sm:text-sm ${darkMode ? 'text-text-muted-dark' : 'text-text-muted-light'}`}>
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Skills
