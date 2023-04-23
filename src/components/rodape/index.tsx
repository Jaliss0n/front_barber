import { Divider, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import styles from "../../styles/rodape/rodape.module.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Rodape() {
  return (
    <div className={styles.rodapeBody}>
      <p>$Endereço da barbearia</p>
      <div className={styles.iconsButton}>
        <IconButton>
          <FacebookIcon sx={{ color: "white", fontSize: "2.5rem" }} />
        </IconButton>
        <IconButton>
          <InstagramIcon sx={{ color: "white", fontSize: "2.5rem" }} />
        </IconButton>
        <IconButton>
          <WhatsAppIcon sx={{ color: "white", fontSize: "2.5rem" }} />
        </IconButton>
      </div>
    </div>
  );
}
