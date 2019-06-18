const styles = theme => ({
    root: {
        backgroundColor: theme.palette.light,
        paddingTop: "132px"
    },
    grid: {
        minHeight: "600px",
        display: 'flex',
        flexWrap: 'wrap',
        width: "100%",
        justifyContent: 'space-around',
        overflow: 'hidden'
    },
    gridList: {
        width: "100%",
        height: "100%"
    },
    progressContainer: {
        display: 'flex',
        width: "100%",
        height: "600px",
        alignItems: "center",
        justifyContent: "center"
    }
});

export default styles;
