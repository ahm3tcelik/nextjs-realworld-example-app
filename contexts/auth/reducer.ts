import { AuthActionKindTypes, IActionKinds, IAuthLoginPayload, IAuthState } from "../../types/contexts";


export const authReducer = (state: IAuthState, action: IActionKinds<AuthActionKindTypes>): IAuthState => {
    switch (action.type) {
        case AuthActionKindTypes.LOGIN: {
            const payload = (action.payload) as IAuthLoginPayload;
            return {
                ...state,
                email: payload.email,
                isLoggedIn: true
            }
        }
        case AuthActionKindTypes.LOGOUT: {
            return {
                ...state,
                email: undefined,
                isLoggedIn: false
            }
        }
        case AuthActionKindTypes.LOGIN_FROM_STORAGE: {
            const payload = (action.payload) as IAuthLoginPayload;
            return {
                ...state,
                email: payload.email,
                isLoggedIn: true
            }
        }
        default: return state;
    }
}