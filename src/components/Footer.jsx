import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Heart, ExternalLink } from 'lucide-react'
import './Footer.css'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand */}
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <img src="/images/logo/logo-integrat.jpg" alt="Logo INTEGRA-T" className="footer-logo-img" />
                        </div>
                        <p className="footer-desc">
                            Asociación sin ánimo de lucro dedicada a la atención y acompañamiento de personas con diversidad funcional intelectual y sus familias en Elche.
                        </p>
                        <div className="footer-social">
                            <a href="https://facebook.com/integratelche" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={20} /></a>
                            <a href="https://instagram.com/integratelche" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
                            <a href="https://youtube.com/@integratelche" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Youtube size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h4 className="footer-heading">Navegación</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="/quienes-somos">Quiénes Somos</Link></li>
                            <li><Link to="/programas">Programas</Link></li>
                            <li><Link to="/instalaciones">Instalaciones</Link></li>
                            <li><Link to="/equipo">Equipo</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-heading">Más</h4>
                        <ul className="footer-links">
                            <li><Link to="/productos-solidarios">Productos Solidarios</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/colaboradores">Colaboradores</Link></li>
                            <li><Link to="/transparencia">Transparencia</Link></li>
                            <li><Link to="/contacto">Contacto</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-col">
                        <h4 className="footer-heading">Contacto</h4>
                        <ul className="footer-contact">
                            <li>
                                <MapPin size={16} />
                                <span>C/ Virgen de la Cabeza, 12<br />03206 Elche (Alicante)</span>
                            </li>
                            <li>
                                <Phone size={16} />
                                <a href="tel:966680987">966 68 09 87</a>
                            </li>
                            <li>
                                <Mail size={16} />
                                <a href="mailto:info@integratelche.org">info@integratelche.org</a>
                            </li>
                        </ul>
                        <a
                            href="https://www.teaming.net/integratelche"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-teaming"
                        >
                            <img src="/images/general/teaming.jpg" alt="Logo Teaming" className="footer-teaming-img" />
                            <div className="footer-teaming-text">
                                <Heart size={14} />
                                <span>Colabora desde 1€/mes</span>
                                <ExternalLink size={12} />
                            </div>
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {currentYear} INTEGRA-T. Todos los derechos reservados.</p>
                    <div className="footer-legal">
                        <a href="#">Aviso Legal</a>
                        <a href="#">Política de Privacidad</a>
                        <a href="#">Política de Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
