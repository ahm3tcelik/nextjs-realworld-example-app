import React, { useEffect } from "react";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import theme from "../../init/theme";
import { AuthProvider } from "../../contexts/auth/context";
import Meta from "../../components/common/Meta";
import HeadTag from "../../components/common/HeadTag";

const MyApp = ({ Component, pageProps }: AppProps) => {

    // for material-ui config
    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement?.removeChild(jssStyles);
        }
    }, []);

    return (
        <>
            <HeadTag>
                <Meta />
            </HeadTag>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AuthProvider>
                    <Component {...pageProps} />
                </AuthProvider>
            </ThemeProvider>
        </>
    );
}

export default MyApp;