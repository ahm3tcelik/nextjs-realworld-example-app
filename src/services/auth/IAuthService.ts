import Failure from '../../models/failure';
import { IAuthAccessDTO } from "../../types/storages/auth";
import { Either } from '../../models/either';
import { ILoginRequest, ILoginResponse, IRegisterRequest, IRegisterResponse } from '../../types/http';

export interface IAuthService {
    loginWithEmailAndPassword(body: ILoginRequest): Promise<Either<Failure, ILoginResponse>>;
    registerWithEmail(body: IRegisterRequest): Promise<Either<Failure, IRegisterResponse>>;
    logOut(): void;
    isLoggedIn(): boolean;
    getAcessDto(): IAuthAccessDTO | undefined;
}