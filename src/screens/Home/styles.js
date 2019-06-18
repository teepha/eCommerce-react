const styles = theme => ({
    root: {
        backgroundColor: theme.palette.light,
        paddingTop: "132px"
    },
    controlContainer: {
        padding: "20px",
        width: "100%",
        height: "697px"
    },
    contain: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    grid: {
        display: 'flex',
        flexWrap: 'wrap',
        width: "100%",
        justifyContent: 'space-around',
        overflow: 'hidden'
    },
    gridList: {
        width: "100%",
        height: "717px"
    },
    bottomGridlist: {
        width: "100%",
        height: "360px"
    },
    gridListTile: {
        height: "336px"
    },
    titleBar: {
        background:
            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
        color: 'white',
    },

    titleContainer: {
        height: "30px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    controlsTopTitle: {
        fontWeight: "700",
        fontFamily: 'Lucida Grande',
        fontSize: "16px",
        color: theme.palette.dark
    },
    controlsTitle: {
        fontWeight: "700",
        fontFamily: 'Lucida Grande',
        fontSize: "16px",
        color: theme.palette.medium
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
    radioButton: {
        padding: 0,
        margin: 0
    },
    filterBlock: {
        width: "100%",
        borderBottom: `1px solid rgba(0, 0, 0, 0.1)`
    },
    colorBlock: {
        paddingTop: "10px",
        height: "80px",
        width: "100%"
    },
    sizesBlock: {
        paddingTop: "10px",
        height: "110px",
        width: "100%"
    },
    sliderBlock: {
        paddingTop: "10px",
        height: "110px",
        width: "100%"
    },
    brandBlock: {
        paddingTop: "10px",
        height: "180px",
        width: "100%"
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
    sizeCheckboxes: {
        paddingTop: "15px"
    },
    colorRadiosContainer: {
        height: "50px",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    sliderContainer: {
        height: "40px",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rangesText: {
        lineHeight: "24px",
        fontSize: "12px",
        padding: "5px",
        color: theme.palette.darker,
        fontWeight: 700
    },
    brandListContainer: {
        height: "150px",
        overflow: "scroll",
        overflowX: "hidden"
    },
    clearText: {
        cursor: "pointer",
        fontSize: "10px",
        fontWeight: 700,
        marginLeft: "10px",
        color: theme.palette.primary.main
    },
    submitButtonText: {
        textTransform: "capitalize",
        fontFamily: "Montserrat",
        fontSize: "12px",
        color: "white",
        fontWeight: 700
    }
});

export default styles;
