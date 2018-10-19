import { Observable } from "tns-core-modules/data/observable";
import { topmost, Frame } from "tns-core-modules/ui/frame";

import { login as userServiceLogin } from "./services/user";

export class LoginViewModel extends Observable {
    private frame: Frame;
    public username: string;
    public password: string;

    constructor() {
        super();
        this.frame = topmost();
        this.username = "js@nativescript.com";
        this.password = "nscore";
    }

    login() {
        userServiceLogin({
            username: this.username,
            password: this.password,
        }).then(() => {
            this.frame.navigate({
                moduleName: "admin-page",
                clearHistory: true,
            });
        })
        .catch(() => {
            alert("Login failed! Try again!");
        });
    }
}
