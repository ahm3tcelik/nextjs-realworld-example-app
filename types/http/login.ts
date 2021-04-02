export type ILoginRequest = {
    email: string;
    password: string;
}

export type ILoginResponse = {
    access_token: string;
}