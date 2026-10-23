import '../css/Footer.css'

const Footer = ({ email }) => (
  <footer className="footer-container">
    <div className="footer-card">
      <div className="footer-copy">
        <span className="footer-eyebrow">¿TENÉS UNA IDEA?</span>
        <h2>Hablemos de tu próximo proyecto</h2>
        <p>Estoy abierto a nuevas oportunidades, colaboraciones y buenos desafíos.</p>
      </div>
      <a href={`mailto:${email}`} className="footer-mail">
        <span className="footer-mail-icon" aria-hidden="true">✉</span>
        <span className="footer-mail-text">
          <small>Escribime a</small>
          <strong>{email}</strong>
        </span>
        <span className="footer-mail-arrow" aria-hidden="true">↗</span>
      </a>
    </div>
    <div className="footer-meta">
      <span>Joaquín Ávila Lahr</span>
      <span className="footer-meta-dot" aria-hidden="true">·</span>
      <span>Estudiante de programación · UTN-FRT</span>
      <span className="footer-meta-copy">© {new Date().getFullYear()}</span>
    </div>
  </footer>
)

export default Footer
