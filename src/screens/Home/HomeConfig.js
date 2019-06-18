import Home from './index';
import roles from '../../config/roles';

const HomeConfig = {
    settings: {
        layout: {
            style: 'main'
        }
    },
    auth    : roles.guest,
    name: 'Home',
    exact    : true,
    routes  : [
        {
            path     : '/department/:department_id?/category/:category_id?',
            component: Home
        },
        {
            path     : '/department/:department_id?',
            component: Home
        },
        {
            path     : '/',
            component: Home
        }
    ]
};

export default HomeConfig;