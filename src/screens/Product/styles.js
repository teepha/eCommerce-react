const styles = theme => ({
    root: {
        backgroundColor: theme.palette.light,
        paddingTop: "132px"
    },
    container: {
        minHeight: 600,
        width: "100%",
        padding: "10px",
        display: "flex"
    },
    breadcrumbsText: {
        fontWeight: "700",
        fontFamily: 'Helvetica',
        fontSize: "16px",
        color: theme.palette.medium
    },
    productPrice: {
        fontWeight: "700",
        fontFamily: 'Montserrat',
        fontSize: "24px",
        color: theme.palette.primary.main
    },
    lightTitle: {
        fontWeight: "700",
        fontFamily: 'Montserrat',
        fontSize: "16px",
        color: theme.palette.medium
    },
    addRemoveIcon: {
        boxShadow: "none",
        color: theme.palette.dark
    },
    addRemoveText: {
        color: theme.palette.dark,
        fontFamily: 'Montserrat',
        fontSize: '16px',
        fontWeight: 700,
        lineHeight: "42px"
    },
    strikeThrough: {
        textDecoration: "line-through"
    },
    radioButton: {
        padding: 0,
        margin: 0
    },
    sizeCheckboxUnchecked: {
        width: "55px",
        height: "24px",
        lineHeight: "24px",
        margin: "2px",
        backgroundColor: theme.palette.borders,
        borderRadius: "2px",
        fontSize: "12px",
        fontWeight: 700
    },
    sizeCheckboxChecked: {
        width: "55px",
        height: "24px",
        lineHeight: "24px",
        margin: "2px",
        color: "white",
        backgroundColor: theme.palette.primary.main,
        borderRadius: "2px",
        fontSize: "12px",
        fontWeight: 700
    },
    clearText: {
        cursor: "pointer",
        fontSize: "10px",
        fontWeight: 700,
        marginLeft: "10px",
        color: theme.palette.primary.main
    },
    submitButtonText: {
        textTransform: "none",
        fontFamily: "Montserrat",
        fontSize: "16px",
        color: "white",
        fontWeight: 700
    },
    imageBlock: {
        width: "40%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    contentBlock: {
        width: "100%",
        display: "flex",
        padding: "20px",
        paddingLeft: "40px",
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },
    productTitleText: {
        color: theme.palette.dark,
        fontFamily: "Montserrat",
        fontSize: "24px",
        fontWeight: 700,
        letterSpacing: "1px",
        lineHeight: "36px"
    },
    reviewTitleText: {
        color: theme.palette.dark,
        fontFamily: "Montserrat",
        fontSize: "24px",
        fontWeight: 700,
        letterSpacing: "1px",
        lineHeight: "36px"
    },
    buttonProgress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    }
});

export default styles;
