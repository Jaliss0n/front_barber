import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

export default function FormControlLabelCheckbox({
  labelProps,
}: {
  labelProps: string;
}) {
  return (
    <FormControlLabel
      control={
        <Checkbox sx={{ color: "white" }} color="default" defaultChecked />
      }
      label={<p style={{ color: "#d3d3d3" }}>{labelProps}</p>}
    />
  );
}
