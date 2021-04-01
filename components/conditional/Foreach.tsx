type IProps = {
    list: Array<any>;
    builder: (item: any) => JSX.Element;
}

/**
 *```jsx
 * <Foreach
 *     list={usersList}
 *     builder={
 *         (item) => <UserCard user={item} />
 *     }
 * />
 *```
 */
export const Foreach = (props: IProps) => {

    const children: Array<JSX.Element> = [];

    props.list.forEach((item) => {
        children.push(props.builder(item));
    })

    return <>{children}</>;
}