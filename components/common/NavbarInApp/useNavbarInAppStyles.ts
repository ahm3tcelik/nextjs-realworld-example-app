import { Theme, createStyles, makeStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const useNavbarInAppStyle = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            background: grey[900],
            zIndex: 'initial',
        },
        progress: {
            height: '2px'
        },
        userAvatar: {
            color: theme.palette.text.primary,
            backgroundColor: grey[800],
        }
    }),
);


export default useNavbarInAppStyle;