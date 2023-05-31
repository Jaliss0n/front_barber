import React from "react";
import styles from "../../../styles/modalDelete/modalDelete.module.css";
import { Button } from "@mui/material";

interface Props {
  handleClose: () => void;
  nameEmploye: string;
}

export default function ModalDelete({ handleClose, nameEmploye }: Props) {
  return (
    <div className={styles.bodyModal}>
      <div className={styles.textParagraph}>
        <h1>Deseja realmente deletar o funcionario {nameEmploye}?</h1>
        <p>Está é uma decisão sem volta!</p>
      </div>
      <div className={styles.buttonsArea}>
        <Button
          onClick={() => handleClose()}
          sx={{ margin: "10px" }}
          variant="outlined"
        >
          Não
        </Button>
        <Button
          onClick={() => handleClose()}
          sx={{ margin: "10px" }}
          color="error"
          variant="outlined"
        >
          Sim
        </Button>
      </div>
    </div>
  );
}
