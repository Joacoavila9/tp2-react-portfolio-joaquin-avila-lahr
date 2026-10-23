
import { NavLink } from 'react-router-dom'
import '../css/Sidebar.css'

const Sidebar = ({ nombre, apellido, carrera }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-perfil">
        <h1>{nombre} {apellido}</h1>
        <p>{carrera}</p>
      </div>

      <nav className="sidebar-menu">
        <NavLink to="/" end>Inicio</NavLink>
        <NavLink to="/about">Sobre mí</NavLink>
        <NavLink to="/skills">Habilidades</NavLink>
        <NavLink to="/projects">Proyectos</NavLink>
        <NavLink to="/contact">Contacto</NavLink>
      </nav>
    </aside>
  )
}

export default Sidebar
