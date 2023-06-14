import styles from "../../styles/card/card.module.css";
import imgDefault from "../../../images/profile.jpg";
import PaidIcon from "@mui/icons-material/Paid";

interface cardTypes {
  nameService: string;
  description: string;
  price: string;
  imageCard: File | null;
}

export const ModelCard: React.FC<cardTypes> = ({
  nameService,
  description,
  price,
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
            <div className={styles.moneyCard}>
              <PaidIcon sx={{ marginRight: "10px", fontSize: "2.5em" }} />
              <p>{price}</p>
            </div>
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
            <div className={styles.moneyCard}>
              <PaidIcon sx={{ marginRight: "10px", fontSize: "2.5em" }} />
              <p>{price}</p>
            </div>
            <button className={styles.buttonAgendar}>AGENDAR</button>
          </div>
        </div>
      </div>
    );
  }
};
