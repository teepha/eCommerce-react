const styles = theme => ({
    nameText: {
        fontFamily: 'Lucida Grande',
        color: theme.palette.dark,
        fontWeight: 700,
        fontSize: "16px"
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
        lineHeight: "40px"
    },
    productCodeText: {
        fontFamily: 'Open Sans',
        color: theme.palette.medium,
        fontWeight: 100,
        fontSize: "16px"
    },
    sizeText: {
        fontFamily: 'Open Sans',
        color: theme.palette.medium,
        fontWeight: 100,
        fontSize: "16px",
        textTransform: "uppercase"
    },
    priceText: {
        fontFamily: 'Montserrat',
        color: theme.palette.dark,
        fontWeight: 700,
        fontSize: "24px"
    },
    removeIcon: {
        color: theme.palette.primary.main,
        fontFamily: 'Open Sans',
        fontSize: "12px"
    },
    removeText: {
        fontFamily: 'Open Sans',
        color: theme.palette.darker,
        fontWeight: 300,
        fontSize: "12px"
    },
    headerBorderBottom: {
        borderBottom: "1px solid " + theme.palette.borders2
    },
    headerTitle: {
        fontFamily: 'Montserrat',
        color: theme.palette.medium,
        fontWeight: 700,
        fontSize: "16px"
    }
});

export default styles;
