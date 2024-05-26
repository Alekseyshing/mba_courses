import React from "react";
import styles from "./FooterBlock.module.scss";

const FooterBlock = () => {
  return (
    <div className={styles.footerOverlay}>
      <div className={styles.footerLeftBlock}>
        <div className={styles.overlay}>
          <h3 className={styles.footerHeader}>Практические модули</h3>
          <p className={styles.footerText}>
            Работа над собственными проектами: &nbsp; практика групповых
            взаимодействий, кейс-методы, эссе
          </p>
        </div>
      </div>
      <div className={styles.footerRightBlock}>
        <div className={styles.overlay}>
          <h3 className={styles.footerHeader}>Итоговая аттестация</h3>
          <ul>
            <li className={styles.footerText}>
              Бизнес-проектирование (подготовка итоговой аттестационной работы,
              консультирование по бизнес-проектированию)
            </li>
            <li className={styles.footerText}>
              Защита итоговой аттестационной работы
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterBlock;
