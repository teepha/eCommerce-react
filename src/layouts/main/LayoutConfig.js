const config = {
    title   : 'Main Layout',
    defaults: {
        mode          : 'fullwidth',
        scroll        : 'content',
        navbar        : {
            display : true,
            folded  : false,
            position: 'left'
        },
        toolbar       : {
            display : true,
            style   : 'fixed',
            position: 'below'
        },
        footer        : {
            display : true,
            style   : 'fixed',
            position: 'below'
        },
        leftSidePanel : {
            display: true
        },
        rightSidePanel: {
            display: false
        }
    }
};

export default config;
