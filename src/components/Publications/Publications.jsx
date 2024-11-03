import React from "react";

import styles from "./Publications.module.css";
import { getImageUrl } from "../../utils";

export const Publications = () => {
  return (
    <section className={styles.container} id="publications">
      <h2 className={styles.title}>Publications</h2>
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
              
              <p style={{ marginBottom: "20px" }}>
              <img src="./scroll.ico" alt="Icon" style={{ width: "32px", height: "32px", verticalAlign: "middle", marginRight: "5px" }} />
               Md. Munawar Hossain, Md. Rabiul Islam, Md. Faysal Ahamed, Mominul Ahsan, Julfikar Haider (2024). 
              <a href="https://www.mdpi.com/2227-7080/12/9/151" target="_blank" rel="noopener noreferrer" style={{ color: "#4DA8DA" }}>
               A Collaborative Federated Learning Framework for Lung and Colon Cancer Classifications.
              </a>  <em>Technologies.</em> 
              </p>
              
              <p style={{ marginBottom: "20px" }}>
              <img src="./scroll.ico" alt="Icon" style={{ width: "32px", height: "32px", verticalAlign: "middle", marginRight: "5px" }} />
  Md. Faysal Ahamed, Md. Munawar Hossain, Mekhala Mariam Mary, Md. Rabiul Islam (2024). 
  <a href="https://ieeexplore.ieee.org/abstract/document/10534522" target="_blank" rel="noopener noreferrer" style={{ color: "#4DA8DA" }}>
    Optimizing Skin Lesion Segmentation with UNet and Attention-Guidance Utilizing Test Time Augmentation
  </a>. <em>2024 6th International Conference on Electrical Engineering and Information & Communication Technology (ICEEICT)</em>.
</p>
<p style={{ marginBottom: "20px" }}>
  <img src="./scroll.ico" alt="Icon" style={{ width: "32px", height: "32px", verticalAlign: "middle", marginRight: "5px" }} />
  M. D. Rafi Imam, Oishi Jyoti, Zakia Afrin, Md Munawar Hossain, Tamanna Hossain Mou (2023). 
  <a href="https://ieeexplore.ieee.org/abstract/document/10441163" target="_blank" rel="noopener noreferrer" style={{ color: "#4DA8DA" }}>
    Suicidal Thought Detection Using NLP (Natural Language Processing) on Reddit Data
  </a>. <em>2023 10th IEEE International Conference on Power Systems, ICPS 2023</em>.
</p>
<p style={{ marginBottom: "20px" }}>
<img src="./scroll.ico" alt="Icon" style={{ width: "32px", height: "32px", verticalAlign: "middle", marginRight: "5px" }} />
  Md Munawar Hossain, Md Faysal Ahamed, Md Robiul Islam, M. D. Rafi Imam (2023). 
  <a href="https://ieeexplore.ieee.org/abstract/document/10441464" target="_blank" rel="noopener noreferrer" style={{ color: "#4DA8DA" }}>
    Privacy Preserving Federated Learning for Lung Cancer Classification
  </a>. <em>2023 26th International Conference on Computer and Information Technology, ICCIT 2023</em>.
</p>
<p style={{ marginBottom: "20px" }}>
<img src="./scroll.ico" alt="Icon" style={{ width: "32px", height: "32px", verticalAlign: "middle", marginRight: "5px" }} />
  Oishi Jyoti, Md Munawar Hossain, Emama Nahid, Md Abu Ismail Siddique (2023). 
  <a href="https://ieeexplore.ieee.org/abstract/document/10428812" target="_blank" rel="noopener noreferrer" style={{ color: "#4DA8DA" }}>
    Comparative Analysis of Machine Learning Algorithms for Transmission Line Fault Detection
  </a>. <em>2023 10th IEEE International Conference on Power Systems, ICPS 2023</em>.
</p>
<p style={{ marginBottom: "20px" }}>
<img src="./scroll.ico" alt="Icon" style={{ width: "32px", height: "32px", verticalAlign: "middle", marginRight: "5px" }} />
  Md Faysal Ahamed, Md Munawar Hossain, Md Nahiduzzaman, Md Rabiul Islam, Md Robiul Islam, Mominul Ahsan, Julfikar Haider (2023). 
  <a href="https://www.sciencedirect.com/science/article/pii/S0895611123001313" target="_blank" rel="noopener noreferrer" style={{ color: "#4DA8DA" }}>
    A review on brain tumor segmentation based on deep learning methods with federated learning techniques
  </a>. <em>Computerized Medical Imaging and Graphics</em>.
</p>
<p style={{ marginBottom: "20px" }}>
<img src="./scroll.ico" alt="Icon" style={{ width: "32px", height: "32px", verticalAlign: "middle", marginRight: "5px" }} />
  Oishi Jyoti, Hafsa Binte Kibria, Md Munawar Hossain (2023). 
  <a href="https://ieeexplore.ieee.org/abstract/document/10428807" target="_blank" rel="noopener noreferrer" style={{ color: "#4DA8DA" }}>
    A Machine Learning Approach for Distribution Transformer Fault Detection
  </a>. <em>2023 10th IEEE International Conference on Power Systems, ICPS 2023</em>.
</p>

              
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
