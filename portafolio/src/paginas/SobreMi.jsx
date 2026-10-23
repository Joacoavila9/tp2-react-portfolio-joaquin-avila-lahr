
import { persona } from '../datos/portfolio'
import About from '../componentes/About'

const SobreMi = () => {
  return (
    <section className="pagina">
      <About
        nombre={persona.nombre}
        apellido={persona.apellido}
        carrera={persona.carrera}
        edad={persona.edad}
        provincia={persona.provincia}
        emprendimiento={persona.emprendimiento}
        infoExtra={persona.infoExtra}
        estadoCivil={persona.estadoCivil}
        presentacion={persona.presentacion}
      />
    </section>
  )
}

export default SobreMi

