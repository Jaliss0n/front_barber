import React from "react";
import styles from "../../styles/employess/employees.module.css";
import BarberOptions from "@/components/barberOptions";
import { Backdrop, Button, Fade, Modal } from "@mui/material";
import EmployeesModal from "@/components/modals/modalSchedules/employeesModal";
import iconLost from "../../../images/panda_lost.png";

export default function Employees() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const hasEmployee = true; // mudar pra true pra mostrar barbeiros, por hora

  return (
    <div className={styles.bodyEmployees}>
      <div className={styles.sectionBarber}>
        <h2 className={styles.titleEmployee}>Funcionarios</h2>
        {hasEmployee ? (
          <>
            <BarberOptions nameEmployee="jalissondfshd" />
            <div className={styles.newEmployee}>
              <Button onClick={handleOpen} color="info" variant="outlined">
                NOVO FUNCIONARIO
              </Button>
            </div>
          </>
        ) : (
          <div className={styles.sectionNotEmployee}>
            <img className={styles.iconLost} src={iconLost.src} />
            <p>Parece que não há nenhum funcionario cadastrado ainda...</p>
            <Button
              onClick={handleOpen}
              sx={{ margin: "5%" }}
              color="info"
              variant="outlined"
            >
              NOVO FUNCIONARIO
            </Button>
          </div>
        )}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <div>
            <EmployeesModal handleClose={handleClose} />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
