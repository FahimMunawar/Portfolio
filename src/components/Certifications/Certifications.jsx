import React from "react";

import styles from "./Certifications.module.css";
import certifications from "../../data/certifications.json";
import { useReveal } from "../../hooks/useReveal";

export const Certifications = () => {
  const ref = useReveal();

  return (
    <section className={styles.container} id="certifications">
      <div ref={ref} className="reveal">
        <span className="sectionTag">04 — Certifications</span>
        <h2 className={styles.heading}>Credentials &amp; validation</h2>
        <p className={styles.subtitle}>
          AWS Associate-level certifications spanning architecture, operations,
          and data engineering.
        </p>
      </div>

      <div className={styles.grid}>
        {certifications.map((cert) => (
          <article key={cert.title} className={styles.card}>
            <div className={styles.top}>
              <span className={styles.logo}>AWS</span>
              <span className={styles.date}>{cert.date}</span>
            </div>
            <h3 className={styles.title}>{cert.title}</h3>
            <p className={styles.issuer}>{cert.issuer}</p>
            <p className={styles.desc}>{cert.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
