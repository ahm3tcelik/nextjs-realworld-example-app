type ICaseProps = {
    value: any;
    Component: JSX.Element;
}
type IProps = {
    value: any;
    cases: Array<ICaseProps>;
    default?: JSX.Element;
}

/**
 *```jsx
 * <SwitchCase
        value={role}
        cases={[
            { value: 'user', Component: <h2>Hello User</h2> },
            { value: 'admin', Component: <h2>Admin</h2> }
        ]}
        default={<h2>None case is true</h2>}
    />
*``` 
*/
export const SwitchCase = (props: IProps) => {
    let result = props.cases.find(c => c.value == props.value);
    return (
        <>
            {result ? result.Component : props.default}
        </>
    );
}