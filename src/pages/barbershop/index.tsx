import styles from "../../styles/barbershop/barbershop.module.css";
import NewCard from "@/components/newCard";
import Rodape from "@/components/rodape";
import { useState } from "react";
import { IconButton } from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

export default function BarberShop() {
  const [imgCover, setImgCover] = useState<File | null>(null);
  const [imgProfileBarber, setImgProfileBarber] = useState<File | null>(null);

  return (
    <div className={styles.cardBody}>
      <div className={styles.cardLimit}>
        <div className={styles.cover}>
          {imgCover ? (
            <>
              <IconButton
                aria-label="upload picture"
                component="label"
                sx={{
                  position: "absolute",
                  left: "0%",
                  top: "6%",
                }}
              >
                <input
                  hidden
                  accept="image/*"
                  name="imgCover"
                  type="file"
                  onChange={(e) => {
                    if (e.target.files != null) {
                      setImgCover(e.target.files[0]);
                    }
                  }}
                />
                <div className={styles.buttonAlterar}>
                  <AddAPhotoIcon sx={{ marginRight: "15px", color: "white" }} />
                  <p>ALTERAR</p>
                </div>
              </IconButton>
              <img
                src={URL.createObjectURL(imgCover)}
                className={styles.coverBarberShop}
              />
            </>
          ) : (
            <div className={styles.coverBarberShopDefault}>
              <IconButton aria-label="upload picture" component="label">
                <input
                  hidden
                  accept="image/*"
                  name="imgCover"
                  type="file"
                  onChange={(e) => {
                    if (e.target.files != null) {
                      setImgCover(e.target.files[0]);
                    }
                  }}
                />
                <AddAPhotoIcon sx={{ fontSize: "5rem", color: "white" }} />
              </IconButton>
            </div>
          )}

          {imgProfileBarber ? (
            <div className={styles.imageProfileBarberBody}>
              <IconButton aria-label="upload picture" component="label">
                <input
                  hidden
                  accept="image/*"
                  name="imgProfileBarber"
                  type="file"
                  onChange={(e) => {
                    if (e.target.files != null) {
                      setImgProfileBarber(e.target.files[0]);
                    }
                  }}
                />
                <div className={styles.buttonAlterarProfile}>
                  <AddAPhotoIcon sx={{ marginRight: "15px", color: "white" }} />
                  <p>ALTERAR</p>
                </div>
              </IconButton>

              <img
                src={URL.createObjectURL(imgProfileBarber)}
                className={styles.profileBarberShop}
              />
            </div>
          ) : (
            <div className={styles.profileBarberShopDefault}>
              <IconButton aria-label="upload picture" component="label">
                <input
                  hidden
                  accept="image/*"
                  name="imgProfileBarber"
                  type="file"
                  onChange={(e) => {
                    if (e.target.files != null) {
                      setImgProfileBarber(e.target.files[0]);
                    }
                  }}
                />
                <AddAPhotoIcon
                  sx={{
                    fontSize: "5em",
                    color: "white",
                    backgroundColor: "#3c73d2",
                    padding: "10%",
                    borderRadius: "40px",
                    "&:hover": {
                      backgroundColor: "#2854a2",
                    }
                  }}
                />
              </IconButton>
            </div>
          )}
        </div>

        <div className={styles.titleBarberShop}>
          <h2>$nomeBarbearia</h2>
        </div>

        <div className={styles.groupCards}>
          <NewCard />
          <NewCard />
        </div>
        <Rodape />
      </div>
    </div>
  );
}
