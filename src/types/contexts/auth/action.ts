import { IAuthLoginPayload } from './payload';

export enum AuthActionKindTypes {
    LOGIN,
    LOGOUT,
    REGISTER,
    LOGIN_FROM_STORAGE
}
export type IAuthActions = {
    login: (payload: IAuthLoginPayload) => void;
    logout: () => void;
    loginFromStorage: (payload: IAuthLoginPayload) => void;
}