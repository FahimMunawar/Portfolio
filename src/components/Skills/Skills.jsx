import React from "react";

import styles from "./Skills.module.css";
import skills from "../../data/skills.json";
import { useReveal } from "../../hooks/useReveal";

export const Skills = () => {
  const ref = useReveal();

  return (
    <section className={styles.container} id="skills">
      <div ref={ref} className="reveal">
        <span className="sectionTag">02 — Skills</span>
        <h2 className={styles.heading}>Technical toolkit</h2>
        <p className={styles.subtitle}>
          The platforms, tools, and languages I use to ship reliable software
          and infrastructure.
        </p>
      </div>

      <div className={styles.grid}>
        {skills.map((group) => (
          <article key={group.category} className={styles.card}>
            <div className={styles.cardHead}>
              <span className={styles.cardIcon}>{group.icon}</span>
              <h3>{group.category}</h3>
            </div>
            <ul className={styles.tags}>
              {group.items.map((item) => (
                <li key={item} className={styles.tag}>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};
