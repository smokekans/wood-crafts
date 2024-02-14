export const styles = {
  formControl: {
    height: "100px",
    ".css-gk4fn5-MuiInputBase-root-MuiOutlinedInput-root, .MuiOutlinedInput-notchedOutline":
      {
        borderColor: (theme) => theme.palette.common.black,
        borderRadius: 5,
      },
    ".MuiFormHelperText-root": {
      ml: 0,
    },
  },
  formControlMultiline: {
    borderRadius: 5 * 2,
    ".css-1n0e13w-MuiInputBase-root-MuiOutlinedInput-root, .MuiOutlinedInput-notchedOutline":
      {
        borderColor: (theme) => theme.palette.common.black,
        borderRadius: 5,
      },
    ".MuiFormHelperText-root": {
      ml: 0,
    },
  },
  textField: {
    "& .MuiInputBase-input": {
      p: 2,
      height: "20px",
    },
    "& .MuiOutlinedInput-root, .MuiInputBase-root": {
      "&.Mui-focused fieldset": {
        borderColor: (theme) => theme.palette.common.black,
        borderWidth: "1px",
      },
    },
    mt: "39px",
  },
  textFieldMultiline: {
    ".MuiInputBase-root": {
      px: 4,
      py: 4,
    },
    ".MuiInputBase-input": {
      height: "100px",
    },
    mt: "39px",
    "& .MuiOutlinedInput-root, .MuiInputBase-inputMultiline": {
      "&.Mui-focused fieldset": {
        borderColor: (theme) => theme.palette.common.black,
        borderWidth: "1px",
      },
    },
  },

  inputLabel: { color: "black", transform: "none" },
  autocomplete: {
    ".MuiAutocomplete-popupIndicator, .MuiAutocomplete-popupIndicatorOpen, .MuiAutocomplete-clearIndicator":
      {
        color: (theme) => theme.palette.common.black,
      },
    ".MuiAutocomplete-endAdornment": {
      top: "auto",
    },
  },
};
