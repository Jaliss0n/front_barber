import styles from "../../styles/dashbord/dashbord.module.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import MoreTimeIcon from "@mui/icons-material/MoreTime";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LogoutIcon from "@mui/icons-material/Logout";
import logo from "../../../images/logoGrizzlies.png";
import profile from "../../../images/profile.jpg";
import { useNavContext } from "@/context/navProvider";
import switchScreen from "@/context/switchScreen";
import { useState } from "react";
import HeaderMobileBarber from "@/components/headerMobileBarber";

export default function Dash() {
  const { numberPag, setNumberPag } = useNavContext();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  /*jalisson */
  return (
    <div className={styles.dashBody}>
      <HeaderMobileBarber />
      <div className={styles.sideBar}>
        <img className={styles.logo} src={logo.src} width="70%" alt="logo" />
        <div className={styles.buttonGroup}>
          <button className={styles.buttonDash}>
            <DashboardIcon sx={{ marginRight: "20px" }} /> Dashboard
          </button>
          <button onClick={() => setNumberPag(3)} className={styles.buttonDash}>
            <PersonAddIcon sx={{ marginRight: "20px" }} /> Funcionarios
          </button>
          <button onClick={() => setNumberPag(1)} className={styles.buttonDash}>
            <AddBusinessIcon sx={{ marginRight: "20px" }} /> Barbearia
          </button>
          <h5>Informações Pessoais</h5>
          <button
            onClick={() => setNumberPag(4)}
            className={styles.buttonDashDown}
          >
            <LockPersonIcon sx={{ marginRight: "20px" }} />
            Dados
          </button>
          <button className={styles.buttonDashDown}>
            <CreditCardIcon sx={{ marginRight: "20px" }} />
            Pagamentos
          </button>
          <button className={styles.buttonLogout}>
            <LogoutIcon sx={{ marginRight: "20px" }} />
            Sair
          </button>
        </div>
      </div>
      <div className={styles.screen}>
        <div className={styles.boxLimit}>
          <div className={styles.boxNav}>
            <img
              className={styles.boxNavImage}
              src={profile.src}
              alt="perfil"
            />
            <h5>Bem vindo de volta $nomeAdmin</h5>
          </div>
        </div>
        <div className={styles.switchScreen}>{switchScreen(numberPag)}</div>
      </div>
    </div>
  );
}
