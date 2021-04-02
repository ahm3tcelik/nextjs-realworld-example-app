import { AxiosError } from "axios";
import { httpClient, Endpoints } from "../../http_client";
import Failure from '../../models/failure';
import { IAuthStorage } from "../../storages/auth/IAuthStorage";
import { IAuthAccessDTO } from "../../types/storages/auth";
import { Left, Right, Either } from '../../models/either';
import { IFailResponse, ILoginRequest, ILoginResponse, IRegisterRequest, IRegisterResponse } from '../../types/http';
import { IAuthService } from "./IAuthService";

export default class AuthService implements IAuthService {
    private static instance: AuthService;
    private authStorage: IAuthStorage;
    private constructor(authStorage: IAuthStorage) {
        this.authStorage = authStorage;
    }

    static getInstance(authStorage: IAuthStorage): AuthService {
        if (!AuthService.instance) {
            AuthService.instance = new AuthService(authStorage);
        }
        return AuthService.instance;
    }

    async loginWithEmailAndPassword(body: ILoginRequest): Promise<Either<Failure, ILoginResponse>> {

        try {
            const result = await httpClient.post(Endpoints.LOGIN, {
                ...body
            });
            const data: ILoginResponse = result.data;
            this.authStorage.setAccessDTO({ accessToken: data.access_token, email: body.email });

            return new Right(result.data);
        } catch (ex) {
            let err: AxiosError = ex;
            let errResponse: IFailResponse = err.response?.data;
            return new Left(new Failure(errResponse?.message ?? 'An error occurred'));
        }
    }

    async registerWithEmail(body: IRegisterRequest): Promise<Either<Failure, IRegisterResponse>> {
        try {
            const result = await httpClient.post(Endpoints.REGISTER, {
                ...body
            });

            const data: IRegisterResponse = result.data;
            this.authStorage.setAccessDTO({ accessToken: data.access_token, email: body.email });

            return new Right(result.data);
        } catch (ex) {
            let err: AxiosError = ex;
            let errResponse: IFailResponse = err.response?.data;
            return new Left(new Failure(errResponse?.message ?? 'An error occurred'));
        }
    }

    logOut(): void {
        this.authStorage.removeAccessDTO();
    }

    isLoggedIn(): boolean {
        const accessDTo = this.authStorage.getAccessDTO()
        return !!accessDTo;
    }

    getAcessDto(): IAuthAccessDTO | undefined {
        return this.authStorage.getAccessDTO();
    }
}