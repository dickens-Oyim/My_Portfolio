import { useEffect, useState } from "react";

const roles = ["Networking Associate", "Full-Stack Developer"];

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = roles[roleIdx];
    const speed = deleting ? 45 : 90;
    const t = setTimeout(() => {
      if (!deleting) {
        if (text.length < full.length) setText(full.slice(0, text.length + 1));
        else setTimeout(() => setDeleting(true), 1400);
      } else {
        if (text.length > 0) setText(full.slice(0, text.length - 1));
        else {
          setDeleting(false);
          setRoleIdx((roleIdx + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, roleIdx]);

  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="reveal visible">
          <h1>
            Hi, I&apos;m <span className="gradient">Elly Dickens Oyim</span>
          </h1>
          <div className="hero-role">
            {text}
            <span className="cursor" />
          </div>
          <p className="intro">
            I build and maintain reliable networks while crafting clean, modern
            web applications. Combining Cisco routing &amp; switching
            fundamentals with full-stack development to deliver technology that
            simply works.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-photo reveal visible">
          <div className="photo-ring">
            <img
              src={`${import.meta.env.BASE_URL}images/profile.jpg`}
              alt="Elly Dickens Oyim"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
