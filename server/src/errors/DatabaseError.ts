import { messages } from "../messages";
import { CustomError } from "./CustomError";

export class DatabaseError extends CustomError {   
    constructor(message: string = messages.database.databaseFail) {
        super(message);
        Object.setPrototypeOf(this, DatabaseError.prototype)
    }
    
    statusCode: number = 500;
    writeMessage(): { message: string, statusCode: number } {
        return { message: this.message, statusCode: this.statusCode }
    }
}