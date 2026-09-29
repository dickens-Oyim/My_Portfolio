export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <a href="#top" className="logo" aria-label="Back to top">
            <span className="dot" />
          </a>
          <div className="socials">
            <a
              href="https://github.com/dickens-Oyim"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              GH
            </a>
            <a
              href="https://www.linkedin.com/in/elly-dickens-a9b342387/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              in
            </a>
            <a
              href="mailto:dickenselly640@gmail.com"
              aria-label="Email"
              title="Email"
            >
              @
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {year} Elly Dickens Oyim · Networking Associate &amp; Full-Stack
            Developer
          </p>
          <p style={{ marginTop: 6 }}>
            Designed &amp; Built by <strong>Elly Dickens Oyim</strong> · React +
            Vite
          </p>
        </div>
      </div>
    </footer>
  );
}
