import {
    Paper,
    Grid,
    Typography,
    Divider,
    TextField,
    Button,
    Link as MLink
} from '@material-ui/core';
import Link from 'next/link';
import theme from '../../../../init/theme';
import React, { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ISignupForm } from '../../../../types/forms';
import useSignupFormStyles from './useSignupFormStyles';
import useSignupForm from './useSignupForm';
import PrivacyPolicyDialog from '../../../dialogs/PrivacyPolicyDialog';
import { IDefaultField } from '../../../../types/input';
import ValidationHelper from '../../../../helpers/validation_helper';
import { AuthContext } from '../../../../contexts/auth/context';


const EmailField = (props: IDefaultField<ISignupForm>) => {

    return (
        <Controller
            name="email"
            render={({ fieldState, field }) =>
                <TextField {...field}
                    id="email"
                    label="Email"
                    margin="dense"
                    variant="outlined"
                    color="secondary"
                    helperText={fieldState.error ? fieldState.error.message : null}
                    error={fieldState.error != null}
                />
            }
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

const PasswordField = (props: IDefaultField<ISignupForm>) => {

    return (
        <Controller
            name="password"
            render={({ fieldState, field }) =>
                <TextField {...field}
                    id="password"
                    label="Password"
                    margin="dense"
                    type="password"
                    variant="outlined"
                    color="secondary"
                    helperText={fieldState.error ? fieldState.error.message : null}
                    error={fieldState.error != null}
                />
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
                },
            }}
        />
    );
}

const PasswordConfirmField = (props: IDefaultField<ISignupForm>) => {

    return (
        <Controller
            name="passwordConfirm"
            render={({ field, fieldState }) =>
                <TextField {...field}
                    id="password-confirm"
                    label="Password (Confirm)"
                    margin="dense"
                    type="password"
                    variant="outlined"
                    color="secondary"
                    helperText={fieldState.error ? fieldState.error.message : null}
                    error={fieldState.error != null}
                />
            }
            control={props.controller}
            defaultValue=""
            rules={{
                required: {
                    value: true,
                    message: 'Password is required'
                },

                validate: {
                    matchesPreviousPassword: (value: string) => {
                        if (props.allValues) {
                            const { password } = props.allValues();
                            return password === value || 'Passwords are not matching';
                        }
                        return true;
                    },
                },
                pattern: {
                    value: ValidationHelper.ALPHA_NUMERIC_REGEXP,
                    message: 'Invalid password'
                },
            }}
        />
    );
}

const FieldSeperator = () => {
    return (
        <div style={{ margin: theme.spacing(0.7) }}></div>
    );
}

export const SignupForm = () => {

    const classes = useSignupFormStyles();
    const authContext = useContext(AuthContext);
    const { control, handleSubmit, getValues } = useForm<ISignupForm>();
    const { state, onSubmitForm } = useSignupForm(authContext);
    const [dialogOpen, setDialogOpen] = React.useState(false);

    return (
        <>
            <PrivacyPolicyDialog isOpen={dialogOpen} setOpen={setDialogOpen} />
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <Paper elevation={6} className={classes.paper}>
                    <Grid container alignItems="stretch"
                        direction="column" justify="space-evenly">
                        <Typography variant="h5"> Sign Up Now</Typography>
                        <Typography color="textSecondary" variant="body2">It's quick, and easy. Just fill the fields.</Typography>

                        <Divider variant="fullWidth" className={classes.divider} />

                        {state.errorMsg &&
                            <Typography variant="caption" color="error">{state.errorMsg}</Typography>
                        }

                        <EmailField controller={control} />
                        <FieldSeperator />
                        <PasswordField controller={control} />
                        <FieldSeperator />
                        <PasswordConfirmField controller={control} allValues={getValues} />
                        <FieldSeperator />
                        <Typography variant="caption">
                            By registering, you agree to our
                            <a href="#">
                                <MLink onClick={() => setDialogOpen(true)} color="secondary"> Terms of Service </MLink>
                            </a>
                            and
                            <a href="#">
                                <MLink onClick={() => setDialogOpen(true)} color="secondary"> Privacy Policy </MLink>
                            </a>
                        </Typography>
                        <FieldSeperator />
                        <Button disabled={state.isLoading} type="submit" variant="contained" size="large" color="secondary">
                            Sign Up
                        </Button>
                        <FieldSeperator />
                        <Typography variant="caption">Already have an account?{' '}

                            <Link href="/login">
                                <a style={{ color: theme.palette.secondary.main }}>
                                    <Typography variant="caption" color="secondary">Login</Typography>
                                </a>
                            </Link>

                        </Typography>
                    </Grid>
                </Paper>
            </form>
        </>
    );
}