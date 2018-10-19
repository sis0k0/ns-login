import { Kinvey } from "kinvey-nativescript-sdk";

const appKey = "kid_SyY8LYO8M";
const appSecret = "09282985d7c540f7b076a9c7fd884c77";

export function initialize() {
    Kinvey.init({
        appKey,
        appSecret,
    });
}
