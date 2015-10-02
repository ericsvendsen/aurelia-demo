export class App {
    configureRouter(config, router) {
        config.title = 'Aurelia Demo';
        config.map([
            {
                route: ['','home'],
                name: 'home',
                moduleId: 'home',
                nav: true,
                title: 'Home'
            },
            {
                route: 'timelog',
                name: 'timelog',
                moduleId: 'timelog',
                nav: true,
                title: 'Time Log'
            }
        ]);

        this.router = router;
    }
}