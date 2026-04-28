import React from 'react'
import { motion } from 'framer-motion'

const SectionHeading = ({ title, subtitle, darkMode }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                <span className="gradient-text">{title}</span>
            </h2>
            {subtitle && (
                <p className={`text-base sm:text-lg max-w-2xl mx-auto ${darkMode ? 'text-text-muted-dark' : 'text-text-muted-light'}`}>
                    {subtitle}
                </p>
            )}
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '4rem' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-1 gradient-bg rounded-full mx-auto mt-6"
            />
        </motion.div>
    )
}

export default SectionHeading
