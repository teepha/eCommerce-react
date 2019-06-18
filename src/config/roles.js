/**
 * Auth Roles
 */
const roles = {
    admin: ['admin'],
    user: ['admin', 'user'],
    guest: ['admin', 'user', 'guest'],
    onlyGuest: ['guest']
};

export default roles;
