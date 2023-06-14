import styles from "../../styles/newCard/newCard.module.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { IconButton } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { ModelCard } from "../modelCard";
import { WtextField } from "../whiteTextField";
import { useState } from "react";

export default function NewCard() {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [title, setTitle] = useState<string>("Titulo de Exemplo");
  const [description, setDescription] = useState<string>(
    "Descrição de Exemplo"
  );
  const [price, setPrice] = useState<string>("preço de Exemplo");

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
          <div className={styles.modalCard}>
            <h2 className={styles.titleCardCreateBody}>Criar Serviço</h2>
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
                  <WtextField
                    setProp={setTitle}
                    labelText="Titulo do Serviço"
                  />

                  <WtextField
                    setProp={setDescription}
                    labelText="Descrição do Serviço"
                  />

                  <WtextField setProp={setPrice} labelText="Preço" />
                </div>
              </div>

              <div className={styles.viewCard}>
                <ModelCard
                  imageCard={img}
                  nameService={title}
                  description={description}
                  price={price}
                />
              </div>

              <button className={styles.buttonAcceptMob}>ENVIAR</button>
            </div>
            <button className={styles.buttonAccept}>ENVIAR</button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
