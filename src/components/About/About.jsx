import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {/* <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        /> */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>Md. Munawar Hossain is deeply passionate about machine learning, particularly in the realms of deep learning and federated learning. He has a proven track record of developing and deploying machine learning models that drive data-driven decision-making. He just completed my B.Sc. & currently working as a DevOps Engineer for Exos Systems sister concern, Hubar Tech Limited. Munawar is now looking to pursue a Ph.D. to delve deeper into cutting-edge research and contribute significantly to the field of artificial intelligence.</h3>
              <p>

              </p>
            </div>
          </li>
          <h2 className={styles.title}>Education</h2>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>
              B.Sc. in Electrical & Computer Engineering</h3>
              <p>
              Rajshahi University of Engineering & Technology
              </p>
              <p>
              January 2018 – September 2023
              </p>
              <p>
              CGPA: 3.32 / 4.00 (3.7 in the last 4 Semesters)
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
