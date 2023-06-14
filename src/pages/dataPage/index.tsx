import { WtextField } from "@/components/whiteTextField";
import React, { useState } from "react";
import styles from "../../styles/dataPage/dataPage.module.css";
import { Button } from "@mui/material";

export default function DataPage() {
  const [user, setUser] = useState<string>();

  return (
    <div className={styles.bodyData}>
      <div className={styles.bodyCard}>
        <h2 className={styles.titleDataPage}>Dados Cadastrados</h2>
        <WtextField setProp={setUser} labelText="Nome de usuario" />
        <WtextField setProp={setUser} labelText="Senha" />
        <WtextField setProp={setUser} labelText="Telefone" />
        <WtextField setProp={setUser} labelText="CPF" />
        <Button variant="outlined" sx={{ alignSelf: "flex-end" }}>
          Atualizar
        </Button>
      </div>
    </div>
  );
}
