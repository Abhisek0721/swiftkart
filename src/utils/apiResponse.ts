import { NextResponse } from "next/server"

export const apiResponse = (data: object, status: number = 200, message: string = "") => {
    return NextResponse.json({
        data,
        message
    }, { status }
    )
}