import Reveal from "./Reveal";

const certs = [
  {
    title: "Cisco Networking Academy: Networking Essentials",
    issuer: "Cisco NetAcad",
    desc: "Fundamentals of networking: IP addressing, protocols, and basic router/switch configuration.",
    url: "https://www.linkedin.com/in/elly-dickens-a9b342387/",
  },
  {
    title: "Routing & Switching Fundamentals",
    issuer: "Cisco / NetAcad",
    desc: "VLAN segmentation, inter-VLAN routing, OSPF dynamic routing and ACL-based traffic control.",
    url: "https://www.linkedin.com/in/elly-dickens-a9b342387/",
  },
];

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="container">
        <Reveal>
          <span className="section-tag">// certifications</span>
          <h2 className="section-title">Certifications &amp; Credentials</h2>
          <p className="section-sub">
            Verified achievements from Cisco and industry programs. Credentials
            are published on LinkedIn for recruiters to verify.
          </p>
        </Reveal>

        <div className="cert-grid">
          {certs.map((c) => (
            <Reveal key={c.title}>
              <div className="cert-card">
                <h3>{c.title}</h3>
                <span className="issuer">{c.issuer}</span>
                <p>{c.desc}</p>
                <a
                  className="cert-link"
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  View credential on LinkedIn
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
