import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import { Container, createStyles, makeStyles, Theme } from "@material-ui/core";
import HeadTag from "../../components/common/HeadTag";
import EmptyLayout from "../../components/layouts/EmptyLayout";
import { LoginForm } from '../../components/page_components/login';

const useStyles = makeStyles((_: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
        },
        logo: {
            position: 'absolute',
            left: 10,
            top: 10
        }
    }),
);

const Logo = () => {
    const classes = useStyles();
    return (
        <div className={classes.logo}>
            <Link href="/">
                <a>
                    <Image
                        src="/images/logo.png"
                        alt="Qualiducation logo"
                        width={150}
                        height={50}
                        layout="intrinsic"
                    />
                </a>
            </Link>
        </div>
    );
}

const LoginPage = () => {
    const classes = useStyles();

    return (
        <EmptyLayout>
            <HeadTag title="Login" />
            <Logo />
            <Container maxWidth="xs" className={classes.container}>
                <LoginForm />
            </Container>
        </EmptyLayout>
    );
}

export default LoginPage;