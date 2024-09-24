import { CustomError } from "./CustomError";

export class BadRequestError extends CustomError {
    constructor(message: string) {
        super(message)
        Object.setPrototypeOf(this, BadRequestError.prototype)
    }

    statusCode: number = 400
    writeMessage(): { statusCode: number; message: string; } {
        return { statusCode: this.statusCode, message: this.message }
    }
}