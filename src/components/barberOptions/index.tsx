import { Backdrop, Button, Fade, Modal } from "@mui/material";
import React from "react";
import styles from "../../styles/barberOptions/barberOptions.module.css";
import EmployeesModal from "../modals/modalSchedules/employeesModal";
import Schedules from "@/pages/schedules";
import ModalDelete from "../modals/modalDelete";

interface Props {
  nameEmployee: string;
}

export default function BarberOptions({ nameEmployee }: Props) {
  const [openEdit, setOpenEdit] = React.useState(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

  const [openSchedule, setOpenSchedule] = React.useState(false);
  const handleOpenSchedule = () => setOpenSchedule(true);
  const handleCloseSchedule = () => setOpenSchedule(false);

  const [openDelete, setOpenDelete] = React.useState(false);
  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);

  return (
    <div className={styles.barberView}>
      {nameEmployee && <p>{nameEmployee}</p>}
      <div className={styles.buttonGroupSchedules}>
        <Button
          sx={{ margin: "3px" }}
          color="info"
          variant="outlined"
          key="one"
          onClick={() => handleOpenSchedule()}
        >
          Horários
        </Button>
        <Button
          sx={{ margin: "3px" }}
          color="warning"
          variant="outlined"
          key="two"
          onClick={() => handleOpenEdit()}
        >
          Editar Perfil
        </Button>
        <Button
          sx={{ margin: "3px" }}
          color="error"
          variant="outlined"
          key="three"
          onClick={() => handleOpenDelete()}
        >
          Deletar
        </Button>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openSchedule}
        onClose={handleCloseSchedule}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openSchedule}>
          <div>
            <Schedules handleCloseModal={handleCloseSchedule} />
          </div>
        </Fade>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openEdit}
        onClose={handleCloseEdit}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openEdit}>
          <div>
            <EmployeesModal handleClose={handleCloseEdit} />
          </div>
        </Fade>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openDelete}
        onClose={handleCloseDelete}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openDelete}>
          <div>
            <ModalDelete
              handleClose={handleCloseDelete}
              nameEmploye={nameEmployee}
            />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
