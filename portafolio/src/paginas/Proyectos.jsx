
import Projects from '../componentes/Projects'

const Proyectos = ({ proyectos }) => {
  return (
    <section className="pagina">
      <h2>Mis proyectos</h2>

      <div className="proyectos-lista">
        {proyectos.map((proyecto) => (
          <Projects
            key={proyecto.titulo}
            titulo={proyecto.titulo}
            descripcion={proyecto.descripcion}
          />
        ))}
      </div>
    </section>
  )
}

export default Proyectos
