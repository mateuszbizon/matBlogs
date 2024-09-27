import { CustomError } from "./CustomError";

export class ForbiddenError extends CustomError {
    constructor(message: string) {
        super(message)
        Object.setPrototypeOf(this, ForbiddenError.prototype)
    }

    statusCode: number = 403
    writeMessage(): { statusCode: number; message: string; } {
        return { statusCode: this.statusCode, message: this.message }
    }
}