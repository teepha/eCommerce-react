import {
    container
} from "../../../../styles/variables";
import {fade} from '@material-ui/core/styles/colorManipulator';

const styles = theme => ({
    navBar: {
        position: "absolute",
        zIndex: "1000",
        top: "48px",
        color: "white",
        height: "72px",
        backgroundColor: theme.palette.dark
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
    brand: {
        color: theme.palette.primary.main,
        fontFamily: "Montserrat",
        fontSize: "26px",
        fontWeight: 700,
        letterSpacing: "4px",
        textTransform: "uppercase",
        textDecoration: "none",
        padding: 0,
        '&:hover': {
          color: theme.palette.primary.main,
          textDecoration: "none"
        }
    },
    appResponsive: {
        margin: "20px 10px"
    },
    transparent: {
        backgroundColor: "transparent !important",
        boxShadow: "none",
        paddingTop: "25px"
    },
    iconContainer: {
        marginLeft: "36px",
        cursor: "pointer"
    },
    badge: {
        color: theme.palette.primary.main,
        backgroundColor: "white",
        fontWeight: 700,
        fontSize: "16px",
        width: "24px",
        height: "24px",
        borderRadius: "24px"
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
        color: "white",
        position: "relative",
        fontWeight: "700",
        fontFamily: 'Montserrat',
        fontSize: "15px",
        cursor: "pointer",
        textTransform: "capitalize",
        '&:hover': {
            textDecoration: 'none',
            color: '#F62F5E'
        }
    },
    navDrawerLink: {
        color: theme.palette.dark,
        position: "relative",
        fontWeight: "700",
        fontFamily: 'Montserrat',
        fontSize: "15px",
        cursor: "pointer",
        padding: "20px",
        textTransform: "capitalize",
        '&:hover': {
            textDecoration: 'none',
            color: theme.palette.primary.main
        }
    },
    linksContainer: {
        display: "flex",
        flexGrow: 1,
        justifyContent: "flex-start",
        paddingRight: "27px"
    },
    button: {
        paddingLeft: "10px",
        paddingRight: "10px"
    },
    search: {
        position: 'relative',
        borderRadius: '100px',
        color: "white",
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit,
            width: 'auto',
        },
    },
    searchIcon: {
        //width: theme.spacing.unit * 9,
        width: '50px',
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        //paddingLeft: theme.spacing.unit * 10,
        paddingLeft: '40px',
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
        fontFamily: 'Open Sans',
        fontSize: '14px',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontStretch: 'normal',
        letterSpacing: '0.5px'
    },
    dropdownLink: {
        "&,&:hover,&:focus": {
            color: "inherit",
            textDecoration: "none",
            display: "block",
            padding: "10px 20px"
        }
    },
});

export default styles;
