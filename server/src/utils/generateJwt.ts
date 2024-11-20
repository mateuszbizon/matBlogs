import jwt from "jsonwebtoken"

type JwtData = {
    id: string;
    name: string;
    username: string;
    userPhoto?: string;
}

export function generateJwt({ id, name, username, userPhoto }: JwtData) {
    return jwt.sign({
        id, username, name, userPhoto
    }, "authToken", { expiresIn: "3d" })
}