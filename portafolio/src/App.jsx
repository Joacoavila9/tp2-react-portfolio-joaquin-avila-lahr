
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import { persona, proyectos as proyectosIniciales } from './datos/portfolio'

import Sidebar from './componentes/Sidebar'

import Inicio from './paginas/Inicio'
import SobreMi from './paginas/SobreMi'
import Habilidades from './paginas/Habilidades'
import Proyectos from './paginas/Proyectos'
import Contacto from './paginas/Contacto'

import './App.css'

const App = () => {
  const [proyectos, setProyectos] = useState(proyectosIniciales)

  return (
    <div className="app-layout">
      <Sidebar
        nombre={persona.nombre}
        apellido={persona.apellido}
        carrera={persona.carrera}
      />

      <main className="contenido">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/about" element={<SobreMi />} />
          <Route path="/skills" element={<Habilidades />} />
          <Route path="/projects" element={<Proyectos />} />
          <Route path="/contact" element={<Contacto />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
