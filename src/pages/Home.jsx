import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Heart, Users, Palette, ArrowRight, HandHeart, Building2, UserCheck, Calendar } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import './Home.css'

function AnimatedSection({ children, className = '' }) {
    const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })
    return (
        <div ref={ref} className={`${className} ${inView ? 'animate-in' : 'animate-hidden'}`}>
            {children}
        </div>
    )
}

export default function Home() {
    return (
        <>
            <Helmet>
                <title>INTEGRA-T | Inclusión y diversidad funcional en Elche</title>
                <meta name="description" content="Asociación sin ánimo de lucro dedicada a la atención y acompañamiento de personas con diversidad funcional intelectual y sus familias en Elche desde 2003." />
            </Helmet>

            {/* Hero */}
            <section className="hero" style={{ backgroundImage: 'url(/images/general/hero.jpg)' }}>
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <AnimatedSection>
                        <span className="hero-badge">Desde 2003 en Elche</span>
                        <h1 className="hero-title">Construyendo inclusión<br />cada día en Elche</h1>
                        <p className="hero-subtitle">
                            Acompañamos a personas con diversidad funcional intelectual y sus familias hacia una vida plena e integrada en la comunidad.
                        </p>
                        <div className="hero-actions">
                            <Link to="/quienes-somos" className="btn btn-primary btn-lg">Conócenos</Link>
                            <Link to="/contacto" className="btn btn-white btn-lg">Contactar</Link>
                        </div>
                    </AnimatedSection>
                </div>
                <div className="hero-wave">
                    <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 50L48 45C96 40 192 30 288 33C384 36 480 52 576 58C672 64 768 60 864 52C960 44 1056 32 1152 30C1248 28 1344 36 1392 40L1440 44V100H0V50Z" fill="white" />
                    </svg>
                </div>
            </section>

            {/* Qué es INTEGRA-T */}
            <section className="section">
                <div className="container">
                    <AnimatedSection className="about-intro">
                        <div className="about-intro-text">
                            <h2 className="section-title">¿Qué es INTEGRA-T?</h2>
                            <p className="about-lead">
                                Integra-T es una <strong>asociación sin ánimo de lucro</strong> dedicada a prestar atención,
                                orientación y acompañamiento a personas con diversidad funcional intelectual y sus familias.
                            </p>
                            <p>
                                Desde marzo de 2003, trabajamos en Elche para lograr una plena integración social,
                                creando los recursos necesarios que den respuesta a las necesidades de nuestros usuarios:
                                talleres ocupacionales, formación laboral, actividades comunitarias y mucho más.
                            </p>
                            <Link to="/quienes-somos" className="link-arrow">
                                Saber más <ArrowRight size={16} />
                            </Link>
                        </div>
                        <div className="about-intro-stats">
                            <div className="stat-card">
                                <span className="stat-number">20+</span>
                                <span className="stat-label">Años de experiencia</span>
                            </div>
                            <div className="stat-card">
                                <span className="stat-number">10</span>
                                <span className="stat-label">Programas activos</span>
                            </div>
                            <div className="stat-card">
                                <span className="stat-number">50+</span>
                                <span className="stat-label">Usuarios atendidos</span>
                            </div>
                            <div className="stat-card">
                                <span className="stat-number">26</span>
                                <span className="stat-label">Entidades colaboradoras</span>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Qué hacemos */}
            <section className="section section-alt">
                <div className="container">
                    <AnimatedSection>
                        <h2 className="section-title section-title-center">Qué hacemos</h2>
                        <p className="section-subtitle section-subtitle-center">
                            Desarrollamos programas adaptados a las necesidades de cada persona, promoviendo su autonomía e integración social.
                        </p>
                    </AnimatedSection>
                    <div className="services-grid">
                        <AnimatedSection className="service-card">
                            <div className="service-icon" style={{ background: 'linear-gradient(135deg, #E8731A, #F5A623)' }}>
                                <Palette size={32} color="white" />
                            </div>
                            <h3>Talleres Ocupacionales</h3>
                            <p>Cerámica, teatro, radio, jardinería y más. Espacios creativos donde nuestros usuarios desarrollan habilidades y expresan su talento.</p>
                            <Link to="/programas" className="link-arrow">Ver programas <ArrowRight size={14} /></Link>
                        </AnimatedSection>
                        <AnimatedSection className="service-card">
                            <div className="service-icon" style={{ background: 'linear-gradient(135deg, #2B6CB0, #4299E1)' }}>
                                <Users size={32} color="white" />
                            </div>
                            <h3>Atención y Acompañamiento</h3>
                            <p>Psicología, trabajo social y apoyo familiar. Un equipo profesional que acompaña a cada persona y su familia en todo el proceso.</p>
                            <Link to="/equipo" className="link-arrow">Conocer al equipo <ArrowRight size={14} /></Link>
                        </AnimatedSection>
                        <AnimatedSection className="service-card">
                            <div className="service-icon" style={{ background: 'linear-gradient(135deg, #38A169, #68D391)' }}>
                                <Heart size={32} color="white" />
                            </div>
                            <h3>Actividades Comunitarias</h3>
                            <p>Excursiones, deporte adaptado, ocio y convivencia. Fomentamos la participación social y la creación de vínculos con la comunidad.</p>
                            <Link to="/programas" className="link-arrow">Ver actividades <ArrowRight size={14} /></Link>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Productos Solidarios */}
            <section className="section">
                <div className="container">
                    <AnimatedSection className="products-banner">
                        <div className="products-banner-image">
                            <img src="/images/pedidos/catalogo.jpg" alt="Productos solidarios de cerámica" className="products-banner-img" />
                        </div>
                        <div className="products-banner-content">
                            <span className="badge">Productos Solidarios</span>
                            <h2 className="section-title">Cerámica artesanal con alma</h2>
                            <p>
                                ¿Tienes un evento próximamente? Haz un detalle solidario, original y artesanal.
                                Nuestros usuarios crean piezas únicas de cerámica: Damas de Elche, llaveros, pulseras, imanes y mucho más.
                            </p>
                            <p className="products-impact">
                                <Heart size={16} /> <strong>Tu compra cambia vidas</strong> — Cada pieza financia nuestros programas de inclusión.
                            </p>
                            <Link to="/productos-solidarios" className="btn btn-primary">Haz tu pedido</Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Colabora */}
            <section className="section collaborate-section">
                <div className="container">
                    <AnimatedSection>
                        <h2 className="section-title section-title-center">Colabora con nosotros</h2>
                        <p className="section-subtitle section-subtitle-center">
                            Cada gesto cuenta. Hay muchas formas de contribuir a la inclusión social.
                        </p>
                    </AnimatedSection>
                    <div className="collab-grid">
                        <AnimatedSection className="collab-card">
                            <div className="collab-icon"><UserCheck size={36} /></div>
                            <h3>Voluntariado</h3>
                            <p>Dedica tu tiempo y talento a acompañar a nuestros usuarios en actividades y talleres.</p>
                            <Link to="/contacto" className="link-arrow">Quiero ser voluntario <ArrowRight size={14} /></Link>
                        </AnimatedSection>
                        <AnimatedSection className="collab-card">
                            <div className="collab-icon"><HandHeart size={36} /></div>
                            <h3>Donaciones</h3>
                            <p>Colabora desde 1€ al mes a través de Teaming. Tu pequeño gesto genera un gran impacto.</p>
                            <a href="https://www.teaming.net/integratelche" target="_blank" rel="noopener noreferrer" className="link-arrow">
                                Donar con Teaming <ArrowRight size={14} />
                            </a>
                        </AnimatedSection>
                        <AnimatedSection className="collab-card">
                            <div className="collab-icon"><Building2 size={36} /></div>
                            <h3>Colaboración Empresarial</h3>
                            <p>Si tu empresa quiere contribuir a la inclusión social, contáctanos para explorar formas de colaboración.</p>
                            <Link to="/colaboradores" className="link-arrow">Ver colaboradores <ArrowRight size={14} /></Link>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Blog Preview */}
            <section className="section section-alt">
                <div className="container">
                    <AnimatedSection>
                        <div className="blog-header">
                            <div>
                                <h2 className="section-title">Últimas Noticias</h2>
                                <p className="section-subtitle">Lo que está pasando en INTEGRA-T</p>
                            </div>
                            <Link to="/blog" className="btn btn-outline">Ver todas <ArrowRight size={16} /></Link>
                        </div>
                    </AnimatedSection>
                    <div className="blog-grid">
                        {[
                            {
                                category: 'Actividades',
                                title: 'Taller de cerámica: Nuevas creaciones para la Navidad',
                                excerpt: 'Nuestros usuarios han preparado una colección especial de figuras navideñas artesanales...',
                                date: '15 Feb 2026',
                                img: '/images/pedidos/navidad.jpg'
                            },
                            {
                                category: 'Instalaciones',
                                title: 'Visita nuestra nueva Vivienda Tutelada',
                                excerpt: 'Damos un paso más en la autonomía de nuestros usuarios con la apertura de la nueva vivienda...',
                                date: '10 Feb 2026',
                                img: '/images/general/vivienda-tutelada.jpg'
                            },
                            {
                                category: 'Equipo',
                                title: 'Un equipo comprometido con la diversidad',
                                excerpt: 'Conoce a los profesionales que hacen posible que INTEGRA-T siga creciendo cada día...',
                                date: '5 Feb 2026',
                                img: '/images/general/equipo-integrat.jpg'
                            }
                        ].map((post, i) => (
                            <AnimatedSection key={i} className="blog-card card">
                                <div className="blog-card-image">
                                    <img src={post.img} alt={post.title} className="blog-thumb" />
                                    <span className="blog-category">{post.category}</span>
                                </div>
                                <div className="card-body">
                                    <span className="blog-date">{post.date}</span>
                                    <h3 className="blog-title">{post.title}</h3>
                                    <p className="blog-excerpt">{post.excerpt}</p>
                                    <Link to="/blog" className="link-arrow">Leer más <ArrowRight size={14} /></Link>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="cta-section">
                <div className="container cta-content">
                    <AnimatedSection>
                        <h2>¿Quieres conocernos en persona?</h2>
                        <p>Visita nuestras instalaciones, conoce al equipo y descubre todo lo que hacemos.</p>
                        <div className="cta-actions">
                            <Link to="/contacto" className="btn btn-primary btn-lg">Contactar</Link>
                            <Link to="/instalaciones" className="btn btn-white btn-lg">Ver instalaciones</Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </>
    )
}
