import React from "react";

import styles from "./Publications.module.css";
import publications from "../../data/publications.json";
import { useReveal } from "../../hooks/useReveal";

const highlightName = (authors) => {
  const parts = authors.split(/(Munawar Hossain)/g);
  return parts.map((part, i) =>
    /Munawar Hossain/.test(part) ? (
      <strong key={i} className={styles.self}>
        {part}
      </strong>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  );
};

export const Publications = () => {
  const ref = useReveal();

  return (
    <section className={styles.container} id="publications">
      <div ref={ref} className="reveal">
        <span className="sectionTag">05 — Research</span>
        <h2 className={styles.heading}>Publications</h2>
        <p className={styles.subtitle}>
          Peer-reviewed research in deep learning, federated learning, and
          computer vision.{" "}
          <a
            href="https://scholar.google.com/citations?user=kxAnHncAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.scholarLink}
          >
            View Google Scholar →
          </a>
        </p>
      </div>

      <ol className={styles.list}>
        {publications.map((pub, id) => (
          <li key={id} className={styles.item}>
            <a
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div className={styles.meta}>
                <span
                  className={`${styles.type} ${
                    pub.type === "Journal" ? styles.journal : styles.conference
                  }`}
                >
                  {pub.type}
                </span>
                <span className={styles.year}>{pub.year}</span>
              </div>
              <h3 className={styles.title}>{pub.title}</h3>
              <p className={styles.authors}>{highlightName(pub.authors)}</p>
              <p className={styles.venue}>{pub.venue}</p>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
};
