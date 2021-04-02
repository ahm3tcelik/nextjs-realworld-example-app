type IProps = {
    condition: boolean;
    True: JSX.Element;
    False: JSX.Element;
}

/**
 *```jsx
 * <Ternary condition={true} False={ <CompFalse />} True={ <CompTrue /> } />
 *```
 */
export const Ternary = ({False, True, condition}: IProps) => {
    return (
        <>
            { condition ? True : False }
        </>
    );
}
