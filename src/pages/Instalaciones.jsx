import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Building2, Flower2, Monitor, Coffee, Palette, Dumbbell, TreePine } from 'lucide-react'
import './Instalaciones.css'

const spaces = [
    { icon: <Palette size={28} />, title: 'Taller de cerámica', desc: 'Espacio equipado con hornos, tornos y materiales para la creación de piezas artesanales.' },
    { icon: <Monitor size={28} />, title: 'Aula de informática', desc: 'Ordenadores con conexión a internet para formación digital y actividades multimedia.' },
    { icon: <Coffee size={28} />, title: 'Comedor', desc: 'Zona de comidas para la socialización y talleres de cocina.' },
    { icon: <Dumbbell size={28} />, title: 'Sala polivalente', desc: 'Espacio amplio para teatro, danza, deporte y actividades grupales.' },
    { icon: <TreePine size={28} />, title: 'Jardín y huerto', desc: 'Amplios espacios exteriores con jardín, zonas ajardinadas y huerto para actividades al aire libre.' },
    { icon: <Building2 size={28} />, title: 'Despachos', desc: 'Consultas para psicología, trabajo social y atención individualizada a familias.' },
]

const galleryCategories = [
    {
        title: 'Infraestructuras',
        photos: [
            { src: '/images/instalaciones/infraestructuras/fachada.jpg', alt: 'Fachada del centro INTEGRA-T' },
            { src: '/images/instalaciones/infraestructuras/interior.jpg', alt: 'Interior del centro' },
            { src: '/images/instalaciones/infraestructuras/detalle.jpg', alt: 'Detalle de las instalaciones' },
        ]
    },
    {
        title: 'Aulas y talleres',
        photos: [
            { src: '/images/instalaciones/aulas/aula-1.jpg', alt: 'Aula de trabajo 1' },
            { src: '/images/instalaciones/aulas/aula-2.jpg', alt: 'Aula de trabajo 2' },
            { src: '/images/instalaciones/aulas/aula-3.jpg', alt: 'Aula de trabajo 3' },
            { src: '/images/instalaciones/aulas/aula-4.jpg', alt: 'Taller de actividades' },
            { src: '/images/instalaciones/aulas/aula-5.jpg', alt: 'Espacio de formación' },
            { src: '/images/instalaciones/aulas/aula-6.jpg', alt: 'Aula polivalente' },
        ]
    },
    {
        title: 'Sala de recepción y reuniones',
        photos: [
            { src: '/images/instalaciones/sala-reuniones/sala-1.jpg', alt: 'Sala de reuniones' },
            { src: '/images/instalaciones/sala-reuniones/sala-2.jpg', alt: 'Zona de recepción' },
            { src: '/images/instalaciones/sala-reuniones/sala-3.jpg', alt: 'Sala de visitas' },
            { src: '/images/instalaciones/sala-reuniones/sala-4.jpg', alt: 'Espacio de encuentro' },
        ]
    },
    {
        title: 'Despachos',
        photos: [
            { src: '/images/instalaciones/despachos/despacho-1.jpg', alt: 'Despacho de psicología' },
            { src: '/images/instalaciones/despachos/despacho-2.jpg', alt: 'Despacho de trabajo social' },
        ]
    },
    {
        title: 'Jardines y espacios exteriores',
        photos: [
            { src: '/images/instalaciones/jardines/jardin-1.jpg', alt: 'Jardín del centro' },
            { src: '/images/instalaciones/jardines/jardin-2.jpg', alt: 'Zona ajardinada' },
            { src: '/images/instalaciones/jardines/jardin-3.jpg', alt: 'Espacios al aire libre' },
        ]
    },
]

export default function Instalaciones() {
    return (
        <>
            <Helmet>
                <title>Instalaciones | INTEGRA-T</title>
                <meta name="description" content="Conoce las instalaciones de INTEGRA-T: talleres, aulas, jardines y espacios diseñados para el bienestar y la inclusión." />
            </Helmet>

            <section className="page-hero">
                <div className="page-hero-content">
                    <h1>Nuestras Instalaciones</h1>
                    <p className="breadcrumb"><Link to="/">Inicio</Link> &gt; Instalaciones</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title section-title-center">Un espacio pensado para la inclusión</h2>
                    <p className="section-subtitle section-subtitle-center">
                        Nuestro centro está ubicado en la <strong>C/ Virgen de la Cabeza, 12</strong> de Elche y cuenta con
                        amplios espacios interiores y exteriores diseñados para el desarrollo de nuestras actividades.
                    </p>
                    <div className="spaces-grid">
                        {spaces.map((s, i) => (
                            <div key={i} className="space-card">
                                <div className="space-icon">{s.icon}</div>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Photo Gallery by Category */}
            {galleryCategories.map((cat, ci) => (
                <section key={ci} className={`section ${ci % 2 !== 0 ? 'section-alt' : ''}`}>
                    <div className="container">
                        <h2 className="section-title section-title-center">{cat.title}</h2>
                        <div className="gallery-grid">
                            {cat.photos.map((photo, pi) => (
                                <div key={pi} className="gallery-item">
                                    <img src={photo.src} alt={photo.alt} loading="lazy" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            <section className="section" style={{ background: 'var(--color-primary-gradient)', textAlign: 'center', color: 'white' }}>
                <div className="container">
                    <h2 style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 800, marginBottom: '1rem' }}>¿Quieres visitarnos?</h2>
                    <p style={{ fontSize: 'var(--font-size-lg)', opacity: 0.9, marginBottom: '2rem', maxWidth: 500, margin: '0 auto 2rem' }}>
                        Ponte en contacto y concertaremos una visita para enseñarte nuestras instalaciones.
                    </p>
                    <Link to="/contacto" className="btn btn-white btn-lg">Contactar</Link>
                </div>
            </section>
        </>
    )
}
