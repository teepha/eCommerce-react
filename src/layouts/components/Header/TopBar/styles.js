import {
    container
} from "../../../../styles/variables";

const styles = theme => ({
    topBar: {
        position: "fixed",
        zIndex: "1100",
        height: "48px",
        backgroundColor: "white",
    },
    toolbar: {
        ...container,
        minHeight: "50px",
        flex: "1",
        alignItems: "center",
        justifyContent: "space-between",
        display: "flex",
        flexWrap: "nowrap"
    },
    flex: {
        flex: 1
    },
    transparent: {
        backgroundColor: "transparent !important",
        boxShadow: "none",
        paddingTop: "25px"
    },
    dark: {
        color: "white",
        backgroundColor: theme.palette.dark,
        boxShadow:
            "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(33, 33, 33, 0.46)"
    },
    white: {
        border: "0",
        padding: "0.625rem 0",
        marginBottom: "20px",
        color: "#555",
        backgroundColor: "#fff !important",
        boxShadow:
            "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)"
    },
    navLink: {
        color: theme.palette.text.primary,
        position: "relative",
        fontWeight: "700",
        fontFamily: 'Montserrat',
        fontSize: "15px",
        cursor: "pointer",
        textTransform: "capitalize",
        '&:hover': {
            textDecoration: 'none',
            color: theme.palette.primary.main
        }
    },
    button: {
        paddingLeft: "10px",
        paddingRight: "10px"
    },
    authText: {
        fontWeight: "700",
        fontFamily: 'Montserrat',
        fontSize: "16px",
        //cursor: "pointer",
        color: theme.palette.darkn,
      '& span': {
        color: '#2e2e2e',
        fontWeight: "700",
        fontFamily: 'Montserrat'
      },
      '& a': {
        margin: '0 3px'
      },
    },
    currencyText: {
        fontWeight: "700",
        fontFamily: 'Montserrat',
        fontSize: "15px",
        color: theme.palette.dark
    },
    currencyContainer: {
        marginRight: "40px"
    },
    currencyIconContainer: {
        width: "30px"
    },
    divTopBar: {
      display: "inline-flex"
    },
    yourBag: {
        fontWeight: "700",
        fontFamily: 'Montserrat',
        fontSize: "16px"
    },
    badge: {
        fontWeight: 700,
        fontSize: "16px",
        width: "24px",
        height: "24px",
        borderRadius: "24px"
    },
    iconContainer: {
        width: "40px",
        cursor: "pointer"
    },
    authLink: {
        cursor: "pointer",
        color: theme.palette.primary.main,
        '&:hover': {
            textDecoration: 'none',
        }
    },
    linksContainer: {
        display: "flex",
        flexGrow: 1,
        justifyContent: "center",
        paddingRight: "27px"
    },
    '@media (max-width: 768px)': {
      topBar: {
          display: "block",
          height: "auto"
      },
      toolbar: {
          display: "block"
      },
      divTopBar: {
        display: "block",
        width: "100%"
      },
      iconContainer: {
        position: "absolute",
        top: "13px",
        right: "10px"
      }
    }
});

export default styles;
