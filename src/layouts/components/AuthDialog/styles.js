const styles = theme => ({
    titleText: {
        fontFamily: 'Montserrat',
        fontSize: "24px",
        fontWeight: 700,
        color: theme.palette.dark
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
        cursor: "pointer",
        color: theme.palette.primary.main,
        fontWeight: 700
    }

});

export default styles;
