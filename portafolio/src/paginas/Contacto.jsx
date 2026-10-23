import { persona } from '../datos/portfolio'
import Footer from '../componentes/Footer'

const Contacto = () => (
  <section className="pagina">
    <h2>Contacto</h2>
    <p>Si querés comunicarte conmigo, escribime. Estoy abierto a nuevas oportunidades, colaboraciones y buenos desafíos.</p>
    <Footer email={persona.email} />
  </section>
)

export default Contacto
