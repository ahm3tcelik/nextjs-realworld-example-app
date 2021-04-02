import { Container } from "@material-ui/core";
import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import { SignupForm } from "../../components/page_components/signup";
import HeadTag from "../../components/common/HeadTag";
import EmptyLayout from "../../components/layouts/EmptyLayout";
import useSignupPageStyles from "./useSignupPageStyles";
import { withoutUser } from "../../components/hocs/withoutUser";

const SignupPage = () => {
    const classes = useSignupPageStyles();
    return (
        <EmptyLayout>
            <HeadTag title="Forgot Password" />
            <Logo />
            <Container maxWidth="xs" className={classes.container}>
                <SignupForm />
            </Container>
        </EmptyLayout>
    );
}

const Logo = () => {
    const classes = useSignupPageStyles();
    return (
        <div className={classes.logo}>
            <Link href="/">
                <a>
                    <Image
                        src="/images/logo.png"
                        alt="Sundayhero logo"
                        width={150}
                        height={50}
                        layout="intrinsic"
                    />
                </a>
            </Link>
        </div>
    );
}

export default withoutUser(SignupPage);