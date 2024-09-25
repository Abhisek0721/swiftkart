import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '../config/mongooseConfig';

export const withErrorHandler = (handler: Function) => {
    return async (req: NextRequest) => {
        try {
            await connectToDatabase();
            return await handler(req);
        } catch (error: any) {
            const status = error?.statusCode || 500;
            const message = error?.message || 'Internal Server Error';
            if (status === 500) {
                console.error('Unexpected error:', error?.stack);
            }
            return NextResponse.json({
                data: null,
                message,
            }, { status });
        }
    };
};
