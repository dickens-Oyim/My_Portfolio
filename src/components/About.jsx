import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <Reveal>
          <span className="section-tag">// about me</span>
          <h2 className="section-title">Professional Summary</h2>
          <p className="section-sub">
            I&apos;m Elly Dickens Oyim, a Networking Associate and Full-Stack
            Developer based in Nairobi, Kenya.
          </p>
        </Reveal>

        <div className="about-grid">
          <Reveal>
            <div className="about-card">
              <h3>What I Do</h3>
              <p>
                I work with computer networks and I also build web
                applications. My main skills are routing and switching, VLANs,
                OSPF, ACLs and subnetting, plus JavaScript, React, HTML/CSS,
                Linux and Git.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="about-card">
              <h3>Career Objective</h3>
              <p>
                To grow as a network engineer while continuing to build my
                coding skills. I am open to networking and junior full-stack
                roles.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
