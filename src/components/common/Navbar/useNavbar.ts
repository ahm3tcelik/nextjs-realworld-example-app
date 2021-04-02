import router from 'next/router';
import AuthService from '../../../services/auth_service';
import { AuthLocalStorage } from '../../../storages/auth';
import { IAuthContext } from '../../../types/contexts';

const logout = (authContext: IAuthContext) => {

    const authService = AuthService.getInstance(AuthLocalStorage.getInstance());

    authService.logOut();
    authContext.actions.logout();

    router.replace('/', {}, { shallow: true });
}

const useNavbar = (authContext: IAuthContext) => {

    const onClickLogout = () => {
        logout(authContext);
    }

    return {
        onClickLogout
    }
}

export default useNavbar;