import { ThemeConsumer } from "styled-components";

export default {
  palette: {
    primary: {
      main: "#7AB3CC",
      light: "#BAF5F7",
    },
    secondary: {
      main: "#C4BAA7",
      light: "#F7EEBA",
      dark: "#524A21",
    },
  },

  typography: {
    useNextVariants: true,

    h2: {
      '@media (max-width:768px)': {
        fontSize: '2rem',
    }}
  },

  MuiFormControl: {
    margin: "5px auto 5px auto",
  },
  
  spreadThis: {
    typography: {
      useNextVariants: true,


    },
    form: {
      textAlign: "center",
    },
    image: {
      margin: "10px auto 10px auto",
    },
    pageTitle: {
      margin: "10px auto 10px auto",
    },
    textField: {
      margin: "10px auto 10px auto",
    },
    button: {
      marginTop: 20,
      position: "relative",
    },
    customError: {
      color: "red",
      fontSize: "0.8rem",
      marginTop: 5,
    },
    progress: {
      position: "absolute",
    },
    line: {
      border: "none",
      margin: 4,
    },
    visibleLine: {
      width: "100%",
      borderBottom: "1px solid rgba(0,0,0,0.1)",
      marginBottom: 20,
    },
    paper: {
      padding: 20,
    },
    link: {
      display: "flex",
      justifyContent: "center",
      padding: 10,
      alignItems: "center",
      color: "#7AB3CC",
    },
    hr: {
      borderTop: "1px solid rgba(0,0,0,.2)",
    },
  },
};
