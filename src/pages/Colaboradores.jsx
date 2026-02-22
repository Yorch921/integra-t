import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Building2, Heart, GraduationCap, Users, User, ExternalLink } from 'lucide-react'
import './Colaboradores.css'

const organismosPublicos = [
    { name: 'Ayuntamiento de Elche', src: '/images/colaboradores/organismos-publicos/ayuntamiento-elche.png' },
    { name: 'Diputación de Alicante', src: '/images/colaboradores/organismos-publicos/diputacion-alicante.jpg' },
    { name: 'Consellería de Igualdad', src: '/images/colaboradores/organismos-publicos/conselleria-igualdad.jpg' },
    { name: 'Consellería de Cultura', src: '/images/colaboradores/organismos-publicos/conselleria-cultura.png' },
]

const entidadesPrivadas = [
    { name: 'Fundación La Caixa', src: '/images/colaboradores/entidades-privadas/fundacion-la-caixa.jpg' },
    { name: 'Fundación Juan Perán Pikolinos', src: '/images/colaboradores/entidades-privadas/fundacion-pikolinos.jpg' },
    { name: 'Espais Verds', src: '/images/colaboradores/entidades-privadas/espais-verds.jpg' },
    { name: 'Colaborador 8', src: '/images/colaboradores/entidades-privadas/colaborador-8.png' },
]

const entidadesAcademicas = [
    { name: 'UA - Universidad de Alicante', src: '/images/colaboradores/entidades-academicas/universidad-alicante.png' },
    { name: 'UMH - Universidad Miguel Hernández', src: '/images/colaboradores/entidades-academicas/umh.jpg' },
    { name: 'UPV - Universidad Politécnica de Valencia', src: '/images/colaboradores/entidades-academicas/upv.jpg' },
    { name: 'CEU Universidad Cardenal Herrera', src: '/images/colaboradores/entidades-academicas/ceu.png' },
    { name: 'Universidad de Murcia', src: '/images/colaboradores/entidades-academicas/universidad-murcia.jpg' },
    { name: 'IES La Asunción', src: '/images/colaboradores/entidades-academicas/ies-la-asuncion.jpg' },
    { name: 'IES La Torreta', src: '/images/colaboradores/entidades-academicas/ies-la-torreta.png' },
    { name: 'IVK', src: '/images/colaboradores/entidades-academicas/ivk.png' },
    { name: 'La Devesa', src: '/images/colaboradores/entidades-academicas/la-devesa.jpg' },
    { name: 'Monserrat Roig', src: '/images/colaboradores/entidades-academicas/monserrat-roig.png' },
]

const particulares = [
    { name: 'Excavaciones Manolo', src: '/images/colaboradores/particulares/excavaciones-manolo.jpg' },
    { name: 'Particular 2', src: '/images/colaboradores/particulares/particular-2.jpg' },
]

const voluntariado = [
    { name: 'Voluntariado 1', src: '/images/colaboradores/voluntariado/voluntariado-1.jpg' },
    { name: 'Voluntariado 2', src: '/images/colaboradores/voluntariado/voluntariado-2.jpg' },
    { name: 'Voluntariado 3', src: '/images/colaboradores/voluntariado/voluntariado-3.jpg' },
]

export default function Colaboradores() {
    return (
        <>
            <Helmet>
                <title>Colaboradores | INTEGRA-T</title>
                <meta name="description" content="Conoce las entidades, instituciones y empresas que colaboran con INTEGRA-T. Únete a nuestra red de apoyo." />
            </Helmet>

            <section className="page-hero">
                <div className="page-hero-content">
                    <h1>Colaboradores</h1>
                    <p className="breadcrumb"><Link to="/">Inicio</Link> &gt; Colaboradores</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title section-title-center">Nuestra Red de Apoyo</h2>
                    <p className="section-subtitle section-subtitle-center">
                        Gracias a la colaboración de estas organizaciones e instituciones, podemos seguir ofreciendo nuestros servicios a personas con diversidad funcional.
                    </p>
                </div>
            </section>

            {/* Organismos Públicos */}
            <section className="section section-alt">
                <div className="container">
                    <div className="collab-header">
                        <Building2 className="collab-icon" />
                        <h2>Organismos Públicos</h2>
                    </div>
                    <div className="logo-grid">
                        {organismosPublicos.map((org, i) => (
                            <div key={i} className="logo-card">
                                <img src={org.src} alt={org.name} title={org.name} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Entidades Privadas */}
            <section className="section">
                <div className="container">
                    <div className="collab-header">
                        <Heart className="collab-icon" />
                        <h2>Entidades Privadas</h2>
                    </div>
                    <div className="logo-grid">
                        {entidadesPrivadas.map((org, i) => (
                            <div key={i} className="logo-card">
                                <img src={org.src} alt={org.name} title={org.name} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Entidades Académicas */}
            <section className="section section-alt">
                <div className="container">
                    <div className="collab-header">
                        <GraduationCap className="collab-icon" />
                        <h2>Entidades Académicas</h2>
                    </div>
                    <div className="logo-grid logo-grid-large">
                        {entidadesAcademicas.map((org, i) => (
                            <div key={i} className="logo-card">
                                <img src={org.src} alt={org.name} title={org.name} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Particulares y Voluntariado */}
            <section className="section">
                <div className="container collab-columns">
                    <div className="collab-column">
                        <div className="collab-header">
                            <User className="collab-icon" />
                            <h2>Particulares</h2>
                        </div>
                        <div className="logo-grid logo-grid-small">
                            {particulares.map((org, i) => (
                                <div key={i} className="logo-card">
                                    <img src={org.src} alt={org.name} title={org.name} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="collab-column">
                        <div className="collab-header">
                            <Users className="collab-icon" />
                            <h2>Voluntariado</h2>
                        </div>
                        <div className="logo-grid logo-grid-small">
                            {voluntariado.map((org, i) => (
                                <div key={i} className="logo-card">
                                    <img src={org.src} alt={org.name} title={org.name} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" style={{ background: 'var(--color-primary-gradient)', textAlign: 'center', color: 'white' }}>
                <div className="container">
                    <h2 style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 800, marginBottom: '1rem' }}>¿Quieres ser colaborador?</h2>
                    <p style={{ fontSize: 'var(--font-size-lg)', opacity: 0.9, marginBottom: '2rem', maxWidth: 550, margin: '0 auto 2rem' }}>
                        Si tu empresa o entidad quiere contribuir a la inclusión social, contáctanos. Juntos creamos oportunidades.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/contacto" className="btn btn-white btn-lg">Contactar</Link>
                        <a href="https://www.teaming.net/integratelche" target="_blank" rel="noopener noreferrer" className="btn btn-white btn-lg" style={{ borderColor: 'rgba(255,255,255,0.5)' }}>
                            <Heart size={18} /> Donar con Teaming <ExternalLink size={14} />
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
