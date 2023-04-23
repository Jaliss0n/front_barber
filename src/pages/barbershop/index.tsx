import styles from "../../styles/barbershop/barbershop.module.css";
import cover from "../../../images/cover.jpg";
import profileBarberShop from "../../../images/profile_barbershop.jpg";
import NewCard from "@/components/newCard";
import Rodape from "@/components/rodape";

export default function BarberShop() {
  return (
    <div className={styles.cardBody}>
      <div className={styles.cardLimit}>
        <div className={styles.cover}>
          <img src={cover.src} className={styles.coverBarberShop} />
          <img
            src={profileBarberShop.src}
            className={styles.profileBarberShop}
          />
        </div>

        <div className={styles.titleBarberShop}>
          <h2>$nomeBarbearia</h2>
        </div>

        <div className={styles.groupCards}>
          <NewCard />
        </div>
        <Rodape />
      </div>
    </div>
  );
}
