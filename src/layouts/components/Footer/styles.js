const styles = theme => ({
    root: {
        height: "240px",
        backgroundColor: "#2e2e2e",
        display: "flex",
        justifyContent: "center"
    },
    linksContainer: {
        paddingTop: "50px",
        width: "100%",
        display: "flex",
        flexGrow: 1,
        justifyContent: "space-between"
    },
    socialContainer: {
        paddingTop: "20px",
        display: "flex",
        flexGrow: 1,
        justifyContent: "center"
    },
    socialIcon: {
        padding: "10px"
    },
    footerLink: {
        color: "white",
        position: "relative",
        fontWeight: "700",
        fontFamily: 'Montserrat',
        fontSize: "24px",
        cursor: "pointer",
        textTransform: "capitalize",
        '&:hover': {
            textDecoration: 'none',
            color: theme.palette.primary.main
        }
    }
});

export default styles;
