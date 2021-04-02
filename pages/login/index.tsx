import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import { Container } from "@material-ui/core";
import HeadTag from "../../components/common/HeadTag";
import EmptyLayout from "../../components/layouts/EmptyLayout";
import { LoginForm } from '../../components/page_components/login';
import { withoutUser } from "../../components/hocs/withoutUser";
import useLoginPageStyles from "./useLoginPageStyles";

const Logo = () => {
    const classes = useLoginPageStyles();
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
    const classes = useLoginPageStyles();

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

export default withoutUser(LoginPage);