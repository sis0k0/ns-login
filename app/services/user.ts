import { Kinvey } from "kinvey-nativescript-sdk";

export interface User {
    username: string;
}

export interface LoginData {
    username: string;
    password: string;
}

export function login(user: LoginData) {
    return new Promise((resolve, reject) => {
        Kinvey.User.logout()
            .then(() => {
                Kinvey.User.login(user.username, user.password)
                    .then(resolve)
                    .catch(reject)
            })
            .catch(reject)
    });
};

export function getCurrentUser(): User | null {
    return Kinvey.User.getActiveUser();
}
