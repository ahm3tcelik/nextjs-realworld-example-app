import {
    Theme,
    makeStyles,
    createStyles
} from '@material-ui/core';

export const useLoginFormStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            padding: theme.spacing(5)
        },
        divider: {
            margin: theme.spacing(2)
        },
        helperText: {
            color: theme.palette.error.main
        }
    }),
);

export default useLoginFormStyles;