import bcrypt from 'bcryptjs';
import connectToDatabase from '@/lib/config/mongooseConfig';
import User from '@/lib/models/User';
import { NextRequest, NextResponse } from 'next/server';
import { generateAccessToken } from '@/utils/generateAccessToken';

export async function POST(req: NextRequest) {
    try {
        const { email, code, phoneNumber, password, googleId } = await req.json();
        if( !(email || (code && phoneNumber) || googleId) ) {
            return NextResponse.json({ message: "Invalid payload! Atleat email, phoneNumber or googleId is required." }, { status: 400 });
        }

        await connectToDatabase();

        // Check if user already exists
        const existingUser = await User.findOne({
            $or: [
                { email },
                { 'phone.code': code, 'phone.phoneNumber': phoneNumber },
                { googleId }
            ]
        });

        if (!existingUser) {
            return NextResponse.json({ message: "User doesn't exists" }, { status: 400 });
        }

        if (existingUser.googleId !== googleId) {
            return NextResponse.json({ message: 'Google login failed'}, { status: 401 });
        }

        // Password login logic
        if (password && (email || (code && phoneNumber))) {
            const isPasswordValid = await bcrypt.compare(password, existingUser.password);
            if (!isPasswordValid || (existingUser.email !== email) || !(existingUser.phone?.code === code && existingUser.phone?.phoneNumber === phoneNumber)) {
                return NextResponse.json({ message: 'Invalid credential'}, { status: 401 });
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
            googleId,
            isVerified: existingUser.isVerified
        };

        const access_token = generateAccessToken(user);

        return NextResponse.json({
            data: {
                access_token,
                user 
            },
            message: 'Login successfull'
        }, { status: 201 }
        );
    } catch (error) {
        return NextResponse.json({ message: 'An error occurred', error: error }, { status: 500 });
    }
}
