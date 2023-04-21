import styles from "../../styles/barbershop/barbershop.module.css";
import cover from "../../../images/cover.jpg";
import profileBarberShop from "../../../images/profile_barbershop.jpg";
import Card from "@/components/card";

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
          <Card/>
         
        </div>
      </div>
    </div>
  );
}
