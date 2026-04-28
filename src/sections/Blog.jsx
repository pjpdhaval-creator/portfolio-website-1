import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { HiArrowRight, HiCalendar, HiClock } from 'react-icons/hi'

const blogPosts = [
    {
        id: 1,
        title: 'Building Scalable React Apps in 2026',
        description: 'Modern React patterns, server components, and performance optimization techniques every developer should know.',
        category: 'React',
        date: 'Apr 15, 2026',
        readTime: '8 min',
        color: 'from-blue-500 to-indigo-600',
    },
    {
        id: 2,
        title: 'The Complete Guide to REST API Design',
        description: 'Best practices for designing robust REST APIs with proper authentication, error handling, and documentation.',
        category: 'Backend',
        date: 'Mar 28, 2026',
        readTime: '12 min',
        color: 'from-emerald-500 to-teal-600',
    },
    {
        id: 3,
        title: 'CSS Architecture: Chaos to Clean Code',
        description: 'Organize CSS for large-scale apps using modern methodologies, utility frameworks, and design tokens.',
        category: 'CSS',
        date: 'Mar 10, 2026',
        readTime: '6 min',
        color: 'from-orange-500 to-rose-600',
    },
]

const Blog = ({ darkMode }) => {
    return (
        <section id="blog" className={`py-24 sm:py-32 ${darkMode ? 'bg-surface-dark' : 'bg-surface-light-2'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading title="Latest Articles" subtitle="Thoughts, tutorials, and insights from my development journey" darkMode={darkMode} />
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {blogPosts.map((post, i) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group"
                        >
                            <div className={`h-full rounded-2xl overflow-hidden transition-all duration-300 ${darkMode ? 'bg-surface-dark-2 hover:shadow-2xl hover:shadow-primary/10' : 'bg-white shadow-sm hover:shadow-2xl hover:shadow-gray-200/50'}`}>
                                <div className={`h-36 bg-gradient-to-br ${post.color} relative overflow-hidden`}>
                                    <div className="absolute inset-0 flex items-center justify-center"><span className="text-5xl opacity-30">📝</span></div>
                                    <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10" />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full">{post.category}</span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className={`flex items-center gap-4 mb-3 text-xs ${darkMode ? 'text-text-muted-dark' : 'text-text-muted-light'}`}>
                                        <span className="flex items-center gap-1"><HiCalendar className="w-3.5 h-3.5" />{post.date}</span>
                                        <span className="flex items-center gap-1"><HiClock className="w-3.5 h-3.5" />{post.readTime}</span>
                                    </div>
                                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors leading-snug">{post.title}</h3>
                                    <p className={`text-sm leading-relaxed mb-4 ${darkMode ? 'text-text-muted-dark' : 'text-text-muted-light'}`}>{post.description}</p>
                                    <motion.button whileHover={{ x: 4 }} className={`flex items-center gap-2 text-sm font-semibold ${darkMode ? 'text-primary-light' : 'text-primary'}`}>
                                        Read More <HiArrowRight className="w-4 h-4" />
                                    </motion.button>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Blog
