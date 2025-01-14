/* eslint-disable react/prop-types */
import { TextField } from "@mui/material";

const ContactTextFields = ({ label, name, value, onChange, multiline, rows }) => {
    return (
      <TextField
        label={label}
        variant="outlined"
        fullWidth
        InputLabelProps={{ style: { color: "white" } }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "gray" },
            "&:hover fieldset": { borderColor: "white" },
            "&.Mui-focused fieldset": { borderColor: "white" },
          },
          input: { color: "white" },
          ...(multiline && { textarea: { color: "white" } }),
        }}
        onChange={(e) => onChange(e, name)}
        value={value || ""}
        multiline={multiline}
        rows={rows}
      />
    );
  };
  

export default ContactTextFields;
