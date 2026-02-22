import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Calendar, ArrowRight, Search, Tag } from 'lucide-react'
import './Blog.css'

const categories = ['Todas', 'Actividades', 'Eventos', 'Noticias', 'Logros', 'Talleres']

const posts = [
    { id: 1, category: 'Actividades', title: 'Taller de cerámica: Nuevas creaciones para Navidad', excerpt: 'Nuestros usuarios han preparado una colección especial de figuras navideñas artesanales que ya están disponibles para pedidos.', date: '15 Feb 2026', featured: true },
    { id: 2, category: 'Eventos', title: 'Jornada de puertas abiertas en INTEGRA-T', excerpt: 'Este sábado celebramos una jornada de puertas abiertas para que las familias conozcan nuestras instalaciones y programas.', date: '10 Feb 2026', featured: true },
    { id: 3, category: 'Noticias', title: 'Renovamos el convenio con el Ayuntamiento de Elche', excerpt: 'Gracias al apoyo del Ayuntamiento, seguimos ofreciendo programas de inserción sociolaboral para nuestros usuarios.', date: '5 Feb 2026' },
    { id: 4, category: 'Talleres', title: 'Nuevo taller de Radio INTEGRA-T', excerpt: 'Inauguramos nuestro espacio de radio donde los usuarios crean programas, entrevistan y gestionan la programación.', date: '28 Ene 2026' },
    { id: 5, category: 'Logros', title: 'Nuestros usuarios brillan en el mercadillo solidario', excerpt: 'Gran éxito de ventas de cerámica artesanal en el mercadillo navideño del centro de Elche.', date: '20 Ene 2026' },
    { id: 6, category: 'Actividades', title: 'Excursión al Palmeral de Elche', excerpt: 'Nuestros usuarios disfrutaron de una tarde maravillosa recorriendo el Palmeral y realizando actividades al aire libre.', date: '15 Ene 2026' },
]

export default function Blog() {
    const [activeCategory, setActiveCategory] = useState('Todas')

    const filtered = activeCategory === 'Todas' ? posts : posts.filter(p => p.category === activeCategory)
    const featuredPosts = posts.filter(p => p.featured)

    return (
        <>
            <Helmet>
                <title>Blog y Noticias | INTEGRA-T</title>
                <meta name="description" content="Últimas noticias, actividades y eventos de INTEGRA-T. Descubre lo que hacemos día a día." />
            </Helmet>

            <section className="page-hero">
                <div className="page-hero-content">
                    <h1>Blog y Noticias</h1>
                    <p className="breadcrumb"><Link to="/">Inicio</Link> &gt; Blog</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    {/* Featured */}
                    <div className="blog-featured">
                        {featuredPosts.map(post => (
                            <div key={post.id} className="featured-card">
                                <div className="featured-image"><Calendar size={48} /></div>
                                <div className="featured-content">
                                    <span className="blog-cat-tag">{post.category}</span>
                                    <h2>{post.title}</h2>
                                    <p>{post.excerpt}</p>
                                    <div className="featured-meta">
                                        <span className="blog-date-tag"><Calendar size={14} /> {post.date}</span>
                                        <span className="link-arrow">Leer más <ArrowRight size={14} /></span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Filters */}
                    <div className="blog-filters">
                        <div className="category-tabs">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    className={`cat-tab ${activeCategory === cat ? 'cat-tab-active' : ''}`}
                                    onClick={() => setActiveCategory(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="blog-posts-grid">
                        {filtered.map(post => (
                            <article key={post.id} className="blog-post-card card">
                                <div className="blog-post-image"><Calendar size={32} /></div>
                                <div className="card-body">
                                    <span className="blog-cat-tag">{post.category}</span>
                                    <h3>{post.title}</h3>
                                    <p>{post.excerpt}</p>
                                    <div className="featured-meta">
                                        <span className="blog-date-tag"><Calendar size={12} /> {post.date}</span>
                                        <span className="link-arrow">Leer más <ArrowRight size={14} /></span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
