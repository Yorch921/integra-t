import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { FileText, Download, Shield, Award, Eye, ArrowRight } from 'lucide-react'
import './Transparencia.css'

const documentsYears = [
    { year: '2025', docs: ['Memoria de actividades', 'Cuentas anuales', 'Presupuesto'] },
    { year: '2024', docs: ['Memoria de actividades', 'Cuentas anuales', 'Presupuesto'] },
    { year: '2023', docs: ['Memoria de actividades', 'Cuentas anuales', 'Presupuesto'] },
]

const trustIndicators = [
    { icon: <Shield size={32} />, title: 'Entidad registrada', desc: 'Inscrita en el Registro de Asociaciones de la Comunidad Valenciana.' },
    { icon: <Award size={32} />, title: 'Declarada de Utilidad Pública', desc: 'Reconocimiento oficial por nuestro trabajo en beneficio de la comunidad.' },
    { icon: <Eye size={32} />, title: 'Total transparencia', desc: 'Publicamos nuestras cuentas, memorias y programas de forma abierta.' },
    { icon: <FileText size={32} />, title: 'Auditorías', desc: 'Nuestras cuentas son auditadas y presentadas a los organismos competentes.' },
]

export default function Transparencia() {
    return (
        <>
            <Helmet>
                <title>Transparencia | INTEGRA-T</title>
                <meta name="description" content="Transparencia y rendición de cuentas de INTEGRA-T. Consulta nuestras memorias, cuentas anuales y presupuestos." />
            </Helmet>

            <section className="page-hero">
                <div className="page-hero-content">
                    <h1>Transparencia</h1>
                    <p className="breadcrumb"><Link to="/">Inicio</Link> &gt; Transparencia</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title section-title-center">Compromiso con la transparencia</h2>
                    <div className="transparency-visual">
                        <img src="/images/general/fachada-transparencia.jpg" alt="Fachada del centro INTEGRA-T" className="transparency-hero-img" />
                    </div>
                    <div className="trust-grid">
                        {trustIndicators.map((t, i) => (
                            <div key={i} className="trust-card">
                                <div className="trust-icon">{t.icon}</div>
                                <h3>{t.title}</h3>
                                <p>{t.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title section-title-center">Documentación</h2>
                    <p className="section-subtitle section-subtitle-center" style={{ marginBottom: 'var(--spacing-3xl)' }}>
                        Accede a nuestras memorias de actividades, cuentas anuales y presupuestos.
                    </p>
                    <div className="docs-timeline">
                        {documentsYears.map((yr, i) => (
                            <div key={i} className="docs-year-block">
                                <div className="docs-year-label">
                                    <span>{yr.year}</span>
                                </div>
                                <div className="docs-list">
                                    {yr.docs.map((doc, j) => (
                                        <a key={j} href="#" className="doc-item">
                                            <FileText size={20} />
                                            <div className="doc-info">
                                                <span className="doc-name">{doc}</span>
                                                <span className="doc-meta">{yr.year} · PDF</span>
                                            </div>
                                            <Download size={18} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
