import { useState } from 'react'
import '../css/About.css'

const About = ({ edad, emprendimiento, infoExtra, estadoCivil, provincia, presentacion, nombre, apellido, carrera }) => {
  const [mostrarMas, setMostrarMas] = useState(false)

  return (
    <section id="sobre-mi" className="about-container">
      <header className="about-encabezado">
        <span className="about-eyebrow">UN POCO SOBRE MÍ</span>
        <p className="about-presentacion">{presentacion}</p>
        <span className="about-carrera">{carrera} <span aria-hidden="true">·</span> UTN-FRT</span>
      </header>

      {mostrarMas && (
        <div className="about-detalles">
          <div className="about-grid">
            <p><strong>Nombre completo</strong><span>{nombre} {apellido}</span></p>
            <p><strong>Edad</strong><span>{edad} años</span></p>
            <p><strong>Estado civil</strong><span>{estadoCivil}</span></p>
            <p><strong>Ubicación</strong><span>{provincia}, Argentina</span></p>
          </div>
          <div className="about-seccion-extra">
            <h3>Mi emprendimiento</h3>
            <p>{emprendimiento}</p>
          </div>
          <div className="about-seccion-extra">
            <h3>Fuera del código</h3>
            <p>{infoExtra}</p>
          </div>
        </div>
      )}

      <button
        className="about-btn"
        type="button"
        aria-expanded={mostrarMas}
        onClick={() => setMostrarMas(!mostrarMas)}
      >
        {mostrarMas ? 'Ver menos' : 'Conocer más'}
        <span aria-hidden="true">{mostrarMas ? ' ↑' : ' ↓'}</span>
      </button>
    </section>
  )
}

export default About
