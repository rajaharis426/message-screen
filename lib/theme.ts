import { createTheme, styled } from "@mui/material/styles";
import { Box, Paper } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#EAB308",
    },
    background: {
      default: "#000000",
      paper: "#1a1a1a",
    },
    text: {
      primary: "#ffffff",
      secondary: "#9ca3af",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#000000",
          border: "1px solid #374151",
          borderRadius: "24px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "24px",
            backgroundColor: "#1f2937",
            "& fieldset": {
              borderColor: "#374151",
            },
            "&:hover fieldset": {
              borderColor: "#6b7280",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#EAB308",
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "24px",
          textTransform: "none",
        },
      },
    },
  },
});

export const StyledContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "100vh",
  backgroundColor: "#000000",
  color: "#ffffff",
  overflow: "hidden",
  paddingLeft: 60,
  paddingRight: 60,

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export const StyledMainContent = styled(Box)(({ theme }) => ({
  flex: 1,
  overflow: "scroll",
  display: "flex",
  paddingTop: "80px",

  [theme.breakpoints.down("sm")]: {
    paddingTop: "70px",
    padding: 30,

    flexDirection: "column",
  },
}));

export const StyledMessagesContainer = styled(Paper)(({ theme }) => ({
  flex: 1,
  margin: "24px",
  marginBottom: "16px",
  display: "flex",
  backgroundColor: "#000000",
  border: "1px solid #374151",
  [theme.breakpoints.down("sm")]: {
    margin: "8px",
    marginBottom: "8px",
    flexDirection: "column",
  },
  [theme.breakpoints.down("xs")]: {
    margin: "4px",
    marginBottom: "4px",
  },
}));
