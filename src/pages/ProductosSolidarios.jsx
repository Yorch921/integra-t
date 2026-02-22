import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ShoppingBag, Heart, Send, ArrowRight, Package, Palette, Star, Check } from 'lucide-react'
import './ProductosSolidarios.css'

const productos = [
    { name: 'Dama de Elche (grande)', price: '15€', category: 'Figuras', img: '/images/pedidos/damas-trofeos.jpg' },
    { name: 'Dama de Elche (pequeña)', price: '8€', category: 'Figuras', img: '/images/pedidos/producto-6.jpg' },
    { name: 'Llaveros personalizados', price: '3€', category: 'Accesorios', img: '/images/pedidos/producto-7.jpg' },
    { name: 'Pulseras de cerámica', price: '5€', category: 'Accesorios', img: '/images/pedidos/producto-5.jpg' },
    { name: 'Imanes decorativos', price: '4€', category: 'Decoración', img: '/images/pedidos/medallas.jpg' },
    { name: 'Cuencos y platos artesanales', price: '12€', category: 'Decoración', img: '/images/pedidos/ceramica-platos.jpg' },
    { name: 'Decoración navideña', price: '10€', category: 'Decoración', img: '/images/pedidos/navidad.jpg' },
    { name: 'Figuras personalizadas', price: 'Consultar', category: 'Personalizado', img: '/images/pedidos/producto-8.jpg' },
]

export default function ProductosSolidarios() {
    const [formData, setFormData] = useState({ nombre: '', email: '', telefono: '', producto: '', cantidad: '', mensaje: '' })

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })
    const handleSubmit = (e) => {
        e.preventDefault()
        alert('¡Gracias! Recibirás un correo con la confirmación de tu pedido.')
    }

    return (
        <>
            <Helmet>
                <title>Productos Solidarios | INTEGRA-T</title>
                <meta name="description" content="Compra cerámica artesanal solidaria: Damas de Elche, llaveros, pulseras y más. Tu compra financia programas de inclusión." />
            </Helmet>

            <section className="page-hero">
                <div className="page-hero-content">
                    <h1>Productos Solidarios</h1>
                    <p className="breadcrumb"><Link to="/">Inicio</Link> &gt; Productos Solidarios</p>
                </div>
            </section>

            {/* Intro */}
            <section className="section">
                <div className="container products-intro">
                    <div className="products-intro-text">
                        <span className="badge"><Heart size={12} /> Hechos con el corazón</span>
                        <h2 className="section-title">Cerámica artesanal con alma</h2>
                        <p>
                            <strong>¿Tienes un evento próximamente? Haz un detalle solidario, original y artesanal.</strong>
                            Nuestros usuarios crean cada pieza con sus propias manos en el taller de cerámica del centro.
                        </p>
                        <p>
                            Cada compra financia directamente los programas de inclusión de INTEGRA-T.
                            Ofrecemos piezas para bodas, bautizos, comuniones, eventos empresariales y regalos personalizados.
                        </p>
                        <div className="products-features">
                            <div className="pf"><Palette size={18} /> <span>100% artesanal</span></div>
                            <div className="pf"><Heart size={18} /> <span>100% solidario</span></div>
                            <div className="pf"><Package size={18} /> <span>Personalizable</span></div>
                            <div className="pf"><Star size={18} /> <span>Para eventos</span></div>
                        </div>
                    </div>
                    <div className="products-intro-image">
                        <img src="/images/pedidos/catalogo.jpg" alt="Catálogo de cerámica artesanal INTEGRA-T: Damas de Elche, llaveros, pulseras, collares, incensarios, medallas y trofeos" className="products-hero-img" />
                    </div>
                </div>
            </section>

            {/* Catálogo */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title section-title-center">Nuestro Catálogo</h2>
                    <p className="section-subtitle section-subtitle-center">
                        Piezas únicas creadas en nuestro taller de cerámica. Consulta precios para pedidos personalizados.
                    </p>
                    <div className="catalog-grid">
                        {productos.map((p, i) => (
                            <div key={i} className="catalog-card">
                                <div className="catalog-image">
                                    <img src={p.img} alt={p.name} loading="lazy" />
                                </div>
                                <div className="catalog-info">
                                    <span className="catalog-category">{p.category}</span>
                                    <h3>{p.name}</h3>
                                    <span className="catalog-price">{p.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Formulario */}
            <section className="section">
                <div className="container order-section">
                    <div className="order-info">
                        <h2 className="section-title">Haz tu pedido</h2>
                        <p>
                            Rellena el formulario y nos pondremos en contacto contigo para confirmar tu pedido,
                            plazos de entrega y forma de pago.
                        </p>
                        <ul className="order-steps">
                            <li><Check size={18} /> <span><strong>1.</strong> Rellena el formulario con tus datos y el producto deseado</span></li>
                            <li><Check size={18} /> <span><strong>2.</strong> Te contactamos para confirmar disponibilidad y precio</span></li>
                            <li><Check size={18} /> <span><strong>3.</strong> Preparamos tu pedido artesanal con todo el cariño</span></li>
                            <li><Check size={18} /> <span><strong>4.</strong> Recogida en el centro o envío acordado</span></li>
                        </ul>
                    </div>
                    <form className="order-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label">Nombre completo *</label>
                            <input className="form-input" name="nombre" value={formData.nombre} onChange={handleChange} required />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Email *</label>
                                <input className="form-input" type="email" name="email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Teléfono</label>
                                <input className="form-input" type="tel" name="telefono" value={formData.telefono} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Producto *</label>
                                <select className="form-select" name="producto" value={formData.producto} onChange={handleChange} required>
                                    <option value="">Selecciona un producto</option>
                                    {productos.map((p, i) => <option key={i} value={p.name}>{p.name} — {p.price}</option>)}
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Cantidad *</label>
                                <input className="form-input" type="number" min="1" name="cantidad" value={formData.cantidad} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Mensaje / Personalización</label>
                            <textarea className="form-textarea" name="mensaje" value={formData.mensaje} onChange={handleChange} placeholder="Cuéntanos si necesitas alguna personalización o detalle especial..." />
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                            <Send size={18} /> Enviar pedido
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}
