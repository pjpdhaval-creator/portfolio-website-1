import React, { useState, useEffect, lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loader from './components/Loader'

const Hero = lazy(() => import('./sections/Hero'))
const About = lazy(() => import('./sections/About'))
const Projects = lazy(() => import('./sections/Projects'))
const Skills = lazy(() => import('./sections/Skills'))
const Blog = lazy(() => import('./sections/Blog'))
const Contact = lazy(() => import('./sections/Contact'))

function App() {
    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem('theme')
        return saved ? saved === 'dark' : true
    })

    useEffect(() => {
        document.body.className = darkMode ? 'dark' : 'light'
        localStorage.setItem('theme', darkMode ? 'dark' : 'light')
    }, [darkMode])

    const toggleTheme = () => setDarkMode(prev => !prev)

    return (
        <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-surface-dark text-text-dark' : 'bg-surface-light text-text-light'}`}>
            <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
            <Suspense fallback={<Loader />}>
                <main>
                    <Hero darkMode={darkMode} />
                    <About darkMode={darkMode} />
                    <Projects darkMode={darkMode} />
                    <Skills darkMode={darkMode} />
                    <Blog darkMode={darkMode} />
                    <Contact darkMode={darkMode} />
                </main>
            </Suspense>
            <Footer darkMode={darkMode} />
        </div>
    )
}

export default App
