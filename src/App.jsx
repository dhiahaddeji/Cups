import { useEffect, useRef, useState } from "react";
import { MENU } from "./menuData";

/* Reveal-on-scroll wrapper */
function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("revealed");
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function MenuItem({ item, index }) {
  return (
    <Reveal delay={index * 60}>
      <div className={`item ${item.star ? "item-star" : ""}`}>
        <div className="item-text">
          <span className="item-name">
            {item.name}
            {item.star && <span className="badge">★ Top</span>}
          </span>
          {item.desc && <span className="item-desc">{item.desc}</span>}
        </div>
        <span className="dots" />
        <span className="price">
          {item.price}
          <small> DT</small>
        </span>
      </div>
    </Reveal>
  );
}

function Section({ section }) {
  return (
    <section id={section.id} className={`menu-section ${section.signature ? "signature" : ""}`}>
      <div className="banner">
        <img
          src={section.image}
          alt={section.title}
          loading="lazy"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
        <div className="banner-overlay" />
        <Reveal className="banner-text">
          <span className="section-icon">{section.icon}</span>
          <h2>{section.title}</h2>
          <p>{section.subtitle}</p>
        </Reveal>
      </div>

      <div className="groups">
        {section.groups.map((g) => (
          <div className="group" key={g.name}>
            <Reveal>
              <h3 className="group-title">
                <span>{g.name}</span>
              </h3>
              {g.note && <p className="group-note">{g.note}</p>}
            </Reveal>
            <div className="items">
              {g.items.map((it, i) => (
                <MenuItem key={it.name} item={it} index={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hot");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      let current = "hot";
      for (const s of MENU) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) current = s.id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* NAV */}
      <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <a href="#top" className="nav-brand">
          <img src="/logo.png" alt="Cups Coffee" />
          <span>Cups Coffee</span>
        </a>
        <div className="nav-links">
          {MENU.map((s) => (
            <a key={s.id} href={`#${s.id}`} className={active === s.id ? "active" : ""}>
              <span className="nav-ic">{s.icon}</span>
              <span className="nav-lb">{s.title}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <header className="hero" id="top">
        <div className="hero-bg" />
        <div className="beans" aria-hidden="true">
          {Array.from({ length: 14 }).map((_, i) => (
            <span key={i} style={{ "--i": i }}>
              {["☕", "🫘", "✦"][i % 3]}
            </span>
          ))}
        </div>
        <div className="hero-content">
          <div className="logo-wrap">
            <div className="steam" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <img src="/logo.png" alt="Cups Coffee logo" className="hero-logo" />
          </div>
          <h1>
            <span className="line">Préparé avec</span>
            <span className="line accent">Passion.</span>
          </h1>
          <p className="tagline">
            Café · Mojitos · Crêpes · Desserts — & notre Chicha signature 💨
          </p>
          <a href="#hot" className="cta">
            Découvrir le Menu <span className="cta-arrow">↓</span>
          </a>
        </div>
        <div className="hero-ticker">
          <div className="ticker-track">
            {[...MENU, ...MENU].map((s, i) => (
              <span key={i}>
                {s.icon} {s.title} <em>✦</em>
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* SECTIONS */}
      <main>
        {MENU.map((s) => (
          <Section key={s.id} section={s} />
        ))}
      </main>

      <footer className="footer">
        <img src="/logo.png" alt="Cups Coffee" />
        <p>Cups Coffee — Chaque tasse raconte une histoire.</p>
        <p className="footer-small">☕ Ouvert tous les jours · de 5h00 à ♾️</p>
      </footer>
    </>
  );
}
