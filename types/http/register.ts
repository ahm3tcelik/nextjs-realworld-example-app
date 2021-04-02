export type IRegisterRequest = {
    email: string;
    password: string;
}

export type IRegisterResponse = {
    access_token: string;
}