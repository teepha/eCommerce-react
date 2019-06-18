export default class Helpers {

    static generateRoutesFromConfigs(configs) {
        let allRoutes = [];
        configs.forEach((config) => {
            allRoutes = [
                ...allRoutes,
                ...this.setRoutes(config)
            ]
        });
        return allRoutes;
    }

    static setRoutes(config) {
        let routes = [...config.routes];

        if (config.settings || config.auth) {
            routes = routes.map((route) => {
                let auth = config.auth ? [...config.auth] : [];
                auth = route.auth ? [...auth, ...route.auth] : auth;
                return {
                    ...route,
                    settings: {...config.settings, ...route.settings},
                    auth
                };
            });
        }

        return [...routes];
    }
}