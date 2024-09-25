import bcrypt from 'bcryptjs';
import User from '@/lib/models/User';
import { NextRequest } from 'next/server';
import { BadRequestException } from '@/lib/exceptions';
import { apiResponse } from '@/utils/apiResponse';
import { withErrorHandler } from '@/lib/helper/errorHandler';
import { SignupDto } from './dto/signupDto';

async function signupHandler(req: NextRequest) {
    try {
        const payload = await req.json();
        const { firstName, lastName, email, code, phoneNumber, password, googleId } = new SignupDto(payload);
        // Check if user already exists
        const existingUser = await User.findOne({
          $or: [
            { email },
            { 'phone.code': code, 'phone.phoneNumber': phoneNumber }
          ]
        });
        
        if (existingUser) {
          throw new BadRequestException('User already exists');
        }
    
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
    
        // Create the user
        const user = await User.create({
          firstName,
          lastName,
          email,
          googleId,
          isVerified: !!googleId,
          password: hashedPassword, // Save hashed password
          phone: {
            code,
            phoneNumber
          }
        });
        return apiResponse(user, 201, "User created successfully");
      } catch (error) {
        throw error;
      }
}

export const POST = withErrorHandler(signupHandler);
