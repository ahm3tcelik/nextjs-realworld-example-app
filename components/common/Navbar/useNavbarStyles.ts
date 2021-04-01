import { Theme, createStyles, makeStyles } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';

const useNavbarStyles = makeStyles((_: Theme) =>
    createStyles({
        root: {
            background: grey[900],
            zIndex: 'initial',
        }
    }),
);

export default useNavbarStyles;