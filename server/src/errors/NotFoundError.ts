import { CustomError } from "./CustomError";

export class NotFoundError extends CustomError {
    constructor(message: string) {
        super(message)
        Object.setPrototypeOf(this, NotFoundError.prototype)
    }

    statusCode: number = 404
    writeMessage(): { statusCode: number; message: string; } {
        return { statusCode: this.statusCode, message: this.message }
    }
}