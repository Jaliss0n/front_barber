import styles from '../../styles/card/card.module.css'
import profileBarberShop from '../../../images/profile_barbershop.jpg'

export default function Card() {

    return (
        <div className={styles.card}>
            <img src={profileBarberShop.src} className={styles.imageCard} />
            <div className={styles.sectionText}>
              <h3>$TituloServiço</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. 
              </p>
              <div className={styles.buttonGroupCard}>
                <button className={styles.buttonAgendar}>AGENDAR</button>
              </div>
            </div>
          </div>
        
    )
}