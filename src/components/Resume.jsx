import Reveal from "./Reveal";

export default function Resume() {
  return (
    <section id="resume">
      <div className="container">
        <Reveal>
          <span className="section-tag">// resume</span>
          <h2 className="section-title">My Resume</h2>
          <p className="section-sub">
            A complete overview of my education, certifications and technical
            skills. Preview it right here or download a copy.
          </p>
        </Reveal>

        <Reveal>
          <div className="resume-card">
            <div className="resume-preview">
              <iframe
                src={`${import.meta.env.BASE_URL}resume.pdf#toolbar=0`}
                title="Elly Dickens Oyim Resume preview"
              />
            </div>
            <div className="resume-info">
              <h3>Elly Dickens Oyim CV</h3>
              <p>
                Networking Associate &amp; Full-Stack Developer · Nairobi, Kenya
              </p>
              <ul className="resume-list">
                <li>
                  Networking: VLANs, OSPF, ACLs, Subnetting, Packet Tracer
                </li>
                <li>Development: JavaScript, React, HTML, CSS</li>
                <li>Systems: Linux administration, Git &amp; GitHub</li>
                <li>Certifications from Cisco Networking Academy</li>
              </ul>
              <div className="resume-actions">
                <a
                  href={`${import.meta.env.BASE_URL}resume.pdf`}
                  download="Elly_Dickens_Resume.pdf"
                  className="btn btn-green"
                >
                  Download CV
                </a>
                <a
                  href={`${import.meta.env.BASE_URL}resume.pdf`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  Open in New Tab
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
