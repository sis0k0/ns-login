import { Observable } from 'tns-core-modules/data/observable';

export class HelloWorldModel extends Observable {
    constructor() {
        super();
    }

    goToAbout(args) {
        const page = args.object.page;
        page.frame.navigate('about-page');
    }
}
