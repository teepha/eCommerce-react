import Image from '../../assets/images/landing-bottom-banner.png';

const styles = theme => ({
    marginAuto: {
        marginLeft: "auto !important",
        marginRight: "auto !important"
    },
    image: {
        objectFit: 'contain'
    },
    paperContainer: {
        borderRadius: 0,
        boxShadow: 'none',
        backgroundImage: `url(${Image})`,
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: 'auto',
        minHeight: '300px'
    },
    navLink: {
        color: "white",
        position: "relative",
        fontWeight: "700",
        fontFamily: 'Montserrat',
        fontSize: "15px",
        cursor: "pointer",
        textTransform: "capitalize",
        '&:hover': {
            textDecoration: 'none',
            color: theme.palette.primary.main
        }
    },
    gridItemsContainer: {
        paddingLeft: '120px',
        paddingTop: '70px'
    },
    gridTitle: {
        width: '259px',
        height: '77px',
        paddingBottom: '20px',
        color: theme.palette.light,
        fontFamily: 'Playfair Display',
        fontSize: '48px',
        fontWeight: 700
    },
    gridSubtitle: {
        width: '500px',
        height: '77px',
        paddingBottom: '20px',
        color: theme.palette.light,
        fontFamily: 'Montserrat',
        fontSize: '24px',
        fontWeight: 700
    },
    '@media (max-width: 768px)': {
      paperContainer: {
          backgroundSize: "cover"
      },
      gridItemsContainer: {
          paddingLeft: '20px',
          paddingTop: '40px'
      },
      gridSubtitle: {
          width: 'auto'
      }
    }
});

export default styles;
