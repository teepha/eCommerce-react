const styles = theme => ({
    productTitle: {
        fontWeight: "700",
        fontFamily: 'Montserrat',
        fontSize: "16px",
        color: theme.palette.dark
    },
    productPrice: {
        fontWeight: "700",
        fontFamily: 'Montserrat',
        fontSize: "16px",
        color: theme.palette.primary.main
    },
    wasBlock: {
        fontWeight: "700",
        fontFamily: 'Montserrat',
        fontSize: "16px",
        color: "white",
    },
    wasBlockContainer: {
        top: 10,
        left: 10,
        height: "24px",
        width: "30%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.palette.primary.main,
        position: "absolute"
    },
    strikeThrough: {
        textDecoration: "line-through"
    },
    addButtonContainer: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        opacity: 0,
        backgroundColor: "white",
        transition: ".5s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        '&:hover': {
            opacity: 0.8
        }
    },
    addButton: {
        zIndex: 10,
        borderRadius: 24,
        height: 35,
        width: 90
    },
    addButtonText: {
        textTransform: "capitalize",
        fontFamily: "Montserrat",
        opacity: 1,
        fontSize: "12px",
        color: "white",
        fontWeight: 700
    }
});

export default styles;
