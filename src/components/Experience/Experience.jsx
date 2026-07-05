import React from "react";

import styles from "./Experience.module.css";
import history from "../../data/history.json";
import { useReveal } from "../../hooks/useReveal";

const initials = (name) =>
  name
    .split(" ")
    .filter((w) => /[A-Za-z0-9]/.test(w[0]))
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

export const Experience = () => {
  const ref = useReveal();

  return (
    <section className={styles.container} id="experience">
      <div ref={ref} className="reveal">
        <span className="sectionTag">03 — Experience</span>
        <h2 className={styles.heading}>Where I've worked</h2>
      </div>

      <ol className={styles.timeline}>
        {history.map((item, id) => (
          <li key={id} className={styles.item}>
            <div className={styles.marker}>
              <span className={styles.badge}>{initials(item.organisation)}</span>
              {id !== history.length - 1 && <span className={styles.line} />}
            </div>

            <div className={styles.card}>
              <div className={styles.cardTop}>
                <div>
                  <h3 className={styles.role}>{item.role}</h3>
                  <p className={styles.org}>{item.organisation}</p>
                </div>
                <span className={styles.period}>
                  {item.startDate} – {item.endDate}
                </span>
              </div>
              <ul className={styles.points}>
                {item.experiences.map((exp, i) => (
                  <li key={i}>{exp}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};
