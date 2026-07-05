import React from "react";

import styles from "./Contact.module.css";
import { useReveal } from "../../hooks/useReveal";

const LINKS = [
  {
    label: "Email",
    value: "munawark7@gmail.com",
    href: "mailto:munawark7@gmail.com",
    icon: "M2 4h20v16H2V4zm2 2v.5l8 5 8-5V6H4zm16 3.2-8 5-8-5V18h16V9.2z",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/munawark7",
    href: "https://www.linkedin.com/in/munawark7/",
    icon: "M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM0 8h5v16H0V8zm7.5 0h4.78v2.2h.07c.66-1.25 2.27-2.57 4.67-2.57 5 0 5.92 3.29 5.92 7.57V24h-5v-7.4c0-1.77-.03-4.05-2.47-4.05-2.47 0-2.85 1.93-2.85 3.92V24h-5V8z",
  },
  {
    label: "GitHub",
    value: "github.com/FahimMunawar",
    href: "https://www.github.com/FahimMunawar",
    icon: "M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.23-.13-.31-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.18.77.84 1.24 1.91 1.24 3.23 0 4.63-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.56 22.3 24 17.8 24 12.5 24 5.87 18.63.5 12 .5z",
  },
];

export const Contact = () => {
  const ref = useReveal();

  return (
    <footer id="contact" className={styles.footer}>
      <div ref={ref} className={`${styles.inner} reveal`}>
        <span className="sectionTag">06 — Contact</span>
        <h2 className={styles.heading}>Let's build something together</h2>
        <p className={styles.subtitle}>
          Open to Ph.D. opportunities, research collaboration, and DevOps roles.
          Feel free to reach out.
        </p>

        <ul className={styles.links}>
          {LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={styles.link}
              >
                <span className={styles.iconWrap}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d={link.icon} />
                  </svg>
                </span>
                <span className={styles.linkText}>
                  <span className={styles.linkLabel}>{link.label}</span>
                  <span className={styles.linkValue}>{link.value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Md. Munawar Hossain</span>
        <span>Built with React &amp; Vite</span>
      </div>
    </footer>
  );
};
