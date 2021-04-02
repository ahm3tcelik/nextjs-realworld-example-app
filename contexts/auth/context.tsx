import React, { ReactNode, createContext, useReducer } from 'react';
import AuthService from '../../services/auth_service';
import { AuthActionKindTypes, IAuthContext, IAuthLoginPayload, IAuthState } from '../../types/contexts/';
import { AuthLocalStorage } from '../../storages/auth';
import { authReducer } from './reducer';

type IProps = {
    children: ReactNode;
}

const AuthContext = createContext({} as IAuthContext);

const AuthProvider = (props: IProps) => {
    const authService = AuthService.getInstance(AuthLocalStorage.getInstance());

    let initialAuthState: IAuthState = {
        isLoggedIn: false
    }

    if (authService.isLoggedIn()) {
        initialAuthState.isLoggedIn = true;
        initialAuthState.email = authService.getAcessDto()?.email;
    }

    const [authState, dispatch] = useReducer(authReducer, initialAuthState);

    function login(payload: IAuthLoginPayload): void {
        dispatch({
            type: AuthActionKindTypes.LOGIN,
            payload: payload
        });
    }

    function logout(): void {
        dispatch({
            type: AuthActionKindTypes.LOGOUT,
            payload: undefined
        });
    }

    function loginFromStorage(payload: IAuthLoginPayload): void {
        dispatch({
            type: AuthActionKindTypes.LOGIN_FROM_STORAGE,
            payload: payload
        });
    }

    return (
        <AuthContext.Provider value={{
            state: authState,
            actions: {
                login: login,
                logout: logout,
                loginFromStorage: loginFromStorage
            }
        }}>
            {props.children}
        </AuthContext.Provider>
    );
}

const AuthConsumer = AuthContext.Consumer;

export {
    AuthProvider,
    AuthContext,
    AuthConsumer
}