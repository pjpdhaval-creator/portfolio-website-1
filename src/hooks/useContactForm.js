import { useState, useCallback, useRef } from 'react'

export const useContactForm = (accessKey) => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '', _honeypot: '' })
    const [status, setStatus] = useState('idle') // idle | loading | success | error
    const [toasts, setToasts] = useState([])
    const [shake, setShake] = useState(false)
    const lastSubmissionRef = useRef(0)

    const addToast = (type, message) => {
        const id = Date.now()
        setToasts((prev) => [...prev, { id, type, message }])
        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id))
        }, 4000)
    }

    const removeToast = (id) => {
        setToasts((prev) => prev.filter((t) => t.id !== id))
    }

    const handleChange = useCallback((e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }, [])

    const validate = () => {
        if (formData._honeypot) return false // Bot detected

        const triggerShake = () => {
            setShake(true)
            setTimeout(() => setShake(false), 500)
        }

        if (formData.name.trim().length < 3) {
            addToast('error', 'Name must be at least 3 characters.')
            triggerShake()
            return false
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(formData.email)) {
            addToast('error', 'Please enter a valid email address.')
            triggerShake()
            return false
        }
        if (formData.message.trim().length < 10) {
            addToast('error', 'Message must be at least 10 characters.')
            triggerShake()
            return false
        }
        return true
    }

    const submitForm = async (e) => {
        e.preventDefault()

        // Rate limiting: 1 request per 10 seconds
        const now = Date.now()
        if (now - lastSubmissionRef.current < 10000) {
            addToast('error', 'Please wait a moment before sending another message.')
            return
        }

        if (!validate()) return

        setStatus('loading')

        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 10000) // 10s timeout

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    access_key: accessKey,
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: `New Portfolio Message from ${formData.name}`,
                    from_name: "Developer Portfolio",
                }),
                signal: controller.signal
            })

            clearTimeout(timeoutId)
            const data = await response.json()

            if (data.msg === "Too many requests.") {
                addToast('error', 'Too many requests. Please try again later.')
                setStatus('error')
                return
            }

            if (data.success) {
                setStatus('success')
                addToast('success', 'Your message has been sent successfully!')
                setFormData({ name: '', email: '', message: '', _honeypot: '' })
                lastSubmissionRef.current = Date.now()

                // Reset back to idle after 10 seconds
                setTimeout(() => {
                    setStatus('idle')
                }, 10000)
            } else {
                setStatus('error')
                addToast('error', data.message || 'Something went wrong. Please try again.')
            }
        } catch (error) {
            clearTimeout(timeoutId)
            if (error.name === 'AbortError') {
                addToast('error', 'Request timed out. Please check your connection.')
            } else {
                addToast('error', 'Failed to connect. Please try again later.')
            }
            setStatus('error')
        }
    }

    return {
        formData,
        status,
        toasts,
        shake,
        handleChange,
        submitForm,
        removeToast,
        loading: status === 'loading'
    }
}
