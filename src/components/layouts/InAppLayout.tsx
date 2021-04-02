import React from "react";
import Loader from "../common/Loader/Loader";
import NavbarInApp from "../common/NavbarInApp/NavbarInApp";
import { Container } from '@material-ui/core';

type IProps = {
    children: React.ReactNode;
}

const InAppLayout = (props: IProps) => {
    return (
        <>
            <Loader />
            <NavbarInApp />
            <main>
                <Container fixed style={{ minHeight: '100vh' }}>
                    <>
                        {props.children}
                    </>
                </Container>
            </main>
        </>
    );
}

export default InAppLayout;
