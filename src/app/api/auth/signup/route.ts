import bcrypt from 'bcryptjs';
import connectToDatabase from '@/lib/config/mongooseConfig';
import User from '@/lib/models/User';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const { firstName, lastName, email, code, phoneNumber, password, googleId } = await req.json();
    
        await connectToDatabase();
    
        // Check if user already exists
        const existingUser = await User.findOne({
          $or: [
            { email },
            { 'phone.code': code, 'phone.phoneNumber': phoneNumber }
          ]
        });
    
        if (existingUser) {
          return NextResponse.json({ message: 'User already exists' }, { status: 400 });
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
    
        return NextResponse.json({ message: 'User created successfully', user }, { status: 201 });
      } catch (error) {
        return NextResponse.json({ message: 'An error occurred', error: error }, { status: 500 });
      }
}
