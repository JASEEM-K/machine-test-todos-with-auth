export class ErrorMessage extends Error {
    errorCode: string;
    statusCode: number;
    constructor(message: string, errorCode: string, statusCode = 400) {
        super(message);
        this.errorCode = errorCode;
        this.statusCode = statusCode;
    }
}
