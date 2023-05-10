import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { styled } from "@mui/material";

export default function TimeComponent({ labelProps }: { labelProps: string }) {
  const TimePickerWhite = styled(TimePicker)({
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

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePickerWhite
        sx={{ marginBottom: "4%" }}
        label={<p style={{ color: "#d3d3d3" }}>{labelProps}</p>}
      />
    </LocalizationProvider>
  );
}
