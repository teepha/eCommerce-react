const styles = theme => ({
    image: {
        height: "340px",
        backgroundImage: `url(/assets/images/langing-page-menu-background.png)`
    },
    navLink: {
        color: "white",
        fontWeight: "700",
        fontFamily: 'Montserrat',
        fontSize: "18px",
        cursor: "pointer",
        textTransform: "capitalize",
        '&:hover': {
            textDecoration: 'none',
            color: theme.palette.primary.main
        }
    },
    title: {
        color: theme.palette.dark,
        fontFamily: 'Playfair Display',
        fontSize: '58px',
        fontWeight: 700
    }
});

export default styles;
