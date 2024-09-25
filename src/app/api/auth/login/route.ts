import bcrypt from 'bcryptjs';
import User from '@/lib/models/User';
import { NextRequest } from 'next/server';
import { generateAccessToken } from '@/utils/generateAccessToken';
import { BadRequestException, UnauthorizedException } from '@/lib/exceptions';
import { withErrorHandler } from '@/lib/helper/errorHandler';
import { apiResponse } from '@/utils/apiResponse';
import { LoginDto } from './dto/loginDto';

const loginHandler = async (req: NextRequest) => {
    try {
        const payload = await req.json();
        const loginDto = new LoginDto(payload);


        // Check if user already exists
        const existingUser = await User.findOne({
            $or: [
                { email: loginDto.email },
                { 'phone.code': loginDto.code, 'phone.phoneNumber': loginDto.phoneNumber },
                { googleId: loginDto.googleId }
            ]
        });

        if (!existingUser) {
            throw new BadRequestException("User doesn't exists");
        }

        if (existingUser.googleId !== loginDto.googleId) {
            throw new BadRequestException('Google login failed');
        }

        // Password login logic
        if (loginDto.password && (loginDto.email || (loginDto.code && loginDto.phoneNumber))) {
            const isPasswordValid = await bcrypt.compare(loginDto.password, existingUser.password);
            if (!isPasswordValid || (existingUser.email !== loginDto.email) || !(existingUser.phone?.code === loginDto.code && existingUser.phone?.phoneNumber === loginDto.phoneNumber)) {
                throw new UnauthorizedException('Invalid credential');
            }
        }

        const user = {
            id: existingUser._id,
            firstName: existingUser.firstName,
            lastName: existingUser.lastName, 
            email: existingUser.email,
            phone: {
                ...existingUser.phone
            },
            googleId: existingUser.googleId,
            isVerified: existingUser.isVerified
        };

        const access_token = generateAccessToken(user);
        return apiResponse(
            {
                access_token,
                user
            },
            201,
            "Login successfull"
        );
    } catch (error) {
        throw error;
    }
}

export const POST = withErrorHandler(loginHandler);