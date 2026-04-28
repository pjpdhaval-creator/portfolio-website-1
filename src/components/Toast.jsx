import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiCheckCircle, HiXCircle, HiX } from 'react-icons/hi'

const Toast = ({ toasts, removeToast }) => {
    return (
        <div className="fixed top-24 right-4 z-[999] flex flex-col gap-3 pointer-events-none">
            <AnimatePresence mode="popLayout">
                {toasts.map((toast) => (
                    <motion.div
                        key={toast.id}
                        initial={{ opacity: 0, x: 50, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 20, scale: 0.9, transition: { duration: 0.2 } }}
                        layout
                        className={`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl shadow-2xl border backdrop-blur-md min-w-[280px] ${
                            toast.type === 'success'
                                ? 'bg-green-500/10 border-green-500/20 text-green-500'
                                : 'bg-red-500/10 border-red-500/20 text-red-500'
                        }`}
                    >
                        {toast.type === 'success' ? (
                            <HiCheckCircle className="w-5 h-5 flex-shrink-0" />
                        ) : (
                            <HiXCircle className="w-5 h-5 flex-shrink-0" />
                        )}
                        <p className="text-sm font-semibold flex-1">{toast.message}</p>
                        <button
                            onClick={() => removeToast(toast.id)}
                            className="p-1 hover:bg-black/5 rounded-lg transition-colors"
                        >
                            <HiX className="w-4 h-4 opacity-70 hover:opacity-100" />
                        </button>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
}

export default Toast
