import { Either, Left, Right } from "../../../src/models/either";
import Failure from "../../../src/models/failure";
import { IAuthService } from "../../../src/services/auth/IAuthService";
import { ILoginRequest, ILoginResponse, IRegisterRequest, IRegisterResponse } from "../../../src/types/http";
import { IAuthAccessDTO } from "../../../src/types/storages";
import { FAIL_LOGIN_WRONG, FAIL_REGISTER_USER_EXIST, SUCCESS_LOGIN } from "./auth_fake_data";

export default class AuthServiceMock implements IAuthService {

    async loginWithEmailAndPassword(body: ILoginRequest): Promise<Either<Failure, ILoginResponse>> {
        new Promise(resolve => setTimeout(resolve, 100));

        if (body.email.includes('wrong') || body.password.includes('wrong')) {
            const result = FAIL_LOGIN_WRONG;
            return new Left(new Failure(result.message));
        }
        else {
            const result = SUCCESS_LOGIN;
            return new Right(result);
        }
    }

    async registerWithEmail(body: IRegisterRequest): Promise<Either<Failure, IRegisterResponse>> {
        new Promise(resolve => setTimeout(resolve, 100));

        if (body.email.includes('exist') || body.password.includes('exist')) {
            const result = FAIL_REGISTER_USER_EXIST;
            return new Left(new Failure(result.message));
        }
        else {
            const result = SUCCESS_LOGIN;
            return new Right(result);
        }
    }

    logOut(): void {

    }

    isLoggedIn(): boolean {
        return true;
    }

    getAcessDto(): IAuthAccessDTO | undefined {
        return undefined;
    }

}