import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Palette, Theater, Radio, Flower2, Monitor, Dumbbell, Music, BookOpen, Users, Utensils, ArrowRight, CheckCircle2 } from 'lucide-react'
import './Programas.css'

const programs = [
    { icon: <Palette size={32} />, title: 'Taller de Cerámica', desc: 'Creación de piezas artesanales: Damas de Elche, llaveros, imanes y más. Desarrolla la motricidad fina y la creatividad.', color: '#E8731A' },
    { icon: <Theater size={32} />, title: 'Teatro', desc: 'Expresión dramática, improvisación y puestas en escena. Fomenta la autoestima y las habilidades comunicativas.', color: '#9B59B6' },
    { icon: <Radio size={32} />, title: 'Radio INTEGRA-T', desc: 'Producción y emisión de programas radiofónicos. Los usuarios crean contenido, entrevistan y gestionan la programación.', color: '#E74C3C' },
    { icon: <Flower2 size={32} />, title: 'Jardinería', desc: 'Cuidado de espacios verdes, huerto y mantenimiento del jardín del centro. Conexión con la naturaleza.', color: '#27AE60' },
    { icon: <Monitor size={32} />, title: 'Informática', desc: 'Alfabetización digital, ofimática y uso de redes sociales de forma segura y responsable.', color: '#3498DB' },
    { icon: <Dumbbell size={32} />, title: 'Deporte Adaptado', desc: 'Actividades deportivas adaptadas: natación, senderismo, petanca y actividades en equipo.', color: '#F39C12' },
    { icon: <Music size={32} />, title: 'Música y Danza', desc: 'Ritmo, movimiento y expresión corporal. Una forma divertida de socializar y mantenerse activo.', color: '#E91E63' },
    { icon: <BookOpen size={32} />, title: 'Habilidades Sociales', desc: 'Programas de autonomía personal, gestión emocional y relaciones interpersonales.', color: '#00BCD4' },
    { icon: <Users size={32} />, title: 'Actividades Comunitarias', desc: 'Excursiones, visitas culturales, eventos sociales y participación en la vida del barrio.', color: '#FF5722' },
    { icon: <Utensils size={32} />, title: 'Taller de Cocina', desc: 'Recetas sencillas, nutrición básica y hábitos saludables. Fomenta la autonomía en la vida diaria.', color: '#795548' },
]

export default function Programas() {
    return (
        <>
            <Helmet>
                <title>Programas | INTEGRA-T</title>
                <meta name="description" content="Descubre nuestros programas de talleres ocupacionales, deporte adaptado, actividades comunitarias y más para personas con diversidad funcional." />
            </Helmet>

            <section className="page-hero">
                <div className="page-hero-content">
                    <h1>Nuestros Programas</h1>
                    <p className="breadcrumb"><Link to="/">Inicio</Link> &gt; Programas</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title section-title-center">Talleres y Actividades</h2>
                    <p className="section-subtitle section-subtitle-center">
                        Ofrecemos una amplia variedad de programas diseñados para desarrollar las capacidades de cada persona,
                        fomentar la creatividad y promover la integración social.
                    </p>
                    <div className="programs-grid">
                        {programs.map((p, i) => (
                            <div key={i} className="program-card">
                                <div className="program-icon" style={{ background: `${p.color}15`, color: p.color }}>
                                    {p.icon}
                                </div>
                                <h3>{p.title}</h3>
                                <p>{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container programs-benefits">
                    <div className="benefits-content">
                        <h2 className="section-title">¿Qué aportan nuestros programas?</h2>
                        <ul className="benefits-list">
                            <li><CheckCircle2 size={20} /> Desarrollo de habilidades personales y sociales</li>
                            <li><CheckCircle2 size={20} /> Fomento de la autonomía y la vida independiente</li>
                            <li><CheckCircle2 size={20} /> Integración en la comunidad y participación social</li>
                            <li><CheckCircle2 size={20} /> Mejora de la autoestima y el bienestar emocional</li>
                            <li><CheckCircle2 size={20} /> Formación prelaboral y habilidades prácticas</li>
                            <li><CheckCircle2 size={20} /> Creatividad, expresión artística y diversión</li>
                        </ul>
                    </div>
                    <div className="benefits-image">
                        <div className="benefits-placeholder">
                            <Users size={64} />
                            <span>Nuestros usuarios en actividad</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section cta-section" style={{ background: 'var(--color-primary-gradient)', textAlign: 'center', color: 'white' }}>
                <div className="container">
                    <h2 style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 800, marginBottom: '1rem' }}>¿Quieres inscribirte o saber más?</h2>
                    <p style={{ fontSize: 'var(--font-size-lg)', opacity: 0.9, marginBottom: '2rem', maxWidth: 500, margin: '0 auto 2rem' }}>
                        Contacta con nosotros y te informaremos sobre disponibilidad y requisitos.
                    </p>
                    <Link to="/contacto" className="btn btn-white btn-lg">Contactar <ArrowRight size={18} /></Link>
                </div>
            </section>
        </>
    )
}
