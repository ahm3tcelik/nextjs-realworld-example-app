import { IAuthAccessDTO } from '../../types/storages/auth';
import { AUTH_TOKEN } from '../constants';
import { IAuthStorage } from './IAuthStorage';

export class AuthLocalStorage implements IAuthStorage {

    private static instance: AuthLocalStorage;

    private constructor() { }

    static getInstance(): AuthLocalStorage {
        if (!AuthLocalStorage.instance) {
            AuthLocalStorage.instance = new AuthLocalStorage();
        }
        return AuthLocalStorage.instance;
    }
    
    setAccessDTO(data: IAuthAccessDTO): void {
        localStorage.setItem(AUTH_TOKEN, JSON.stringify(data));
    }
    getAccessDTO(): IAuthAccessDTO | undefined {
        let data: IAuthAccessDTO;
        try {
            data = JSON.parse(localStorage.getItem(AUTH_TOKEN)!);
        } catch (_) {
            return undefined;
        }
        return data;
    }
    removeAccessDTO() {
        return localStorage.removeItem(AUTH_TOKEN);
    }

}