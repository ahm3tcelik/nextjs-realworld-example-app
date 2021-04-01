import {
    Theme,
    makeStyles,
    createStyles
} from '@material-ui/core';

const useLoaderStyles = makeStyles((_: Theme) =>
    createStyles({
        root: {
            position: 'fixed',
            minHeight: '100vh',
            height: '100%',
            width: '100%',
            display: 'flex',
            zIndex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(255,255,255, 0.8)',
            WebkitAnimation: '$fadein 1s',
            animation: '$fadein 1s',
        },
        spinner: {
            width: '40px',
            height: '40px',
            position: 'relative',
        },
        bounce1: {
            WebkitAnimationDelay: '-1.0s',
            animationDelay: '-1.0s',
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            backgroundColor: '#333',
            opacity: 0.6,
            position: 'absolute',
            top: 0,
            left: 0
        },
        bounce2: {
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            backgroundColor: '#333',
            opacity: 0.6,
            position: 'absolute',
            top: 0,
            left: 0,
            WebkitAnimation: `$sk-bounce 2.0s infinite ease-in-out`,
            animation: '$sk-bounce 2.0s infinite ease-in-out',
        },
        "@keyframes sk-bounce": {
            "0%, 100%": {
                transform: 'scale(0.0)',
                WebkitTransform: 'scale(0.0)',
            },
            "50%": {
                transform: 'scale(1.0)',
                WebkitTransform: 'scale(1.0)',
            },
        },
        "@keyframes fadein": {
            "from": {
                opacity: 0
            },
            "to": {
                opacity: 1
            }
        },
    }),
);

export default useLoaderStyles;