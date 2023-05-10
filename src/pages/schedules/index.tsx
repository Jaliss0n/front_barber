import {
  Button,
  ButtonGroup,
  FormControl,
  FormGroup,
  FormHelperText,
} from "@mui/material";
import styles from "../../styles/schedules/schedules.module.css";
import React from "react";
import { AutoCompleteWhite } from "@/components/autoCompleteWhite";
import TimeComponent from "@/components/timePicker";
import FormControlLabelCheckbox from "@/components/formControlLabel";

const buttons = [
  <Button key="one">Visualizar</Button>,
  <Button key="two">Editar</Button>,
  <Button key="three">Deletar</Button>,
];

export default function Schedules() {
  return (
    <div className={styles.bodySchedules}>
      <div className={styles.cardShedules}>
        <div className={styles.findBarberCard}>
          <h3 className={styles.titleSchedules}>Expediente</h3>
          <AutoCompleteWhite labelProps="Selecione o Funcionario" />
          <AutoCompleteWhite labelProps="Inicio do expediente" />
          <AutoCompleteWhite labelProps="Fim do expediente" />
          <AutoCompleteWhite labelProps="Intervalo entre cada Serviço" />
        </div>

        <div className={styles.findPauseCard}>
          <h3 className={styles.titlePause}>Pausa</h3>
          <TimeComponent labelProps="Inicio da pausa" />
          <TimeComponent labelProps="Fim da pausa" />
        </div>
      </div>
      <div className={styles.viewSchedules}>
        <div className={styles.findDayCard}>
          <h3 className={styles.titleDay}>Dias na semana</h3>
          <FormControl component="fieldset" variant="standard">
            <FormGroup>
              <FormControlLabelCheckbox labelProps="Segunda-Feira" />
              <FormControlLabelCheckbox labelProps="Terça-Feira" />
              <FormControlLabelCheckbox labelProps="Quarta-Feira" />
              <FormControlLabelCheckbox labelProps="Quinta-Feira" />
              <FormControlLabelCheckbox labelProps="Sexta-Feira" />
              <FormControlLabelCheckbox labelProps="Sabado" />
              <FormControlLabelCheckbox labelProps="Domingo" />
            </FormGroup>
            <FormHelperText sx={{ color: "#c8c8c8" }}>
              Pode selecionar mais de uma caixa
            </FormHelperText>
          </FormControl>
        </div>
        <div>
          <button className={styles.buttonSchedules}>
            VISUALIZAR HORARIOS
          </button>
          <button className={styles.buttonSchedules}>ATUALIZAR HORARIOS</button>
        </div>

        {/* <div className={styles.findPauseCard}>
          <h3 className={styles.titleHours}>Horarios</h3>
          <div className={styles.barberView}>
            <p>$Nome_Barbeiro</p>
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
        </div> */}
      </div>
    </div>
  );
}
