import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { HiExternalLink, HiX, HiChevronRight } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'

const projectsData = [
    {
        id: 1,
        title: 'Book Stock Manager — MERN Inventory Suite',
        description: 'A robust inventory management system for bookstores with professional stock tracking and reporting.',
        problem: 'Small bookstore owners struggle with manual stock-in/stock-out tracking, leading to inventory discrepancies and unmonitored financial metrics.',
        solution: 'Developed a comprehensive MERN stack dashboard featuring automated stock quantity alerts, real-time cost/revenue calculation, and dedicated admin/user roles with protected routes.',
        techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind CSS', 'JWT'],
        liveDemo: '#',
        github: 'https://github.com/pjpdhval/book-stock-manager',
        image: '/projects/book-stock.png',
        color: 'from-indigo-600 to-blue-600',
    },
    {
        id: 2,
        title: 'ShopSphere — Modern E-Commerce UI',
        description: 'A sleek, performance-optimized e-commerce landing page with dynamic product filtering and search.',
        problem: 'Older e-commerce sites are often slow and unresponsive, making it difficult for users to discover products efficiently on mobile devices.',
        solution: 'Built a responsive frontend using Tailwind CSS for rapid styling, integrated localized JSON data for lightning-fast product filtering, and implemented smooth transiton effects for a premium feel.',
        techStack: ['HTML5', 'Tailwind CSS', 'JavaScript', 'JSON API', 'AOS'],
        liveDemo: '#',
        github: 'https://github.com/pjpdhval/e-commerce-website',
        image: '/projects/shopsphere.png',
        color: 'from-cyan-500 to-teal-500',
    },
    {
        id: 3,
        title: 'Library System — Digital Cataloger',
        description: 'A clean and efficient web application for managing library books and tracking loan status.',
        problem: 'Tracking borrowed books and cataloging new arrivals manually is time-consuming and often leads to misplaced records.',
        solution: 'Created a centralized dashboard that allows for easy book entry, status updates, and interactive searching, all packaged in a lightweight, accessible web interface.',
        techStack: ['HTML5', 'CSS3', 'JavaScript', 'DOM API'],
        liveDemo: '#',
        github: 'https://github.com/pjpdhval/library-system-management',
        image: '/projects/library.png',
        color: 'from-orange-500 to-rose-600',
    },
    {
        id: 4,
        title: 'FullStack EMS — Employee Management Solution',
        description: 'A comprehensive system for managing employee records, attendance, and departmental payroll.',
        problem: 'HR departments often waste hours syncing data between separate attendance sheets and payroll software, leading to human errors.',
        solution: 'Built an integrated Full Stack environment where attendance logs automatically trigger payroll updates, reducing administrative overhead by 40%. Included a secure admin portal for role-based data management.',
        techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
        liveDemo: '#',
        github: 'https://github.com/pjpdhval/FullStack-EMS',
        image: '/projects/ems.png',
        color: 'from-fuchsia-600 to-purple-700',
    },
]

