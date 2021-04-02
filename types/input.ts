import { Control, UseFormGetValues } from "react-hook-form";

export type IDefaultInput = {
    handleChange: (e: React.ChangeEventHandler<HTMLInputElement>) => void;
    errorMsg: string;
};

export type IDefaultField<T> = {
    controller: Control<T>;
    allValues?: UseFormGetValues<T>;
}