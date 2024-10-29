import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const protectedRoutes = ["/create-blog"]
const publicRoutes = ["/sign-in", "/sign-up"]

export default async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.includes(path)
    const isPublicRoute = publicRoutes.includes(path)
    let isSignedIn = false

    try {
        const response = await axios.get(`${req.nextUrl.origin}/api/auth/get-signed-in-user`, {
            headers: {
                cookie: req.headers.get("cookie") || "",
            },
        });

        if (response.status == 200) {
            isSignedIn = true
        }
    } catch (error) {
        isSignedIn = false
    }

    if (isProtectedRoute && !isSignedIn) {
        return NextResponse.redirect(new URL("/sign-in", req.nextUrl))
    }

    if (isPublicRoute && isSignedIn) {
        return NextResponse.redirect(new URL("/", req.nextUrl))
    }

    return NextResponse.next()
}