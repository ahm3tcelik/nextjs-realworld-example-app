import { createMuiTheme } from "@material-ui/core";
import grey from '@material-ui/core/colors/grey';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        background: {
            default: '#121212',
            paper: grey[900],
        },
    },
});

export default theme;