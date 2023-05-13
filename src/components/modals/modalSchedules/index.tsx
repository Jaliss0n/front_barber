import { Button } from "@mui/material";
import React from "react";
import styles from "../../../styles/modalShedules/modalShedules.module.css";

export default function ModalSchedules() {
  return (
    <div className={styles.modalShedules}>
      <div className={styles.findPauseCard}>
        <h3 className={styles.titleHours}>Horarios</h3>
        <div className={styles.barberView}>
          <p>$Nome_Barbeiro</p>
          <div className={styles.buttonGroupSchedules}>
            <Button
              sx={{ margin: "3px" }}
              color="info"
              variant="outlined"
              key="one"
            >
              Abrir
            </Button>
            <Button
              sx={{ margin: "3px" }}
              color="warning"
              variant="outlined"
              key="two"
            >
              Editar
            </Button>
            <Button
              sx={{ margin: "3px" }}
              color="error"
              variant="outlined"
              key="three"
            >
              Deletar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
