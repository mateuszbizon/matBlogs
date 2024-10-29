import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";

export async function GET(req: NextRequest) {
    const token = req.cookies.get("authToken")?.value;

    if (!token) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    try {
        const decodedData = jwt.verify(token, "authToken") as JwtPayload;

        return NextResponse.json({
            id: decodedData.id,
            username: decodedData.username,
            name: decodedData.name,
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Invalid token" }, { status: 401 });
    }
}
