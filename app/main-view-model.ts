import { Observable } from 'tns-core-modules/data/observable';

export class HelloWorldModel extends Observable {
    constructor() {
        super();
    }

    goToAbout(args) {
        this.navigate(args, 'about-page');
    }

    goToLogin(args) {
        this.navigate(args, 'login-page');
    }

    navigate(args, route: string) {
        const page = args.object.page;
        page.frame.navigate(route);
    }
}
