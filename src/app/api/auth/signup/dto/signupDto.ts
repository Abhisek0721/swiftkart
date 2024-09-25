import { BadRequestException } from "@/lib/exceptions";

export class SignupDto {
    firstName: string;
    lastName: string;
    email?: string;
    code?: string;
    phoneNumber?: string;
    password: string;
    googleId?: string;

    constructor(data: Partial<SignupDto>) {
        this.firstName = data.firstName!;
        this.lastName = data.lastName!;
        this.email = data.email;
        this.code = data.code;
        this.phoneNumber = data.phoneNumber;
        this.password = data.password!;
        this.googleId = data.googleId;

        if(!this.firstName || !this.lastName) {
            throw new BadRequestException("firstName and lastName is missing.");
        }

        if( !(this.email || (this.code && this.phoneNumber) || this.googleId) ) {
            throw new BadRequestException("Atleat email, phoneNumber or googleId is required." );
        }

        if(this.code) {
            if(!this.phoneNumber) {
                throw new BadRequestException("Phone Number is missing");
            }
        }
        
        if(this.email || (this.code && this.phoneNumber)) {
            if(!this.password) {
                throw new BadRequestException("Password is missing");
            }
        }
    }
}