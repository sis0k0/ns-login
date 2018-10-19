import { EventData, Observable } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";

export function navigatingTo(args: EventData) {
    const page = <Page>args.object;
    const vm = new Observable();
    vm.set("info", "This application is awesome. So is HMR.");
    page.bindingContext = vm;
}

export function goBack(args) {
    const navigationButton = args.object;
    const frame = navigationButton.page.frame;
    frame.goBack();
}
