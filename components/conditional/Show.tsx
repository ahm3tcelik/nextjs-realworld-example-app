type IProps = {
    condition: boolean;
    children: React.ReactNode;
}

/**
 *```jsx
 * <Show condition={true}>Now visible</IfConditional>
 *```
*/
export const Show = (props: IProps) => {
    return (
        <div style={{ visibility: props.condition ? 'visible' : 'hidden' }}>
            {props.children}
        </div>
    );
}