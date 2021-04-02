import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useSignupPageStyles = makeStyles((_: Theme) =>
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

export default useSignupPageStyles;