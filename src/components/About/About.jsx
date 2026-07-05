import React from "react";

import styles from "./About.module.css";
import { useReveal } from "../../hooks/useReveal";

export const About = () => {
  const ref = useReveal();

  return (
    <section className={styles.container} id="about">
      <div ref={ref} className="reveal">
        <span className="sectionTag">01 — About</span>
        <h2 className={styles.heading}>
          Engineering reliable systems with a researcher's curiosity
        </h2>

        <div className={styles.grid}>
          <p className={styles.lead}>
            I'm a Cloud and DevOps Engineer who pairs deep expertise in AWS,
            Azure, Kubernetes, and CI/CD automation with an AI-driven
            engineering mindset. I design scalable, cost-optimized cloud
            architectures, automate infrastructure with Terraform and
            containers, and build observability into every layer of the stack.
          </p>
          <p className={styles.body}>
            Backed by an AI/ML research foundation in deep and federated
            learning, I blend strong systems engineering with a data-informed,
            automation-first approach. I'm passionate about driving cloud-native
            transformation, embedding AI into operations, and continuously
            optimizing performance, security, and developer velocity, and I'm
            now looking to pursue a Ph.D. to advance this research further.
          </p>
        </div>

        <div className={styles.eduCard}>
          <div className={styles.eduIcon}>🎓</div>
          <div className={styles.eduDetails}>
            <h3>B.Sc. in Electrical &amp; Computer Engineering</h3>
            <p className={styles.eduOrg}>
              Rajshahi University of Engineering &amp; Technology
            </p>
            <p className={styles.eduMeta}>
              Jan 2018 – Sep 2023 · CGPA 3.32 / 4.00 (3.7 in the last 4
              semesters)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
