import { IAuthAccessDTO } from "../../types/storages";

export interface IAuthStorage {
    setAccessDTO(data: IAuthAccessDTO): void;
    getAccessDTO(): IAuthAccessDTO | undefined
    removeAccessDTO(): void;
}