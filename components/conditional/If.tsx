type IProps = {
    condition: boolean;
    children: React.ReactNode
};
/**
 *```jsx
 * <If condition={true}>Selam</IfConditional>
 *```
*/
 export const If  = (props: IProps) => {
    return (
        <>
            {props.condition && props.children}
        </>
    );
}