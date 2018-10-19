import { EventData, Observable } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";

import { getCurrentUser } from './services/user';

export function navigatingTo(args: EventData) {
    const page = <Page>args.object;
    const viewModel = new Observable();

    const user = getCurrentUser();
    const message = user ?
        `Whoa! Look who's here: ${user.username}` :
        `Uh-oh! Seems like you haven't logged in....`;

    viewModel.set("message", message);
    page.bindingContext = viewModel;
}

export function goBack(args: EventData) {
    const navigationButton: any = args.object;
    const frame = navigationButton.page.frame;
    frame.goBack();
}
