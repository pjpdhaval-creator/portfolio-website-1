import React from 'react'
import { motion } from 'framer-motion'

const Loader = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <motion.div
                className="flex gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        className="w-4 h-4 rounded-full gradient-bg"
                        animate={{
                            y: [0, -20, 0],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: i * 0.15,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </motion.div>
        </div>
    )
}

export default Loader
