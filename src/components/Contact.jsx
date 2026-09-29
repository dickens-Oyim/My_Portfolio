import Reveal from "./Reveal";

const EMAIL = "dickenselly640@gmail.com";
const GITHUB = "https://github.com/dickens-Oyim";
const LINKEDIN = "https://www.linkedin.com/in/elly-dickens-a9b342387/";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <Reveal>
          <span className="section-tag">// contact</span>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-sub">
            Whether it&apos;s a networking role, a development opportunity or a
            collaboration, my inbox is always open.
          </p>
        </Reveal>

        <Reveal>
          <a className="contact-info-item" href={`mailto:${EMAIL}`}>
            <span className="icon">@</span>
            <div>
              <h4>Email</h4>
              <p>{EMAIL}</p>
            </div>
          </a>          <a className="contact-info-item" href={GITHUB} target="_blank" rel="noreferrer">
            <span className="icon">GH</span>
            <div>
              <h4>GitHub</h4>
              <p>github.com/dickens-Oyim</p>
            </div>
          </a>
          <a className="contact-info-item" href={LINKEDIN} target="_blank" rel="noreferrer">
            <span className="icon">in</span>
            <div>
              <h4>LinkedIn</h4>
              <p>linkedin.com/in/elly-dickens</p>
            </div>
          </a>
          <a
            className="contact-info-item"
            href="https://www.google.com/maps/place/Nairobi,+Kenya"
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon">KE</span>
            <div>
              <h4>Location</h4>
              <p>Nairobi, Kenya</p>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
