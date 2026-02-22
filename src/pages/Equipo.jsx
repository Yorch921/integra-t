import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import './Equipo.css'

export default function Equipo() {
    return (
        <>
            <Helmet>
                <title>Equipo | INTEGRA-T</title>
                <meta name="description" content="Conoce al equipo humano de INTEGRA-T: Junta Directiva y profesionales comprometidos con la inclusión." />
            </Helmet>

            <section className="page-hero">
                <div className="page-hero-content">
                    <h1>Nuestro Equipo</h1>
                    <p className="breadcrumb"><Link to="/">Inicio</Link> &gt; Equipo</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title section-title-center">Junta Directiva</h2>
                    <p className="section-subtitle section-subtitle-center">
                        Personas que dedican su tiempo y esfuerzo de manera voluntaria a la gestión y dirección de la asociación.
                    </p>
                    <div className="org-chart-container">
                        <img
                            src="/images/equipo/junta-directiva-esquema.jpg"
                            alt="Organigrama de la Junta Directiva de INTEGRA-T: Presidenta Mª del Carmen Muñoz Ruiz, Secretario Adolfo Mañas Menchón, Vicepresidente Francisco José Penalva Manchón, Tesorera Matilde García Pérez, y Vocales Concepción Rocamora Rico, Antonio Mancheño García y Josefa Encarnación Sánchez Bermejo"
                            className="org-chart-img"
                        />
                    </div>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title section-title-center">Equipo Técnico</h2>
                    <p className="section-subtitle section-subtitle-center">
                        Profesionales cualificados que trabajan día a día para ofrecer la mejor atención a nuestros usuarios.
                    </p>
                    <div className="org-chart-container">
                        <img
                            src="/images/equipo/equipo-tecnico-esquema.png"
                            alt="Organigrama del Equipo Técnico de INTEGRA-T: Psicóloga Cristina Rodríguez, Trabajadora Social Nuria Gómez, Técnicos Álvaro Linares, Rafael García, Aroa Rico, José Madrid, Conserje Diego García, Alumnado en Prácticas y Voluntariado"
                            className="org-chart-img"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}
