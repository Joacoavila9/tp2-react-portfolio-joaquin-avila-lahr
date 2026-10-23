
import { persona } from '../datos/portfolio'

const Contacto = () => {
  return (
    <section className="pagina">
      <h2>Contacto</h2>

      <p>Si querés comunicarte conmigo, podés escribirme.</p>

      <p>
        Email: {persona.email}
      </p>
    </section>
  )
}

export default Contacto
