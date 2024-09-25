import { messages } from "../messages";
import { CustomError } from "./CustomError";

export class AuthenticationError extends CustomError {   
    constructor(message: string = messages.auth.userNotSignedIn) {
        super(message);
        Object.setPrototypeOf(this, AuthenticationError.prototype)
    }
    
    statusCode: number = 401;
    writeMessage(): { message: string, statusCode: number } {
        return { message: this.message, statusCode: this.statusCode }
    }
}