const ProjectCard = ({ project, index, darkMode, onClick }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.15, type: 'spring', damping: 20 }}
            whileHover={{ y: -12, scale: 1.02 }}
            className="group cursor-pointer"
            onClick={() => onClick(project)}
        >
            <div className={`h-full rounded-2xl overflow-hidden transition-all duration-300 ${darkMode
                ? 'bg-surface-dark-2 hover:shadow-2xl hover:shadow-primary/10'
                : 'bg-white shadow-sm hover:shadow-2xl hover:shadow-gray-200/50'
                }`}>
                {/* Project Header Image/Gradient */}
                <div className={`h-56 relative overflow-hidden`}>
                    {project.image ? (
                        <motion.img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    ) : (
                        <div className={`w-full h-full bg-gradient-to-br ${project.color}`} />
                    )}
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.div
                            className="text-white text-center px-6"
                        >
                            <p className="text-sm font-bold bg-primary/80 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
                                View Case Study
                            </p>
                        </motion.div>
                    </div>

                    {/* Branding fallback if no image */}
                    {!project.image && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                <span className="text-2xl font-bold text-white">{project.title.charAt(0)}</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Card Content */}
                <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>
                    <p className={`text-sm leading-relaxed mb-4 ${darkMode ? 'text-text-muted-dark' : 'text-text-muted-light'}`}>
                        {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.slice(0, 4).map((tech) => (
                            <span
                                key={tech}
                                className={`px-3 py-1 rounded-full text-xs font-medium ${darkMode
                                    ? 'bg-primary/10 text-primary-light'
                                    : 'bg-primary/5 text-primary-dark'
                                    }`}
                            >
                                {tech}
                            </span>
                        ))}
                        {project.techStack.length > 4 && (
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${darkMode ? 'bg-surface-dark-3 text-text-muted-dark' : 'bg-surface-light-3 text-text-muted-light'
                                }`}>
                                +{project.techStack.length - 4}
                            </span>
                        )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                        <motion.a
                            href={project.liveDemo}
                            onClick={(e) => e.stopPropagation()}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-1.5 px-4 py-2 gradient-bg text-white text-sm font-medium rounded-lg"
                        >
                            <HiExternalLink className="w-4 h-4" />
                            Live Demo
                        </motion.a>
                        <motion.a
                            href={project.github}
                            onClick={(e) => e.stopPropagation()}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${darkMode
                                ? 'bg-surface-dark-3 hover:bg-surface-dark-3/80 text-text-dark'
                                : 'bg-surface-light-3 hover:bg-surface-light-3/80 text-text-light'
                                }`}
                        >
                            <FaGithub className="w-4 h-4" />
                            Code
                        </motion.a>
                        <motion.button
                            whileHover={{ x: 4 }}
                            onClick={(e) => { e.stopPropagation(); onClick(project) }}
                            className={`ml-auto text-sm font-medium flex items-center gap-1 ${darkMode ? 'text-primary-light' : 'text-primary'
                                }`}
                        >
                            Case Study <HiChevronRight className="w-4 h-4" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

const ProjectModal = ({ project, darkMode, onClose }) => {
    if (!project) return null

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Modal */}
            <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
                className={`relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl p-6 sm:p-8 ${darkMode ? 'bg-surface-dark-2' : 'bg-white'
                    }`}
            >
                {/* Close Button */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    className={`absolute top-4 right-4 p-2 rounded-xl transition-colors ${darkMode ? 'hover:bg-surface-dark-3' : 'hover:bg-surface-light-2'
                        }`}
                >
                    <HiX className="w-5 h-5" />
                </motion.button>

                {/* Header */}
                <div className={`h-32 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-6 bg-gradient-to-br ${project.color} rounded-t-2xl flex items-center justify-center`}>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white px-6 text-center">{project.title}</h2>
                </div>

                {/* Content */}
                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-red-400" />
                            The Problem
                        </h3>
                        <p className={`leading-relaxed ${darkMode ? 'text-text-muted-dark' : 'text-text-muted-light'}`}>
                            {project.problem}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-400" />
                            The Solution
                        </h3>
                        <p className={`leading-relaxed ${darkMode ? 'text-text-muted-dark' : 'text-text-muted-light'}`}>
                            {project.solution}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-3">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className={`px-4 py-2 rounded-xl text-sm font-medium ${darkMode
                                        ? 'bg-primary/10 text-primary-light border border-primary/20'
                                        : 'bg-primary/5 text-primary-dark border border-primary/10'
                                        }`}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 pt-4">
                        <motion.a
                            href={project.liveDemo}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="flex items-center gap-2 px-6 py-3 gradient-bg text-white font-semibold rounded-xl shadow-lg shadow-primary/25"
                        >
                            <HiExternalLink className="w-5 h-5" />
                            Live Demo
                        </motion.a>
                        <motion.a
                            href={project.github}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className={`flex items-center gap-2 px-6 py-3 font-semibold rounded-xl transition-colors ${darkMode
                                ? 'bg-surface-dark-3 hover:bg-surface-dark-3/80 text-text-dark'
                                : 'bg-surface-light-3 hover:bg-surface-light-3/80 text-text-light'
                                }`}
                        >
                            <FaGithub className="w-5 h-5" />
                            Source Code
                        </motion.a>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

const Projects = ({ darkMode }) => {
    const [selectedProject, setSelectedProject] = useState(null)

    return (
        <section id="projects" className={`py-24 sm:py-32 ${darkMode ? 'bg-surface-dark' : 'bg-surface-light-2'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="Featured Projects"
                    subtitle="Explore my latest work and the stories behind each project"
                    darkMode={darkMode}
                />

                <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
                    {projectsData.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            darkMode={darkMode}
                            onClick={setSelectedProject}
                        />
                    ))}
                </div>
            </div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        darkMode={darkMode}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    )
}

export default Projects
