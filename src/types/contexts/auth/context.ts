import { IAuthActions } from "./action";
import { IAuthState } from "./state";

export type IAuthContext = {
    state: IAuthState;
    actions: IAuthActions;
}