export type IReducer<IState, IAction> = (state: IState, action: IAction) => IState

export type IActionKinds<IType> = {
  type: IType;
  payload: any;
}

export * from './auth';