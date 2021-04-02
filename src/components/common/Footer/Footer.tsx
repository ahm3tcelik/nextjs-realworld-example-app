import {
    Grid,
    Typography,
    Divider,
    Container,
} from "@material-ui/core";
import Image from 'next/image';
import React from "react";
import theme from "../../../init/theme";

type IProps = {};

const Footer = (_: IProps) => {

    return (
        <footer>
            <Divider />
            <Container>
                <Grid style={{ padding: theme.spacing(1, 0) }} container direction="row" justify="space-between" alignItems="center">
                    <Grid item>
                        <Image
                            src="/images/logo.png"
                            alt="Qualiducation logo"
                            width={150}
                            height={50}
                            layout="intrinsic"
                        />
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" align="center">© Ahmet Çelik {new Date().getFullYear()}</Typography>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
}

export default Footer;