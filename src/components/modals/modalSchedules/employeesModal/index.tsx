import { WhiteTextField } from "@/components/whiteTextField";
import React, { useState } from "react";
import styles from "../../../../styles/employeesModal/employeesModal.module.css";
import ImageUpload from "@/components/imageUploadButton";

interface Props {
  handleClose: () => void;
}

export default function EmployeesModal({ handleClose }: Props) {
  const [name, setName] = useState<string>("");
  const [cpf, setCpf] = useState<number>();
  const [imgProfileBarber, setImgProfileBarber] = useState<File | null>(null);

  //Criar requisição get, para pegar o nome e o CPF do user atraves do ID

  return (
    <div className={styles.bodyFull}>
      <div className={styles.inputArea}>
        <div className={styles.profileBarberShopDefault}>
          {imgProfileBarber ? (
            <img
              className={styles.profileBarber}
              src={URL.createObjectURL(imgProfileBarber)}
              alt="Preview"
            />
          ) : (
            <ImageUpload
              name="profileBarber"
              setImgProfileBarber={setImgProfileBarber}
            />
          )}
        </div>
        <div className={styles.inputTextFilds}>
          <WhiteTextField
            fullWidth
            color="primary"
            id="outlined-basic"
            onChange={(e) => setName(e.target.value)}
            inputProps={{ maxLength: 20 }}
            label={<p>Nome do Funcionario</p>}
            variant="outlined"
            sx={{ margin: "2.5% 0 2.5% 0" }}
          />
          <WhiteTextField
            fullWidth
            color="primary"
            id="outlined-basic"
            type="number"
            onChange={(e) => setCpf(parseInt(e.target.value))}
            inputProps={{ maxLength: 20 }}
            label={<p>CPF</p>}
            variant="outlined"
            sx={{ margin: "2.5% 0 2.5% 0" }}
          />
        </div>
        <button onClick={() => handleClose()} className={styles.buttonCad}>
          Cadastrar Funcionario
        </button>
      </div>
    </div>
  );
}
