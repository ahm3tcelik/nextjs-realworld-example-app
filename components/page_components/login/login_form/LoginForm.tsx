import {
    Paper,
    Grid,
    Typography,
    Divider,
    TextField,
    Button,
    FormControl,
    IconButton,
    InputAdornment,
    OutlinedInput,
    FormHelperText
} from '@material-ui/core';

import {
    Visibility,
    VisibilityOff
} from '@material-ui/icons';

import Link from 'next/link';
import useLoginFormStyles from './useLoginFormStyles';
import theme from '../../../../init/theme';
import useLoginForm from './useLoginForm';
import React, { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { IDefaultField } from '../../../../types/input';
import { ILoginForm } from '../../../../types/forms';
import { useRouter } from 'next/router';
import { AuthContext } from '../../../../contexts/auth/context';
import ValidationHelper from '../../../../helpers/validation_helper';


const EmailField = (props: IDefaultField<ILoginForm>) => {
    return (
        <Controller
            name="email"
            render={(props) => <TextField {...props.field}
                id="email"
                placeholder="Email"
                variant="outlined"
                size="small"
                color="secondary"
                helperText={props.fieldState.error ? props.fieldState.error.message : null}
                error={props.fieldState.error != null}
            />}
            control={props.controller}
            defaultValue=""
            rules={{
                required: {
                    value: true,
                    message: 'Email is required'
                },
                pattern: {
                    value: ValidationHelper.EMAIL_REGEXP,
                    message: 'Invalid email address'
                }
            }}
        />
    );
}

const PasswordField = (props: IDefaultField<ILoginForm>) => {
    const classes = useLoginFormStyles();
    const [state, setState] = React.useState({
        isVisible: false
    });

    const handleClickShowPassword = () => {
        setState({ ...state, isVisible: !state.isVisible });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <Controller
            name="password"
            render={(props) =>
                <FormControl {...props.field} variant="outlined" size="small">
                    <OutlinedInput
                        id="password"
                        color="secondary"
                        placeholder="Password"
                        type={state.isVisible ? 'text' : 'password'}
                        error={props.fieldState.error != null}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="Toggle password visible"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end">
                                    {state.isVisible ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    <FormHelperText className={classes.helperText}>{props.fieldState.error ? props.fieldState.error.message : null}</FormHelperText>
                </FormControl>
            }
            control={props.controller}
            defaultValue=""
            rules={{
                required: {
                    value: true,
                    message: 'Password is required'
                },
                pattern: {
                    value: ValidationHelper.ALPHA_NUMERIC_REGEXP,
                    message: 'Invalid password'
                }
            }}
        />
    );

}

const FieldSeperator = () => {
    return <div style={{ margin: theme.spacing(0.7) }}></div>
}

export const LoginForm = () => {

    const classes = useLoginFormStyles();
    const authContext = useContext(AuthContext);
    const router = useRouter();
    const { control, handleSubmit } = useForm<ILoginForm>();
    const { state, onSubmitForm } = useLoginForm(authContext, router);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <Paper elevation={6} className={classes.paper}>
                    <Grid container alignItems="stretch"
                        direction="column" justify="space-evenly">
                        <Typography variant="h5">Welcome!</Typography>
                        <Typography color="textSecondary" variant="body2">Next.js Realworld Example App / Login</Typography>
                        <Divider variant="fullWidth" className={classes.divider} />

                        <FieldSeperator />

                        {state.errorMsg &&
                            <Typography variant="caption" color="error">{state.errorMsg}</Typography>
                        }

                        <EmailField controller={control} />
                        <FieldSeperator />
                        <PasswordField controller={control} />
                        <FieldSeperator />
                        <Link href="/forgot-password">
                            <a style={{ color: theme.palette.secondary.main }}>
                                <Typography variant="caption" color="secondary">Forgot Password?</Typography>
                            </a>
                        </Link>
                        <FieldSeperator />
                        <Button disabled={state.isLoading} type="submit" variant="contained" size="large" color="secondary">
                            Login
                        </Button>
                        <FieldSeperator />
                        <Typography variant="caption">Don't have an account?{' '}

                            <Link href="/signup">
                                <a style={{ color: theme.palette.secondary.main }}>
                                    <Typography variant="caption" color="secondary">Sign Up</Typography>
                                </a>
                            </Link>

                        </Typography>
                    </Grid>
                </Paper>
            </form>
        </>
    );
}