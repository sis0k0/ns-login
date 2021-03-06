import { EventData, Observable } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";

export function navigatingTo(args: EventData) {
    const page = <Page>args.object;
    const viewModel = new Observable();
    viewModel.set("info", "This application is awesome. So is HMR.");
    page.bindingContext = viewModel;
}

export function goBack(args: EventData) {
    const navigationButton: any = args.object;
    const frame = navigationButton.page.frame;
    frame.goBack();
}
