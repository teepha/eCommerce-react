const styles = theme => ({
    root: {
        backgroundColor: theme.palette.light,
        paddingTop: "132px"
    },
    controlContainer: {
        //padding: "20px",
        width: "100%",
        //height: "697px",
        boxShadow: '0 0 0 transparent !important'
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
        fontSize: "18px",
        color: theme.palette.dark
    },
    controlsTitle: {
        fontWeight: "700",
        fontFamily: 'Montserrat',
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
        padding: '20px',
        backgroundColor: '#fafafa',
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.15)'
    },
    filterBodyContainer: {
        width: "100%",
        padding: '10px 0',
        backgroundColor: '#fff',
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.15)'
    },
    footerBlock: {
        width: "100%",
        padding: '20px',
        backgroundColor: '#fafafa',
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.15)',
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    colorBlock: {
        padding: "5px 20px",
        width: "100%"
    },
    sizesBlock: {
        padding: "5px 20px",
        width: "100%"
    },
    sliderBlock: {
        padding: "5px 20px",
        width: "100%"
    },
    searchBlock: {
        padding: "10px 20px",
        width: "100%"
    },
    brandBlock: {
        padding: "20px",
        height: "180px",
        width: "100%"
    },
    sizeCheckboxUnchecked: {
        width: "70px",
        height: "24px",
        lineHeight: "24px",
        margin: "2px",
        backgroundColor: theme.palette.borders,
        borderRadius: "2px",
        fontSize: "12px",
        fontWeight: 700
    },
    sizeCheckboxChecked: {
        width: "70px",
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
        paddingTop: "15px",
        paddingBottom: "15px",
    },
    colorRadiosContainer: {
        //height: "50px"
    },
    sliderContainer: {
        height: "40px",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    searchContainer: {
        height: "40px",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        '& div':{
          width: '100%'
        }
    },
    rangesText: {
        lineHeight: "0",
        fontFamily: 'Open Sans',
        fontSize: '12px',
        padding: "5px",
        color: theme.palette.darker,
        fontWeight: 'lighter'
    },
    brandListContainer: {
        height: "150px",
        overflow: "scroll",
        overflowX: "hidden"
    },
    clearText: {
      textTransform: 'capitalize',
        cursor: "pointer",
        fontSize: "12px",
        fontWeight: 'lighter',
        marginLeft: "10px",
        color: theme.palette.primary.main
    },
    boldIcon: {
        fontSize: "16px",
        fontWeight: 'bold',
        color: theme.palette.primary.main
    },
    submitButtonText: {
        textTransform: "capitalize",
        fontFamily: "Montserrat",
        fontSize: "12px",
        fontWeight: 'lighter',
        color: "white"
    },
    textField: {
        padding: '5px 10px',
    },
    filterSearchInput: {
        padding: '7px 10px',
        fontSize: '14px',
        width: '100%'
    },
    coloredButton: {
        boxShadow: '0 0 0 transparent'
    },
    isGrey: {
      color: '#B4B4B4'
    },
    filterItems: {
      fontFamily: 'Open Sans',
      fontSize: '13px'
    },
});

export default styles;
