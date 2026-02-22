import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import QuienesSomos from './pages/QuienesSomos'
import Programas from './pages/Programas'
import Instalaciones from './pages/Instalaciones'
import Equipo from './pages/Equipo'
import ProductosSolidarios from './pages/ProductosSolidarios'
import Blog from './pages/Blog'
import Colaboradores from './pages/Colaboradores'
import Transparencia from './pages/Transparencia'
import Contacto from './pages/Contacto'

function App() {
    return (
        <>
            <ScrollToTop />
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/quienes-somos" element={<QuienesSomos />} />
                    <Route path="/programas" element={<Programas />} />
                    <Route path="/instalaciones" element={<Instalaciones />} />
                    <Route path="/equipo" element={<Equipo />} />
                    <Route path="/productos-solidarios" element={<ProductosSolidarios />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/colaboradores" element={<Colaboradores />} />
                    <Route path="/transparencia" element={<Transparencia />} />
                    <Route path="/contacto" element={<Contacto />} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}

export default App
