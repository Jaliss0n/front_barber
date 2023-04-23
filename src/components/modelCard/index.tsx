import styles from "../../styles/card/card.module.css";
import imgDefault from "../../../images/profile.jpg";

interface cardTypes {
  nameService: string;
  description: string;
  imageCard: File | null;
}

export const ModelCard: React.FC<cardTypes> = ({
  nameService,
  description,
  imageCard,
}) => {
  if (imageCard === null) {
    return (
      <div className={styles.card}>
        <img src={imgDefault.src} className={styles.imageCard} />
        <div className={styles.sectionText}>
          <h3>{nameService}</h3>
          <p>{description}</p>
          <div className={styles.buttonGroupCard}>
            <button className={styles.buttonAgendar}>AGENDAR</button>
          </div>
        </div>
      </div>
    );
  } else {
    let convert = URL.createObjectURL(imageCard);

    return (
      <div className={styles.card}>
        <img src={convert} className={styles.imageCard} />
        <div className={styles.sectionText}>
          <h3>{nameService}</h3>
          <p>{description}</p>
          <div className={styles.buttonGroupCard}>
            <button className={styles.buttonAgendar}>AGENDAR</button>
          </div>
        </div>
      </div>
    );
  }
};
