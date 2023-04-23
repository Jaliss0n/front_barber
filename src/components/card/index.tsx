import styles from "../../styles/card/card.module.css";
import { StaticImageData } from "next/image";

interface cardTypes {
  nameService: string;
  description: string;
  imageCard: StaticImageData;
}

export const Card: React.FC<cardTypes> = ({
  nameService,
  description,
  imageCard,
}) => {
  return (
    <div className={styles.card}>
      <img src={imageCard.src} className={styles.imageCard} />
      <div className={styles.sectionText}>
        <h3>{nameService}</h3>
        <p>{description}</p>
        <div className={styles.buttonGroupCard}>
          <button className={styles.buttonAgendar}>AGENDAR</button>
        </div>
      </div>
    </div>
  );
};
