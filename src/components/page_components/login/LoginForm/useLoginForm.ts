import { useState } from "react";
import { NextRouter } from 'next/router';
import { AuthLocalStorage } from '../../../../storages/auth';
import AuthService from '../../../../services/auth_service';
import { IAuthContext } from '../../../../types/contexts';
import { ILoginForm } from '../../../../types/forms';

type ILoginState = {
    isLoading: boolean;
    errorMsg: string | undefined;
}

const login = async (data: ILoginForm, authContext: IAuthContext, router: NextRouter): Promise<string> => {
    let result: string | undefined = '';
    
    const authService = AuthService.getInstance(AuthLocalStorage.getInstance());
    const response = await authService.loginWithEmailAndPassword({ ...data });

    response.fold(
        (err) => {
            result = err.message;
        },
        (_) => { // success
            result = undefined;
            authContext.actions.login({ email: data.email });
            router.push('/app')
        }
    )
    return result;
}

const useLoginForm = (authContext: IAuthContext, router: NextRouter) => {

    const [state, setState] = useState<ILoginState>({
        isLoading: false,
        errorMsg: undefined
    });

    const onSubmitForm = async (formData: ILoginForm) => {
        setState({ errorMsg: undefined, isLoading: true });
        const result = await login(formData, authContext, router);
        setState({ errorMsg: result, isLoading: false });
    }
    return {
        state,
        onSubmitForm
    }
}

export default useLoginForm;