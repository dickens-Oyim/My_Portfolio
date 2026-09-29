// Skills section — groups my skills into category cards.
// Each skill is rendered as a simple text chip (no bars/percentages).
import Reveal from "./Reveal";

// Networking skills — core Cisco/NetAcad fundamentals.
const networkingSkills = [
  "Routing & Switching",
  "VLANs",
  "OSPF",
  "ACLs",
  "Subnetting",
  "Cisco Packet Tracer",
  "TCP/IP",
  "DNS",
  "DHCP",
  "Wireshark",
  "IP Addressing",
  "Network Troubleshooting",
];

// Systems & web basics — OS and general web knowledge.
const systemsWebSkills = [
  "Linux",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Git & GitHub",
  "VS Code",
  "REST APIs",
  "Responsive Design",
];

// Frontend — used to build the UI.
const frontendSkills = [
  "React",
  "JavaScript (ES6+)",
  "HTML5",
  "CSS3",
  "Responsive Design",
  "REST API Integration",
];

// Backend — server-side languages & frameworks.
const backendSkills = [
  "Python",
  "FastAPI",
  "REST API Development",
  "Node.js Basics",
  "JSON / Data Handling",
  "MySQL Basics",
  "Postgresql/Database",
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        {/* Section heading */}
        <Reveal>
          <span className="section-tag">// skills</span>
          <h2 className="section-title">Skills</h2>
          <p className="section-sub">
            Core skills across networking, systems and web development, gained
            through hands-on practice.
          </p>
        </Reveal>

        {/* Grid of skill-category cards */}
        <div className="skills-grid">
          {/* Networking card */}
          <Reveal className="skill-category">
            <h3>Networking</h3>
            <div className="chips" style={{ marginTop: 18 }}>
              {networkingSkills.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Systems & Web card */}
          <Reveal className="skill-category">
            <h3>Systems &amp; Web</h3>
            <div className="chips" style={{ marginTop: 18 }}>
              {systemsWebSkills.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Frontend card */}
          <Reveal className="skill-category">
            <h3>Frontend</h3>
            <div className="chips" style={{ marginTop: 18 }}>
              {frontendSkills.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Backend card */}
          <Reveal className="skill-category">
            <h3>Backend</h3>
            <div className="chips" style={{ marginTop: 18 }}>
              {backendSkills.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Tools & Practices card */}
          <Reveal className="skill-category">
            <h3>Tools &amp; Practices</h3>
            <div className="chips">
              {[
                "Cisco Packet Tracer",
                "Wireshark",
                "Linux Terminal",
                "VS Code",
                "Git",
                "GitHub",
                "NPM",
                "Vite",
              ].map((c) => (
                <span key={c} className="chip">
                  {c}
                </span>
              ))}
            </div>

            {/* Short note on what I'm currently learning */}
            <p
              style={{
                color: "var(--slate)",
                fontSize: "0.88rem",
                marginTop: 18,
              }}
            >
              Currently deepening: network automation with Python, cloud
              fundamentals, and advanced Cisco routing.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
