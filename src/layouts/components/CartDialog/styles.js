const styles = theme => ({
    titleText: {
        fontFamily: 'Montserrat',
        fontSize: "24px",
        fontWeight: 700,
        color: theme.palette.dark
    },
    totalText: {
        fontFamily: 'Montserrat',
        fontSize: "18px",
        fontWeight: 700,
        color: theme.palette.darker
    },
    closeButton: {
        fontFamily: 'Montserrat',
        fontSize: "24px",
        fontWeight: 700,
        color: theme.palette.dark,
        cursor: "pointer"
    },
    buttonProgress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
    submitButtonText: {
        textTransform: "none",
        fontFamily: "Montserrat",
        fontSize: "16px",
        color: "white",
        fontWeight: 700
    },
    cartButton: {
        boxShadow: '0 0 0 transparent'
    }

});

export default styles;
