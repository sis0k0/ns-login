import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { LoginViewModel } from "./login-view-model";

export function navigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = new LoginViewModel();
}

export function goBack(args: EventData) {
    const navigationButton: any = args.object;
    const frame = navigationButton.page.frame;
    frame.goBack();
}
