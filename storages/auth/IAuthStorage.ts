import { IAuthAccessDTO } from "../../types/";

export interface IAuthStorage {
    setAccessDTO(data: IAuthAccessDTO): void;
    getAccessDTO(): IAuthAccessDTO | undefined
    removeAccessDTO(): void;
}