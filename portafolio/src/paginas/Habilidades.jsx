import { conocimientos } from '../datos/portfolio'
import Skills from '../componentes/Skills'

const Habilidades = () => {
  return (
    <section className="pagina">
      <Skills conocimientos={conocimientos} />
    </section>
  )
}

export default Habilidades

