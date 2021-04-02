import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import {
    AppBar,
    Toolbar,
    Grid,
    Avatar,
} from "@material-ui/core";
import useNavbarInAppStyles from "./useNavbarInAppStyles";

type IProps = {};

const NavbarInApp = (_: IProps) => {
    const classes = useNavbarInAppStyles();

    return (
        <>
            <AppBar position="sticky" elevation={4} className={classes.root}>
                <Toolbar>
                    <Logo />
                    <Grid spacing={1} container direction="row" justify="flex-end" alignItems="center">
                        <UserAvatar />
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    );
}

const Logo = () => {
    return (
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
    );
}

const UserAvatar = () => {
    const classes = useNavbarInAppStyles();
    return (
        <Avatar className={classes.userAvatar}>A</Avatar>
    );
}

export default NavbarInApp;