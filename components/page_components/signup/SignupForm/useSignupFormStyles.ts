import {
    Theme,
    makeStyles,
    createStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
        },
        paper: {
            padding: theme.spacing(5)
        },
        divider: {
            margin: theme.spacing(2)
        },
    }),
);

export default useStyles;