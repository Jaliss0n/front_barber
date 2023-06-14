import { TextField, styled } from "@mui/material";

const WhiteTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiOutlinedInput-input": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#d3d3d3",
      color: "white",
    },
    "&:hover fieldset": {
      borderColor: "#00cfc8;",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
});

interface Props {
  setProp: (value: string) => void;
  labelText: string;
}

export function WtextField({ setProp, labelText }: Props) {
  return (
    <WhiteTextField
      fullWidth
      color="primary"
      id="outlined-basic"
      onChange={(e) => setProp(e.target.value)}
      inputProps={{ maxLength: 20 }}
      label={<p style={{ color: "white" }}>{labelText}</p>}
      variant="outlined"
      sx={{ margin: "2.5% 0 2.5% 0" }}
    />
  );
}
