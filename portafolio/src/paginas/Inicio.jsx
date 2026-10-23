import Hero from '../componentes/Hero'

const Inicio = ({ persona }) => {
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