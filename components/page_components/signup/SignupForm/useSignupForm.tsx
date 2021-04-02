import { useState } from 'react';
import { ISignupForm } from '../../../../types/forms';
import { IAuthContext } from "../../../../types/contexts";
import AuthService  from '../../../../services/auth_service';
import { AuthLocalStorage } from "../../../../storages/auth";

type ISignupState = {
    isLoading: boolean;
    errorMsg: string | undefined;
}

const signup = async (data: ISignupForm, authContext: IAuthContext): Promise<string> => {

    let result: string | undefined = '';

    const authService = AuthService.getInstance(AuthLocalStorage.getInstance());
    const response = await authService.registerWithEmail({ ...data });
    
    response.fold(
        (err) => {
            result = err.message;
        },
        (_) => { // success
            result = undefined;
            authContext.actions.login({email: data.email});
        }
    )
    return result;
}

const useSignupForm = (authContext: IAuthContext) => {

    const [state, setState] = useState<ISignupState>({
        isLoading: false,
        errorMsg: undefined
    });

    const onSubmitForm = async (formData: ISignupForm) => {
        setState({ errorMsg: undefined, isLoading: true });        
        const result = await signup(formData, authContext);
        setState({ errorMsg: result, isLoading: false });
    }

    return {
        state,
        onSubmitForm
    }
}

export default useSignupForm;