// lib/exceptions.ts
export class BadRequestException extends Error {
    statusCode: number;
    message: string;

    constructor(message: string) {
        super(message);
        this.statusCode = 400; // HTTP status code for Bad Request
        this.message = message;
    }
}

export class UnauthorizedException extends Error {
    statusCode: number;
    message: string;

    constructor(message: string) {
        super(message);
        this.statusCode = 401; // HTTP status code for Unauthorized Request
        this.message = message;
    }
}

export class InternalServerErrorException extends Error {
    statusCode: number;
    message: string;

    constructor(message: string = "Internal Server Error") {
        super(message);
        this.statusCode = 500; // HTTP status code for Internal Server Error
        this.message = message;
    }
}
