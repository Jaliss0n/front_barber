import styles from "../../styles/newCard/newCard.module.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { IconButton } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { ModelCard } from "../modelCard";
import { WhiteTextField } from "../whiteTextField";
import { useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "#494e5b",
  boxShadow: 24,
  borderRadius: "12px",
  display: "flex",
  flexDirection: "column",
  p: 4,
};

export default function NewCard() {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [title, setTitle] = useState<string>("Titulo de Exemplo");
  const [description, setDescription] = useState<string>(
    "Descrição de Exemplo"
  );

  const [img, setImg] = useState<File | null>(null);

  return (
    <div className={styles.card}>
      <IconButton onClick={() => handleOpen()}>
        <AddCircleIcon sx={{ color: "white", fontSize: "8.2rem" }} />
      </IconButton>

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
          <Box sx={style}>
            <h2 className={styles.titleCardCreateBody}>Criar Corte</h2>
            <div className={styles.cardCreateBody}>
              <div className={styles.cardInput}>
                {img ? (
                  <IconButton aria-label="upload picture" component="label">
                    <input
                      hidden
                      accept="image/*"
                      name="img1"
                      type="file"
                      onChange={(e) => {
                        if (e.target.files != null) {
                          setImg(e.target.files[0]);
                        }
                      }}
                    />
                    <AddAPhotoIcon sx={{ fontSize: "8rem", color: "white" }} />
                  </IconButton>
                ) : (
                  <IconButton aria-label="upload picture" component="label">
                    <input
                      hidden
                      accept="image/*"
                      name="img1"
                      type="file"
                      onChange={(e) => {
                        if (e.target.files != null) {
                          setImg(e.target.files[0]);
                        }
                      }}
                    />
                    <AddAPhotoIcon sx={{ fontSize: "8rem", color: "white" }} />
                  </IconButton>
                )}

                <div className={styles.inputTexts}>
                  <WhiteTextField
                    color="primary"
                    id="outlined-basic"
                    onChange={(e) => setTitle(e.target.value)}
                    inputProps={{ maxLength: 20 }}
                    label={<p>Titulo do Corte</p>}
                    variant="outlined"
                    sx={{ margin: "2.5% 5% 2.5% 5%" }}
                  />
                  <WhiteTextField
                    id="outlined-basic"
                    onChange={(e) => setDescription(e.target.value)}
                    inputProps={{ maxLength: 55 }}
                    label={<p>Descrição do Corte</p>}
                    variant="outlined"
                    sx={{ margin: "2.5% 5% 2.5% 5%" }}
                  />
                </div>
              </div>

              <div className={styles.viewCard}>
                <ModelCard
                  imageCard={img}
                  nameService={title}
                  description={description}
                />
              </div>
            </div>
            <button className={styles.buttonAccept}>ENVIAR</button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}