export default class Failure extends Error {
    constructor(message: string) {
        super(message);
    }
}