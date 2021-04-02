import React, { ReactNode, useContext, useEffect, useState } from "react";
import Link from 'next/link'
import { AppBar, Button, Grid, IconButton, Toolbar, Typography } from "@material-ui/core"
import { Menu as MenuIcon } from "@material-ui/icons";
import { Ternary } from '../../conditional';
import useNavbarStyles from "./useNavbarStyles";
import { AuthContext } from "../../../contexts/auth/context";
import useNavbar from "./useNavbar";

type IProps = {
    children?: ReactNode
}

type IAuthorizedItemProps = {
    onClickLogout: Function;
}

const Navbar = (_: IProps) => {
    const classes = useNavbarStyles();
    const authContext = useContext(AuthContext);
    const { onClickLogout } = useNavbar(authContext);

    // 'Warning: Text content did not match. Server - Client ' 
    // Solution is extra state.
    const [loginState, setLoginState] = useState(false);

    useEffect(() => {
        setLoginState(authContext.state.isLoggedIn);
    }, [loginState, authContext.state])

    return (
        <AppBar position="sticky" elevation={1} className={classes.root}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6">Qualiducation</Typography>
                <Grid spacing={1} container direction="row" justify="flex-end" alignItems="center">
                    <>
                        <Ternary
                            condition={loginState}
                            True={<AuthorizedItem onClickLogout={onClickLogout} />}
                            False={<UnAuthorizedItem />}
                        />
                    </>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

const AuthorizedItem = (props: IAuthorizedItemProps) => {
    return (
        <>
            <Grid item>
                <Button onClick={props.onClickLogout.bind(this)} color="secondary">Logout</Button>
            </Grid>
            <Grid item>
                <Link href="/app">
                    <Button style={{ textTransform: 'capitalize' }} variant="contained" color="secondary" vocab="false">
                        Go to App
                    </Button>
                </Link>
            </Grid>
        </>
    );
}
const UnAuthorizedItem = () => {
    return (
        <>
            <Grid item>
                <Link href="/login">
                    <Button color="secondary">Login</Button>
                </Link>
            </Grid>
            <Grid item>
                <Link href="/signup">
                    <Button style={{ textTransform: 'capitalize' }} variant="contained" color="secondary" vocab="false">
                        Sign Up For Free
                    </Button>
                </Link>
            </Grid>
        </>
    );
}

export default Navbar;