import { FormControl, FormGroup, FormHelperText } from "@mui/material";
import FormControlLabelCheckbox from "../formControlLabel";
import { TitleCard } from "../Typography";
import { BlockCardBlack } from "../blockCards";

export default function OpeningHors() {
  return (
    <BlockCardBlack>
      <TitleCard>Dias de Funcionamento</TitleCard>
      <FormControl component="fieldset" variant="standard">
        <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
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
    </BlockCardBlack>
  );
}
