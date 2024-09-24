import { CustomError } from "./CustomError";

export class DatabaseError extends CustomError {   
    constructor(message: string = "Database problems. Try again later.") {
        super(message);
        Object.setPrototypeOf(this, DatabaseError.prototype)
    }
    
    statusCode: number = 500;
    writeMessage(): { message: string, statusCode: number } {
        return { message: this.message, statusCode: this.statusCode }
    }
}