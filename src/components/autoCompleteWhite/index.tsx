import { Autocomplete, TextField, styled } from "@mui/material";

const AutoCompleteWhiteStyles = styled(Autocomplete)({
  "& label.Mui-focused": {
    color: "white",
  },
  ".css-i4bv87-MuiSvgIcon-root": {
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
      borderColor: "#3c73d2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
});

export function AutoCompleteWhite({ labelProps }: { labelProps: string }) {
  const defaultValue = [{ label: "Carregando...", year: 0 }];

  return (
    <AutoCompleteWhiteStyles
      disablePortal
      id="combo-box-demo"
      options={defaultValue}
      sx={{ marginBottom: "4%" }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={<p style={{ color: "#d3d3d3" }}>{labelProps}</p>}
        />
      )}
    />
  );
}
