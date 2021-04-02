import React, { useEffect, ComponentType, useContext } from 'react';
import Router from 'next/router';
import { AuthContext } from '../../contexts/auth/context';

export const withoutUser = (WrappedComponent: ComponentType) => {

    const Wrapper = (props: any) => {
        const authContext = useContext(AuthContext);

        useEffect(() => {

            if (authContext.state.isLoggedIn) {
                Router.replace('/app', '/app', { shallow: true });
            }
        }, [authContext.state]);

        return (
            <WrappedComponent {...props} />
        );
    }
    return Wrapper;
}