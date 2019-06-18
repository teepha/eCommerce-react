import Product from './index';
import roles from '../../config/roles';

const ProductConfig = {
    settings: {
        layout: {
            style: 'main'
        }
    },
    auth    : roles.guest,
    name: 'Product',
    routes  : [
        {
            path     : '/product/:id?',
            component: Product
        }
    ]
};

export default ProductConfig;