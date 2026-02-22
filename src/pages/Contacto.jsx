import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Youtube, Heart, ExternalLink, MessageCircle } from 'lucide-react'
import './Contacto.css'

export default function Contacto() {
    const [form, setForm] = useState({ nombre: '', email: '', telefono: '', asunto: '', mensaje: '' })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <>
            <Helmet>
                <title>Contacto | INTEGRA-T</title>
                <meta name="description" content="Contacta con INTEGRA-T en Elche. Teléfono, email, formulario de contacto y dirección." />
            </Helmet>

            <section className="page-hero">
                <div className="page-hero-content">
                    <h1>Contacto</h1>
                    <p className="breadcrumb"><Link to="/">Inicio</Link> &gt; Contacto</p>
                </div>
            </section>

            <section className="section">
                <div className="container contact-layout">
                    {/* Info */}
                    <div className="contact-info">
                        <h2 className="section-title">Hablemos</h2>
                        <p className="contact-lead">
                            Estamos aquí para ayudarte. No dudes en contactarnos para cualquier consulta,
                            solicitud de información o visita al centro.
                        </p>

                        <div className="contact-cards">
                            <div className="contact-card">
                                <div className="cc-icon"><MapPin size={22} /></div>
                                <div>
                                    <h4>Dirección</h4>
                                    <p>C/ Virgen de la Cabeza, 12<br />03206 Elche (Alicante)</p>
                                </div>
                            </div>
                            <div className="contact-card">
                                <div className="cc-icon"><Phone size={22} /></div>
                                <div>
                                    <h4>Teléfono</h4>
                                    <a href="tel:966680987">966 68 09 87</a>
                                </div>
                            </div>
                            <div className="contact-card">
                                <div className="cc-icon"><Mail size={22} /></div>
                                <div>
                                    <h4>Email</h4>
                                    <a href="mailto:info@integratelche.org">info@integratelche.org</a>
                                </div>
                            </div>
                            <div className="contact-card">
                                <div className="cc-icon"><Clock size={22} /></div>
                                <div>
                                    <h4>Horario</h4>
                                    <p>Lunes a Viernes: 9:00 - 17:00</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-social">
                            <h4>Síguenos</h4>
                            <div className="cs-icons">
                                <a href="https://facebook.com/integratelche" target="_blank" rel="noopener noreferrer"><Facebook size={22} /></a>
                                <a href="https://instagram.com/integratelche" target="_blank" rel="noopener noreferrer"><Instagram size={22} /></a>
                                <a href="https://youtube.com/@integratelche" target="_blank" rel="noopener noreferrer"><Youtube size={22} /></a>
                            </div>
                        </div>

                        <a href="https://www.teaming.net/integratelche" target="_blank" rel="noopener noreferrer" className="contact-teaming">
                            <Heart size={18} />
                            <div>
                                <strong>Colabora desde 1€/mes</strong>
                                <span>A través de Teaming</span>
                            </div>
                            <ExternalLink size={14} />
                        </a>
                    </div>

                    {/* Form */}
                    <div className="contact-form-wrapper">
                        {submitted ? (
                            <div className="form-success">
                                <MessageCircle size={48} />
                                <h3>¡Gracias por tu mensaje!</h3>
                                <p>Te responderemos lo antes posible. Si es urgente, llámanos al <a href="tel:966680987">966 68 09 87</a>.</p>
                                <button className="btn btn-primary" onClick={() => setSubmitted(false)}>Enviar otro mensaje</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <h3 className="form-heading">Envíanos un mensaje</h3>
                                <div className="form-group">
                                    <label className="form-label">Nombre completo *</label>
                                    <input className="form-input" name="nombre" value={form.nombre} onChange={handleChange} required />
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label className="form-label">Email *</label>
                                        <input className="form-input" type="email" name="email" value={form.email} onChange={handleChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Teléfono</label>
                                        <input className="form-input" type="tel" name="telefono" value={form.telefono} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Asunto *</label>
                                    <select className="form-select" name="asunto" value={form.asunto} onChange={handleChange} required>
                                        <option value="">Selecciona un motivo</option>
                                        <option value="info">Información general</option>
                                        <option value="inscripcion">Inscripción / Admisión</option>
                                        <option value="voluntariado">Voluntariado</option>
                                        <option value="colaboracion">Colaboración empresarial</option>
                                        <option value="productos">Productos solidarios</option>
                                        <option value="visita">Solicitar visita</option>
                                        <option value="otro">Otro</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Mensaje *</label>
                                    <textarea className="form-textarea" name="mensaje" value={form.mensaje} onChange={handleChange} required placeholder="Escribe tu mensaje aquí..." />
                                </div>
                                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                                    <Send size={18} /> Enviar mensaje
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            {/* Map */}
            <section className="map-section">
                <iframe
                    title="Ubicación INTEGRA-T"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3128.5!2d-0.6983!3d38.2699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDE2JzExLjYiTiAwwrA0MSc1My45Ilc!5e0!3m2!1ses!2ses!4v1"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </section>
        </>
    )
}
