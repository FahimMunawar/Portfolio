import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const STATS = [
  { value: "3+", label: "Years in DevOps" },
  { value: "3", label: "AWS Certifications" },
  { value: "8", label: "Research Papers" },
];

export const Hero = () => {
  return (
    <section className={styles.container} id="top">
      <div className={styles.content}>
        <span className={styles.badge}>
          <span className={styles.pulse} />
          Available for Ph.D. & research collaboration
        </span>

        <h1 className={styles.title}>
          Hi, I'm <span className={styles.name}>Munawar Hossain</span>
        </h1>

        <p className={styles.role}>
          Cloud &amp; DevOps Engineer <span className={styles.divider}>/</span> AI-ML Researcher
        </p>

        <p className={styles.description}>
          I build scalable, cost-optimized cloud architectures and automate
          infrastructure across AWS, Azure, and Kubernetes, blending an
          automation-first mindset with a foundation in deep and federated
          learning research.
        </p>

        <div className={styles.actions}>
          <a href="#contact" className={styles.primaryBtn}>
            Get in touch
          </a>
          <a
            href="/Munawar_Hossain_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ghostBtn}
          >
            Download CV
          </a>
          <a
            href="https://scholar.google.com/citations?user=kxAnHncAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ghostBtn}
          >
            Google Scholar
          </a>
        </div>

        <ul className={styles.stats}>
          {STATS.map((stat) => (
            <li key={stat.label} className={styles.stat}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.imageWrap}>
        <div className={styles.imageGlow} />
        <img
          src={getImageUrl("hero/profile.jpeg")}
          alt="Portrait of Munawar Hossain"
          className={styles.heroImg}
        />
      </div>
    </section>
  );
};
