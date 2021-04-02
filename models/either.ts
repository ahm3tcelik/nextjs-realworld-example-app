type IFoldCallback<T> = {
    (data: T): void;
}

type IProps<L, R> = {
    left?: L,
    right?: R
}

// LEFT: ERROR
// RIGHT: DATA
export abstract class Either<L, R> {
    left?: L | undefined;
    right?: R | undefined;

    constructor(props: IProps<L, R>) {
        this.left = props.left;
        this.right = props.right;
    }

    isLeft(): boolean {
        return this.left != undefined;
    }

    isRight(): boolean {
        return this.right != undefined;
    }

    fold(leftCallback: IFoldCallback<L>, rightCallback: IFoldCallback<R>): any {

        return (
            !this.isRight() ? leftCallback(this.left!) : undefined,
            this.isRight() ? rightCallback(this.right!) : undefined
        );
    }
}

export class Right<L, R> extends Either<L, R> {
    constructor(r: R) {
        super({ right: r, left: undefined });
    }
}

export class Left<L, R> extends Either<L, R> {
    constructor(l: L) {
        super({ left: l, right: undefined });
    }
}
