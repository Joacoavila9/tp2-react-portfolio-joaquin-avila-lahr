import { persona } from '../datos/portfolio'
import Hero from '../componentes/Hero'

const Inicio = () => {
  return (
    <section className="pagina">
      <Hero
        nombre={persona.nombre}
        presentacion={persona.presentacion}
      />
    </section>
  )
}

export default Inicio
