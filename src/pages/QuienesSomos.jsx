import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Star, BookOpen, Handshake, GraduationCap, Palette, TreePine, ArrowRight } from 'lucide-react'
import './QuienesSomos.css'

const characteristics = [
    { icon: <Star size={28} />, title: 'Ilusión', desc: 'Trabajamos cada día con entusiasmo y vocación por la inclusión.' },
    { icon: <BookOpen size={28} />, title: 'Trayectoria', desc: 'Más de 20 años acompañando a personas y familias en Elche.' },
    { icon: <Handshake size={28} />, title: 'Constancia', desc: 'Compromiso sostenido con nuestros usuarios y la comunidad.' },
    { icon: <GraduationCap size={28} />, title: 'Profesionalidad', desc: 'Equipo cualificado y formación continua en diversidad funcional.' },
    { icon: <Palette size={28} />, title: 'Diversidad de talleres', desc: 'Cerámica, teatro, radio, informática, jardinería y mucho más.' },
    { icon: <TreePine size={28} />, title: 'Amplios espacios verdes', desc: 'Instalaciones con jardines y espacios al aire libre únicos.' },
]

export default function QuienesSomos() {
    return (
        <>
            <Helmet>
                <title>Quiénes Somos | INTEGRA-T</title>
                <meta name="description" content="Conoce INTEGRA-T: asociación sin ánimo de lucro fundada en 2003, dedicada a personas con diversidad funcional intelectual en Elche." />
            </Helmet>

            <section className="page-hero">
                <div className="page-hero-content">
                    <h1>Quiénes Somos</h1>
                    <p className="breadcrumb"><Link to="/">Inicio</Link> &gt; Quiénes Somos</p>
                </div>
            </section>

            {/* Historia */}
            <section className="section">
                <div className="container history-grid">
                    <div className="history-text">
                        <h2 className="section-title">Nuestra Historia</h2>
                        <p className="history-lead">
                            Integra-T es una <strong>Asociación sin ánimo de lucro</strong> dirigida a prestar atención,
                            información, orientación y asesoramiento a personas con diversidad funcional intelectual y sus familias.
                        </p>
                        <p>
                            Se crea en <strong>Marzo del año 2003</strong> con el objetivo de informar, apoyar, orientar y crear
                            los recursos necesarios para las personas con diversidad funcional intelectual y sus familias,
                            que den respuesta a sus necesidades para lograr una plena integración social e inclusión laboral
                            y mejorar su desarrollo y calidad de vida.
                        </p>
                        <p>
                            Integra-T es un recurso de ámbito privado dirigido a personas mayores de 18 años, con diversidad
                            funcional intelectual reconocida, con autonomía suficiente en el área de actividades básicas de la
                            vida diaria, que requieran recursos y estrategias para su desarrollo integral.
                        </p>
                    </div>
                    <div className="history-visual">
                        <div className="history-quote-img">
                            <img src="/images/general/frase-quienes-somos.png" alt="Las personas, al igual que las aves, son diferentes en su vuelo pero iguales en su derecho a volar" />
                        </div>
                        <div className="history-badges">
                            <div className="year-badge">
                                <span className="year-num">2003</span>
                                <span className="year-label">Año de fundación</span>
                            </div>
                            <div className="generalitat-badge">
                                <img src="/images/general/empresa-reconocida-generalitat.jpg" alt="Empresa reconocida por la Generalitat Valenciana - Fent Empresa, Iguals en Oportunitats" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Misión, Visión, Valores */}
            <section className="section section-alt">
                <div className="container">
                    <div className="mvv-grid">
                        <div className="mvv-card mvv-mission">
                            <div className="mvv-icon">🎯</div>
                            <h3>Misión</h3>
                            <p>
                                Informar, apoyar, orientar y crear los recursos necesarios para las personas con diversidad
                                funcional intelectual y sus familias, sensibilizando a la administración y a la sociedad.
                            </p>
                        </div>
                        <div className="mvv-card mvv-vision">
                            <div className="mvv-icon">🔭</div>
                            <h3>Visión</h3>
                            <p>
                                Una sociedad donde todas las personas, independientemente de sus capacidades, tengan
                                plena participación e igualdad de oportunidades.
                            </p>
                        </div>
                        <div className="mvv-card mvv-values">
                            <div className="mvv-icon">💎</div>
                            <h3>Valores</h3>
                            <ul className="values-list">
                                <li>Inclusión</li>
                                <li>Transparencia</li>
                                <li>Cercanía</li>
                                <li>Profesionalidad</li>
                                <li>Compromiso</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Qué nos caracteriza */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title section-title-center">¿Qué nos caracteriza?</h2>
                    <p className="section-subtitle section-subtitle-center">
                        Estos son los pilares que nos definen como asociación y nos diferencian.
                    </p>
                    <div className="chars-grid">
                        {characteristics.map((item, i) => (
                            <div key={i} className="char-card">
                                <div className="char-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Target */}
            <section className="section target-section">
                <div className="container target-content">
                    <h2>¿A quién nos dirigimos?</h2>
                    <p>
                        Recurso de ámbito privado dirigido a <strong>personas mayores de 18 años</strong>, con diversidad
                        funcional intelectual reconocida, con autonomía suficiente en actividades básicas de la vida
                        diaria (alimentación, vestido, aseo), que requieran recursos y estrategias para realizar
                        dichas actividades.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="section">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 className="section-title section-title-center">¿Quieres conocernos en persona?</h2>
                    <p className="section-subtitle section-subtitle-center" style={{ marginBottom: '2rem' }}>
                        Te invitamos a visitar nuestras instalaciones y conocer a nuestro equipo.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/contacto" className="btn btn-primary btn-lg">Contactar</Link>
                        <Link to="/instalaciones" className="btn btn-outline btn-lg">Ver instalaciones</Link>
                    </div>
                </div>
            </section>
        </>
    )
}
