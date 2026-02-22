import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Facebook, Instagram, Youtube } from 'lucide-react'
import './Header.css'

const navLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/quienes-somos', label: 'Quiénes Somos' },
    { path: '/programas', label: 'Programas' },
    { path: '/instalaciones', label: 'Instalaciones' },
    { path: '/equipo', label: 'Equipo' },
    { path: '/productos-solidarios', label: 'Productos Solidarios' },
    { path: '/blog', label: 'Blog' },
    { path: '/colaboradores', label: 'Colaboradores' },
    { path: '/transparencia', label: 'Transparencia' },
    { path: '/contacto', label: 'Contacto' },
]

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setIsOpen(false)
    }, [location])

    return (
        <>
            {/* Top Bar */}
            <div className="top-bar">
                <div className="container top-bar-inner">
                    <div className="top-bar-contact">
                        <Phone size={14} />
                        <a href="tel:966680987">966 68 09 87</a>
                        <span className="top-bar-sep">|</span>
                        <a href="mailto:info@integratelche.org">info@integratelche.org</a>
                    </div>
                    <div className="top-bar-social">
                        <a href="https://facebook.com/integratelche" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <Facebook size={16} />
                        </a>
                        <a href="https://instagram.com/integratelche" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <Instagram size={16} />
                        </a>
                        <a href="https://youtube.com/@integratelche" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                            <Youtube size={16} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
                <div className="container header-inner">
                    <Link to="/" className="header-logo">
                        <img src="/images/logo/logo-integrat.jpg" alt="INTEGRA-T - Asociación de personas con diversidad funcional intelectual de Elche" className="logo-img" />
                    </Link>

                    <nav className={`nav ${isOpen ? 'nav-open' : ''}`}>
                        <ul className="nav-list">
                            {navLinks.map(link => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className={`nav-link ${location.pathname === link.path ? 'nav-link-active' : ''}`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <button
                        className="menu-toggle"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </header>

            {/* Overlay */}
            {isOpen && <div className="nav-overlay" onClick={() => setIsOpen(false)} />}
        </>
    )
}
