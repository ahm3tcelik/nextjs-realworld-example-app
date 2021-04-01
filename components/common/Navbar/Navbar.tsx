import React, { ReactNode } from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import useNavbarStyles from "./useNavbarStyles";

type IProps = {
    children?: ReactNode
}

const Navbar = (_: IProps) => {
    const classes = useNavbarStyles();

    return (
        <AppBar position="sticky" elevation={1} className={classes.root}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6">Qualiducation</Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;