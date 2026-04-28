import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import Toast from '../components/Toast'
import { useContactForm } from '../hooks/useContactForm'
import { HiMail, HiLocationMarker, HiCheckCircle } from 'react-icons/hi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Contact = ({ darkMode }) => {
    // IMPORTANT: Replace 'YOUR_WEB3FORMS_ACCESS_KEY' with your actual key from https://web3forms.com
    // Just enter your email (pjpdhval@gmail.com) on their site to get a free key!
    const ACCESS_KEY = '882d2760-a383-40fc-8a02-778743fdf936'
    const { formData, status, toasts, shake, handleChange, submitForm, removeToast, loading } = useContactForm(ACCESS_KEY)

    const handleFormSubmit = (e) => {
        if (ACCESS_KEY === 'YOUR_WEB3FORMS_ACCESS_KEY') {
            alert('Wait! You have not added your Web3Forms Access Key yet. \n\n1. Go to web3forms.com \n2. Get a key for pjpdhval@gmail.com \n3. Paste it in Contact.jsx (Line 11)')
            return
        }
        submitForm(e)
    }

    const contactInfo = [
        { icon: HiMail, label: 'Email', value: 'pjpdhval@gmail.com', href: 'mailto:pjpdhval@gmail.com' },
        { icon: HiLocationMarker, label: 'Location', value: 'Surat, Gujarat', href: '#' },
    ]

    const inputClass = `w-full px-4 py-3.5 rounded-xl text-sm font-medium outline-none transition-all duration-300 ${darkMode
        ? 'bg-surface-dark border border-surface-dark-3 text-text-dark placeholder:text-text-muted-dark/40 focus:border-primary focus:ring-4 focus:ring-primary/10'
        : 'bg-surface-light border border-surface-light-3 text-text-light placeholder:text-text-muted-light/40 focus:border-primary focus:ring-4 focus:ring-primary/10'
        }`

    const shakeVariants = {
        shake: {
            x: [0, -10, 10, -10, 10, 0],
            transition: { duration: 0.4 }
        }
    }

    return (
        <section id="contact" className="py-24 sm:py-32 relative">
            <Toast toasts={toasts} removeToast={removeToast} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading title="Get In Touch" subtitle="Have a project in mind? Let's work together!" darkMode={darkMode} />

                <div className="grid lg:grid-cols-5 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Let's talk about <span className="gradient-text">everything!</span></h3>
                            <p className={`${darkMode ? 'text-text-muted-dark' : 'text-text-muted-light'}`}>
                                Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {contactInfo.map((info, i) => (
                                <motion.a
                                    key={info.label}
                                    href={info.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.15 }}
                                    whileHover={{ x: 4 }}
                                    className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${darkMode ? 'bg-surface-dark-2/50 hover:bg-surface-dark-2' : 'bg-white shadow-sm hover:shadow-md'
                                        }`}
                                >
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${darkMode ? 'bg-primary/10' : 'bg-primary/5'
                                        }`}>
                                        <motion.div animate={{ rotate: [0, -10, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}>
                                            <info.icon className="w-5 h-5 text-primary" />
                                        </motion.div>
                                    </div>
                                    <div>
                                        <p className={`text-xs ${darkMode ? 'text-text-muted-dark' : 'text-text-muted-light'}`}>{info.label}</p>
                                        <p className="text-sm font-semibold">{info.value}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Social */}
                        <div className="pt-2">
                            <p className={`text-xs font-semibold uppercase tracking-widest mb-3 ${darkMode ? 'text-text-muted-dark' : 'text-text-muted-light'}`}>
                                Find me on
                            </p>
                            <div className="flex gap-3">
                                <motion.a
                                    href="https://github.com/pjpdhval"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="flex-1 flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl font-semibold text-sm text-white shadow-lg transition-all duration-200"
                                    style={{ background: 'linear-gradient(135deg, #24292e, #404448)' }}
                                    aria-label="GitHub"
                                >
                                    <FaGithub className="w-5 h-5" />
                                    GitHub
                                </motion.a>
                                <motion.a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="flex-1 flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl font-semibold text-sm text-white shadow-lg transition-all duration-200"
                                    style={{ background: 'linear-gradient(135deg, #0077b5, #0ea5e9)' }}
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedinIn className="w-5 h-5" />
                                    LinkedIn
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-3"
                    >
                        <form
                            onSubmit={handleFormSubmit}
                            animate={shake ? "shake" : ""}
                            variants={shakeVariants}
                            className={`relative p-6 sm:p-8 rounded-3xl overflow-hidden transition-all duration-500 ${darkMode ? 'bg-surface-dark-2' : 'bg-white shadow-xl shadow-gray-200/50'
                                }`}>

                            {/* Honeypot */}
                            <input type="text" name="_honeypot" value={formData._honeypot} onChange={handleChange} className="hidden" />

                            <div className="grid sm:grid-cols-2 gap-6 mb-6">
                                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                                    <label className="block text-sm font-semibold mb-2 ml-1" htmlFor="name">Name</label>
                                    <input id="name" name="name" type="text" placeholder="Dhaval pjp"
                                        value={formData.name} onChange={handleChange} className={inputClass} />
                                </motion.div>
                                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                                    <label className="block text-sm font-semibold mb-2 ml-1" htmlFor="email">Email</label>
                                    <input id="email" name="email" type="email" placeholder="pjpdhval@gmail.com"
                                        value={formData.email} onChange={handleChange} className={inputClass} />
                                </motion.div>
                            </div>

                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="mb-8">
                                <label className="block text-sm font-semibold mb-2 ml-1" htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows="5" placeholder="Tell me about your project..."
                                    value={formData.message} onChange={handleChange} className={`${inputClass} resize-none`} />
                            </motion.div>

                            <motion.button
                                type="submit"
                                disabled={loading || status === 'success'}
                                whileHover={{ scale: status === 'success' ? 1 : 1.02, boxShadow: status === 'success' ? 'none' : '0 10px 40px rgba(99,102,241,0.3)' }}
                                whileTap={{ scale: status === 'success' ? 1 : 0.98 }}
                                className={`w-full py-4 text-white font-bold rounded-2xl shadow-lg transition-all duration-300 flex items-center justify-center gap-3 ${status === 'success'
                                    ? 'bg-green-500 shadow-green-500/25'
                                    : 'gradient-bg shadow-primary/25 hover:shadow-primary/40 disabled:opacity-70'
                                    }`}>
                                <AnimatePresence mode="wait">
                                    {loading ? (
                                        <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                                            <span className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                                            Sending...
                                        </motion.span>
                                    ) : status === 'success' ? (
                                        <motion.span key="success" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', damping: 12 }} className="flex items-center gap-2">
                                            <HiCheckCircle className="w-6 h-6" />
                                            Sent Successfully!
                                        </motion.span>
                                    ) : (
                                        <motion.span key="default" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                            Send Message
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.button>

                            {/* Success Overlay background effect */}
                            <AnimatePresence>
                                {status === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="absolute inset-0 bg-green-500/5 pointer-events-none"
                                    />
                                )}
                            </AnimatePresence>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact
