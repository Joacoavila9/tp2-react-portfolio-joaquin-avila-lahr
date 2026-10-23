
const Contacto = ({ email }) => {
  return (
    <section className="pagina">
      <h2>Contacto</h2>
      <p>Si querés comunicarte conmigo, podés escribirme.</p>

      <p>
        Email: <a href={`mailto:${email}`}>{email}</a>
      </p>
    </section>
  )
}

export default Contacto
