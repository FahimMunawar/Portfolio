import React, { useEffect, useState } from "react";

import styles from "./Navbar.module.css";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Publications", href: "#publications" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <a className={styles.brand} href="#top">
        <span className={styles.brandMark}>MH</span>
        <span className={styles.brandName}>Munawar Hossain</span>
      </a>

      <button
        className={styles.menuBtn}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span className={`${styles.bar} ${menuOpen ? styles.barTop : ""}`} />
        <span className={`${styles.bar} ${menuOpen ? styles.barMid : ""}`} />
        <span className={`${styles.bar} ${menuOpen ? styles.barBot : ""}`} />
      </button>

      <ul
        className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}
        onClick={() => setMenuOpen(false)}
      >
        {LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
        <li>
          <a
            className={styles.cvBtn}
            href="/Munawar_Hossain_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};
