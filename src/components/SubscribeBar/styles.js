import { fade } from '@material-ui/core/styles/colorManipulator';

const styles = theme => ({
    subscribeBar: {
        color: "white",
        height: "72px",
        backgroundColor: theme.palette.medium,
        flex: "1",
        alignItems: "center"
    },
    toolbar: {
        height: "72px",
        flex: "1",
        alignItems: "center",
        display: "flex",
        flexWrap: "nowrap",
        paddingLeft: "30px",
        paddingRight: "30px"
    },
    flex: {
        flex: 1
    },
    brand: {
        color: theme.palette.primary.main,
        fontFamily: "Montserrat",
        fontSize: "24px",
        fontWeight: 700,
        letterSpacing: "4px",
        textTransform: "uppercase",
        padding: 0
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
        marginLeft: "36px"
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
            color: theme.palette.primary.main
        }
    },
    linksContainer: {
        display: "flex",
        flexGrow: 1,
        justifyContent: "flex-end",
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
        backgroundColor: 'rgba(255, 255, 255, 1)',
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
        width: theme.spacing.unit * 9,
        height: '100%',
        color: theme.palette.dark,
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: theme.palette.dark,
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
    mainText: {
        color: theme.palette.dark,
        fontFamily: "Lucida Grande",
        fontSize: "16px",
        fontWeight: 700,
        textTransform: "uppercase"
    },
    subscribeButton: {
        borderRadius: 24,
        height: 35,
        width: 90,
        marginLeft: "30px"
    },
    subscribeText: {
        textTransform: "capitalize",
        fontFamily: "Montserrat",
        fontSize: "12px",
        color: "white",
        fontWeight: 700
    }
});

export default styles;
